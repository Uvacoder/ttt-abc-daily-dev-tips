---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Email Validation'
metaTitle: 'Simple Regex Email Validation in Vanilla JS [2022]'
metaDesc: 'In this tutorial we are learning how to validate an email address in JavaScript with Regex. Follow the steps and see the live demo on Codepen.'
image: /images/13-08-2020.jpg
date: 2020-08-13T03:00:00.000Z
tags:
  - javascript
---

Today I want to address a topic I use pretty often but noticed I've never written about:

**Email validation**.

Since my day job is in marketing, we build many pages with forms, and the least we need is an email address. So how do we ensure the email input is a **valid email address** with pure JavaScript?

## HTML Structure

We'll use a straightforward form for today's work, with only an email input and a button to submit. Then we'll have a response div to show us if the email was correct.

```html
<div class="container">
  <input type="email" id="emailField" />
  <br />
  <button id="button">Check validation</button>
  <div id="response"></div>
</div>
```

## JavaScript Validating an Email Address

Ok, now on to the fun part, the `JavaScript`! Let's start by defining the variables we need to validate the email:

```js
const emailField = document.getElmentById('emailField');
const button = document.getElementById('button');
const response = document.getElementById('response');
```

Fantastic, very basic CSS selectors, but enough for this exercise.

Now we want to add a click listener to the button element.

```js
button.addEventListener('click', function () {
  const email = emailField.value;
  console.log(email);
});
```

This function will log the value from the input field to the console.

So now let's make our actual validation function to check if it validates correctly:

```js
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
```

BAM! Please don't be scared; it's a plain old `regular expression`. This will validate a valid email format.

It will return true or false, depending on the email.

So let's implement this into our button click function.

```js
button.addEventListener('click', function () {
  const email = emailField.value;
  if (validateEmail(email)) {
    response.innerHTML = 'Hiya Cowboy, this email will work for us 🤠';
  } else {
    response.innerHTML = 'Sorry, this email is not cool enough 😩';
  }
});
```

There we go! This is how you validate email inputs in a form with Regex. Of course, you would like to do something with this information, but I'll leave that up to you!

### View the example code in this Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="KKzdOJG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Email Validation">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/KKzdOJG">
  Vanilla JavaScript Email Validation</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
