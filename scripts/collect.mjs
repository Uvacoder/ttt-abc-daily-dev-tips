import fs from 'fs';
import { loadEnv } from 'vite';
import { polyfill } from '@astrojs/webapi';

polyfill(globalThis, {
  exclude: 'window document',
});

const {
  PUBLIC_SENDY_ENDPOINT,
  PUBLIC_SENDY_API_KEY,
  PUBLIC_SENDY_LIST_ID,
  PUBLIC_WEBMENTION_TOKEN,
} = loadEnv('production', process.cwd(), '');

const SUB_CACHE_FILE_PATH = '_cache/subscribers.json';
const WEBMENTION_CACHE_FILE_PATH = '_cache/webmentions.json';
const API = 'https://webmention.io/api';

const readCache = (file) => {
  if (fs.existsSync(file)) {
    const cacheFile = fs.readFileSync(file);
    return JSON.parse(cacheFile);
  }
  // no cache found.
  return {
    lastFetched: null,
    children: [],
  };
};

const writeCache = (file, data) => {
  fs.writeFile(file, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log(`>>> ${file} cached successfully`);
  });
};

const fetchSubscribers = async () => {
  const response = await fetch(
    `${PUBLIC_SENDY_ENDPOINT}api/subscribers/active-subscriber-count.php`,
    {
      method: 'POST',
      body: new URLSearchParams(
        `api_key=${PUBLIC_SENDY_API_KEY}&list_id=${PUBLIC_SENDY_LIST_ID}`
      ),
    }
  );
  const allSubscribers = await response.text();
  return allSubscribers;
};

const fetchWebmentions = async (since, perPage = 10000) => {
  let url = `${API}/mentions.jf2?domain=daily-dev-tips.com&token=${PUBLIC_WEBMENTION_TOKEN}&per-page=${perPage}`;
  if (since) url += `&since=${since}`;
  const response = await fetch(url);
  if (response.ok) {
    const feed = await response.json();
    console.log(`>>> ${feed.children.length} new webmentions fetched`);
    return feed;
  }

  return [];
};

const fetchAndCacheSubscribers = async () => {
  const subscribers = await fetchSubscribers();
  const data = {
    lastFetched: Date.now(),
    amount: subscribers,
  };

  writeCache(SUB_CACHE_FILE_PATH, data);
};

const mergeWebmentions = (a, b) => {
  const merged = [...a.children, ...b.children];
  const uniqueData = [
    ...merged
      .reduce((map, obj) => map.set(obj['wm-id'], obj), new Map())
      .values(),
  ];

  return uniqueData;
};

const fetchAndCacheWebmentions = async () => {
  const existingWebmentions = await readCache(WEBMENTION_CACHE_FILE_PATH);
  const mentions = await fetchWebmentions(existingWebmentions.lastFetched);
  if (mentions) {
    const webmentions = {
      lastFetched: new Date().toISOString(),
      children: mergeWebmentions(existingWebmentions, mentions),
    };
    writeCache(WEBMENTION_CACHE_FILE_PATH, webmentions);
  }
};

fetchAndCacheSubscribers();
fetchAndCacheWebmentions();
