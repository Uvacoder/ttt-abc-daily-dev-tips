---
layout: ../../layouts/Post.astro
title: 'Eleventy JSON endpoint with posts'
metaTitle: 'Eleventy JSON endpoint with posts'
metaDesc: 'How to add a static JSON endpoint to an Eleventy website'
image: /images/18-06-2021.jpg
date: 2021-06-18T03:00:00.000Z
tags:
  - eleventy
---

I'll let you in on a little secret while writing this article; I'm also working on this site and finding a neat, low JS alternative to a search function.

Don't get me wrong, Lunr and Algolia are great options, but I would like to keep my website as low impact as possible.

So starting to think about some solutions I remembered a while ago, I made a [static JSON search for a website](https://daily-dev-tips.com/posts/vanilla-javascript-live-search/).

This is a great alternative, surely it won't have a fuzzy search or extensive power, but it will be better than having no search.

In today's article, I'll focus on making an endpoint, a JSON file collecting all of my post's titles and URLs.

The whole process will be similar to how I created a [XML sitemap for this website](https://daily-dev-tips.com/posts/adding-a-sitemap-in-eleventy/).

## Adding a JSON endpoint to an Eleventy website

Let's start by making a new file in the `src` directory. I'm calling this file `static_search.njk`.

```html
---
permalink: '/search.json'
---

[
  {% for post in collections.posts %} 
  { 
    "title":"{{ post.data.title }}",
    "url":"{{ post.url | url }}" 
  }
  {% if loop.last == false %},{% endif %} {% endfor %} {%
]
```

With this, we tell Eleventy to output this file as `search.json`, forcing the JSON extension.

Inside we loop over our `post` collection and create a JSON structure with the title and URL of the post.

Last we check once we hit the last loop that we don't add a `,` since it would be invalid JSON.

Now when we build our website, we get the following result.

```json
[
  {
    "title": "Linux adding a timestamp to the bash history",
    "url": "/posts/linux-adding-a-timestamp-to-the-bash-history/"
  },
  {
    "title": "JavaScript insert newly created element after another element",
    "url": "/posts/javascript-insert-newly-created-element-after-another-element/"
  },
  {
    "title": "JavaScript insert newly created element before another element",
    "url": "/posts/javascript-insert-newly-created-element-before-another-element/"
  }
]
```

Pretty solid, right!

In another article, I'll be guiding you through using this data for a search function.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
