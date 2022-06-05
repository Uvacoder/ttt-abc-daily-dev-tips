---
layout: ../../layouts/Post.astro
title: 'I refactored all my articles'
metaTitle: 'I refactored all my articles'
metaDesc: 'When to use var, let, or const a full guide'
image: /images/27-07-2021.jpg
date: 2021-07-27T03:00:00.000Z
tags:
  - javascript
---

Welcome. You must be wondering why I refactored my articles, right?

In short it's because of this Tweet by Danny Thompson:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Javascript Tip<br /><br />Many tutorials cover using var for variables.<br /><br />This is an outdated practice and you will actually use &quot;const&quot; if the variable never is changed or &quot;let&quot; if you must change it.<br /><br />This is a much better practice and will save you headaches in the future.</p>&mdash; Danny Thompson (@DThompsonDev) <a href="https://twitter.com/DThompsonDev/status/1363571000231809025?ref_src=twsrc%5Etfw">February 21, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The let/const variables are introduced in ES6, so it's "fairly" new. \*(ECMAScript 2015).

So, some of my articles where using the var variable, as I sometimes auto-type it.

But Danny was right. We should evolve with the new methods we can have at hand.

And for me, the first step was to update all my articles and code examples to use the respective variable declarations.

## The main difference between var, let, and const

- `var`: Globally or function scoped
- `let/const`: Block scoped
- `var`: Can be updated and redeclared
- `let`: Can be updated but not redeclared
- `const`: Can't be updated or redeclared
- `var`: Default initialized as `undefined`
- `let/const`: not initialised
- `var/let`: Can be declared without being initialised
- `const`: Must be initialised

Let's see some examples of what this means.

The first one being the global assignment.

```js
var fuu = "I'm the var";
let bar = 'Let it go';
const fuubar = "I'm a const";

console.log(window.fuu); // I'm the var
console.log(window.bar); // undefined
console.log(window.fuubar); // Undefined
```

As you can see, the var assignment can be made globally, where the let and const can't.
However, you rarely need this, and even then, there are ways around it.

Now let's see what is meant with the redeclaration part.

```js
var fuu = 'Var value 1';
var fuu = 'Var value 2'; // Sure we'll reassign this
let bar = 'Let value 1';
let bar = 'Let value 2'; // Uhh, no! you declared this already
const fuubar = 'Const value 1';
const fuubar = 'Const value 2'; // Stop! You declared me already
```

We can completely redeclare the var, which in turn makes it very dangerous.
One might have forgotten it was declared, and JavaScript will replace it anyway.

As where the let and const can't be redeclared, it will throw a hard error.

However looking at re-assignment this is a different story:

```js
var fuu = 'Var value 1';
fuu = 'Var value 2';
let bar = 'Let value 1';
bar = 'Let value 2';
const fuubar = 'Const value 1';
fuubar = 'Const value 2'; // TypeError! Assignment to const

console.log(fuu); // Var value 2
console.log(bar); // Let value 2
console.log(fuubar);
```

So the var and let can be changed in value, as where the const can't be assigned.

However, that doesn't mean you can't change a value inside a const variable. This, for example, is the case when we modify an item inside an array or object.
This doesn't count as a reassignment in JavaScript.

Let's see how that works then:

```js
const fuu = {name: 'Chrizz'};
fuu.name = 'Chris';
console.log(fuu); // { name: 'Chris' }
```

This is quite a tricky concept, and it comes down to what type of property is immutable.

Are you wondering when it would be a reassignment?

```js
const fuu = {name: 'Chrizz'};
fuu = {...fuu, ...{name: 'Chris'}};
```

This will throw a type error again since we are entirely reassigning the initial value with a new object!

The last thing we are checking out is how we can access them without being initialised.

```js
console.log(fuu); // Undefined
var fuu = 'Var value';
console.log(fuu); // Var value

console.log(bar); // Hold on! Reference error
let bar = 'Let value';
console.log(bar);
```

Right, so for the var, we can call it without it even being made yet.
As where if it's a let we can't call it before every initialising.

## When to use which one?

It can get tricky to decide which one to use for which variable.
But I'll try and answer it in the best way possible.

`var`: You no longer need this unless you need to support ancient browsers...

`let`: The variable must change a loop counter, a string that is dependant on an action.

`const`: This value should not change. I tend to default to const unless I realise it needs to change. And again, if it's an array or object, we can still use const.

So again, use `const` unless you want to reassign value use `let` and don't use `var` unless you require super old browser support.

I hope you learned something about these three variable declarations.
It's a game-changer when you properly start using them.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
