---
layout: ../../layouts/Post.astro
title: 'CSS Logos: Hashnode logo'
metaTitle: 'CSS Logos: Hashnode logo'
metaDesc: 'Lets recreate some amazing logos by using only CSS: First up Hashnode'
image: /images/22-03-2022.jpg
date: 2022-03-22T03:00:00.000Z
tags:
  - css
  - css-logos
---

I wanted to start this CSS challenge a while ago by recreating some fantastic logos in CSS only.

I'll be starting with Hashnode, as I re-created this recently for the CSS Hashnode challenge.

[See my result of the challenge here](https://daily-dev-tips.pages.dev/posts/hashnode-is-taking-over-the-world/)

## Analysing the logo

While looking at the logo, we can quickly see a rounded square with a hole in it.

![Hashnode logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1647152709324/BgqHEiR8w.png)

This sounds easy enough.
However, one thing will make it a bit more complicated.

This is the fact that making the whole see-through can be pretty tricky.

So let's split this up into two sections, one in which we'll make it with a solid color and one that is see-through.

## CSS Hashnode logo

We first have to start by creating the rounded square that is rotated a bit.

For the HTML, we'll be using one div with the class `hashnode`.

```css
.hashnode {
  width: 5em;
  aspect-ratio: 1;
  border-radius: 1.25em;
  background: #2962ff;
  transform: rotate(45deg);
}
```

Using the aspect ratio, we make sure the logo is square. We also rotate it by 45 degrees, so it has the same position.
At this point, you should have a block looking like this.

![Hashnode outline](https://cdn.hashnode.com/res/hashnode/image/upload/v1647153158198/ocqpgbvWV.png)

Now we can leverage the before element to add the white dot on top of this.

```css
&:before {
  content: '';
  border-radius: 50%;
  background: white;
  height: 2em;
  aspect-ratio: 1;
}
```

And with this, we get a simple round shape. To center the round element, we can add the following two elements to our main wrapper div.

```css
.hashnode {
  display: grid;
  place-items: center;
}
```

And there you go, you should now have the following result:

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="yLpLKPG" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/yLpLKPG">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## CSS see-through Hashnode logo

The main issue with the above solution is that we can't have anything in the background as it would not show through.

So let's try and change that.

The main setup will be the exact same as the above solution:

```css
.hashnode {
  width: 5em;
  aspect-ratio: 1;
  border-radius: 1.25em;
  background: #2962ff;
  transform: rotate(45deg);
}
```

Then we can leverage a mask to mask out the middle section.

```css
-webkit-mask: radial-gradient(#0000 28%, #000 28%);
mask: radial-gradient(#0000 28%, #000 28%);
```

This will mask out the center element, so we can add a background and see what happens.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="MWrWVQL" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/MWrWVQL">
  CSS Logos: Hashnode logo</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

As you can see in the CodePen above, the background shows through the logo, excellent!
The mask option is a powerful tool to mask out parts of your elements.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
