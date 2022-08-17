---
layout: ../../layouts/Post.astro
title: 'A11Y 101: Adding skip links'
metaTitle: 'A11Y 101: Adding skip links'
metaDesc: 'What are skip links and how do we add them'
image: /images/30-05-2022.jpg
date: 2022-05-30T03:00:00.000Z
tags:
  - accessibility
---

While evaluating my website, I realized while using a screen reader. A user has to tab quite a lot to get to the main content part.

This is quite annoying as this can take you forever, and you might even lose users over this behavior.

## What are skip links?

Luckily for us, there is a solution to fix this, called skip links.

These are technically hidden links that sit above navigation areas, so people can quickly skip that section.

To illustrate it could look like this:

```html
<a href="#main-content" class="skip-link">Skip navigation</a>
<nav>
  <a href="#">About</a>
  <a href="#">Contact</a>
  <a href="#">Login</a>
</nav>
<main id="main-content">I'm the main content</main>
<footer>
  <a href="#">Privacy</a>
</footer>
```

This, in general, already works. We can quickly tab and skip the whole navigation section!

## Making skip links better

It's ugly to have this link sit there, so we can make it [visually hidden as we just learned](https://daily-dev-tips.com/posts/a11y-101-hiding-content/).

In our case, we want to be able to show it on focus, so let's move it outside of the view initially.

```css
.skip-link {
  background: #da0060;
  color: #fff;
  left: 50%;
  padding: 8px;
  position: absolute;
  transform: translate(-50%, -200%);
  transition: transform 0.3s;
}
```

With this code, we set the skip links element above the top of our page, so it's not visible to users.

We can add a focus selector to animate it into the screen when a user focuses on it using tab navigation.

```css
.skip-link:focus {
  transform: translate(-50%, 0);
}
```

And when they now tab into this element, it will appear.

I made this super simple demo for you to play with.
Try using your tab navigation and interact with the skip element, then tab again.

You are immediately in the footer, right?
Now try not to click on the skip link, but keep tabbing.
You are now able to visit the menu!

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="NWygvvQ" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWygvvQ">
  Skip links</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
