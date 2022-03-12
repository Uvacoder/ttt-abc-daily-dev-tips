---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Number toLocaleString'
metaTitle: 'Number & Currency toLocaleString JS Tutorial [2022]'
metaDesc: 'Today we are exploring the JavaScript Number toLocaleString method by converting numbers into local currencies. See the example in Codepen! '
image: /images/23-05-2020.jpg
date: 2020-05-23T03:00:00.000Z
tags:
  - javascript
---

Yesterday we saw [how to get a month's name](https://daily-dev-tips.com/posts/vanilla-javascript-get-month-name/) using the `toLocalString` function.

This made me wonder what else it could be used for, and as it turns out, we can use it for `Numbers` as well!

So in today's tutorial, we will learn how to use the toLocaleString method on numbers and currencies.

## JavaScript Number toLocaleString function

The syntax for this method is the same as we saw yesterday when converting a date object.

```js
number.toLocaleString('locale', { options });
```

We don't have to pass any arguments in the default way, and we will get the browser's default.

```js
const number = 123456.789;

console.log(number.toLocaleString());
// 123,456.789
```

### Number toLocaleString for different countries

To use different locales for country and language codes, we can pass along the locale parameters as follows:

```js
console.log(number.toLocaleString('nl-NL'));
// 123.456,789
console.log(number.toLocaleString('en-US'));
// 123,456.789
console.log(number.toLocaleString('en-IN'));
// 1,23,456.789
```

### Number.toLocaleString for currencies

The toLocaleString method has a lot of available options.
We want to convert a number to a local **currency** format.

By passing a style of _currency_ with a currency name, we can convert the number in e.g., EUR, USD, or INR.

```js
console.log(
  number.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' })
);
// € 123.456,79
console.log(
  number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
);
// $123,456.79
console.log(
  number.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
);
// ₹1,23,456.79
```

Awesome right?

### Other Options

Other style options we can use with the method are:

- decimal
- percent
- unit (Find all [units here](https://github.com/unicode-org/cldr/blob/master/common/validity/unit.xml))

## View the code examples in this Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="qBOgNKx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Number toLocaleString">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/qBOgNKx">
  Vanilla JavaScript Number toLocaleString</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

This JavaScript method is widely supported. Feel free to use it.

[toLocaleString browser support](https://caniuse.com/#feat=mdn-javascript_builtins_number_tolocalestring)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
