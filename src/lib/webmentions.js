import fs from 'fs';

const CACHE_FILE_PATH = '_cache/webmentions.json';
const OWNER_PROFILE = 'https://twitter.com/DailyDevTips1';
const validProperties = ['like-of', 'repost-of', 'mention-of', 'in-reply-to'];

const readCache = async () => {
  if (fs.existsSync(CACHE_FILE_PATH)) {
    const data = await fs.promises.readFile(CACHE_FILE_PATH);
    return JSON.parse(data);
  }
  // no cache found.
  return {
    lastFetched: null,
    children: [],
  };
};
async function _getAllWebmentions() {
  const cache = await readCache();
  return cache;
}

const compareURLs = (a, b) =>
  a.replace(/(\/#|\/|#)$/, '') === b.replace(/(\/#|\/|#)$/, '');

const notMyOwn = (authorURL) => authorURL !== OWNER_PROFILE;

const isForURL = (url) => {
  return (webmention) =>
    compareURLs(webmention['wm-target'], url) &&
    notMyOwn(webmention.author.url);
};

const validProperty = () => {
  return (webmention) => validProperties.includes(webmention['wm-property']);
};

const validateAuthorPhoto = () => {
  return (webmention) => {
    webmention.author.photo = webmention.author.photo
      ? webmention.author.photo
      : '/assets/placeholder.png';
    return webmention;
  };
};

let _webmentions;

export async function getWebmentionsForUrl(url) {
  // return array of webmentions
  _webmentions = _webmentions || (await _getAllWebmentions());
  return _webmentions.children
    .filter(validProperty())
    .filter(isForURL(url))
    .map(validateAuthorPhoto())
    .sort(() => 0.5 - Math.random())
    .sort((a, b) =>
      a?.author?.photo.length > b?.author?.photo.length ? -1 : 1
    );
}
