// src/services/api.js

import { newsData } from '../data/newsData.js';

// --- News Functions now use local data ---

export const getNewsList = async () => {
  // We wrap this in a Promise to simulate an async API call,
  // keeping the function signature consistent.
  return Promise.resolve(newsData);
};

export const getNewsArticle = async (slug) => {
  // Finds a single article by its slug in our local data file.
  const article = newsData.find(article => article.fields.Slug === slug);
  return Promise.resolve(article || null);
};


// --- RSS Feed Fetching for Dashboard ---
const cache = new Map();
const CACHE_TTL = 3600 * 1000; // 1 hour

const getFromCache = (key) => {
  const cached = cache.get(key);
  if (cached && (Date.now() - cached.timestamp < CACHE_TTL)) {
    return cached.data;
  }
  return null;
};

const setInCache = (key, data) => {
  cache.set(key, { data, timestamp: Date.now() });
};

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