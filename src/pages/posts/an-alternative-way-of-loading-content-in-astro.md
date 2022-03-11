---
layout: ../../layouts/Post.astro
title: 'An alternative way of loading content in Astro'
metaTitle: 'An alternative way of loading content in Astro'
metaDesc: 'An alternative way of using the fetchContent loading in Astro'
image: /images/16-03-2022.jpg
date: 2022-03-16T03:00:00.000Z
tags:
  - astro
---

Astro has a super cool function called `fetchContent` it can be used to fetch content from your pages.

A little example, if I want to retrieve all my posts in Astro I simply use the following command:

```js
const allPosts = Astro.fetchContent('../pages/posts/*.md');
```

Which will return an object like this:

```json
[
  {
    // Fronmatter parts for example:
    "title": "The title",
    "date": "2022-02-22",
    "astro": {
      "headers": [],
      "source": "",
      "html": ""
    },
    "url": ""
  }
]
```

As you can see, pretty slick way to retrieve all our content with all the data quickly.

And this method is perfect since it returns everything we need.

## The downside and a solution

I wanted to render related posts on each article, which sounded like a great idea.
I started by using `fetchContent`, but quickly came across a downside to using this function.

It could cause infinite loops. This is because it technically renders the HTML, so if you refer to other posts (like recommended posts), it will cause an endless loop in your script.

The solution is to use Astro's underlying method, limiting the response.

Officially they used `globEager`, but I used `glob` from the start. Not sure what the difference is between the two at the time of writing.

To load all the posts as before we can use the following code:

```js
const allPosts = await import.meta.glob('../pages/posts/*.md');
```

However, instead of an excellent formatted array, this will return promise based array like this:

```js
[
	  '../pages/posts/are-you-participating-in-the-reply-code-challenge.md': [Function: ../pages/posts/are-you-participating-in-the-reply-code-challenge.md],
	  '../pages/posts/asking-questions.md': [Function: ../pages/posts/asking-questions.md],
];
```

The first part (the key) is the file name, and the value is lazy loaded import (powered by Vite).

If you need to access the front matter part of your posts, we'll have to loop over them, as until now, all we have is the filename.

I'm going to create another array called `mappedPosts` in which we'll loop over all the keys, which will look like this:

```js
const mappedPosts = await Promise.all(
  Object.keys(allPosts).map((key) => {
    // Todo
  })
);
```

Since this is a lazy promise, we need to retrieve the function and do wait for the return.

But first, I'll store the current post and convert the file name into a slug.

```js
const mappedPosts = await Promise.all(
  Object.keys(allPosts).map((key) => {
    const post = allPosts[key];
    const url = key.replace('../pages/', '/').replace('.md', '/');
  })
);
```

We simply replace our prefix, and the extension, this will result in the following examples:

```js
// ../pages/posts/why-tailwind-jit-compiler-is-amazing.md
// /posts/why-tailwind-jit-compiler-is-amazing
```

The last thing we want to do is return the promised result and format the necessary elements.

Remember from the intro, which elements are available? You can use any of those. I choose only to return the front matter part and the url.

```js
const mappedPosts = await Promise.all(
  Object.keys(allPosts).map((key) => {
    const post = allPosts[key];
    const url = key.replace('../pages/', '/').replace('.md', '/');
    return post().then((p) => {
      return { ...p.frontmatter, url };
    });
  })
);
```

And now we have a neat array of posts with frontmatter parts that don't cause an infinite loop.

You can now do all the filtering you want on this array.

This way is a bit more work, but it does make things more dynamic for you.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
