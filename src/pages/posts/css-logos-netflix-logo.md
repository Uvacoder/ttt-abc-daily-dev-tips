---
layout: ../../layouts/Post.astro
title: 'CSS Logos: Netflix logo'
metaTitle: 'CSS Logos: Netflix logo'
metaDesc: "Let's recreate the Netflix logo in pure CSS"
image: /images/25-03-2022.jpg
date: 2022-03-25T03:00:00.000Z
tags:
  - css
  - css-logos
---

For today's article, we'll recreate the iconic Netflix logo. While working on this logo, I found it was quite an easy one.

Super fun to try yourself 💖

Let's take a look at the logo.

![Netflix logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1647410910018/spTELtuIz.jpeg)

## Analysing the logo

The logo is built up by three sticks of the same size; however, the middle one casts a shadow and is skewed.

Then at the bottom, it's good to note the logo is a bit rounded off.

My idea is to leverage borders for the two side pillars and pseudo-elements to make the skew stick + the rounded bottom section.

## Recreating the Netflix logo in CSS

Let's create a simple box and set the borders left and right to get started.

```css
.netflix {
  height: 15rem;
  width: 3rem;
  border-left: 3rem solid #e50914;
  border-right: 3rem solid #e50914;
  position: relative;
}
```

It's important to note the `3rem` will be the size for each stick.

So far, we get the following styled element.

![Two sticks styled](https://cdn.hashnode.com/res/hashnode/image/upload/v1647411594061/h7EtXSW0u.png)

Let's add a before element to add the third skew line.
The main idea is that this can be simply the width and height of the box.

```css
&:before {
  display: block;
  content: '';
  width: 100%;
  height: 100%;
  background: #e50914;
  transform: skewX(21.5deg);
  box-shadow: 0 0 30px black;
}
```

We can see we skew the element to fit the edges and add a bit of box-shadow to cast the shadow on the sticks below.

The last thing we need is the bottom rounded effect.
We'll leverage a round box that we offset from the bottom.

```css
&:after {
  content: '';
  width: 15rem;
  height: 2rem;
  background: black;
  border-radius: 50%;
  display: block;
  position: absolute;
  left: -200%;
  top: 98%;
}
```

Which result in the following CodePen.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="NWXGWvd" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWXGWvd">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
