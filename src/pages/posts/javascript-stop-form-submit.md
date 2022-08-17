---
layout: ../../layouts/Post.astro
title: 'JavaScript stop form submit'
metaTitle: 'JavaScript stop form submit'
metaDesc: 'How to stop a form submit in JavaScript'
image: /images/13-09-2021.jpg
date: 2021-09-13T03:00:00.000Z
tags:
  - javascript
---

Forms are an essential part of building apps and websites. They are the key to user input.

Let's look at some examples of forms we can think of:

- Login form
- Subscribe to a newsletter
- Feedback forms
- Contact
- Order
- CMS system
- Etc...

As you can see, forms are a big pillar in development.
And generally, a form will perform a specific type of request to a defined action.

```html
<form action="post.php" method="POST"></form>
```

Take the above example. It will perform a POST request to a file called `post.php`.

However, in modern development, we often want to keep the user on the page and do these transactions in the background using JavaScript.

Think about a search bar, for instance, how annoying it would be if it had to refresh the page every time you change the search query.

That's where handling forms with JavaScript comes in super handy. Let's see how this works.

## Handle form submits in JavaScript

To catch the form submitted in JavaScript, we have to have the form available in our code.

The easiest way would be to add a selector. This could be a `querySelector` or fetch the form by its unique ID.

```html
<form id="form-id">
  <input type="text" name="name" id="name-field" />

  <input type="submit" value="submit" />
</form>
```

```js
const form = document.querySelector('form');

const formId = document.getElementById('form-id');
```

Both these methods will have the same reference to the form.

However, I urge you to use the latter one since it's more unique, especially if you can have more than one form on a page.

Let's take the ID method and handle the form submit in JavaScript to stop the submit.
For this to work, we need to attach an event listener on the form's submit action.

```js
const form = document.getElementById('form-id');

form.addEventListener('submit', (event) => {
  alert('submitting');
});
```

This will perform the following actions:

- User clicks submit
- Alert shows up
- User dismisses alert
- HTML form submission happens

That's not exactly what we want, as we want the HTML to submit not to happen at all.

We have to use the `event.preventDefault` code to intercept that behavior.

```js
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('submitting');
});
```

Now we only get the alert, and our form is stopped!

You can check out the JavaScript form submit in this CodePen.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="XWgNYyM" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/XWgNYyM">
  </a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
