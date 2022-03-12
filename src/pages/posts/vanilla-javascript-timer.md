---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Timer'
metaTitle: 'Vanilla JavaScript Timer'
metaDesc: 'Today we are making a cool timer with JavaScript!'
image: /images/18-06-2020.jpg
date: 2020-06-18T03:00:00.000Z
tags:
  - javascript
---

Today we'll be looking into making a timer in `JavaScript`.
A timer can be used in many ways for several purposes. In my case, it is a game timer. It will start once the game starts and keeps track of how long it takes someone to solve something.

Let's dive into it and make our first `JavaScript` timer.

> Check out this [countdown in JavaScript](https://daily-dev-tips.com/posts/vanilla-javascript-countdown/)!

## HTML Structure

```html
<div class="container">
  <div id="timer">00:00</div>
  <button onclick="startTimer()">Start</button>
</div>
```

We add a container for centering purposes inside we add our timer with the default of `00:00` so people can see what they are expecting.
And then a button that will start the timer for now.

## CSS Structure

As for the CSS, it's a pure visual game in this project, nothing magic is going on.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background: #e9c46a;
}
#timer {
  margin-bottom: 25px;
  font-size: 3rem;
  font-weight: bold;
  color: #2a9d8f;
  &.odd {
    color: #264653;
  }
}
button {
  border-radius: 5px;
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: #e76f51;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:hover {
    background: #f4a261;
  }
}
```

The central part here is the container, which uses the [flex centering technique](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/).

## JavaScript Timer

The fun part is the `JavaScript` to making the timer work.

```js
const timer = document.getElementById('timer');
let timerInterval;
```

We start our `JavaScript` by defining the timer element and our interval for the timer.

Next, we will define the button's function we call `startTimer`.

> For this, we are using the [Arrow functions](https://daily-dev-tips.com/posts/javascript-arrow-function/).

```js
startTimer = () => {
  // Firs twe start by clearing the existing timer, in case of a restart
  clearInterval(timerInterval);
  // Then we clear the variables
  let second = 0,
    minute = 0,
    hour = 0;

  // Next we set a interval every 1000 ms
  timerInterval = setInterval(function () {
    // Toggle the odd class every interval
    timer.classList.toggle('odd');

    // We set the timer text to include a two digit representation
    timer.innerHTML =
      (hour ? hour + ':' : '') +
      (minute < 10 ? '0' + minute : minute) +
      ':' +
      (second < 10 ? '0' + second : second);

    // Next, we add a new second since one second is passed
    second++;

    // We check if the second equals 60 "one minute"
    if (second == 60) {
      // If so, we add a minute and reset our seconds to 0
      minute++;
      second = 0;
    }

    // If we hit 60 minutes "one hour" we reset the minutes and plus an hour
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
};
```

I've written comments between the code snippet to clarify what happens on each line.

The important part is we use `setInterval` to recall the function every 1000ms. Inside this, we manually add seconds and minutes and update the `innerHTML` of our timer div.

I've also included a fun part that will change our timer's color every second.

```js
// Toggle the odd class every interval
timer.classList.toggle('odd');
```

> You can find my article about using the [classList in JavaScript](https://daily-dev-tips.com/posts/vanilla-javascript-classlist/) here.

As usual, you can find the demo timer on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="OJMbREv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Timer">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJMbREv">
  Vanilla JavaScript Timer</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Shorthand Explanation

(EDIT) I got a comment asking what the following part does:

```js
// We set the timer text to include a two digit representation
timer.innerHTML =
  (hour ? hour + ':' : '') +
  (minute < 10 ? '0' + minute : minute) +
  ':' +
  (second < 10 ? '0' + second : second);
```

This is using the [`JavaScript` shorthand properties](https://daily-dev-tips.com/posts/css-shorthand-properties/) and is basically the same as doing the following:

```js
let string = '';
if (hour) {
  string += hour + ':';
}
if (minute < 10) {
  // Number is 0-9 so we want to prefix with a zero
  string += '0' + minute;
} else {
  // Number is 10 or more so no prefix needed
  string += minute;
}
if (second < 10) {
  // Number is 0-9 so we want to prefix with a zero
  string += ':0' + second;
} else {
  // Number is 10 or more so no prefix needed
  string += ':' + second;
}
timer.innerHTML = string;
```

As you can see, the shorthand is just way quicker in writing this down.

You can find the demonstration of the non-shorthand explanation in this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="MWKoEgV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Timer Shorthand Explanation">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/MWKoEgV">
  Timer Shorthand Explanation</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
