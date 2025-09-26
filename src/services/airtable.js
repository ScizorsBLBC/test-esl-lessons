// src/services/airtable.js

// --- Configuration ---
// Read the Token and Base ID using VITE_ prefix for client-side access
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN; // FIX APPLIED HERE: Revert to VITE_
const NEWS_TABLE_ID = import.meta.env.VITE_AIRTABLE_NEWS_TABLE_ID;
const VOCAB_TABLE_ID = import.meta.env.VITE_AIRTABLE_VOCAB_TABLE_ID;
const IDIOMS_TABLE_ID = import.meta.env.VITE_AIRTABLE_IDIOMS_TABLE_ID;

// Read the Token using process.env, which is generally not exposed to the client
// but is available during the Vite BUILD step, which is what we need for deployment.
const API_BASE_URL = `https://api.airtable.com/v0/${BASE_ID}`;

// --- Simple In-Memory Cache to Reduce API Calls ---
const cache = new Map();
const CACHE_TTL = 3600 * 1000; // 1 hour in milliseconds

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

// --- Helper for Authenticated Fetch ---
const airtableFetch = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`,
      ...options.headers,
    },
  });
  if (!response.ok) {
    const errorData = await response.json();
    console.error('Airtable API Error:', errorData);
    throw new Error('Failed to fetch data from Airtable.');
  }
  return response.json();
};

// --- Data Fetching Functions ---
const getList = async (tableId, view = 'Grid view') => {
  const cacheKey = `${tableId}-list`;
  const cachedData = getFromCache(cacheKey);
  if (cachedData) return cachedData;

  const url = `${API_BASE_URL}/${tableId}?view=${encodeURIComponent(view)}`;
  const data = await airtableFetch(url);
  
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
  const data = await airtableFetch(url);
  
  if (data.records.length > 0) {
    setInCache(cacheKey, data.records[0]);
    return data.records[0];
  }
  
  return null;
};

// --- Specific Lesson Type Functions ---
export const getNewsList = () => getList(NEWS_TABLE_ID);
export const getVocabList = () => getList(VOCAB_TABLE_ID, 'Grid view');
export const getIdiomsList = () => getList(IDIOMS_TABLE_ID, 'Grid view');

export const getNewsArticle = (slug) => getRecordBySlug(NEWS_TABLE_ID, slug);
export const getVocabSet = (slug) => getRecordBySlug(VOCAB_TABLE_ID, slug);
export const getIdiomSet = (slug) => getRecordBySlug(IDIOMS_TABLE_ID, slug);


// --- RSS Feed Fetching for Dashboard ---
// FIX: To ensure reliability, we are removing the third-party proxy and using a more direct fetching method.
// This will be more stable but will likely return a smaller, default number of recent articles.
export const fetchNewsFeed = async () => {
    const cacheKey = 'rss-feed-direct';
    const cachedData = getFromCache(cacheKey);
    if (cachedData) return cachedData;

    // We use a CORS proxy to bypass browser restrictions on fetching cross-domain XML.
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

