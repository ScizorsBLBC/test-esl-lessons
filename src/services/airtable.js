// src/services/airtable.js

// --- Configuration ---
// All direct Airtable credentials are REMOVED from the client-side code.
// We now point to our own secure API proxy.
const API_BASE_URL = '/api/airtable'; 

// The RSS feed fetcher and cache logic remain the same as they don't use secrets.
const cache = new Map();
const CACHE_TTL = 3600 * 1000;

const getFromCache = (key) => {
  const cached = cache.get(key);
  if (cached && (Date.now() - cached.timestamp < CACHE_TTL)) {
    console.log(`Serving from cache: ${key}`);
    return cached.data;
  }
  return null;
};

const setInCache = (key, data) => {
  console.log(`Setting cache for: ${key}`);
  cache.set(key, { data, timestamp: Date.now() });
};

// --- Helper for Fetching from Our Proxy ---
const proxyFetch = async (url) => {
  // This now calls our own secure endpoint.
  const response = await fetch(url); 
  if (!response.ok) {
    const errorData = await response.json();
    console.error('API Proxy Error:', errorData);
    throw new Error('Failed to fetch data from our API proxy.');
  }
  return response.json();
};

// --- Data Fetching Functions (Simplified) ---
const getList = async (tableId, view = 'Grid view') => {
  const cacheKey = `${tableId}-list`;
  const cachedData = getFromCache(cacheKey);
  if (cachedData) return cachedData;

  // Construct the URL to our proxy
  const url = `${API_BASE_URL}/${tableId}?view=${encodeURIComponent(view)}`;
  const data = await proxyFetch(url);
  
  const validRecords = data.records.filter(record => 
    record.fields.Slug && (record.fields.Headline || record.fields.Name)
  );
  
  setInCache(cacheKey, validRecords);
  return validRecords;
};

const getRecordBySlug = async (tableId, slug) => {
  const cacheKey = `${tableId}-${slug}`;
  const cachedData = getFromCache(cacheKey);
  if (cachedData) return cachedData;
  
  const formula = `filterByFormula=({Slug}='${slug}')`;
  const url = `${API_BASE_URL}/${tableId}?${formula}`;
  const data = await proxyFetch(url);
  
  if (data.records.length > 0) {
    setInCache(cacheKey, data.records[0]);
    return data.records[0];
  }
  
  return null;
};

// --- Exported Functions (No changes needed here) ---
export const getNewsList = () => getList(import.meta.env.VITE_AIRTABLE_NEWS_TABLE_ID);
export const getNewsArticle = (slug) => getRecordBySlug(import.meta.env.VITE_AIRTABLE_NEWS_TABLE_ID, slug);

export const fetchNewsFeed = async () => {
    const cacheKey = 'rss-feed-direct';
    const cachedData = getFromCache(cacheKey);
    if (cachedData) return cachedData;

    const RSS_FEED_URL = 'https://breakingnewsenglish.com/bne.xml';
    const CORS_PROXY_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(RSS_FEED_URL)}`;

    try {
        const response = await fetch(CORS_PROXY_URL);
        if (!response.ok) throw new Error('Network response was not ok.');
        
        const str = await response.text();
        const data = new window.DOMParser().parseFromString(str, "text/xml");
        const items = data.querySelectorAll("item");
        
        const feedItems = Array.from(items).map(el => ({
            title: el.querySelector("title")?.textContent || 'No Title',
            link: el.querySelector("link")?.textContent || '#',
        })).filter(item => item.title && item.link);

        setInCache(cacheKey, feedItems);
        return feedItems;

    } catch (error) {
        console.error("Failed to fetch or parse RSS feed:", error);
        return [];
    }
};