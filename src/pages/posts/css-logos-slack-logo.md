---
layout: ../../layouts/Post.astro
title: 'CSS Logos: Slack logo'
metaTitle: 'CSS Logos: Slack logo'
metaDesc: 'Using CSS Grid to recreate the slack logo in CSS'
image: /images/27-03-2022.jpg
date: 2022-03-27T03:00:00.000Z
tags:
  - css
  - css-logos
---

In this article, I wanted to look at the slack logo, I had this logo in my head for the past couple of days, and this is quite an interesting one as it's one of the views that work well for a grid-based layout.

This is the logo I'm talking about:

![Slack Logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1647545127005/74GQszMw8.png)

## Analysing the logo

As you might have seen, this logo can easily be broken up into squares, where some of the elements span over two of them.

Here is a screenshot of the finished product with the grid active.

![Slack logo in a grid](https://cdn.hashnode.com/res/hashnode/image/upload/v1647546768608/7ja7na-ut.png)

We can set up a grid and use some generic styles to re-use some of the elements' layouts.

Let's get right into it and see how this works.

## Creating the Slack logo in CSS Grid

```css
.slack {
  width: 16rem;
  aspect-ratio: 1;
  display: grid;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
```

This will create the primary grid that we can start filling up with our pieces.

![Empty grid](https://cdn.hashnode.com/res/hashnode/image/upload/v1647545434030/4_wh-ljTU.png)

Let's get started on the top left blue item section first.

In our HTML, we can add the following elements.

```html
<div class="slack">
  <div class="blue small"></div>
  <div class="blue big"></div>
</div>
```

Since every pill is rounded technically, we can add that as one styling element for all divs.

```css
.slack {
  & > div {
    border-radius: 9999px;
  }
}
```

> Note: The above and some code below will be SCSS code

Then we can start positioning our elements on the grid. The simplest one here is the bottom one, as that should span over two columns and sit on the second row.

```css
.blue {
  background: #36c5f0;
  &.big {
    grid-row: 2;
    grid-column: span 2;
  }
}
```

As you can see, we set this element to be on row two and span over two columns.

We can do something similar for the small one, but not round the bottom right corner.

```css
.blue {
  &.small {
    grid-column-start: 2;
    border-bottom-right-radius: 0px;
  }
}
```

So far, we should have the following look:

![Slack top left item](https://cdn.hashnode.com/res/hashnode/image/upload/v1647546232694/ZoWhY2PhS.png)

But, we can quickly see it's too smooshed together, so let's add a gap to our grid.

```css
.slack {
  gap: 0.5rem;
}
```

Now we can add the other three sides and position them accordingly. The main thing that changes is the column/row start and end and which border we turn off.

```html
<div class="slack">
  <div class="blue small"></div>
  <div class="blue big"></div>
  <div class="green small"></div>
  <div class="green big"></div>
  <div class="red small"></div>
  <div class="red big"></div>
  <div class="yellow small"></div>
  <div class="yellow big"></div>
</div>
```

And for the CSS dump, please check this CodePen to see what's happening.

Do note there are multiple correct ways of determining the column/row start and end.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="LYeGOQg" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYeGOQg">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
