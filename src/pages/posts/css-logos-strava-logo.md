---
layout: ../../layouts/Post.astro
title: 'CSS Logos: Strava logo'
metaTitle: 'CSS Logos: Strava logo'
metaDesc: 'Recreating the Strava two peaks logo in CSS'
ogImage: /images/21-06-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/e9c1ee17-0b92-41f6-2be4-259105f46b00
date: 2022-06-21T03:00:00.000Z
tags:
  - css
  - css-logos
---

While browsing through my apps, I noticed the Strava logo would make a perfect candidate for this CSS logos series.

Strava is an app where you can keep track of your exercise data.  
If you are using it, give me a follow [Chris on Strava](https://www.strava.com/athletes/28967359).

It looks super simple initially, but there are quite a few tricky things to recreating this logo.

For those not familiar with the Strava logo, this is what it looks like:

![Strava logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1654952873734/aCWW9H1li.png)

## Analysing the logo

At first glance, I thought this would be a super simple one and had the idea to do before/after pillars skewed against each other, but the space in between is the tricky part.

Looking at the logo, we see two pyramids, which every two pyramids inside to cut out the shape.

I'll use rotated squares to achieve the pillars, and we'll use a gradient hack to only color one part!

## CSS Strava logo

Let's start by setting up our HTML. Because we need the cutout effect, we'll need two elements for this setup.

```html
<div class="strava">
  <div class="top"></div>
  <div class="bottom"></div>
</div>
```

> Throughout this article, I'll use SCSS for the styling part

Then for the main wrapper, I'll make this dynamic size to the viewport and add some border radius to make it look nice.

```css
.strava {
  position: absolute;
  width: 50vmin;
  aspect-ratio: 1;
  background: var(--bg);
  border-radius: 20px;
}
```

Now comes the fun part, making the first peak. As you might have seen in the image, the triangle is not square. This is what makes it quite tricky.

Let's start with a basic square and rotate it 45 degrees.

```css
.top {
  position: absolute;
  content: '';
  aspect-ratio: 1;
  transform: rotate(45deg);
  width: 64%;
  background: white;
}
```

This will give us a shape like this.

![Rotated square in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1654957148944/LpYnRetb2.png)

You can already start to see the shape.
However, this is still quite squared, and the Strava peak is slimmed down at the bottom part.

If we change the width of our div, we get a weird rotation like the image below. (Not an option)

```css
.top {
  position: absolute;
  content: '';
  width: 40%;
  height: 64%;
  transform: rotate(45deg);
  background: white;
}
```

![Rotated div in CSS (wrong size)](https://cdn.hashnode.com/res/hashnode/image/upload/v1654957321294/_ZkYpltsC.png)

So, what can we do to keep the proportions correct?
We should stick with the square size but rather transform the parent element.

This is a neat trick where we scale down the parent on the horizontal axis.

```css
.top {
  transform: scaleX(0.5);
}
```

This will scale down the x-axis only, so we get our slimmed-down peak.

![Scaled down the peak in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1654957493288/ZYoGMHbc2.png)

You might be wondering how we can now hide the bottom part?
And the answer will blow you away.

Instead of using one solid background, we can choose to only color the top part.

```css
.top:before {
  background: linear-gradient(
    to right bottom,
    white,
    white 50%,
    transparent 50%,
    transparent
  );
}
```

In this image, I colored the transparent values blue to see what's happening.

![CSS linear gradient partial coloring](https://cdn.hashnode.com/res/hashnode/image/upload/v1654957622661/V7dujHnhC.png)

And yep, that's it! Easier than you would think, right?

Now let's add a `:after` element to make the cutout.
We'll add a similar triangle on top with the background color.

```css
.top:after {
  position: absolute;
  content: '';
  width: 26%;
  aspect-ratio: 1;
  transform: rotate(45deg);
  margin-top: 26%;
  background: linear-gradient(
    to right bottom,
    var(--bg),
    var(--bg) 50%,
    transparent 50%,
    transparent
  );
}
```

By now, we should have the top section complete.

![Strava peak in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1654957743572/muB5t92cC.png)

As for the bottom peak, we use the same format but a different linear background (left top, instead of right bottom).

```css
.strava .bottom {
  transform: scaleX(0.54);
  width: 100%;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  margin-left: 8.4%;
  margin-top: -82%;
}
.strava .bottom:before {
  content: '';
  position: absolute;
  aspect-ratio: 1;
  transform: rotate(45deg);
  width: 39%;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.6) 50%,
    transparent 50%,
    transparent
  );
}
.strava .bottom:after {
  content: '';
  position: absolute;
  aspect-ratio: 1;
  transform: rotate(45deg);
  width: 15%;
  background: linear-gradient(
    to left top,
    var(--bg),
    var(--bg) 50%,
    transparent 50%,
    transparent
  );
}
```

You might also have spotted the color is different, and to achieve this, I'm using the `rgba` selector, which stands for (RGB + alpha) where alpha is the transparency.
In my case, I add a white background that has 60% transparency.

The result can be seen in this CodePen.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="MWQzPry" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/MWQzPry">
  CSS Logos: Strava logo</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
