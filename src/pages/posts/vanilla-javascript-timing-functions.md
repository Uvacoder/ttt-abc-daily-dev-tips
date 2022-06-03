---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Timing Functions'
metaTitle: 'Vanilla JavaScript Timing Functions'
metaDesc: 'Lets make the web fast again! and learn how to time your functions.'
image: /images/29-04-2020.jpg
date: 2020-04-29T03:00:00.000Z
tags:
  - javascript
---

Web performance is integral to our jobs as developers; we are responsible for making the web fast again.

The web got bloated and filled with rubbish, trust me. I've used `bootstrap` and `jQuery`, but think about your including whole libraries and only using what, 10% of it?

So let's talk about performance today, especially JavaScript performance.

We are going to look into timing your functions, so we can see how fast they are.

There are two official ways of doing so

## Using performance.now()

The one way we can use is `performance.now()`. It returns something called a `DOMHighResTimeStamp` in milliseconds.

We must create a variable at the beginning of our function and a variable at the end. Then we log the difference.

This looks like this:

```js
myFunction = () => {
  for (i = 0; i < 10; i++) {}
};
const start = performance.now();
myFunction();
const end = performance.now();
console.log(`The function took ${end - start} milliseconds.`);
// The function took 0.2699999968172051 milliseconds.
```

So very basic, we have a function which loops ten times, then we start a `performance.now()` call the function and then define our end time.
Last, we log the time between (end - start)

Feel free to fork my code, adjust the counter (10), and see the time increase!

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="OJygJLR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Timing Functions | performance">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJygJLR">
  Vanilla JavaScript Timing Functions | performance</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Using console.time()

Another way is using the `console.time()` function. It has one property and accepts a label we can define.
Then we use `console.timeEnd()` to stop counting; this will automatically log the result in our console.
So the cool thing about this function is that we can use multiple timers simultaneously, and they are easier to use.

```js
myFunction = () => {
  for (i = 0; i < 10; i++) {}
};
console.time('myFunction');
myFunction();
console.timeEnd('myFunction');
// myFunction: 0.242919921875ms
```

You can also try and play with this on this Codepen, try and increase the counter (10)

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="zYvzYoe" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Timing Functions | time">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/zYvzYoe">
  Vanilla JavaScript Timing Functions | time</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Which one to use?

It is no good or wrong here; both do what they promise. From my perspective, the `console.time` is way easier to use, you don't have to log anything extra manually, and it's easier to keep track of within the code.

I would suggest just picking one and making the web faster, trying different approaches to your code, and seeing how much of a difference it makes.
Remember, `JavaScript` can be weird. Something that you think is slow may be faster, but you will only know by logging this.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
