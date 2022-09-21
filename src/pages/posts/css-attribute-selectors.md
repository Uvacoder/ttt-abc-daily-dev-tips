---
layout: ../../layouts/Post.astro
title: 'CSS Attribute Selectors'
metaTitle: 'CSS Attribute Selectors'
metaDesc: 'How many of these CSS Selectors do you know?'
image: /images/20-05-2020.jpg
date: 2020-05-20T03:00:00.000Z
tags:
  - css
---

There are many ways to style objects in' CSS', but there are some great selectors.
Let's find out if you knew about these!

Let me know in the comments how many of them you knew already.

## HTML Structure

```html
<div class="container">
  <a href="">Link #1</a>
  <a href="" target="_blank">Link #2</a>
  <a href="" title="Daily Dev Tips">Link #4</a>
  <a href="" lang="nl">Link #5</a>
  <a href="https://daily-dev-tips.com">Link #5</a>
  <a href="http://download.org/file.pdf">Link #6</a>
  <a href="http://google.com/">Link #6</a>
</div>
```

We are going to be styling links today. They all have their characteristics.

## CSS [attribute="value"] Selector

We can use the `attribute=value` selector to define a specific `attribute` with a particular value.
The first thing that came to mind was using `target="_blank"` to identify outgoing links.

```css
a[target='_blank'] {
  &:before {
    content: '🆕';
  }
}
```

## CSS [attribute~="value"] Selector

The `~ selector` is much like the previous one, but it doesn't have to be a complete hit. It will look for a contained value.
In this example, we target every link whose title `attribute` contains the word `Tips.`

```css
a[title~='Tips'] {
  &:before {
    content: '💡';
  }
}
```

## CSS [attribute|="value"] Selector

The `|=value` selector will get all `attributes` starting with a specific value.

We can use it as follows:

```css
a[lang|='nl'] {
  &:before {
    content: '🇳🇱';
  }
}
```

> with the `| selector`, it has to start with an entire word or be broken by a dash -

## CSS [attribute^="value"] Selector

We can also use the `^=value selector` to get all `attributes` starting with a specific value.

```css
a[href^='https'] {
  &:before {
    content: '🔒';
  }
}
```

## CSS [attribute$="value"] Selector

The `$=value selector` can be used to get all `attributes` ending with a specific substring. This is ideal for selector-specific documents.

```css
a[href$='.pdf'] {
  &:before {
    content: '📑';
  }
}
```

## CSS [attribute*="value"] Selector

With the `*=value` selector, we get all `attributes` containing a specific value.

```css
a[href*='google'] {
  &:before {
    content: '🔍';
  }
}
```

You can see them in action in this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="bGVQgPg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Attribute Selectors">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/bGVQgPg">
  CSS Attribute Selectors</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
