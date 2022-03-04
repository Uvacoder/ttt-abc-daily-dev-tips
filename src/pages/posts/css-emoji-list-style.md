---
layout: ../../layouts/Post.astro
title: 'CSS list style with Emojis'
metaTitle: 'CSS list style with Emojis as Bullet points [2022]'
metaDesc: 'Learn how to create an HTML list with emojis as bullets using the list-style property. See the example code in the Codepen!'
image: /images/02-11-2020.jpg
date: 2020-11-02T03:00:00.000Z
tags:
  - css
---

As you may have seen throughout my articles, I'm a big fan of **Emojis**.

Today we'll learn how to add Emojis to an HTML list to replace the bullet points with CSS.
I will be using the stable method for this article.
Tomorrow we will explore a newer method of doing the same.

The end result in comparison will be an unordered list with bullets transformed into an **unordered list with emojis** instead of bullets.

### See the code example in this Codepen

Try out the CSS code using this Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="qBNmBEO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Emoji list style">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/qBNmBEO">
  CSS Emoji list style</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## HTML Structure

```html
<div>
  <h1>The big five!</h1>
  <ul>
    <li>Lion</li>
    <li>Leopard</li>
    <li>Rhino</li>
    <li>Elephant</li>
    <li>Buffalo</li>
  </ul>
</div>
<div>
  <h1>The big five!</h1>
  <ul class="styled">
    <li>Lion</li>
    <li>Leopard</li>
    <li>Rhino</li>
    <li>Elephant</li>
    <li>Buffalo</li>
  </ul>
</div>
```

As you can see we create the same HTML list twice. Only the second one has a class `styled`.

Now we want to make the difference between a boring list and a cool **emoji list** in HTML!.

## CSS Emoji list-style

To get the emoji list-style type, we first will remove the actual list styling.

The `list-style: none` will remove the default bullets and then we set the padding and margin to be zero:

```css
.styled {
  list-style: none;
  padding: 0;
  margin: 0;
}
```

The next step is to give the list items some space.

This will give us an indent on the left where we can use the `before` selector to showcase our emoji instead of a bullet.

```css
.styled li {
  padding-left: 1rem;
  text-indent: -0.75rem;
}
```

And the third and final step is to add the Emoji.

We are using the [before selector](https://daily-dev-tips.com/posts/css-pseudo-elements/) to place the content CSS property with an Emoji as the list style content.

```css
.styled li::before {
  content: '🦁 ';
}
```

We can now use the `nth-child` selector with the li elements to replace the other bullets with Emojis:

```css
.styled li:nth-child(2)::before {
  content: '🐆 ';
}
.styled li:nth-child(3)::before {
  content: '🦏 ';
}
.styled li:nth-child(4)::before {
  content: '🐘 ';
}
.styled li:nth-child(5)::before {
  content: '🐃 ';
}
```

That is a way cooler list! So this is how to create a list in HTML with a list-style of Emojis.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
