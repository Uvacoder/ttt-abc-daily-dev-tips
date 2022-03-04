---
layout: ../../layouts/Post.astro
title: 'CSS Double Border Radius'
metaTitle: 'CSS Double Border Radius'
metaDesc: 'A deep dive into the border-radius property'
image: /images/05-06-2020.jpg
date: 2020-06-05T03:00:00.000Z
tags:
  - css
---

Yesterday we looked into making [rounded corners](https://daily-dev-tips.com/posts/css-rounded-corners/) on our boxes and even circles with `border-radius`. My good friend svondervoort replied you could use double `border-radius`. And he is right. I even used it in my [Totoro](https://codepen.io/rebelchris/full/rNOWbbK) example.

So why not dive into how you use the double `border-radius` syntax.

## HTML Structure

As for the `HTML` let's keep it simple and use one big box.

```html
<div class="box rounded"></div>
```

Then let's dive into the syntax, it basically accepts two times the code split with a slash.

```css
.rounded {
  border-radius: 40% 40% 30% 30% / 60% 60% 40% 40%;
}
```

We can use percentages and pixels.

It gets quite complicated I find to do these things from the top of your head, but luckily [Adam Kuhn](https://twitter.com/cobra_winfrey) made this awesome playground to ease this.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="cobra_winfrey" data-slug-hash="jpRQbP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Border-Radius Playground">
  <span>See the Pen <a href="https://codepen.io/cobra_winfrey/pen/jpRQbP">
  Border-Radius Playground</a> by Adam Kuhn (<a href="https://codepen.io/cobra_winfrey">@cobra_winfrey</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

You can also view my example on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="PoZwPMq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Double Border Radius">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/PoZwPMq">
  CSS Double Border Radius</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The border-radius is very well supported, and can safely be used.

![border-radius support](https://caniuse.bitsofco.de/image/border-radius.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
