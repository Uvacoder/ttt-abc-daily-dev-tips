---
layout: ../../layouts/Post.astro
title: Match all urls from a string in vanilla JS
metaTitle: 'Match all urls from a string in vanilla JavaScript'
metaDesc: 'Matching all urls in a string using vanilla JavaScript'
image: '/images/fallback.png'
date: 2020-03-19T03:00:00.000Z
tags:
  - javascript
---

Every needed to get all strings from a input.
We wanted to migrate alot of landing pages from `http` to `https` and wanted to automate converting all sources.

I've build a `node.js` script, but the functions are really plain `vanilla js`.
We first needed to index all urls to see if it was even possible to make them `https`, the script will return a array of urls for the given input.

---

The following script will find all url's in the given input string and return a array of urls.

```js
const input =
  '<a href="http://lorem.org">Lorem</a> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim. Sed viverra tellus in hac habitasse platea dictumst. <a href="https://ipsum.link">Ipsum</a> consequat nisl vel pretium lectus quam. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Egestas congue quisque egestas diam in. Velit ut tortor pretium viverra suspendisse potenti. Donec ac odio tempor orci dapibus. Eget dolor morbi non arcu. In nisl nisi scelerisque eu. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Mauris sit amet massa vitae tortor condimentum lacinia <a href="https://daily-dev-tips.com/">quis</a> vel.';
const urls = input.match(/\b(https?:\/\/.*?\.[a-z]{2,4}\b)/g);
console.log(urls);
// Returns: ["http://lorem.org", "https://ipsum.link", "https://daily-dev-tips.com"]
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js" data-user="rebelchris" data-slug-hash="gOpKJLz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Match all urls from a string">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOpKJLz">
  Match all urls from a string</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Let's reach out and connect

I hope you like my blog initative, follow me on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1) to reach out or just be the first to know about any new blog articles.
