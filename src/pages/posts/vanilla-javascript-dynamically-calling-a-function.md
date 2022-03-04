---
layout: ../../layouts/Post.astro
title: 'Dynamically call a Function in JavaScript'
metaTitle: 'Call a function dynamically Vanilla JS Tutorial [2022]'
metaDesc: 'Todays guide we will learn how to dynamically call a function in Vanilla JavaScript. See the code examples in the Codepen!'
image: /images/18-07-2020.jpg
date: 2020-07-18T03:00:00.000Z
tags:
  - vanillajs
  - javascript
---

Have you ever had the scenario where you needed to call a function based on a variable?

In my most recent use case, I had an area of dynamic modules and needed to loop over them. Then, if I found one with the right values, I needed to **call the function dynamically**.

So how does a dynamic function call work?

## JS function definition

First, let's start with the code for our JS functions:

```js
function customClick(button) {
  button.addEventListener('click', function (event) {
    alert('custom click');
  });
}

function customUppercase(input) {
  input.addEventListener('keyup', function () {
    input.value = input.value.toUpperCase();
  });
}
```

Not very exciting functions, but good enough to test with.

For this example we are going to use the following `HTML`:

```html
<input type="text" data-module="customUppercase" /> <br /><br />
<button type="submit" data-module="customClick">Done</button>
```

## Dynamically call a Function in JavaScript

Let's start by defining our array of custom objects:

```js
const options = ['Click', 'Uppercase'];
```

We will now loop over these:

```js
for (let i = 0; i < options.length; i++) {
  console.log(options[i]);
}
```

Within the **modules** we need to get all types that have the data-module we are passing:

```js
for (let i = 0; i < options.length; i++) {
  const items = document.querySelectorAll('[data-module="custom' + options[i] + '"]');
  for (let j = 0; j < items.length; j++) {
    // Call function
  }
}
```

Now, we need to call the function dynamically based on our variable:

```js
for (let i = 0; i < options.length; i++) {
  const items = document.querySelectorAll('[data-module="custom' + options[i] + '"]');
  for (let j = 0; j < items.length; j++) {
    this['custom' + options[i]](items[j]);
  }
}
```

That's how to dynamically call JS functions based on the value in another variable!

### Try the code example in this Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="LYGgwom" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Dynamically Calling a Function">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYGgwom">
  Vanilla JavaScript Dynamically Calling a Function</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
