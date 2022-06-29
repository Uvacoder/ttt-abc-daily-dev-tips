---
layout: ../../layouts/Post.astro
title: 'CSS :not selector for negation'
metaTitle: 'CSS not selector (:not) Tutorial 2022 - Daily Dev Tips'
metaDesc: 'Understanding how to not select an element in CSS is crucial. Learn in this Guide how to use the CSS not selector with examples.'
image: /images/30-11-2020.jpg
date: 2020-11-30T03:00:00.000Z
tags:
  - css
---

The CSS :not selector is really cool. We can call it a negation pseudo-class selector.

A mouth-full, but what it does, is it selects elements that do NOT match certain criteria.

The cool part is that it can be used on many types of elements.

- Classes (.nav\_\_item)
- ID's (#my-element)
- Types (div, li, etc)
- Pseudo-classes (:last-child)
- Attributes ([type="radio"])

> Note: It doesn't style CSS pseudo-elements so `::before` won't work nor can't it style itself `(:not(:not(...)))`.

## Example HTML Structure

For this demo we will make a simple list which we will style with CSS and the _not selector_.

```html
<ul>
  <li class="new">Text rule 1</li>
  <li id="not_me">Text rule 2</li>
  <li>Text rule 3</li>
  <li>Text rule 4</li>
  <li>Text rule 5</li>
</ul>
```

## CSS :not selector

### Match any HTML element but the last child:

```css
li:not(:last-child) {
  color: purple;
}
```

This will result in the following styling:

![CSS selector not last-child](https://cdn.hashnode.com/res/hashnode/image/upload/v1606286771853/f07ywuf14.png)

### Match every element but not one ID:

```css
li:not(#not_me) {
  color: red;
}
```

![CSS selector :not #id ](https://cdn.hashnode.com/res/hashnode/image/upload/v1606286835872/Puub6uBfL.png)

### Don't match a class with the negation selector:

```css
li:not(.new) {
  color: blue;
}
```

![CSS :not class](https://cdn.hashnode.com/res/hashnode/image/upload/v1606286877065/NBCP06GVV.png)

I hope these code examples give you a good overview of just how powerful the :not selector in CSS can be for your website.

It might really save you from having some weird CSS classes just to exclude one item from styling.

### View the demo examples in this Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="gOwYXRr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS :not selector">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOwYXRr">
  Not selector in CSS3</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support of the CSS3 selector :not

The :not selector has really good browser support, just some issues on Android and Opera mini (where the later just doesn't support about anything).

![CSS3 :not browser support](https://caniuse.bitsofco.de/static/v1/mdn-css__selectors__not-1606287012854.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
