---
layout: ../../layouts/Post.astro
title: 'Console log with params'
metaTitle: 'Console log with params'
metaDesc: 'Using params in our console.log statements'
image: /images/09-09-2020.jpg
date: 2020-09-09T03:00:00.000Z
tags:
  - javascript
---

Let's have a look at our best friend, `console.log`! It's a fantastic tool if we can call it that.
Logging is just making our life so much easier, and I use it all the time.

But did you know we can pass params in console.logs?

![Console.log with params](https://cdn.hashnode.com/res/hashnode/image/upload/v1599493165323/_L7KgHiSu.png)

## Types of params in console.log

- Strings: Use `%s`
- Integer: Use `%d` or `%i`
- Floats: Use `%f`
- Object hyperlink: Use `%o`

These are more than enough types and can come in handy!

## How to use params in console.log

To use params, we can place them in our console log as such:

```js
console.log('This %s will return the number %d', 'string', 10);
// This string will return the number 10
```

As you can see, we can give it multiple parameters at once. These are read in the order inputted.

So in the above's example, it will be `%s` first then `%d`.

Let's give them all a try:

```js
console.log('Let us %s a string', 'print');
// Let us print a string

console.log('The number %d is not the same as %i', 10, 11);
// The number 10 is not the same as 11

console.log('Even a float like %f will work', 10.233);
// Even a float like 10.233 will work

console.log('There is a good link: %o', 'http://stackoverflow.com');
// There is a good link: "http://stackoverflow.com"
```

Yes, you can add this in, but I prefer this way, just neater code and more readable!

Give it a try on your next project.

Find this example on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js" data-user="rebelchris" data-slug-hash="xxVpNmv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Console log with params">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/xxVpNmv">
  Console log with params</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
