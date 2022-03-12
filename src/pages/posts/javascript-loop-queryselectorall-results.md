---
layout: ../../layouts/Post.astro
title: 'JavaScript loop querySelectorAll results'
metaTitle: 'Loop querySelectorAll Results Vanilla JS Tutorial [2022]'
metaDesc: 'We will learn three ways to loop over a querySelectorAll nodeList in Vanilla JavaScript. See the code examples in the Codepen.'
image: /images/04-12-2020.jpg
date: 2020-12-04T03:00:00.000Z
tags:
  - javascript
---

Let's talk about JavaScript NodeLists. Node lists are the results of a `querySelectorAll()` query.

They are not an array, but they look and behave similarly.
It can be tricky looping over their items and there are multiple ways to \*_loop through a NodeList_.

This is how the selector looks like:

```js
const items = document.querySelectorAll('li');
console.log(items);
```

And the result of the JavaScript querySelectorAll is a NodeList object:

![JavaScript NodeList](https://cdn.hashnode.com/res/hashnode/image/upload/v1606630706569/25bsXupBM.png)

## 1. Basic for loop

To loop through a result from querySelectorAll you can use the basic for loop. It is by far the best-supported method. It's well supported on all browsers and recommended if you need to support older browsers.

See the code here:

```js
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function () {
    console.log(`Text = ${items[i].innerText}`);
  });
}
```

It's just not the most modern or visually appealing looping method.

## 2. for...of loop

We can also use the `for...of` loop on a NodeList.

```js
for (const item of items) {
  item.addEventListener('click', () => {
    console.log(`2: Text = ${item.innerText}`);
  });
}
```

The for of loop is supported by all modern browsers and works pretty well on a list of nodes.

## 3. forEach loop

My all-time favorite loop to use with querySelectorAll is the **forEach loop**.

It's the easiest method to use with NodeLists but will only work in modern browsers.

```js
items.forEach((item) => {
  item.addEventListener('click', () => {
    console.log(`3: Text = ${item.innerText}`);
  });
});
```

This method can be extended by converting the NodeList to an **array** before.

```js
[].forEach.call(items, function (item) {
  item.addEventListener('click', function () {
    console.log(`3.1: Text = ${item.innerText}`);
  });
});
```

Or, we can use the spread operator to convert the list into an array:

```js
[...items].forEach((item) => {
  item.addEventListener('click', () => {
    console.log(`3.2: Text = ${item.innerText}`);
  });
});
```

There you go: Three examples (+ iterations) of how to loop over the querySelectorAll result in Javascript.

### See the Code Examples in this Codepen

You can also have a play around with this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="qBaEVyQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript loop querySelectorAll results">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/qBaEVyQ">
  JavaScript loop querySelectorAll results</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
