---
layout: ../../layouts/Post.astro
title: 'Learn how to convert a list into an array in JavaScript'
metaTitle: 'Learn how to convert a list into an array in JavaScript'
metaDesc: 'Converting a excel list into an array in JavaScript'
image: /images/26-08-2020.jpg
date: 2020-08-26T03:00:00.000Z
tags:
  - javascript
---

🚨 Real-world use-case: I wanted to convert an excel list into an array; it had 200+ records, so a pain to do manually.

So why not create something easy in `JavaScript`!

The end goal is to have a text area where we can input our list and auto-convert it into an array.

This is going to be the result in Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="bGpqqRm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Learn how to convert a list into an array in JavaScript">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/bGpqqRm">
  Learn how to convert a list into an array in JavaScript</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## HTML Structure

The `HTML` will be super easy for this. We just need a textarea and a paragraph to output our array.

```html
<div class="container">
  <textarea id="textarea">
Paste
your 
list 
here</textarea
  >
  <p id="array">["Paste","your ","list ","here"]</p>
</div>
```

## CSS Styling

Let's also add some super easy CSS to make it look good:

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  background: #3a86ff;
}
textarea {
  padding: 10px;
  min-width: 200px;
  width: 50vw;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 10px;
}
#array {
  background: #efefef;
  border: 1px dashed #333;
  padding: 10px;
  width: 50vw;
  min-width: 200px;
  word-wrap: break-word;
  margin-bottom: 10px;
  color: #ff006e;
  border-radius: 10px;
}
```

## JavaScript convert a list into an array

Ok, on to the magic part, let's convert our array input into an array.

We start by adding defining our variables.

```js
const textarea = document.getElementById('textarea');
const array = document.getElementById('array');
```

Now we can add our input listener to the textarea element.

```js
textarea.addEventListener('input', function () {
  const arrayValues = textarea.value.split(/\n/g);
  array.innerHTML = JSON.stringify(arrayValues);
});
```

And then, for some magic, we will add a click event to our paragraph, which will auto-select all text.

```js
array.addEventListener('click', function () {
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(array);
  selection.removeAllRanges();
  selection.addRange(range);
});
```

An awesome, simple tool, but effective!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
