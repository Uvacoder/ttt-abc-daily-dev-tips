async function load() {
  const fetchedPosts = await import.meta.glob("../pages/posts/*.md");
  const mappedPosts = await Promise.all(
    Object.keys(fetchedPosts).map((key) => {
      const post = fetchedPosts[key];
      const url = key.replace("../pages/", "/").replace(".md", "/");
      return post().then((p) => {
        return { ...p.frontmatter, url };
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
