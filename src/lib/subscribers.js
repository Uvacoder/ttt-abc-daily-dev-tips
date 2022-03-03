import fs from "fs";

const CACHE_FILE_PATH = "_cache/subscribers.json";

const readCache = () => {
  if (fs.existsSync(CACHE_FILE_PATH)) {
    const cacheFile = fs.readFileSync(CACHE_FILE_PATH);
    return JSON.parse(cacheFile);
  }
  // no cache found.
  return {
    lastFetched: null,
    amount: 0,
  };
};

export async function getSubscriberCount() {
  const current = await readCache();

  return current.amount;
}
