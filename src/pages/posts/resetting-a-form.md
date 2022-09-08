---
layout: ../../layouts/Post.astro
title: 'Resetting a Form'
metaTitle: 'Resetting a Form'
metaDesc: 'Two ways to reset a form!'
image: /images/26-07-2020.jpg
date: 2020-07-26T03:00:00.000Z
tags:
  - html
  - javascript
---

Let's look at a function we used to have but somehow seems a bit faded for no good reason!

The form reset option was usually a button at the bottom of your form to reset the whole input.

I work for a company that uses a lot of pre-population based on cookies, but sometimes this information is not what you want in the inputs so that people can reset the whole form.

## HTML Reset Method

One method to reset a form a just by using the `reset` input type, and your `HTML` would look like this;

```html
<form>
  <input type="text" />
  <br /><br />
  <input type="text" />
  <br /><br />
  <input type="text" />
  <br /><br />
  <input type="reset" />
</form>
```

Try and type something in the fields and press the reset button. This will reset the whole form.

## JavaScript Reset Method

Another way to do this is with `JavaScript`, for instance, after a submit.

Let's add the following button:

```html
<button type="button" onclick="myReset()">JavaScript</button>
```

```js
function myReset() {
  const form = document.querySelector('form');
  form.reset();
}
```

Alternatively, even easier, we can use the following action:

```html
<button type="button" onclick="reset()">JavaScript #2</button>
```

View these methods on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="mdVgPVM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Resetting a Form">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/mdVgPVM">
  Resetting a Form</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
