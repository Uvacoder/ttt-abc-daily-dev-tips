---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript String to Number'
metaTitle: 'Vanilla JavaScript String to Number'
metaDesc: 'Three different ways to convert a String into a number'
image: /images/04-08-2020.jpg
date: 2020-08-04T03:00:00.000Z
tags:
  - javascript
---

Sometimes we want to convert a number to a string; in my latest code piece, a limit was set on a data attribute. This comes true as a string, so how do we convert this to a number in `JavaScript`?

In this case, there are not one but three valid and supported methods of converting our string to a number.

- Number
- parseInt
- parseFloat

## JavaScript Number Method

Number is a generic way of converting. It's the stricter check. Here are some examples with outputs:

```js
<!-- Number -->
console.log(Number(`1337`)); // 1337
console.log(Number(`13.37`)); // 13.37
console.log(Number(`13leet37`)); // NaN
console.log(Number(`13,37`)); // NaN
```

As you can see, it works on actual numbers, but as soon as we use other characters or a comma, it won't work.

## JavaScript ParseInt Method

ParseInt converts our string into an integer non-rounded.
It has two arguments, the input and the `radix`, which is the base number. For us, the default is 10

```js
<!-- ParseInt -->
const text1 = '1337';
const text2 = '13.37';
const text3 = '13leet37';
const text4 = '13,37';
console.log(parseInt(text1, 10)); // 1337
console.log(parseInt(text2, 10)); // 13
console.log(parseInt(text3, 10)); // 13
console.log(parseInt(text4, 10)); // 13
```

The downside can be it's rounding everything, so let's look at ParseFloat.

## JavaScript ParseFloat Method

As mentioned, the parseFloat is used to return stuff with decimals.

```js
<!-- ParseFloat -->
const text1 = '1337';
const text2 = '13.37';
const text3 = '13.3leet37';
const text4 = '13,37';
console.log(parseFloat(text1, 10)); // 13.37
console.log(parseFloat(text2, 10)); // 13
console.log(parseFloat(text3, 10)); // 13.3
console.log(parseFloat(text4, 10)); // 13
```

Very cool method!

See all these in action on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="gOrYWWp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript String to Number">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOrYWWp">
  Vanilla JavaScript String to Number</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
