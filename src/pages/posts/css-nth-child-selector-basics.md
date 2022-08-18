---
layout: ../../layouts/Post.astro
title: 'CSS nth-child selector basics'
metaTitle: 'CSS selector nth-child [2022 Guide]'
metaDesc: 'Tutorial for nth-child selectors with examples to get more advanced with CSS selectors.'
image: /images/04-11-2020.jpg
date: 2020-11-04T03:00:00.000Z
tags:
  - css
---

Today we'll be learning some CSS basics. I tend to use **nth-child** CSS selectors in my articles.

But that made me realize I haven't gone over the basics of using nth-child selectors.

Today we will be exploring the options of this powerful **CSS selector** with some examples.

## Nth-child basic selectors

Let's start with some basic nth-child selectors:

We can define which number of an element we want to select.
So let's say we want to select the **third** list element.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>
```

```css
li:nth-child(3) {
  color: green;
}
```

The result is that only the third element is selected for the styles:

![nth-child number selector](https://cdn.hashnode.com/res/hashnode/image/upload/v1603953090173/kNoTwk5wQ.png)

## Odd/Even selector

We can select every **odd** or even element number by using these attributes.

```css
li:nth-child(odd) {
  color: red;
}
```

The result is that only the odd items are selected:

![nth-child odd selector](https://cdn.hashnode.com/res/hashnode/image/upload/v1603953180508/mOfb-Ohpt.png)

```css
li:nth-child(even) {
  color: blue;
}
```

In this example, the selector takes all even HTML elements and applies the styling:

![nth-child even selector](https://cdn.hashnode.com/res/hashnode/image/upload/v1603953276502/dkIvFotzH.png)

## Every x selector

Something cool we can do with the nth-child selector is select _every x element_. So let's say, for example we want every fourth element:

```css
li:nth-child(4n) {
  color: purple;
}
```

Now every 4th child element is selected:

![nth-child every 4th](https://cdn.hashnode.com/res/hashnode/image/upload/v1603953487189/op6o9I7v9.png)

Or if we want to include the **first** item:

```css
li:nth-child(4n + 1) {
  color: purple;
}
```

Result:

![nth-child every 4th from 1](https://cdn.hashnode.com/res/hashnode/image/upload/v1603953546992/KCD9skbbi.png)

We can also start from the **second** element, for instance:

```css
li:nth-child(4n + 2) {
  color: purple;
}
```

Result:

![nth-child every 4th from 2](https://cdn.hashnode.com/res/hashnode/image/upload/v1603953604949/keOd4BGNb.png)

## Select every item but the first x items

We can even use a selector that selects every tag but the first three elements.

```css
li:nth-child(n + 4) {
  color: teal;
}
```

Result:

![nth-child everything but first three](https://cdn.hashnode.com/res/hashnode/image/upload/v1603953815447/vne_7Xk5x.png)

## Select first x number of elements

Another cool thing we can do is select only the first x amount.
Let's get the first three items:

```css
li:nth-child(-n + 3) {
  color: teal;
}
```

Result:

![css nth-child first three](https://cdn.hashnode.com/res/hashnode/image/upload/v1603953716166/xU2rNxDmh.png)

## Select the last element

We can even select the last element.

```css
li:last-child {
  color: orange;
}
```

Result:

![css nth last-child selector](https://cdn.hashnode.com/res/hashnode/image/upload/v1603953907898/17CMTtCwu.png)

We can also offset to get the second to last list item.

```css
li:nth-last-child(2) {
  color: orange;
}
```

Result:

![nth-last-child second to last](https://cdn.hashnode.com/res/hashnode/image/upload/v1603953976867/7uDnaiAf0.png)

## Combining selectors

We can also combine nth-child selectors!

Let's say you want to get every even number from an odd list amount.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>
```

```css
ul:nth-child(odd) li:nth-child(even) {
  color: orange;
}
```

This will get all the odd `ul` and then all the even `li` tags.

Result:

![nth-child double selector](https://cdn.hashnode.com/res/hashnode/image/upload/v1603954160335/8HKRdyewL.png)

### See all examples in this Codepen to try it out

Have a play around with this Codepen. Try and change some selectors to see what happens!

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="wvWyxjw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS nth-child selector basics">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/wvWyxjw">
  CSS nth-child selector basics</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support for nth-child selectors

The nth-child selector has excellent support and can be used in most browsers.
Don't hesitate to make use of them.

![nth-child browser support](https://caniuse.bitsofco.de/static/v1/mdn-css__selectors__nth-child-1603954242177.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
