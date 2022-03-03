import fs from "fs";

const CACHE_FILE_PATH = "_cache/webmentions.json";
const OWNER_PROFILE = "https://twitter.com/DailyDevTips1";

const readCache = () => {
  if (fs.existsSync(CACHE_FILE_PATH)) {
    const cacheFile = fs.readFileSync(CACHE_FILE_PATH);
    return JSON.parse(cacheFile);
  }
  // no cache found.
  return {
    lastFetched: null,
    children: [],
  };
};

async function _getAllWebmentions() {
  const cache = readCache();
  return cache;
}

compareURLs = (a, b) =>
  a.replace(/(\/#|\/|#)$/, "") === b.replace(/(\/#|\/|#)$/, "");

notMyOwn = (authorURL) => authorURL !== OWNER_PROFILE;

isForURL = (url) => {
  return (webmention) =>
    compareURLs(webmention["wm-target"], url) &&
    notMyOwn(webmention.author.url);
};

validateAuthorPhoto = () => {
  return (webmention) => {
    webmention.author.photo = webmention.author.photo
      ? webmention.author.photo
      : "/assets/placeholder.png";
    return webmention;
  };
};

export async function getWebmentionsForUrl(url) {
  const allWebmentions = await _getAllWebmentions();

  return allWebmentions.children
    .filter(isForURL(url))
    .map(validateAuthorPhoto());
}
