---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript palindrome checker in 3 lines'
metaTitle: 'Vanilla JavaScript palindrome checker in 3 lines'
metaDesc: 'Lets see how we can make a super easy palindrome checker in JavaScript'
image: /images/10-10-2020.jpg
date: 2020-10-10T03:00:00.000Z
tags:
  - javascript
---

There comes a time in your life when you need a palindrome checker!

You might now think, what is a palindrome?

It's a word or sentence like `mom` that you can reverse, and it's still `mom`!

If that time comes, think about this article and how to check for palindromes in `JavaScript`.

We will be building this fantastic palindrome function. Try it out on my Codepen. (See console logs!)

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js" data-user="rebelchris" data-slug-hash="KKzONQO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript palindrome checker in 3 lines">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/KKzONQO">
  Vanilla JavaScript palindrome checker in 3 lines</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## JavaScript palindrome function

To create our function we define a function that accepts one argument, a string.

```js
function palindrome(string) {
  // Code here
}
```

Then we need to convert our input string to lowercase and remove all whitespace.

```js
const original = string.replace(/\s/g, '').toLowerCase();
```

We are using a [regular expression](https://daily-dev-tips.com/posts/vanilla-javascript-replace-all-whitespaces/) to remove all whitespaces.

The next step is to get the reverse of our string.
We split every character, reverse the array, and rejoin that array in reversed order.

```js
const reverse = original.split('').reverse().join('');
```

The last step is to check if they are equal.

```js
return original === reverse;
```

The whole function will look like this.

```js
function palindrome(string) {
  const original = string.replace(/\s/g, '').toLowerCase();
  const reverse = original.split('').reverse().join('');
  return original === reverse;
}
```

Awesome, let's see how it works in action.

```js
console.log(palindrome('Mom')); // True
console.log(palindrome('A nut for a jar of tuna')); // True
console.log(palindrome('Not a palindrome')); // False
console.log(palindrome('Taco cat')); // True
console.log(palindrome('Yo banana boy')); // True
```

Great stuff, we now have a palindrome checker in JavaScript!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
