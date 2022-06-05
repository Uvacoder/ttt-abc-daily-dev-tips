---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Comparison Operators'
metaTitle: 'Vanilla JavaScript Comparison Operators'
metaDesc: 'Lets dive into all the possible operators in JavaScript'
image: /images/09-06-2020.jpg
date: 2020-06-09T03:00:00.000Z
tags:
  - javascript
---

Yesterday we looked at the difference between the [== and ===](https://daily-dev-tips.com/posts/vanilla-javascript-==-vs-===/) comparison operator. These are used to compare two values or objects. But there are more comparison operators in `JavaScript` we can leverage.

## JavaScript Comparison Operators

Within `JavaScript`, we can leverage the following comparison operators. I've written down a table below to have a quick reference.

| Operator | Description              | Comparing                     | Return                |
| -------- | ------------------------ | ----------------------------- | --------------------- |
| `==`       | Equal to                 | `x == 10`<br />`x == 3`<br />`x == "3"` | false<br />true<br />true |
| `===`      | Equal value and type     | `x === 3`<br />`x === "3"`         | true<br />false         |
| `!=`       | Not equal                | `x != 10`<br />`x != "3"`           | true<br />false         |
| `!==`      | Not equal value and type | `x !== "3"`<br />`x !== 3`          | true<br />false         |
| `>`        | Bigger than              | `x > 2`                         | true                  |
| `<`        | Smaller than             | `x < 4`                         | true                  |
| `>=`       | Bigger than or equal     | `x >= 3`                        | true                  |
| `<=`       | Smaller than or equal    | `x <= 3`                        | true                  |

The [== and ===](https://daily-dev-tips.com/posts/vanilla-javascript-==-vs-===/) we discussed in detail yesterday.

### JavaScript != and !== Comparison

As you can guess, these are very similar to the == and === but the ! Means `not` in most programming languages.
So these will compare if the value is NOT what we compare it to.
And the !== will even check for the correct type.

```js
x = 3;

<!-- != comparison -->
console.log(x != 10) // true
console.log(x != "3") // false

<!-- !== comparison -->
console.log(x !== "3") // true
console.log(x !== 3) // false
```

As you can see in the second example it will think the string number three is wrong.

### JavaScript Smaller and Bigger Than Comparison

The next ones are all in regards to smaller than or bigger than:

```js
<!-- > comparison -->
console.log(x > 2) // true

<!-- < comparison -->
console.log(x < 4) // true

<!-- >= comparison -->
console.log(x >= 3) // true

<!-- <= comparison -->
console.log(x <= 3) // true
```

So note `>` is just for bigger than and `>=` also includes the actual number itself.
Same goes for `<` and `<=`.

Feel free to explore the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="JjGYoqz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Comparison Operators">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/JjGYoqz">
  Vanilla JavaScript Comparison Operators</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
