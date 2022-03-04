---
layout: ../../layouts/Post.astro
title: "Vanilla JavaScript get form element's form"
metaTitle: "Vanilla JavaScript get form element's form"
metaDesc: 'Most efficient way to get a elements parent form in JavaScript'
image: /images/24-12-2020.jpg
date: 2020-12-24T03:00:00.000Z
tags:
  - vanillajs
  - javascript
---

Wow, weird title, but we want to get a form in which a specific element is sitting.

We could use [`closest()`](https://daily-dev-tips.com/posts/vanilla-javascript-closest/) or `parent()`, but for form elements we can even make it simpler!

We can use the `.form` on these elements.

To demonstrate I'm going to showcase two fairly common use cases

## 1. You know the input based on its ID

A very common use-case is that we know the ID of a input, and want to get its form.

Let's say this is our `HTML` structure

```html
<form>
  <input id="myInput" type="text" />
  <select onchange="findForm(this)">
    <option value="1">Change me</option>
    <option value="2">To anything</option>
  </select>
</form>
```

Now if we want to get the form element the `#myInput` belongs to we can do this:

```js
const input = document.getElementById('myInput');
let form = input.form;
console.log(form);
```

This return the following:

![Vanilla JavaScript get form](https://cdn.hashnode.com/res/hashnode/image/upload/v1608303060872/tPBjafc3o.png)

## 2. Input changed, get the form element

On the other side, you might find you need the form based on an element changing.

So in the case of our select each time it changes we want to get the form it belongs to.

```js
findForm = el => {
  let elForm = el.form;
  console.log(elForm);
};
```

Simple as that!

Find this full demo on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="LYRLLMm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript get form element's form">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYRLLMm">
  Vanilla JavaScript get form element's form</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

You might ask when you need this?

Let's say if the fields change you want to validate the whole form.
Or you need to do a lookup for another field to make sure those match.

A lot of options come to mind.

I hope you find this a useful method of finding an element's form.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
