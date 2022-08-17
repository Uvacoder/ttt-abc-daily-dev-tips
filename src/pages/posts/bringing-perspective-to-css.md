---
layout: ../../layouts/Post.astro
title: 'Bringing perspective to CSS'
metaTitle: 'Bringing perspective to CSS'
metaDesc: 'Adding perspective to our 3D css dice'
ogImage: /images/07-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/b10d8f57-dafa-4adb-9142-87e32a229500
date: 2022-08-07T03:00:00.000Z
tags:
  - css
---

The other day I started exploring [3D in CSS](https://daily-dev-tips.com/posts/creating-a-3d-dice-in-css/) and began with a dice.
The dice is excellent in 3D. However, it has no perspective, so it's still 2D in 3D.

Let's fix that and bring some perspective to 3D.

If we stop the rotation on the dice and look at it from the front, you can see the overlap, but all sides are equally big.

This is a bit weird, as the back panel should be smaller as it sits more to the back.

![3D cube in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1658988326785/MxPrf0Zy3.png)

## CSS perspective

That's precisely where the perspective style can come into play.

Let's apply the following style to the body tag:

```css
body {
  perspective: 400px;
}
```

![3D css perspective](https://cdn.hashnode.com/res/hashnode/image/upload/v1658988600881/WYX0xpbLM.png)

A crazy difference already, right?

You can play around with the value. The lower you go, the more intense the 3D becomes.

We also get `perspective-origin`, which can define from which angle you are looking at an object.

The default value is `50% 50%`, and we can use values we know from position to set it.

```css
body {
  perspective-origin: left;
}
```

This will set the perspective to the left.

![CSS perspective origin](https://cdn.hashnode.com/res/hashnode/image/upload/v1658988858910/2qTkECSyp.png)

As you can see, this becomes a bit weird, and you can make the perspective a bit bigger to get the correct display.

Playing with perspective can give your 3D css that next-level feeling.

Feel free to play around with the adjusted dice.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="oNqovYr" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/oNqovYr">
  Creating a 3D dice in CSS</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
