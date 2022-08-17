---
layout: ../../layouts/Post.astro
title: 'Using min-width Media query for Mobile first design'
metaTitle: 'Using min-width Media query for Mobile first design'
metaDesc: 'Learning media queries and especially the min-width one.'
image: /images/04-05-2021.jpg
date: 2021-05-04T03:00:00.000Z
tags:
  - css
---

This is a guest post written by [Simon Ramsay](http://designkojo.com).
Simon is an amazing frontend developer, be sure to check him out on [Twitter](https://twitter.com/designkojo) as well!

In this article, we will look at media queries for screen and the width feature, in particular min-width, to turn a one-column layout into a two-column layout. We will make this happen at 768px wide, a common width of a tablet device, but you can use any width you like. This point where our layout goes from one column to two columns is called a
breakpoint.

Our setup is two HTML elements, an article and an aside inside the main element. We are using flexbox to make our elements stack as a column. We can use flex-direction: column; to achieve this. We will also add some margin to our items and background color.

Here is our code:

```css
main {
  display: flex;
  flex-direction: column;
}
main > * {
  padding: 5px;
  background-color: #0fadff;
  margin: 10px;
}
```

```html
<main>
  <article>
    <h1>Article</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore
    </p>
  </article>
  <aside>
    <h1>Aside</h1>
    <p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>
  </aside>
</main>
```

Moreover, this is what it looks like.

![Two column layout in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1619698026516/566k6J4KH.png)

For wider screens, we want to have 2 columns. To do this we can add the @media screen media query with a min-width feature with a value of 768px.
This means that the minimum width of this rule effect will be 768px wide, which is any width 768px and over. We will place a new flex-direction rule inside the media query. The media query with the overridden main element looks like this:

```css
media screen and (min-width: 768px) {
  main {
    flex-direction: row;
  }
}
```

![Media queries in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1619698073134/3S2llglK2.png)

To tidy things up a bit we can then add some widths using flex-basis for article and aside of 65% and 35% respectively and we have built our first mobile-first responsive layout.

```css
@media screen and (min-width: 768px) {
  main {
    flex-direction: row;
  }
  main > article {
    flex-basis: 65%;
  }
  main > aside {
    flex-basis: 35%;
  }
}
```

This is what it will look like.

![Altered media query](https://cdn.hashnode.com/res/hashnode/image/upload/v1619698111509/7xtJuYana.png)

So that how you can control the layout of a simple website. Thanks for reading.

![Resizing media query in CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1619697937235/et5NuhVkq.gif)

You can also play around with this demo yourself on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="Bapemmq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Using min-width Media query for Mobile first design">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/Bapemmq">
  Using min-width Media query for Mobile first design</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
