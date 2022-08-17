---
layout: ../../layouts/Post.astro
title: 'Creating a 3D dice in CSS'
metaTitle: 'Creating a 3D dice in CSS'
metaDesc: 'A first look at 3D CSS - a dice'
ogImage: /images/27-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/3a87d5e9-04ea-4891-a881-526d1d311b00
date: 2022-07-27T03:00:00.000Z
tags:
  - css
---

I'm finally going to touch on a subject I've been putting off for way too long in this article.

3D in CSS!

Yes, 3D, and what better example of trying and making a 3D dice in CSS.

The result of this article will be this rotating dice.
(Code and demo at the bottom)

<!-- ![Creating a 3D dice in CSS](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/psw1xgib1jhb1dgmfljh.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1658065302/dice_j75yuj.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1658065302/dice_xlxuct.mp4" type="video/mp4" />
</video>

## Setting up the HTML

Let's start with the HTML. We need a dice container and six sides to it.

```html
<div class="dice">
  <div class="side one"></div>
  <div class="side two"></div>
  <div class="side three"></div>
  <div class="side four"></div>
  <div class="side five"></div>
  <div class="side six"></div>
</div>
```

That will be all for our HTML part. Let's quickly move on to the fun part, which will be the CSS.

## Basic styling

Let's start with some basic styling.

First, I ensured the dice element was in the middle of the page since it's easier to work with.

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

Then I moved on to arranging the dice to be a big square box.

```css
.dice {
  position: relative;
  width: 200px;
  height: 200px;
}
```

Then each side is another wrapper that centers all its children (the dots).

```css
.side {
  width: 100%;
  height: 100%;
  background: #da0060;
  border: 2px solid black;
  position: absolute;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

By now, you should see something that looks like this:

![Dice wireframe setup](https://cdn.hashnode.com/res/hashnode/image/upload/v1658063627583/JNIjkXEo5.png)

It might not look like much, but trust me, there are six sides!

## Creating dice dots in CSS

I will start by explaining how I achieved the dots since this is quite an excellent technique.

I didn't want to use a lot of extra divs, so each option only consists of one pseudo selector.

And it starts with the #1 side.

```css
.side {
  &:before {
    content: '';
    width: 20%;
    height: 20%;
    background: black;
    border-radius: 50%;
  }
}
```

![One dot on the dice in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1658063702389/HXgY13QbF.png)

I can hear you think, but what about the others?

And there is a very cool trick for that! We can leverage the box-shadow rule for it.

And if we think about it, there are only seven positions a dot can have.
We already have one, so let's look at the other six.

```css
&:before {
  content: '';
  width: 20%;
  height: 20%;
  background: black;
  border-radius: 50%;
  box-shadow: red -50px -50px 0px 0px, blue -50px 0px 0px 0px,
    yellow -50px 50px 0px 0px, green 50px -50px 0px 0px, orange 50px 0px 0px 0px,
    white 50px 50px 0px 0px;
}
```

I used random colors in the example above so you can see which position is which dot.

![All possible dots in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1658064035550/my5y_zTKY.png)

> Note: The black dot is our initial dot.

Now let's go ahead and create all possible dot variants.

For the #2 side, we don't need the initial dot so that we can turn off the background.

```css
.two {
  &:before {
    background: transparent;
    box-shadow: #000 -50px -50px 0px 0px, #000 50px 50px 0px 0px;
  }
}
```

For number three we can use a similar approach, but not hide the background:

```css
.three {
  &:before {
    box-shadow: #000 -50px 50px 0px 0px, #000 50px -50px 0px 0px;
  }
}
```

Then for the fourth one:

```css
.four {
  &:before {
    background: transparent;
    box-shadow: #000 -50px 50px 0px 0px, #000 -50px -50px 0px 0px,
      #000 50px 50px 0px 0px, #000 50px -50px 0px 0px;
  }
}
```

And on to number five:

```css
.five {
  &:before {
    box-shadow: #000 -50px -50px 0px 0px, #000 -50px 50px 0px 0px,
      #000 50px -50px 0px 0px, #000 50px 50px 0px 0px;
  }
}
```

And last but not least, number six, which we used as our template.

```css
.six {
  &:before {
    background: transparent;
    box-shadow: #000 -50px -50px 0px 0px, #000 -50px 0px 0px 0px,
      #000 -50px 50px 0px 0px, #000 50px -50px 0px 0px, #000 50px 0px 0px 0px, #000
        50px 50px 0px 0px;
  }
}
```

Our result will look weird since our transparent layers sit on each other.

![Dice dots in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1658064303309/TIxKTevZ0.png)

## Arranging a dice in 3D CSS

Now that we have all our elements in place let's start the fun and apply our 3D effect!

We can achieve a 3D perspective in CSS by using transforms. We have three axes to play with: the X, Y, and Z axes.

First, let's put our cube in perspective.

```css
.dice {
  transform-style: preserve-3d;
  transform: rotateY(185deg) rotateX(150deg) rotateZ(315deg);
}
```

Now, it might look a bit weird if we look at what we got.

![3D effect in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1658064463658/ihnZdrEbg.png)

This is already 3D, but it doesn't look like a cube yet. We need to modify each side to do its transformation.

Let's start with side one.

```css
.one {
  transform: translateZ(100px);
}
```

This will lift the side, so it sticks out at the top.

![3D CSS cube lifting one side](https://cdn.hashnode.com/res/hashnode/image/upload/v1658064594816/aVUwrf89R.png)

You might already be able to see where this is going.
Now let's do the opposite end, which is side number six.

We will offset that to a negative 100px. This means the distance between one and six is now 200px (our cube size).

```css
.six {
  transform: translateZ(-100px);
}
```

![CSS Dice two sides offset](https://cdn.hashnode.com/res/hashnode/image/upload/v1658064691516/7Rfe4X_YF.png)

Now let's do the number two side. This one needs to be connected by transforming a different axis.

```css
.two {
  transform: translateX(-100px) rotateY(-90deg);
}
```

![Side number two CSS dice](https://cdn.hashnode.com/res/hashnode/image/upload/v1658064784160/qHXs28O9G.png)

Now the easiest one to connect is the opposite, side number five.

```css
.five {
  transform: translateX(100px) rotateY(90deg);
}
```

As you can see, it's the same transformation, but we offset it by 200 pixels.

![Side number 5 CSS dice](https://cdn.hashnode.com/res/hashnode/image/upload/v1658064867945/aY9rKl33M.png)

Two more sides left. Let's do number three.

```css
.three {
  transform: translateY(100px) rotateX(90deg);
}
```

As you can see, it's the opposite transformation from two to five.

![Side number three](https://cdn.hashnode.com/res/hashnode/image/upload/v1658064949457/I2S2zUbqR.png)

The last one we need is number four, which will be the opposite of number three.

```css
.four {
  transform: translateY(-100px) rotateX(90deg);
}
```

With this one in place, our dice are complete!

![3D Dice made in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1658065091892/FFN0EvBj8A.png)

## Animating the dice

Now that we have our dice let's make it a bit more interactive by animating it!

Each of the sides we described can also be animated, I'll only be turning the dice on one side, but you can have a play around with any of them to achieve a different animation.

```css
@keyframes rotate {
  from {
    transform: rotateY(0) rotateX(45deg) rotateZ(45deg);
  }
  to {
    transform: rotateY(360deg) rotateX(45deg) rotateZ(45deg);
  }
}

.dice {
  animation: rotate 5s linear infinite;
}
```

You can find the completed example in this CodePen.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="poLRpbQ" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/poLRpbQ">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
