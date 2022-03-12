---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Countdown'
metaTitle: 'Vanilla JavaScript Countdown'
metaDesc: 'Lets turn our timer into a countdown'
image: /images/19-06-2020.jpg
date: 2020-06-19T03:00:00.000Z
tags:
  - javascript
---

Yesterday we made a [timer function](https://daily-dev-tips.com/posts/vanilla-javascript-timer/) in JavaScript. Today we are going to convert this into a countdown timer.
This means we have a starting time of two minutes and will countdown to zero when we stop the timer and alert the user.

## HTML Structure

This is the same as yesterday, but we show the two-minute mark upfront.

```html
<div class="container">
  <div id="timer">02:00</div>
  <button onclick="startTimer()">Start</button>
</div>
```

## CSS Setup

For the CSS, we made no changes. This can stay the same.

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

## JavaScript Countdown

As for our JavaScript, we are still using the button to start the countdown and keeping the same function name for the sake of the exercise.

```js
const timer = document.getElementById('timer');
let timerInterval;

startTimer = () => {
  // Firs twe start by clearing the existing timer, in case of a restart
  clearInterval(timerInterval);
  // Then we set the variables
  let second = 0,
    minute = 2;

  // Next we set a interval every 1000 ms
  timerInterval = setInterval(function () {
    // Toggle the odd class every interval
    timer.classList.toggle('odd');

    // We set the timer text to include a two digit representation
    timer.innerHTML =
      (minute < 10 ? '0' + minute : minute) +
      ':' +
      (second < 10 ? '0' + second : second);

    // We check if the second equals 0
    if (second == 0) {
      // If so, we remove a minute and reset our seconds to 60
      if (minute === 0) {
        // Full done
        clearInterval(timerInterval);
        alert('Time is up!');
      }
      minute--;
      second = 60;
    }
    second--;
  }, 1000);
};
```

So much like the timer, we have an interval function.
But instead of adding, we start with some values upfront:

```js
let second = 0,
  minute = 2;
```

Then where we would typically plus this, we now detract them:

```js
minute--;
second--;
```

And we implemented a check if we hit zero, we need to reset the seconds, and if the minute is zero, we need to stop the whole thing.

```js
if (second == 0) {
  // If so, we remove a minute and reset our seconds to 60
  if (minute === 0) {
    // Fully done!
    clearInterval(timerInterval);
    alert('Time is up!');
  }
  minute--;
  second = 60;
}
```

That's it; we now changed our timer into a countdown!

See it in action on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="ExPZmwg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Countdown">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ExPZmwg">
  Vanilla JavaScript Countdown</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
