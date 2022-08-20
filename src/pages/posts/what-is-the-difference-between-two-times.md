---
layout: ../../layouts/Post.astro
title: 'What is the difference between two times? ⌚️'
metaTitle: 'What is the difference between two times? ⌚️'
metaDesc: 'Calculate the difference between two times in JavaScript'
image: /images/27-08-2020.jpg
date: 2020-08-27T03:00:00.000Z
tags:
  - javascript
---

📣 Chris, make a speedtest report of this function!
Uhh, Ok! No problem but shit, my math is not good.

...

Opens up [Time diff website](https://www.timeanddate.com/date/timeduration.html) -> Pastes two times -> reports back.

It might be just my math being so bad, but let's make a simple real-world tool that will give us the time past two times.

It will end up looking like this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="WNwjejN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="What is the difference between two times? ⌚️">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/WNwjejN">
  What is the difference between the two times? ⌚️</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## HTML Structure

```html
<div class="container">
  <div class="dates">
    <div class="start">
      <i>Start time:</i> <br />
      <input type="number" min="0" max="24" id="s_h" placeholder="HH" />
      <input type="number" min="0" max="60" id="s_m" placeholder="MM" />
      <input type="number" min="0" max="60" id="s_s" placeholder="SS" />
    </div>
    <div class="space"></div>
    <div class="end">
      <i>End time:</i> <br />
      <input type="number" min="0" max="24" id="e_h" placeholder="HH" />
      <input type="number" min="0" max="60" id="e_m" placeholder="MM" />
      <input type="number" min="0" max="60" id="e_s" placeholder="SS" />
    </div>
  </div>
  <button id="button">Perform some magic ✨</button>
  <div id="output"></div>
</div>
```

We need two divs to keep three inputs for the hours, minutes, and seconds.
Then we need a button to perform our magic on click and an output div to place the result in!

## CSS Styling

Let's make the above show a bit nicer:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #4ea8de;
}
.dates {
  display: flex;
  text-align: center;
}
.dates i {
  margin-bottom: 10px;
}
.dates input {
  width: 40px;
  padding: 5px;
  margin-top: 10px;
}
.space {
  margin: 0px 10px;
}
button {
  margin-top: 20px;
  font-size: 24px;
  padding: 10px 20px;
  background: #7400b8;
  border-radius: 5px;
  color: #80ffdb;
  cursor: pointer;
  transition: all 0.5s ease;
}
button:hover {
  background: #6930c3;
}
#output {
  margin-top: 20px;
  font-size: 18px;
}
```

I'm mainly using [flexbox to center](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/) some elements, adding some margins and colors to make it look better.

Note that we are adding a transition to the button; this will make the button background quickly fade instead of a complex hover effect. Another cool transition is this [Hamburger menu](https://daily-dev-tips.com/posts/animated-hamburger-side-menu/).

## JavaScript time passed between two times

On to the magic part, `JavaScript` is what is going to make everything work.

First, we need to define all our variables.

- The six inputs
- The button
- and the output div

```js
const startHour = document.getElementById('s_h'),
  startMinute = document.getElementById('s_m'),
  startSecond = document.getElementById('s_s'),
  endHour = document.getElementById('e_h'),
  endMinute = document.getElementById('e_m'),
  endSecond = document.getElementById('e_s'),
  button = document.getElementById('button'),
  output = document.getElementById('output');
```

As you can see above, we can add one row of variables. It just beats writing const or var every time. You can space them out with commas.

Now let's add a click event to our button:

```js
button.addEventListener('click', function () {
  // Code coming here
  // 👇
});
```

Awesome, now we need to get our start and end date inside this click:

```js
let startDate = new Date(
  2020,
  05,
  05,
  startHour.value,
  startMinute.value,
  startSecond.value
);
let endDate = new Date(
  2020,
  05,
  05,
  endHour.value,
  endMinute.value,
  endSecond.value
);
```

We define a random day. We are only using the time settings in this example.

Now let's get the difference between these two times!

```js
let difference = endDate.getTime() - startDate.getTime();
```

The `getTime()` function returns the timestamp, which makes it easier to calculate with

Let's first check if the end date is not in the future:

```js
if (difference < 0) {
  output.innerHTML = 'Wow dude, you just went back to the future! 👽';
} else {
  // Code coming below
  // 👇
}
```

So we are giving the user feedback if they are trying to scam us, the tug! 👀

```js
difference = difference / 1000;
let hourDifference = Math.floor(difference / 3600);
difference -= hourDifference * 3600;
let minuteDifference = Math.floor(difference / 60);
difference -= minuteDifference * 60;
output.innerHTML = `${hourDifference} hours, ${minuteDifference} minutes, ${difference} seconds`;
```

Wow, hold your horses. What's going on here? 🤠

First, we need to divide the difference by 1000. This removes the milliseconds.

Then we say give us the hours past in the difference, 3600 = (60 seconds \* 60 minutes = 1 hour).
We are using Math.floor always to round downwards. We don't want 0.9 hours to become 1.

Next, we need to detract the passed hours from the difference.

We do the same for the minutes, but we only need to divide by 60 since we detracted the hours already.
Then again, we remove whatever minutes passed.

The difference we end up with is the seconds!

Then we use liquid template tags (`${variable}`) to return the result to the user!

Voila! We are now masters of time and the universe 🧙‍♂️!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
