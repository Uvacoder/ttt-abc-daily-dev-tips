---
layout: ../../layouts/Post.astro
title: 'Typewriter effect CSS'
metaTitle: 'Typewriter effect CSS'
metaDesc: 'How to make a typewriter CSS effect, making it look as you type some text'
image: /images/29-11-2021.jpg
date: 2021-11-29T03:00:00.000Z
tags:
  - css
---

In this article, we'll be creating a typewriter effect in CSS!
We won't need any JavaScript to achieve this effect, and the result will look like this:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="GRvzjYL" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/GRvzjYL">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Alright, let's get started!

## Setting up the HTML

As for the HTML, we don't need much. We want a paragraph or text element that we can manipulate.

```html
<div>
  <p>Beetlejuice, Beetlejuice, Beetlejuice!</p>
</div>
```

Then let's quickly add some basic styling, so the text is centered:

```css
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
```

And now we can add some basic styling to make the text stand out a bit more.

```css
p {
  font-size: 2rem;
  font-family: 'Courier New';
}
```

By now, it should look something like this:

![Styled typewriter in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1637216446187/DPv1J7y_g.png)

## Adding the blinking type caret

Let's start by adding the blinking type caret at the end.
This type of caret indicates a typewriter effect in most applications; I'll use the one from iAWriter, which is a blue one.

We can achieve this blinking caret by leveraging the right border of the p element.

```css
border-right: 0.15em solid #18bdec;
```

Let's create a blink animation that will run forever to animate this.

```css
animation: blink 1s steps(1) infinite;
```

This blink animation will be super simple as it only needs to change the border-color to be transparent halfway.

```css
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
```

Adding the 1 step in the animation creates the quick blink effect instead of a slow fade.

Resulting in the following:

<!-- ![Caret type effect CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1637217127932/WJ9IrvPaF.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1637217176/type_zbh1cf.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1637217176/type_zzxsj9.mp4" type="video/mp4" />
</video>

## The typing effect

Now it's time for the actual typing effect.

We first want to make the `p` tag have 0 width and not wrap to other lines or show the overflow.

```css
width: 0;
overflow: hidden;
white-space: nowrap;
```

Then we want to add the animation. Since we already have an animation, we can use a `,` to separate the two.

```css
animation: typing 4s steps(38) 1s 1 normal both, blink 1s steps(1) infinite;
```

I used 38 steps as there would be 38 characters in my paragraph.

Let's have a look at how this typing animation should look.

```css
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
```

Yep, that's a simple 0 to 100% width animation.
And it will give us this excellent typewriter effect we are looking for.

You might have to play around with the animation settings to make your animation fit your text and font.

Try playing around with the duration (`4s`) and the steps to make it work best for you.

I hope you enjoyed this article and learned something new.
Do share your creations with me on Twitter! 👀⌨️

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
