---
layout: ../../layouts/Post.astro
title: 'Using setTimeout in JavaScript'
metaTitle: 'Using setTimeout in JavaScript'
metaDesc: 'How to use the JavaScript setTimeout function [2022 tutorial]'
image: /images/28-01-2022.jpg
date: 2022-01-28T03:00:00.000Z
tags:
  - javascript
---

When working with JavaScript, there will be a point where you'll want to wait a certain amount of time to run a function.

This can be to animate something after a specific time, for instance.

For instance, in this [copy text to clipboard script](https://daily-dev-tips.com/posts/vanilla-javascript-copy-text-to-clipboard-with-clipboard-api/), we use a timeout to change the text back to what it was before.

## JavaScript setTimeout function

In its most basic form, the function looks like this:

```js
setTimeout(() => {
  // Run after 100 milliseconds
}, 100);
```

The number `100` refers to the milliseconds it will wait to run.

As you can see, the basic example uses an arrow functions array that will be invoked.
You can also pass your function in the following way.

```js
const coolFunc = () => {
  console.log('do a trick');
};

setTimeout(coolFunc, 200);
```

And again, this will do the same as the above one.

But let's say your function takes parameters. We can even do that with this setup.

```js
const coolFunc = (name, age) => {
  console.log(`Hi ${name} you are ${age} years old?`);
};

setTimeout(coolFunc, 200, 'Chris', 32);
```

As you can see, the props are passed after the timeout parameter.

I see you thinking!
What will happen when we set the time to 0?

Good question, and it will be executed immediately.

But! This will only be invoked after all the other functions finish, even if they come later in the script.

```js
setTimeout(() => {
  console.log('zero wait timeout');
}, 0);

console.log('first');

const otherFunction = () => {
  console.log('The other function');
};

otherFunction();
```

This will result in:

- first
- The other function
- zero wait timeout

So as you can see, the setTimeout, even though it has zero milliseconds, will only fire last.

## Cancel the setTimeout function

These times, you might want to abort the timeout you had planned.

We can define the timeout as a function, which gives us the option to clear it.

```js
const timer = setTimeout(() => {
  console.log(`I'll explode! 💣`);
}, 2000);

clearTimeout(timer);
```

Oef, luckily this bomb didn't go off! 👀

And there you go, we covered all the basics of the setTimeout function.

If you are keen to see some more real-world examples, here is a list of articles using them.

- [Double click to like Instagram effect](https://daily-dev-tips.com/posts/double-click-to-like-instagram-effect-in-javascript/)
- [How is your year loading](https://daily-dev-tips.com/posts/how-is-your-year-loading/)
- [Redirect a web page](https://daily-dev-tips.com/posts/redirecting-a-web-page/)

Or you can check out this CodePen and have a play with it.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="oNGORyN" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/oNGORyN">
  Using setTimeout in JavaScript</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
