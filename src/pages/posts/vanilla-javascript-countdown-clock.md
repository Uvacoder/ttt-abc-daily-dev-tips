---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript countdown clock'
metaTitle: 'Vanilla JavaScript countdown clock'
metaDesc: 'Creating a cool JavaScript countdown timer'
image: /images/14-11-2020.jpg
date: 2020-11-14T03:00:00.000Z
tags:
  - javascript
---

A time ago, we made this cool [year loading bar](https://daily-dev-tips.com/posts/how-is-your-year-loading/), and this made me think a countdown timer would also be cool.

Since I'm getting married next year, let's use that as an example.

We will be creating an end date, and every second we will check how long away this is.

What you'll learn in this article:

- ✅ Working with JavaScript dates
- ✅ Calculating date differences
- ✅ Converting milliseconds to readable formats
- ✅ Styling our clock

The end result will look like this:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="abZRpqM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript countdown clock">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/abZRpqM">
  Vanilla JavaScript countdown clock</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## HTML Structure

Let's start by defining our `HTML` structure.

```html
<div>
  <h1>The big day</h1>
  <p>Nicole & Chris wedding</p>
  <p id="done"></p>
  <ul>
    <li><span id="days">0</span> Days</li>
    <li><span id="hours">0</span> Hours</li>
    <li><span id="minutes">0</span> Minutes</li>
    <li><span id="seconds">0</span> Seconds</li>
  </ul>
</div>
```

We will have a title and intro paragraph, as well as a empty `done` div.
This done div will be used if the timer expired.

Then we have a list with days, hours, minutes, and seconds.
Default on 0 in case the date expired.

## Adding some CSS for styling

Now ofcourse we want this too look a bit nicer.

```css
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  background: #8fbfe0;
}
h1 {
  font-size: 3rem;
  margin-top: 0;
}
ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 2rem;
}
ul li {
  background: #7c77b9;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
  color: #8fbfe0;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
}
ul li span {
  font-size: 2rem;
}
```

What you'll see is that we remove the main styling from the `ul` to use [Flexbox to center it](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/), and space the elements.
Then we add a box-shadow and some colors to make it pop more.

## JavaScript countdown timer

Now the `JavaScript` part.

Let's first define our end date:

```js
const end = new Date('May 03, 2021 00:00:00').getTime();
```

We define the date as a Date object and use the `getTime` function to get the milliseconds. We do this because it's easier to count with.

Now let's get all our output span elements.

```js
const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
```

The last set of variables we can define to make it easier for ourselves are the time fragment pieces.

```js
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;
```

What this means:

- 1000 seconds = 1 millisecond so if we do (time / 1000) we get our seconds
- (seconds \* 60) = 1 minute (60.000 milliseconds)
- (minutes \* 60) = 1 hour, because 1 hour has 60 seconds.
- (hours \* 24) = 1 day, because 1 day has 24 hours

Now we will need to create a `setInterval` function to run every second.

```js
const x = setInterval(function () {
  // Code here
}, seconds);
```

> We attach it to a const to be able to unset it if it's no longer needed.

Now, let's get the current timestamp and a difference between our end date and now.

```js
let now = new Date().getTime();
const difference = end - now;
```

The difference will now have the difference in milliseconds between now and our set date.

Let's first check if it's not already expired.

```js
if (difference < 0) {
  clearInterval(x);
  document.getElementById('done').innerHTML = "We're married! 🎉";
  return;
}
```

Here, we check if the difference is smaller then 0, then we clear our interval so it won't run again.
We also use a `return` to stop the rest of the function from running.

Now all that's left is to show the correct numbers for each element.

```js
dayEl.innerText = Math.floor(difference / days);
hoursEl.innerText = Math.floor((difference % days) / hours);
minutesEl.innerText = Math.floor((difference % hours) / minutes);
secondsEl.innerText = Math.floor((difference % minutes) / seconds);
```

As mentioned in our example we return a floored value of the difference converted to each respectable element.

> Note the use of the `%` is to get a remained back.

For example, let's say our difference in milliseconds is 15091810828.

- Days: (15091810828 / 86400000) = 174
- Hours: (15091810828 % 86400000) = 58210828 => (58210828 / 3600000) = 16
- Minutes: (15091810828 % 3600000) = 610828 => (610828 / 60000) = 10
- Seconds: (15091810828 % 60000) = 10828 => (10828 / 1000) = 10

This might be a bit much. I'd advise you to even write down one number and calculate it on paper to get a good feel for what's happening.

There we go, we now have a countdown timer in `JavaScript`, let me know what you create with this cool piece of code.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
