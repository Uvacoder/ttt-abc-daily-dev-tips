---
layout: ../../layouts/Post.astro
title: 'CSS Logos: React logo'
metaTitle: 'CSS Logos: React logo'
metaDesc: 'Creating the React atom logo with only one div in CSS'
image: /images/26-03-2022.jpg
date: 2022-03-26T03:00:00.000Z
tags:
  - css
  - css-logos
---

I'm sure you have seen the React (atom-like) logo before, but as a reminder, this is what it looks like:

![React Logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png)

## Analysing the logo

The logo consists of three ellipses that form around a ball.

I want to challenge myself and try to create this as a single div artwork.

We should be able to use the `before` and `after` pseudo-elements to create two of the lines.
Then the main div can hold the dot and the third line.

Since this is a little bit simpler, we'll also animate the logo, so you get to experience CSS animations.

## Recreating the React logo in CSS

Let's get started and create the single div element.

```html
<div class="react"></div>
```

Let's also look into an excellent concept in processed CSS called `@extend` I'll be using [`SCSS`](https://daily-dev-tips.com/posts/scss-introduction/) as we have a lot of recurring elements that we can quickly share between selectors.

> Note: You can still use CSS, copy-paste the main element instead of using `@extend`

We'll start by creating the orbit class.

```css
.orbit {
  height: 6.25rem;
  width: 20rem;
  border-radius: 50%;
  border: 0.625rem solid #61dafb;
}
```

This code is not used anywhere now.
But we can quickly add all these classes to our main div element like this.

```css
.react {
  @extend .orbit;
}
```

At this point, we have the primary orbit in place.

![Main orbit ring](https://cdn.hashnode.com/res/hashnode/image/upload/v1647491630618/EPYKnxryi.png)

Before we add the other two orbit rings, let's first look at how we can add the dot in the center.
This will have to be a background on this main element.

But we don't want to fill the whole thing.
And we can leverage a radial gradient for this!

We saw a similar concept in the [Dev.to logo](https://daily-dev-tips.com/posts/css-logos-dev-logo/) where we had hard stops.
By using transparent stops, we can set the center color.

```css
.react {
  @extend .orbit;
  background: radial-gradient(circle, #61dafb 15%, transparent 15%);
}
```

As you can see, we start the gradient set to a circle at 15%, which will fill with the React blue.
And then, we transition to transparent from 15% onwards.

![Atom + ring in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1647491908289/HkD_2FIXc.png)

And now, let's add the other two orbit rings.
We'll use the [`before` and `after` pseudo elements](https://daily-dev-tips.com/posts/css-pseudo-elements/).

```css
.react {
  // Other classes
  position: relative;
  &:before,
  &:after {
    content: '';
    @extend .orbit;
    position: absolute;
    left: -0.625rem;
    top: -0.625rem;
  }
}
```

The main thing to note here, is that we extend the orbit again for the before and after.
Then we offset it by `-0.625rem`, which reflects the border width of the orbit.

And then, we can rotate each element a bit differently.

```css
&:before {
  transform: rotate(60deg);
}
&:after {
  transform: rotate(120deg);
}
```

By now, we have our react logo as intended.

![Full React logo in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1647492266631/rH6yDfWyJ.png)

The last thing we wanted to add was the animation. The original logo can rotate around the orb.

Let's add a rotate animation to the main element.

```css
.react {
  animation: rotate 15s infinite linear;
}
```

Some elements to note here:

- `rotate`: This is the name of the animation we'll create in a second
- `15s`: How long each animation will take, 15 seconds in this case
- `infinite`: how often the animation runs (forever)
- `linear`: the type of animation, we want it to be equal over time, but you can also use `ease-in`.

The animation itself (named `rotate`) we can add like this:

```css
@keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}
```

We say, animate `to` rotate exactly one turn (which equals 360 degrees).

And there you go, a one-div CSS React logo that animates.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="VwyvOWy" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/VwyvOWy">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
