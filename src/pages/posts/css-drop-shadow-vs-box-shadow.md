---
layout: ../../layouts/Post.astro
title: 'CSS Drop Shadow vs Box Shadow'
metaTitle: 'CSS Drop Shadow vs Box Shadow'
metaDesc: 'Understanding the difference between Box shadow and Drop shadow'
image: /images/20-08-2020.jpg
date: 2020-08-20T03:00:00.000Z
tags:
  - css 
setup: | 
    import StaticTweet from '../../components/StaticTweet.astro'
---

The other day [Josh](https://twitter.com/JoshWComeau) made a super cool tweet about drop-shadow supporting PNG's; I didn't know it supported PNG's, so I decided to give it a go.

<StaticTweet id="1288830824322924544" />

## HTML Structure

For my example we are using my favourite Pokémon "Eevee" and will place our three Eevee png's in a container.

```html
<div class="container">
  <img src="https://i.imgur.com/q3SXJQf.png" />
  <img src="https://i.imgur.com/q3SXJQf.png" class="box-shadow" />
  <img src="https://i.imgur.com/q3SXJQf.png" class="drop-shadow" />
</div>
```

As you can see one is going to be a raw example, one will have a box-shadow and the third will have the drop-shadow.

## CSS Box Shadow

You probably have seen and used the box-shadow before, it's a cool feature and adds a shadow to our "box".

It works like this:

```css
.box-shadow {
  box-shadow: 0px 0px 10px #000;
}
```

It puts a shadow on the image, but on the box of it.

![Box-shadow](https://i.imgur.com/ANAmEZ9.png)

## CSS Drop Shadow

Then there is a [CSS Filter](https://daily-dev-tips.com/posts/building-a-realtime-photoshop/) which is amazing when it comes to contouring a PNG!

```css
.drop-shadow {
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
}
```

![Drop-shadow](https://i.imgur.com/aJYVzi3.png)

This all will result in the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="abNmJwE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Drop Shadow vs Box Shadow">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/abNmJwE">
  CSS Drop Shadow vs Box Shadow</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

As mentioned before, CSS Filters are cool, but not widely supported yet 😩.

There is a [polyfill](https://github.com/Schepp/CSS-Filters-Polyfill), but also limited.

![CSS Filter support](https://caniuse.bitsofco.de/image/css-filters.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
