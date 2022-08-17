---
layout: ../../layouts/Post.astro
title: 'CSS Logos: Nike logo'
metaTitle: 'CSS Logos: Nike logo'
metaDesc: 'Recreating the iconic Nike swoosh in CSS'
ogImage: /images/19-06-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/c1d0c32e-2237-4be8-e9f0-bd686e5a8500
date: 2022-06-19T03:00:00.000Z
tags:
  - css
  - css-logos
---

In today's article, we'll recreate the iconic Nike swoosh logo.

For reference, this is what the logo looks like:

![Nike logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1654751936539/OzrAn279P.png)

## Analysing the logo

The Nike swoosh is quite iconic, and the main thing we see is one big ellipsis, with another one overlapping it.

This is all captured in a box so it won't show the overlap.
To draw this out, this is what I mean.

![Nike swoosh blueprint drawing](https://cdn.hashnode.com/res/hashnode/image/upload/v1654755368076/Jfg5D546j.png)

As we see in the image, the logo has three items.

- `blue box`: The container, the only thing in here, will become visible
- `red element`: This ellipsis shape will be our actual logo
- `yellow element`: This is what we'll use to cut out the excess inside the swoosh.

## CSS Nike logo

To start, we'll only need one div, which makes things easier.

```html
<div class="nike"></div>
```

We want to make this relative to the viewport for the blue box container so our logo will scale.
I'm using a custom [`aspect-ratio`](https://daily-dev-tips.com/posts/css-aspect-ratio-its-finally-here/) to get them off rectangle shape.

```css
.nike {
  position: absolute;
  overflow: hidden;
  width: 50vmin;
  aspect-ratio: 14/5;
  position: relative;
}
```

Then we can start defining the red element, which will become our logo.

We want to make a box that is way bigger than our container.
We'll use the `:before` selector to create this element.

```css
.nike {
  &:before {
    content: '';
    position: absolute;
    background: black;
    width: 37%;
    height: 550%;
    bottom: -134%;
    left: 70.5%;
    border-top-left-radius: 48% 17%;
    border-top-right-radius: 120% 40%;
    transform: rotate(-113deg);
    z-index: 1;
  }
}
```

As you can see, the primary magic here is in the border-radius. We are using the [double border radius](https://daily-dev-tips.com/posts/css-double-border-radius/), which is quite tricky.
And it took me a lot of tweaking to get the shape right.

If you want a more visual tester, I found this fantastic tool.

[Fancy border-radius creator](https://9elements.github.io/fancy-border-radius/)

So far, we have the following in play.

![Nike logo setup in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1654756057420/BnlRBFXzA.png)

This is already looking great.
The last thing we need is to cut out the inner part of the logo.

For this, we'll use the `:after` pseudo-selector.

```css
.nike {
  &:after {
    content: '';
    position: absolute;
    background: white;
    width: 30%;
    height: 400%;
    bottom: -73%;
    left: 64%;
    border-top-left-radius: 64% 14%;
    border-top-right-radius: 125% 46%;
    transform: rotate(-105deg);
    z-index: 2;
  }
}
```

The setup is very similar as we use the double border-radius again and offset the element to the right position.

You can see the final result in this CodePen.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="NWyOwgv" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWyOwgv">
  CSS Logos: Nike logo</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
