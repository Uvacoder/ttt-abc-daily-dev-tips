---
layout: ../../layouts/Post.astro
title: "JavaScript ES6 Sets"
metaTitle: "JavaScript ES6 Sets"
metaDesc: 'Learn how to use JavaScript ES6 Set function!'
image: /images/04-04-2020.jpg
date: 2020-04-04T03:00:00.000Z
tags:
  - javascript
---
Recently [@Duiker101](https://twitter.com/Duiker101) posted this tweet

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">⁉️JS Quiz ⁉️<br /><br />We all know 42 is the answer to everything! Or is it? <br /><br />What gets logged here?<a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://t.co/60WJ5VLcX7">pic.twitter.com/60WJ5VLcX7</a></p>&mdash; Simone - Hacker Typer 🇪🇺 (@Duiker101) <a href="https://twitter.com/Duiker101/status/1245679886322356224?ref_src=twsrc%5Etfw">April 2, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

This was my response:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I would say 1<br /><br />Const cannot be changed so redeclaring it as &quot;theAnswer&quot; will just copy the whole thing as is.<br /><br />So the new Set only has 1 time &quot;magic&quot; in it?</p>&mdash; Daily Dev Tips (@DailyDevTips1) <a href="https://twitter.com/DailyDevTips1/status/1245681112468389889?ref_src=twsrc%5Etfw">April 2, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

So right-thinking the answer is 1. But not for a reason being const or let.
The answer is because a JavaScript ES6 Set can only contain unique values.

🤦‍♂️ You see, even I make mistakes.

It made me realize I needed to find out more about Set.

## What is JavaScript ES6 Set function?

Set are introduced in ES6 as a new object type.
They create collections of unique values. Values can be more than a simple string or integer; for example, a value can be an object or array.

JavaScript Set comes with the following methods: `size`, `add`, `clear`, `delete`, `entries`, `forEach`, `has`.

## Create a simple set in JavaScript ES6

```js
let magic = new Set();
magic.add('🧙‍♀️');
magic.add('🕴'); 
magic.add('🎩'); 
console.log(magic.size); // 3
magic.add('🧙‍♀️');
console.log(magic.size); // 3

console.log(magic.has('🧙‍♀️')); // true
console.log(magic.has('🔥')); // false
magic.delete('🧙‍♀️');
console.log(magic.has('🧙‍♀️')); // false

magic.forEach(item => {
	console.log(`magic ${item}`);
});

// magic 🕴
// magic 🎩

magic.clear();
console.log(magic.size); // 0
```

## JavaScript ES6 Set for...of loop

It's cool we can use the `forEach` function, but we can even use the `for...of` loop on a `Set`

```js
let weatherData = new Set(['☀️','🌦','⚡️']); 

for (let weather of weatherData) {
	console.log(`Today's weather is ${weather}`);
}

// Today's weather is ☀️
// Today's weather is 🌦
// Today's weather is ⚡️
```

## JavaScript ES6 Set with multiple types

As mentioned a set can have multiple types in it, as long as they are unique.

```js
let testSet = new Set(['🔥','🤟','🔥']);
testSet.add(['🔥','❤️']);
testSet.add({key:1, value:'❤️'});
console.log(testSet.size); // 4
testSet.forEach(item => {
	console.log(item);
});

// 🔥
// 🤟
// ["🔥", "❤️"]
// {key: 1, value: "❤️"}
```

As you can see, we start with an array, which gets deconstructed. The array we add laters stays an array!
Also, the duplicate 🔥 emoji get's removed.

## JavaScript ES6 Set values()

We also haves the `values()` and `keys()` on a JavaScript `Set()`. Both return a `Iterator` object that returns the values for each element in the `Set`

```js
let valueSet = new Set();
valueSet.add(1);
valueSet.add(2);
valueSet.add(2);
valueSet.add('cool');
valueSet.add({key:1,value:'awesome'});

let values = valueSet.values();

console.log(values.next());

for (let value of values) {
	console.log(value);
}

console.log(values.next());

// {value: 1, done: false}
// 2
// cool
// {key: 1, value: "awesome"}
// {value: undefined, done: true}
```

As you can see, we can use `values.next()` to manually go through the results, these will be handles as `done` and next()` will return if done is true or false.

### ES6 JavaScript Set with a String

Something cool I found out was that you could use it on a string to define unique characters like so:

```js
console.log('Lorem Ipsum Dolar Si Amet'.length);
let stringTest = new Set('Lorem Ipsum Dolar Si Amet');
console.log(stringTest.size);

// 25
// 17
```

Feel free to play with this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="ZEGNQOm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript ES6 Sets">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ZEGNQOm">
  JavaScript ES6 Sets</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### I hope you enjoyed my learning today!
 
Feel free to drop me a message here or on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
