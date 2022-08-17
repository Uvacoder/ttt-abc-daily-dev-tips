---
layout: ../../layouts/Post.astro
title: 'CSS Shapes - Other shapes'
metaTitle: 'CSS Shapes - Other shapes'
metaDesc: 'Learning how to make some other shapes in CSS'
image: /images/25-03-2021.jpg
date: 2021-03-25T03:00:00.000Z
tags:
  - css
---

So far we have gone through some [basic CSS shapes](https://daily-dev-tips.com/posts/css-shapes-the-basics/), and [triangles in CSS](https://daily-dev-tips.com/posts/css-shapes-triangles/).
Today we'll be focussing on some cool other shapes.

The shapes that will be covered in this article are the following:

- [Trapezoid in CSS](#heading-trapezoid-in-css)
- [Parallelogram in CSS](#heading-parallelogram-in-css)
- [Hexagon in CSS](#heading-hexagon-in-css)
- [Egg in CSS](#heading-egg-in-css)

## Trapezoid in CSS

The first shape we'll be looking at today is the Trapezoid. It's basically a warped rectangle.
And we can actually create this by leveraging the borders as we've seen with the [CSS Triangles](https://daily-dev-tips.com/posts/css-shapes-triangles/).

```css
.trapezoid {
  border-bottom: 100px solid #3e92cc;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
  width: 150px;
}
```

That will give us the following result:

![Trapezoid shape in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1616308976169/fLXH6Cdxu.png)

## Parallelogram in CSS

Now onto the parallelogram, which is another rectangle but skewed a specific way, and that's exactly how to create this shape.

```css
.parallelogram {
  width: 200px;
  height: 100px;
  transform: skew(20deg);
  background: #3e92cc;
}
```

With that, we get the following result.

![Parallelogram in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1616309099016/VvUmvkfrD.png)

## Hexagon in CSS

Another cool shape we can create is the hexagon. A six-pointed element, and although it sounds easy, it has quite the challenge to it.

For our example, we use a rectangle and use CSS pseudo-elements to add the top and bottom triangles to it.

```css
.hexagon {
  width: 90px;
  height: 50px;
  background: #3e92cc;
  position: relative;
}
.hexagon::before {
  content: '';
  position: absolute;
  top: -25px;
  border-left: 45px solid transparent;
  border-right: 45px solid transparent;
  border-bottom: 25px solid #3e92cc;
}
.hexagon::after {
  content: '';
  position: absolute;
  bottom: -25px;
  border-left: 45px solid transparent;
  border-right: 45px solid transparent;
  border-top: 25px solid #3e92cc;
}
```

And that will give us this result:

![Hexagon shape in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1616309419032/E3iPb1QY9.png)

## Egg in CSS

And for one of my favorites, the egg!
It's quite simple to create as we use the ellipsis but adjust it a bit.

```css
.egg {
  display: block;
  width: 100px;
  height: 130px;
  background-color: #3e92cc;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
```

And we get this cool-looking egg.

![Egg shape in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1616309541948/0S66OX74_.png)

## Demonstration of CSS Shapes

As usual, you can try these shapes on the following Codepen, try to make some adjustments, and see what happens.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="MWbNqRd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Shapes - Other shapes">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/MWbNqRd">
  CSS Shapes - Other shapes</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
