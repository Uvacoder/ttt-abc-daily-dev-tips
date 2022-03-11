import fs from 'fs';

const CACHE_FILE_PATH = '_cache/webmentions.json';
const OWNER_PROFILE = 'https://twitter.com/DailyDevTips1';
const validProperties = ['like-of', 'repost-of', 'mention-of', 'in-reply-to'];

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
  a.replace(/(\/#|\/|#)$/, '') === b.replace(/(\/#|\/|#)$/, '');

notMyOwn = (authorURL) => authorURL !== OWNER_PROFILE;

isForURL = (url) => {
  return (webmention) =>
    compareURLs(webmention['wm-target'], url) &&
    notMyOwn(webmention.author.url);
};

validProperty = () => {
  return (webmention) => validProperties.includes(webmention['wm-property']);
};

validateAuthorPhoto = () => {
  return (webmention) => {
    webmention.author.photo = webmention.author.photo
      ? webmention.author.photo
      : '/assets/placeholder.png';
    return webmention;
  };
};

export async function getWebmentionsForUrl(url) {
  // return array of webmentions
  const allWebmentions = await _getAllWebmentions();
  return allWebmentions.children
    .filter(validProperty())
    .filter(isForURL(url))
    .map(validateAuthorPhoto())
    .sort(() => 0.5 - Math.random())
    .sort((a, b) =>
      a?.author?.photo.length > b?.author?.photo.length ? -1 : 1
    );
}
