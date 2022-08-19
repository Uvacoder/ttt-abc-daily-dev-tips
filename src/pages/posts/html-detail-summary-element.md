---
layout: ../../layouts/Post.astro
title: 'HTML Detail Summary element'
metaTitle: 'HTML Detail Summary element'
metaDesc: 'Make accordion like elements with no JavaScript!'
image: /images/05-03-2021.jpg
date: 2021-03-05T03:00:00.000Z
tags:
  - html
---

Today we will look at a native HTML element that can be used to create expandable elements.

It's the detail-summary combination, and the result will look like this.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="abBYLrr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="abBYLrr">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/abBYLrr">
  abBYLrr</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## HTML Detail summary

To add this functionality, we can enter a `details` element inside it with a `summary` which will act as the title; below that, a `p` will be the collapsable content.

It will look like this:

```html
<details>
  <summary>How old is Dragonball Z?</summary>
  <p>
    Dragon Ball Z is adapted from the final 324 chapters of the manga series,
    which were published in Weekly Shōnen Jump from 1988 to 1995. It premiered
    in Japan on Fuji Television on April 26, 1989
  </p>
</details>
```

You can have multiple details on one page, and they are even styleable!

```css
details {
  width: 200px;
  margin-bottom: 1rem;
  border: 1px solid #efefef;
  padding: 0.5rem;
}
summary {
  color: #333;
  font-weight: bold;
}
```

And that's it. We created a fantastic accordion-like element with no JavaScript involved!

## Browser support

The cool part about the detail and summary combi is that it has good support!
It's just IE not playing along.

![HTML detail summary browser support](https://caniuse.bitsofco.de/image/details.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
