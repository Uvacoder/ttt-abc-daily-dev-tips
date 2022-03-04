---
layout: ../../layouts/Post.astro
title: 'Render a JSON page in Astro'
metaTitle: 'Render a JSON page in Astro'
metaDesc: 'How to render a JSON page in Astro'
image: /images/06-10-2021.jpg
date: 2021-10-06T03:00:00.000Z
tags:
  - astro
---

I've been working on a search solution for my Astro blog, and building search on top of static site generators is always tricky.

My general idea would be to do it almost the same as my [Eleventy search](https://daily-dev-tips.com/posts/eleventy-creating-a-static-javascript-search/).

## Creating a JSON page in Astro

However, I quickly realized Astro doesn't have a neat permalink structure by default.

Trying out some things, I learned that we could create pages like `search.json.astro`.

These will render as `http://yoursite.com/search.json`

But let's see how we can render a JSON response of all our blog posts in there.

Astro has the cool built-in fetch method for internal pages so let's use that first.

```js
const allPosts = Astro.fetchContent('./posts/*.md');
```

In the next step, I'd like to map these to the output that I can use, which only needs the following three elements.

- title
- description
- slug

Let's see how that would look:

```js
allPosts.map((p) => {
  return {
    title: p.title,
    description: p.description,
    slug: p.url,
  };
});
```

However, let's create a variable from this, and JSON stringify the output.

```js
const json = JSON.stringify(
  allPosts.map((p) => {
    return {
      title: p.title,
      description: p.description,
      slug: p.url,
    };
  })
);
```

Now all that's left is to render the JSON output on the page.

```jsx
// All our code
---
{json}
```

And that's it. We can now leverage a simple JSON file for our search to use.

You can find my [example code on the following file](https://github.com/rebelchris/astro-typesense-search/blob/master/src/pages/search.json.astro).
Or see the [end JSON file](https://loving-wilson-87e511.netlify.app/search.json/) here.

> Note: This process might change if Astro will support this eventually, but for now, this seems like an excellent approach.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
