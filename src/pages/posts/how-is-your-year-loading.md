---
layout: ../../layouts/Post.astro
title: 'How is Your Year Loading?'
metaTitle: 'How is Your Year Loading?'
metaDesc: 'Lets see how 2021 is loading in JavaScript'
image: /images/18-08-2020.jpg
date: 2020-08-18T03:00:00.000Z
tags:
  - javascript
---

This year has been everything but normal; I think we can all agree on that right!

I see so many people struggling even to remember if it's March or August (It's August 🤟), and I totally feel you!

So, today, let's make a percentage year counter!
It will show us how 2021 is loading.

## HTML Structure

```html
<div class="container">
  <h1>2020 Loading</h1>
  <h2>We are <i id="percentage">54%</i> there</h2>
  <div class="loader" id="loader">
    <span></span>
  </div>
</div>
```

We don't need much, we are going to use the `I` tag to place the percentage in and the loader to show our actual loading bar.

## CSS Styling

Now on to our `CSS`, we use some basic [flex center](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/) for our container.

```css
.container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #00bbf9;
}
```

And this is our loader:

```css
.loader {
  margin-top: 25px;
  width: 200px;
  height: 25px;
  background: #efefef;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}
.loader span {
  position: absolute;
  height: 100%;
  width: 0%;
  background: #f15bb5;
  left: 0;
  top: 0;
  transition: width 5s ease-in;
}
```

As you can see, the div itself is relative, and we position the span absolute, the span will then receive a width and a cool transition so we can see it loading!

## JavaScript Year Loader

Onto our actual `JavaScript`. To start we need to know how far our day is in the year.

```js
const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const diff =
  now -
  start +
  (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
const oneDay = 1000 * 60 * 60 * 24;
const day = Math.floor(diff / oneDay);
```

Oke, what?

So let's start with `now` we are defining today as an object!
Then we need to get the first day of the year, which will be Jan 1st.

If we have both, we can calculate the difference between now and our starting date; we have to add a timezone offset in milliseconds since daylight saving time will not work.

Then we define what one day is "worth" in days. This will return one-day millisecond value.

Then we can simply get our difference / one-day and receive 231 on the 18th of August.

So now we can calculate the percentage of a whole year!

```js
const percentage = Math.floor((day / 365) * 100);
```

Pretty easy our (day / 365 \* 100) = percentage.

Then we need to get all our elements and set our variables.

```js
const loader = document.getElementById('loader');
const loaderBar = loader.querySelector('span');
const percentageText = document.getElementById('percentage');

percentageText.innerHTML = percentage + '%';

setTimeout(function () {
  loaderBar.style.width = percentage + '%';
}, 100);
```

We set our percentage text and our loader bar width to be our actual percentage.

That's it, see it in action on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="dyMXOeX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="How is your year loading?">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/dyMXOeX">
  How is your year loading?</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
