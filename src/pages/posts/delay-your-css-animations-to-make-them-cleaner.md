---
layout: ../../layouts/Post.astro
title: 'Delay your CSS animations to make them cleaner'
metaTitle: 'Delay your CSS animations to make them cleaner'
metaDesc: 'CSS Transition animation can flicker on hover, this is how you can fix that!'
image: /images/18-03-2021.jpg
date: 2021-03-18T03:00:00.000Z
tags:
  - css
---

CSS animations are amazing, I often use them, but recently I learned it's a good practice to add a small delay, so they don't flicker if the user accidentally hovers it.

To demonstrate what I mean by that, check what's happening here:

![CSS flickering animation transition](https://cdn.hashnode.com/res/hashnode/image/upload/v1615724868680/sa82qGP0Z.gif)

Pretty annoying, this one isn't the worse, but it might become super annoying if you add some more transitions.

So how can we fix this?

## Adding a CSS transition-delay

In general, for our above example, we use the following CSS.

```css
button {
  background: #6d597a;
  transition: background 0.2s ease-in-out;
}
button:hover {
  background: #b56576;
}
```

Fair enough, right? It animates the background in 0.2 seconds from our initial color to the new color.

However, this gives us that annoying flickering effect if we hover it too quickly.

The solution is quite simple.
We can add a so-called animation-delay

It comes as the 1st of the timing options:

```css
transition: background 0.2s 0.1s ease-in-out;
```

In my case, the second time parameter (0.1) is the delay.
It adds an `animation-delay: 0.1s`. This is the time our animation won't start working.

![CSS Animation delay fix](https://cdn.hashnode.com/res/hashnode/image/upload/v1615725562493/LZQGlTAlW.gif)

Above, you can see the fix in action.
Pretty cool, right?

Try it out on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="LYbaRvg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Delay your CSS animation to make then cleaner">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYbaRvg">
  Delay your CSS animation to make then cleaner</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
