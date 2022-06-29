---
layout: ../../layouts/Post.astro
title: 'HTML Image Map, a multi click image'
metaTitle: 'HTML Image Map, a multi click image'
metaDesc: 'Using the HTML map element'
image: /images/16-06-2020.jpg
date: 2020-06-16T03:00:00.000Z
tags:
  - html
---

Today we will look at an almost rare `HTML` function called `<map>` we use it to make a mapping selection of links for one image.

The downside to this is that there is no real feedback for a specific hover.

## HTML Structure

```html
<img
  width="467px"
  src="https://images.unsplash.com/photo-1491378630646-3440efa57c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  usemap="#image-map"
/>

<map name="image-map">
  <area
    target="_blank"
    alt="Ocean"
    title="Ocean"
    href="#ocean"
    coords="466,428,2,150,3,159,459,421,3,132,209,47,295,100,284,16,101,14"
    shape="rect"
  />
  <area
    target="_blank"
    alt="Sky"
    title="Sky"
    href="#sky"
    coords="467,152,1,-1"
    shape="rect"
  />
  <area
    target="_blank"
    alt="Sand"
    title="Sand"
    href="#sand"
    coords="1,699,465,700,467,446,165,440,139,416,109,413,64,440,2,450"
    shape="poly"
  />
</map>
```

As you can see, we define an image as usual, but give it the attribute `usemap="#image-map"` this tells the image it needs to overlap with the map we will make below.

The map is called `image-map` and has three areas. We defined two rectangles for the Sky and the Ocean and a Polygon for the sand because it was a triangle touching the water.

I've used the following website to generate this map: [image-map](https://www.image-map.net/).

So if you now hover/click, you will see three separate links for the one image.

Cool right?! But as mentioned, it doesn't give proper feedback that they're three separate links, so UX wise debatable if it's the best solution. There are some [`JavaScript` solutions](https://stackoverflow.com/questions/8343531/is-it-possible-to-style-a-mouseover-on-an-image-map-using-css/42110914) for styling.

> See this alternative way of making a [multi clickable image](https://daily-dev-tips.com/posts/html-clickable-image-alternative/) with positioned elements.

Feel free to have a look at this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="OJMRJKO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML Image Map">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJMRJKO">
  HTML Image Map</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

Supported by most modern browsers, there are `JavaScript` solutions to make this work in more browsers.

[View on CanIUse](https://caniuse.com/#feat=mdn-api_htmlmapelement)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
