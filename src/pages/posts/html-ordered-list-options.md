---
layout: ../../layouts/Post.astro
title: 'HTML ordered list options'
metaTitle: 'HTML ordered list options'
metaDesc: 'Did you know the HTML ordered list has many options?'
image: /images/13-03-2021.jpg
date: 2021-03-13T03:00:00.000Z
tags:
  - html
---

I'm sure we all know the ordered list, which can be created by using a `<ol>` (Ordered list) element.

A basic structure looks like this:

```html
<ol>
  <li>Number 1</li>
  <li>Number 2</li>
  <li>Number 3</li>
</ol>
```

And it will return this:

1. Number 1
2. Number 2
3. Number 3

But did you know there's super cool stuff we can do with ordered lists?

## Defining an ordered list type

By default, it will show the numbers as you can see above, but did you know we can specify the type in HTML?

```html
<ol type="I">
  <li>Daily</li>
  <li>Dev</li>
  <li>Tips</li>
</ol>
```

Will return:

I. Daily
II. Dev
III. Tips

We can use the following types:

- `1`: The default numeric list
- `I`: Uppercase roman numbers
- `i`: Lowercase roman numbers
- `A`: Uppercase letters
- `a`: Lowercase letters

## Set the start number for ordered lists

Next up is the start. By default, a list will start on one, but we can manually offset this.

```html
<ol start="5">
  <li>Daily</li>
  <li>Dev</li>
  <li>Tips</li>
</ol>
```

This will render the following. It can be super useful in a list with paragraphs between.

5. Daily
6. Dev
7. Tips

## Reverse an HTML ordered list

Another cool thing we can do with lists is reverse them.
It's just as easy as adding the `reversed` tag.

```html
<ol reversed>
  <li>Daily</li>
  <li>Dev</li>
  <li>Tips</li>
</ol>
```

This will result in the following:

3 Daily
2 Dev
1 Tips

You can try all these out in the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="ExNdVmo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML ordered list options">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ExNdVmo">
  HTML ordered list options</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
