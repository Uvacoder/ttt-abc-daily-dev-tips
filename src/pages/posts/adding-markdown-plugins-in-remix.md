---
layout: ../../layouts/Post.astro
title: 'Adding Markdown plugins in Remix'
metaTitle: 'Adding Markdown plugins in Remix'
metaDesc: 'How to add Rehype Markdown plugins in Remix'
image: /images/15-05-2022.jpg
date: 2022-05-15T03:00:00.000Z
tags:
  - remix
---

Now that we have our [Remix Markdown powered website](https://daily-dev-tips.com/posts/remix-markdown-overview-page/) up and running let's explore how we can enhance it a bit by adding some cool Markdown plugins.

For this article, we'll add the table of contents Rehype plugin.

## Installing the Rehype plugin

We have to start by adding the plugin to our project.
To use the table of contents plugin, we also need to install the slug and auto-link headings plugins as it relies on these.

```bash
npm i rehype-autolink-headings rehype-to rehype-slug
```

With these installed, we have to register them in Remix. Luckily Remix comes prepared with a `remix.config.js` file.

We can add an `mdx` section in this file and load our plugins.

```js
module.exports = {
  // Existing lines,
  mdx: async (filename) => {
    const [rehypeSlug, rehypeAutolinkHeadings, rehypeToc] = await Promise.all([
      import('rehype-slug').then((mod) => mod.default),
      import('rehype-autolink-headings').then((mod) => mod.default),
      import('rehype-toc').then((mod) => mod.default),
    ]);
    return {
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeToc],
    };
  },
};
```

Now that we have loaded all three plugins, it will already work! No need to add anything else to our markdown.
We can try it out by running outcode and see what happens.

<!-- ![Remix TOC Rehype plugin](https://cdn.hashnode.com/res/hashnode/image/upload/v1651734761667/HC3aoqgw5.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1651734760/remix-toc_kzbay9.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1651734757/remix-toc_qdbkam.mp4" type="video/mp4" />
</video>

You can also find the complete code on [GitHub](https://github.com/rebelchris/remix-starter/tree/markdown-plugin).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
