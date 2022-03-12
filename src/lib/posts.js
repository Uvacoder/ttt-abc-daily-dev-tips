async function load() {
  const fetchedPosts = import.meta.globEager("../pages/posts/*.md");
  const mappedPosts =  Object.keys(fetchedPosts).map((key) => {
      const post = fetchedPosts[key];
      const url = key.replace("../pages/", "/").replace(".md", "/");
      return { ...post.frontmatter, url };
    });

  return mappedPosts;
}

let _posts;

export async function getAllPosts() {
  _posts = _posts || load();

  return await _posts;
}
