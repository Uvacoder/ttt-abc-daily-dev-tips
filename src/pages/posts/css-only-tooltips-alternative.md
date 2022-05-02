---
layout: ../../layouts/Post.astro
title: 'CSS Only Tooltips Alternative'
metaTitle: 'CSS Only Tooltips Alternative'
metaDesc: 'Alternative way of CSS Tooltips! 🤩'
image: /images/10-08-2020.jpg
date: 2020-08-10T03:00:00.000Z
tags:
  - css
---

We made some [`CSS` only tooltips](https://daily-dev-tips.com/posts/css-only-tooltips/). And the cool part about being a developer is there are always different ways to do it. I got feedback that the data attribute was also an excellent alternative, so I decided to rebuild my ones.

And it is indeed a neet way of doing so. It's a cleaner code, and with this one, we don't have to define a fixed width.

## HTML Structure

The `HTML` Structure only changes slightly from our previous example.

```html
<div class="skills">
  <div class="skills-item" data-tooltip="HTML5">
    <!-- Content -->
  </div>
  <div class="skills-item" data-tooltip="CSS3">
    <!-- Content -->
  </div>
  <div class="skills-item" data-tooltip="JavaScript">
    <!-- Content -->
  </div>
</div>
```

So basically, we removed our span and placed our tooltip content inside the data-tooltip attribute we created.

## CSS Tooltip Alternative

As for our `CSS` we are using the tooltip attribute selector as such:

```css
.skills-item[data-tooltip] {
  position: relative;
}
```

Then we will add our actual tooltip element to the box and set the content to be whatever is in our data-tooltip

```css
.skills-item[data-tooltip]:after {
  transition: opacity 0.3s;
  opacity: 0;
  position: absolute;
  content: attr(data-tooltip);
  bottom: 100%;
  background-color: #555;
  padding: 5px 0;
  border-radius: 6px;
  color: #fff;
  padding: 8px;
  width: auto;
  right: 50%;
  transform: translateX(50%);
}
```

We use the same styling but a slightly different position by offsetting it after placing it to the right.

We also want to have that little arrow at the bottom and leverage the base [pseudo-element](https://daily-dev-tips.com/posts/css-pseudo-elements/).

```css
.skills-item[data-tooltip]:before {
  transition: opacity 0.3s;
  opacity: 0;
  content: '';
  position: absolute;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
  right: 50%;
  transform: translateX(50%);
  margin-top: -10px;
}
```

Awesome!

Now all that's left is showing it once we hover! Remember, we have to show two elements now, the before and after.

```css
.skills-item[data-tooltip]:hover:after {
  opacity: 1;
}
.skills-item[data-tooltip]:hover:before {
  opacity: 1;
}
```

There you go, an alternative way of showing a tooltip.

View this on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="jOqPmrN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Only Tooltips Alternative">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/jOqPmrN">
  CSS Only Tooltips Alternative</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The browser support for this function mainly depends on the attribute selector, and that's pretty well supported!

![Attribute Selector support](https://caniuse.bitsofco.de/static/v1/mdn-css__selectors__attribute-1596989446622.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
