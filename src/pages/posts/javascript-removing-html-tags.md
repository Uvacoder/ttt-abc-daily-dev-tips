---
layout: ../../layouts/Post.astro
title: 'JavaScript removing HTML tags'
metaTitle: 'Remove HTML tags JavaScript Tutorial [2022]'
metaDesc: 'Learn how to delete all HTML tags using Vanilla JavaScript. See the example code in the Codepen!'
image: /images/28-11-2020.jpg
date: 2020-11-28T03:00:00.000Z
tags:
  - javascript
---

I recently needed to **remove all HTML tags** from the text content of my application to return the clean text.

In this case, it was to share a **plain text** version for meta descriptions. It can also be used for several other outputs.

Today I'll show you how to remove HTML tags in Javascript.

I'll show you two ways of removing HTML tags from a string.
I want to note that when you accept user input, you should always opt for a more secure server-side check.

## 1. JS remove HTML tags with innerHTML

One method is to create a temporary HTML element and get the innerText from it.

```js
const original = `<h1>Welcome to my blog</h1>
<p>Some more content here</p><br /><img alt="a > 2" src="img.jpg" />`;

let removeHTML = (input) => {
  let tmp = document.createElement('div');
  tmp.innerHTML = input;
  return tmp.textContent || tmp.innerText || '';
};
console.log(removeHTML(original));
```

This will result in the following:

```js
'Welcome to my blog
Some more content here'
```

As you can see, we removed every HTML tag, including an image, and extracted the text content.

## 2. JS Remove HTML tags with regex

My favorite for my applications is using a **regex match**. It's a cleaner solution, and I trust my inputs to be valid HTML.

How it works:

```js
const original = `<h1>Welcome to my blog</h1>
<p>Some more content here</p><br /><img src="img.jpg" />`;

const regex = original.replace(/<[^>]*>/g, '');
console.log(regex);
```

This will result in:

```js
'Welcome to my blog
Some more content here'
```

As you can see, we removed the heading, paragraph, break and image.
This is because we escape all HTML brackets with `< >` format.

It could be breached by something silly like:

```js
const original = `<h1>Welcome to my blog</h1>
<p>Some more content here</p><br /><img alt="a > 2" src="img.jpg" />`;
```

I know it's not valid HTML anyhow, and one should use `&gt;` for this.

But running this will result in:

```js
'Welcome to my blog
Some more content here 2" src="img.jpg" />'
```

It's just something to be aware of.

### Try the example code on Codepen

You can try out the code of both methods in this Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="Exyqbqa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Exyqbqa">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/Exyqbqa">
  Exyqbqa</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
