---
layout: ../../layouts/Post.astro
title: "Public Solving: Let it snow"
metaTitle: "Public Solving: Let it snow"
metaDesc: 'How to create animated snow in CSS'
image: /images/29-12-2021.jpg
date: 2021-12-29T03:00:00.000Z
tags:
  - devadvent
  - css
---
Today the elves asked us to make some snow animations!
This is a pretty exciting task as we have to get out our creative hats.

[You can find the complete puzzle here](https://github.com/devadvent/puzzle-19).

So far I've done some [confetti in CSS](https://daily-dev-tips.com/posts/happy-birthday-confetti-animation/), and an [animated snake](https://daily-dev-tips.com/posts/css-animated-snake/).
Today we can add animated snow to the list.

We are free to make it in any way we want.

My results looks like this:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="gOGRzJq" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOGRzJq">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Thinking about a solution

I'm right away thinking in the lines of the CSS confetti I made, where we repeat 50 divs and use CSS to randomize some elements of every snowflake.

The things I want to randomize:

- Size of the snowflake
- Position left to right on the screen
- Animation speed and delay
- Falling animation

This would be the easiest to use SASS, which isn't mentioned as a no-go, so we'll be implementing that.

For the creation of 50 divs, we could use `pug`, but I inject them through JavaScript.

Let me guide you through this process step by step.

## Making animated snow in JavaScript

First, we need to add our 50 divs into the main container.
This main container already exists and looks like this:

```html
<main class="snow"></main>
```

We can fetch this element in our provided JavaScript file by using the following code.

```js
const snowContainer = document.querySelector('.snow');
```

Then we'll need to create a loop that runs 50 times and adds a new element into this one.

```js
[...Array(50)].forEach((_, i) => {
  const snowFlake = document.createElement('div');
  snowFlake.classList.add('snowflake');
  snowContainer.append(snowFlake);
});
```

This `forEach` hack is a simple way to generate x looped lines.
We then use the `createElement` function to create a new div and add the `snowflake` class.
After which, we add out to our container element.

### Enable SCSS in Vite

Now that we have these 50 divs in the viewport, we need to change the default CSS import to work with SASS files.

Luckily for us, Vite already supports this out of the box. We just need to install the preprocessor.

```bash
npm install -D sass
```

Then we can change our file from `style.css` to `style.scss`.
And modify the import in the `main.js` to look like this:

```js
import './style.scss';
```

Right, we can now leverage the massive powers of SCSS.

### Styling the snowflake elements

There are some elements to our snowflake that never really change.
We can style those in a general fashion.

```css
.snowflake {
  --size: 1vw;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  width: var(--size);
  height: var(--size);
  top: -5vh;
}
```

This sets a basic viewport-based snowflake.
It will start outside of the viewport on the negative top side.

Then we want to create a loop to add our differences to each individual snowflake.

```css
@for $i from 1 through 50 {
  .snowflake:nth-child(#{$i}) {
    --size: #{random(10) * 0.1}vw;
    left: #{random(100)}vw;
    animation: snowfall #{10 + random(10)}s linear infinite;
    animation-delay: -#{random(15)}s;
  }
}
```

Here we loop 50 times, and for each of the snowflake, we set the following:

- Random size: between `0.1vw` and `1vw`.
- The left position 0-100% of the viewport width
- The animation time and a custom delay, so they don't all fall at the same time

The animation looks like this:

```css
@keyframes snowfall {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, 110vh, 0);
  }
}
```

At this point, we get the random flakes falling down, but they fall straight down, so maybe we should add a slight offset to mix things up.

To achieve this, we need a horizontal start and endpoint.
This should be a random number based on a percentage of the viewport's width.
As we don't want the snowflakes to fall across the whole screen.

```css
--horizontal-start: #{random(20) - 10}vw;
--horizontal-end: #{random(20) - 10}vw;
```

And then, we can modify our animation to start and end on these values.

```css
@keyframes snowfall {
  0% {
    transform: translate3d(var(--horizontal-start), 0, 0);
  }
  100% {
    transform: translate3d(var(--horizontal-end), 110vh, 0);
  }
}
```

That's it, my version of CSS-based animated snow ❄️.

I would be delighted to see other people's snow animations, as some are wizards with CSS 👀.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
