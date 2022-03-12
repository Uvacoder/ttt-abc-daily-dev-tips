---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Stop Form Submit'
metaTitle: 'Stop Form Submit Vanilla JS Tutorial [2022]'
metaDesc: 'In this code tutorial we will learn how to stop a form from submitting with pure Vanilla JavaScript.'
image: /images/08-07-2020.jpg
date: 2020-07-08T03:00:00.000Z
tags:
  - javascript
---

Let's say we want to add form validation in `JavaScript`. To do the validation, we first need to **stop the form** from submitting.

We can do this very simply in `JavaScript`. Follow the next steps of the tutorial to learn how.

## HTML Structure

```html
<form onsubmit="return validate();" novalidate>
  <input type="text" name="name" id="name" placeholder="Your name?" required />
  <br /><br />
  <input type="text" name="leave" placeholder="Leave me" />
  <br /><br />
  <input type="submit" value="Send" />
</form>
```

As you can see we use the `on submit` function and say to return a function callback.
Then we have two fields of which we will validate the first one.

## JavaScript Stop Form Submit

To prevent the form submission we use the following JS code:

```js
function validate() {
  const name = document.getElementById('name');
  if (name && name.value) {
    return true;
  } else {
    alert('Please fill the name field');
    return false;
  }
}
```

We use the return values, either true or false, depending on whether someone filled out the name field.

We could even use `event.preventDefault()` on the `onsubmit` function, but this will cause any action not to become true. Hence it hinders our validation after we stopped the form.

That would work well if we plan an AJAX post however.

### Find the example code in this Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="wvMmPgB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Stop Form Submit">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/wvMmPgB">
  Vanilla JavaScript Stop Form Submit</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
