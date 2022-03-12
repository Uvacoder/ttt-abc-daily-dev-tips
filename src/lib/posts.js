import { getReadingTime } from './readingtime.js';

async function load() {
  const fetchedPosts = await import.meta.glob('../pages/posts/*.md');
  const mappedPosts = await Promise.all(
    Object.keys(fetchedPosts).map((key) => {
      const post = fetchedPosts[key];
      const url = key.replace('../pages/', '/').replace('.md', '/');
      return post().then((p) => {
        const item = { ...p.frontmatter, url };
        item.readingTime = getReadingTime(item?.astro?.html);
        delete item.astro;
        return item;
      });
    })
  );

  return mappedPosts;
}

let _posts;

export async function getAllPosts() {
  _posts = _posts || load();

  return await _posts;
}
