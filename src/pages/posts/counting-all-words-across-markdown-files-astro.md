---
layout: ../../layouts/Post.astro
title: 'Counting all words across markdown files ~ Astro'
metaTitle: 'Counting all words across markdown files ~ Astro'
metaDesc: 'How to count all words across multiple markdown files in Astro'
ogImage: /images/14-06-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/bb19adac-1e09-46d3-4f08-50c47251eb00
date: 2022-06-14T03:00:00.000Z
tags:
  - astro
---

Now that we have [counted all our words using a CLI script](https://daily-dev-tips.com/posts/counting-all-words-across-markdown-files-cli/), let's see how we can add this functionality to our Astro website.

If you followed my previous Astro articles, we already wrote a function that gets the [reading time for an article](https://daily-dev-tips.com/posts/adding-reading-time-to-astro-the-easy-way/).

The method described in the article above used the number of words per article to retrieve a rough reading time.
So far, it's been pretty accurate.

This method strips strings based on spaces, which might differ from what you have seen in the CLI script, as this will also count anything inside HTML tags. (Your code blocks etc.)

## Modifying the reading time

Currently, our reading time function only returns a string that tells us how long the reading time is.

Let's modify this function so it can return an array.

```js
const WORDS_PER_MINUTE = 200;
export function getReadingTime(content) {
  if (!content) return;
  const clean = content.replace(/<\/?[^>]+(>|$)/g, '');
  const numberOfWords = clean.split(/\s/g).length;
  const amount = Math.ceil(numberOfWords / WORDS_PER_MINUTE);
  return [numberOfWords, `${amount} min read`];
}
```

This function will return the number of words for a piece of content and the reading time estimate.

With this information, we can change our `lib/posts.js` function that calls this function to include both values.

```js
async function load() {
  const fetchedPosts = import.meta.globEager('../pages/posts/*.md');
  const mappedPosts = Object.keys(fetchedPosts).map((key) => {
    const post = fetchedPosts[key];
    const url = key.replace('../pages/', '/').replace('.md', '/');
    const item = { ...post.frontmatter, url };
    const [numberOfWords, readingTime] = getReadingTime(post.metadata.html);
    item.numberOfWords = numberOfWords;
    item.readingTime = readingTime;
    return item;
  });

  return mappedPosts;
}
```

As you can see, we changed the function to include the number of words and the reading time.

> Note: I created the [posts lib function](https://github.com/rebelchris/daily-dev-tips/blob/master/src/lib/posts.js) to load all posts in Astro faster.

Now that we have everything in place let's display the total number of words.

On my website, I use a component I called [`Stats.astro`](https://github.com/rebelchris/daily-dev-tips/blob/master/src/components/Stats.astro); it shows some stats of the total number of subscribers as well as the total number of posts.

For this example, I'll be adding the total words there.

As this function loads all the posts, we can add a new variable we'll call `totalWords` there. This function will use the [reduce method](https://daily-dev-tips.com/posts/javascript-reduce-method/) to summarize all our post's total words.

```js
const totalWords = allPosts.reduce(
  (total, post) => (total += post.numberOfWords),
  0
);
```

And then, we can render this value in our stats.

```html
<li class="flex items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class="w-5 h-5 mr-1"
    viewBox="0 0 32 32"
    fill="currentColor"
  >
    <path
      d="M 3 6 L 3 25 L 13 25 C 14.101563 25 15 25.898438 15 27 L 17 27 C 17 25.898438 17.898438 25 19 25 L 29 25 L 29 6 L 19 6 C 17.808594 6 16.734375 6.527344 16 7.359375 C 15.265625 6.527344 14.191406 6 13 6 Z M 5 8 L 13 8 C 14.101563 8 15 8.898438 15 10 L 17 10 C 17 8.898438 17.898438 8 19 8 L 27 8 L 27 23 L 19 23 C 17.808594 23 16.734375 23.527344 16 24.359375 C 15.265625 23.527344 14.191406 23 13 23 L 5 23 Z M 15 12 L 15 14 L 17 14 L 17 12 Z M 15 16 L 15 18 L 17 18 L 17 16 Z M 15 20 L 15 22 L 17 22 L 17 20 Z"
    ></path></svg
  >{totalWords} words written
</li>
```

And now we have a display of the total number of words we've written so far!

![Total number of words written](https://cdn.hashnode.com/res/hashnode/image/upload/v1654324224474/eDlL2kQT_.png)

As this website is open source, you'll also be able to find the complete code on [GitHub](https://github.com/rebelchris/daily-dev-tips).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
