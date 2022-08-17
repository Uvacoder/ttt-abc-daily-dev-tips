---
layout: ../../layouts/Post.astro
title: 'CSS Logos: Scalable Apple Photos logo'
metaTitle: 'CSS Logos: Scalable Apple Photos logo'
metaDesc: 'Recreating the Apple Photos app logo in CSS'
ogImage: /images/15-06-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/9eb827bb-5a87-4ee9-ae1c-50ebc5705700
date: 2022-06-15T03:00:00.000Z
tags:
  - css
  - css-logos
---

It's been a while since I posted in the CSS Logos series, but I finally found some new inspiration.

In today's article, we'll recreate the apple photos logo and make it scalable!

New to CSS design, no problem. You can follow along in this tutorial as we'll go through the whole process.

> Note: Throughout this article, I will use `SCSS` because it makes loops and variables easier!

## Analysing the logo

Let's first look at how the logo looks and see what we'll need from that.

![Apple Photos logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1654415686900/oGpADdQq9.png)

The logo consists of either petal that makes it look like a flow, they are positioned from the center, and each has its color and amount of rotation.

Knowing this, let's set up our HTML as we need a container and eight-petal elements inside.

```html
<div class="container">
  <span class="petal"></span>
  <span class="petal"></span>
  <span class="petal"></span>
  <span class="petal"></span>
  <span class="petal"></span>
  <span class="petal"></span>
  <span class="petal"></span>
  <span class="petal"></span>
</div>
```

Now let's add the variables we need.
As mentioned, we will make the logo scalable to let's define a root start size [CSS variable](https://daily-dev-tips.com/posts/how-to-use-css-vars/).

```css
:root {
  --size: 15rem;
}
```

Then for our main HTML, we set everything to the center and chose a more awesome font.

```css
html {
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: grid;
  place-items: center;
  min-height: 100vh;
}
```

And our container div will receive this initial size and some additional styling.

```css
.container {
  width: var(--size);
  height: var(--size);
  background: #fff;
  border-radius: 16.667%;
  display: grid;
  place-items: center;
  position: relative;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-in-out;
}
```

Now it's time to start working on our petals. We set the basic width and height. Let's use percentage so it will support being scalable later on.

```css
.petal {
  height: 37.5%;
  width: 22.5%;
  border-radius: 50% / 30%;
  position: absolute;
  top: 10%;
}
```

Now all the petals are sitting on top of each other.
We first want to address the transform-origin, as we want them to transform from the center out.

```css
.petal {
  transform-origin: center 105%;
}
```

A little side note on the calculations we did above.

We have two petals sitting on top of each other (top to bottom) which calculates 2x37.5% (height), which comes down to 75%, then we add 105% in the center so we can add the 5% once.
This leaves 20% for the top and bottom, so we have a perfectly aligned element by setting the top to 10%.

Then we also want to create a loop to set some variables for each petal.
For this, I'll use an SCSS loop.

```css
$bg: #faaa31, #f6e422, #b9d753, #6cbeb0, #79addc, #a48dc1, #d388b1, #f37a5d;

@for $i from 1 through 8 {
  .petal:nth-child(#{$i}) {
    --n: #{$i};
    --bg: #{nth($bg, $i)};
  }
}
```

With this code, we define a variable with all possible backgrounds, then loop eight times (each petal) and address the nth-child with the number of the loop.

We then set the number and the background variable.
You might have spotted the `#{}` syntax. This means interpolation and tells SCSS to use a variable calculation.

Now all of our eight petals will have the number and background color.

Let's add the background and rotation to the petals.

```css
.petal {
  transform: rotate(calc((var(--n) - 1) * 45deg));
  background: var(--bg);
}
```

For the rotation, we use a CSS calculation that does the number of the petals times 45 degrees.

At this point, our petals should look pretty good but have a solid color.

![Petal colors on Apple Photos logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1654416374460/ai7o-7rKw.png)

In the original logo, we can see the colors are transparent, and we can achieve this with one line of CSS.

```css
.petal {
  mix-blend-mode: multiply;
}
```

And with this line, our magic is complete. We got our primary logo in play!

![Apple Photos logo in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1654416630910/loiEF9pqV.png)

## Making the logo scalable

As mentioned at the beginning of this article, we'll make the icon scalable.

And luckily for us, we set it up in a way that makes this super easy.

We only need to change the `:root` size variable we set.

Let's first introduce a slider to our HTML part.

```html
<div class="form-group">
  <label
    >Size
    <input type="range" id="slider" min="5" max="20" value="15" />
  </label>
</div>
```

As you can see, we want to be able to switch between 5 and 20 as the sizes. The default is 15, which we set our value to initially.

Then we need a couple of lines of JavaScript to add an event listener to this element.

```js
const slider = document.getElementById('slider');

slider.addEventListener('input', (e) => {
  // Do something
});
```

You might be wondering, how can we change this root variable?
And the answer is surprisingly simple.

We can select the document element and set the variable with the `setProperty` method.

```js
const slider = document.getElementById('slider');
const root = document.documentElement;

slider.addEventListener('input', (e) => {
  root.style.setProperty('--size', `${e.target.value}rem`);
});
```

Yep, that's it!
Don't believe me? Try it out on this CodePen.

To make it move a little bit smoother, I've added the following class to the container class.

```css
.container {
  transition: all 0.5s ease-in-out;
}
```

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="poaZNLa" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/poaZNLa">
  CSS Logos: Scalable Apple Photos logo</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
