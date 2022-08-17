---
layout: ../../layouts/Post.astro
title: 'Creating day-night CSS only toggle switch'
metaTitle: 'Creating day-night CSS only toggle switch'
metaDesc: 'Learn how to create this cute and cool day-night toggle switch in CSS'
image: /images/29-12-2020.jpg
date: 2020-12-29T03:00:00.000Z
tags:
  - css
---

You might remember I recreated this excellent [CSS frosted glass effect](https://daily-dev-tips.com/posts/css-frosted-glass-credit-card/) based on a dribbble shot.

This was pretty cool to do, and I wanted to test some checkbox techniques, so I decided to look for a cool switch effect.

I found this fantastic dribble shot by [Katia De Juan](https://dribbble.com/shots/3220898-Day-Night-toggle-DailyUI-015)

![Day night toggle design](https://cdn.dribbble.com/users/526981/screenshots/3220898/screenflow.gif)

In this article, I'll recreate this in `CSS` and help you understand the elements and code you need to do the same.

The result will look like this:

![CSS only toggle switch checkbox](https://cdn.hashnode.com/res/hashnode/image/upload/v1608751670572/-dau_V2IQ.gif)

## HTML Structure

```html
<input type="checkbox" id="toggle" class="toggle--checkbox" />
<label for="toggle" class="toggle--label">
  <span class="toggle--label-background"></span>
</label>
<div class="background"></div>
```

Yes, that's all the `HTML` we need, weird, right?
We will use a lot of [pseudo-elements](https://daily-dev-tips.com/posts/css-pseudo-elements/) to add the little styling gimmicks.

The basic idea is that we use the label to control the checkbox. The checkbox, in turn, will be hidden.
But its checked state will cause the switch effect.

We did use this effect before in this [CSS Custom checkbox](https://daily-dev-tips.com/posts/css-custom-checkbox/) article.

## CSS only day/night toggle switch

To create our switch, we need to use many pseudo-elements.

But let’s start with the basics.
We need to hide our checkbox. The checkbox is only used to toggle our styling.

> The label will be the one visible and toggling the checkbox

We use ‘display: none’ to hide our checkbox.

```css
.toggle--checkbox {
  display: none;
}
```

Once that is out of the way, let’s use [CSS grid to center everything](https://daily-dev-tips.com/posts/css-grid-most-easy-center-vertical-and-horizontal/) in our body.

```css
body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  position: relative;
}
```

I'm using [CSS variables](https://daily-dev-tips.com/posts/how-to-use-css-vars/) for this tutorial. Just for the colours, here is the variable declaration:

```css
:root {
  /** sunny side **/
  --blue-background: #c2e9f6;
  --blue-border: #72cce3;
  --blue-color: #96dcee;
  --yellow-background: #fffaa8;
  --yellow-border: #f5eb71;
  /** dark side **/
  --indigo-background: #808fc7;
  --indigo-border: #5d6baa;
  --indigo-color: #6b7abb;
  --gray-border: #e8e8ea;
  --gray-dots: #e8e8ea;
  /** general **/
  --white: #fff;
}
```

Then, we should move to the label styling. As you see in the result, this is about twice the size of our sun and moon elements.

We also add a transition so it will animate with ease. In this case, the animation will be the background and border color.

```js
.toggle--label {
  width: 200px;
  height: 100px;
  background: var(--blue-color);
  border-radius: 100px;
  border: 5px solid var(--blue-border);
  display: flex;
  position: relative;
  transition: all 350ms ease-in;
}
```

This code will result in the following.

![CSS Toggle label styling](https://cdn.hashnode.com/res/hashnode/image/upload/v1608751642785/lUNORuLs-.png)

Let’s add our first [pseudo-element](https://daily-dev-tips.com/posts/css-pseudo-elements/): the sun icon.
It is an absolute position element and has a fixed width and height.

```css
.toggle--label:before {
  animation-name: reverse;
  animation-duration: 350ms;
  animation-fill-mode: forwards;
  transition: all 350ms ease-in;
  content: '';
  width: 82px;
  height: 82px;
  border: 5px solid var(--yellow-border);
  top: 4px;
  left: 4px;
  position: absolute;
  border-radius: 82px;
  background: var(--yellow-background);
}
```

> Note: don’t use border-radius: 50% since we want to expand the width of this element.

Now we should see the following result.

![CSS toggle before sun](https://cdn.hashnode.com/res/hashnode/image/upload/v1608751775073/f8Ddvj4pY.png)

We also added a custom animation called reverse. This animation takes 350ms to complete. The fill-mode is set to ‘forwards’, which will stop at the last frame.

This animation is as follows:

```css
@keyframes reverse {
  0% {
    left: 104px;
    width: 82px;
  }
  60% {
    left: 72px;
    width: 112px;
  }
  100% {
    left: 4px;
  }
}
```

We start on our initial value, and then 60% of the time (350ms), we modify the left position and width.
Then from 60-100%, we change the position to 4px.
This gives us a neat grow and move effect.

![CSS Sun animation](https://cdn.hashnode.com/res/hashnode/image/upload/v1608752008882/N7l4LnTZs.gif)

We also see the main background div. It’s used for the full color and is absolutely positioned in our body.

The only thing that will change there is the background color.

```css
.background {
  position: absolute;
  left: 0;
  top: 0;
  background: var(--blue-background);
  z-index: -1;
  width: 100%;
  height: 100%;
  transition: all 250ms ease-in;
}
```

### Adding the cloud detail

You might have also noted the white cloud in the sun switch. We will animate this to transform into the stars, so it’s based on three elements.

The main element is the span background inside the label. This, in turn, has a before and after pseudo-element.

The main span is relatively positioned on the right-hand side. It has a transition that takes 150ms, so it’s faster than our main toggle.

```css
.toggle--label-background {
  width: 10px;
  height: 5px;
  border-radius: 5px;
  position: relative;
  background: var(--white);
  left: 135px;
  top: 45px;
  transition: all 150ms ease-in;
}
```

This alone results in the following:

![CSS Sun cloud](https://cdn.hashnode.com/res/hashnode/image/upload/v1608752141520/UWMMsU1Bg.png)

The before and after are absolute positioned elements resembling the cloud's top and bottom parts.

```css
.toggle--label-background:before {
  content: '';
  position: absolute;
  top: -5px;
  width: 40px;
  height: 5px;
  border-radius: 5px;
  background: var(--white);
  left: -20px;
  transition: all 150ms ease-in;
}
.toggle--label-background:after {
  content: '';
  position: absolute;
  top: 5px;
  width: 40px;
  height: 5px;
  border-radius: 5px;
  background: var(--white);
  left: -10px;
  transition: all 150ms ease-in;
}
```

With those, we get the simplistic-looking cloud.

![CSS cloud on sun toggle](https://cdn.hashnode.com/res/hashnode/image/upload/v1608752195889/Lf-yQXfow.png)

## CSS changing styling based on checked class

Now that we have our default sunny side of the toggle, let’s go ahead and see how to make it switch to the nighttime mode.

There is a cool feature where you can detect a checkbox checked state and then target the next element.

The code works as follows.

```css
.toggle--checkbox:checked + element {
  // Element can be after our checkbox
}
```

Knowing that, we will start with the background.

```css
.toggle--checkbox:checked ~ .background {
  background: var(--indigo-background);
}
```

Now, if we click our label, the background will change.

![CSS Checked class background switch](https://cdn.hashnode.com/res/hashnode/image/upload/v1608752361975/sO3VAlUbx.gif)

So knowing this works, we can go ahead and use this principle for our label.

We only need to change the background and border, so the CSS is as follows.

```css
.toggle--checkbox:checked + .toggle--label {
  background: var(--indigo-color);
  border-color: var(--indigo-border);
}
```

And this results in the following.

![CSS Toggle background](https://cdn.hashnode.com/res/hashnode/image/upload/v1608752425845/a0grcg0p3.png)

Let’s continue and change our sun into a moon. This has the same idea. A change of background and border is enough, but we want to reverse the animation. Hence, we add another custom animation to this one.

```css
.toggle--checkbox:checked + .toggle--label:before {
  background: var(--white);
  border-color: var(--gray-border);
  animation-name: switch;
  animation-duration: 350ms;
  animation-fill-mode: forwards;
}
```

![Sun to moon CSS animation](https://cdn.hashnode.com/res/hashnode/image/upload/v1608752581300/efNCg2WJK.gif)

The animation is the same as the "reverse" one, but from left to right.

```css
@keyframes switch {
  0% {
    left: 4px;
  }
  60% {
    left: 4px;
    width: 112px;
  }
  100% {
    left: 104px;
    width: 82px;
  }
}
```

Then, we need to add another after to show some dimples of the moon.

```css
.toggle--label:after {
  transition-delay: 0ms;
  transition: all 250ms ease-in;
  position: absolute;
  content: '';
  box-shadow: var(--gray-dots) -13px 0 0 2px, var(--gray-dots) -24px 14px 0 -2px;
  left: 143px;
  top: 23px;
  width: 10px;
  height: 10px;
  background: transparent;
  border-radius: 50%;
  opacity: 0;
}
```

This has an opacity of 0, and once it’s checked, we will show it.
You also see we use a box shadow to create this effect.
What this does is create two circles positioned left from the actual element.

Then once we click the CSS will need to change the opacity.

```css
.toggle--checkbox:checked + .toggle--label:after {
  transition-delay: 350ms;
  opacity: 1;
}
```

I think these little dimples make a big difference, wouldn't you agree?

![CSS Moon dimples](https://cdn.hashnode.com/res/hashnode/image/upload/v1608752680249/qNWVA07jf.png)

The last part is that we want to move our cloud and turn it into the three stars.

We move the positions around and make them a bit smaller.

```css
.toggle--checkbox:checked + .toggle--label .toggle--label-background {
  left: 60px;
  width: 5px;
}
.toggle--checkbox:checked + .toggle--label .toggle--label-background:before {
  width: 5px;
  height: 5px;
  top: -25px;
}
.toggle--checkbox:checked + .toggle--label .toggle--label-background:after {
  width: 5px;
  height: 5px;
  left: -30px;
  top: 20px;
}
```

That gives us the following result, have a play on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="jOMGweo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Creating day-night CSS only toggle switch">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/jOMGweo">
  Creating day-night CSS only toggle switch</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
