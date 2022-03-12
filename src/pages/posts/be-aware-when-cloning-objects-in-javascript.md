---
layout: ../../layouts/Post.astro
title: 'Be aware when cloning objects in JavaScript! 👯‍♀️'
metaTitle: 'Be aware when cloning objects in JavaScript! 👯‍♀️'
metaDesc: 'Three ways of cloning objects in JavaScript'
image: /images/03-11-2020.jpg
date: 2020-11-03T03:00:00.000Z
tags:
  - javascript
---

Now and then you'll need to clone an object in JavaScript, mainly one to be modified but you still want the original to stay the same.

Let's say for this purpose we have a duplicate and change function.

Meaning we have an object, which we will duplicate and then change.
The original, of course, will need to stay the same.

## Benchmark JavaScript clone

In JavaScript we can ofcourse clone a object by assigning it to a new const like this:

```js
const original = { color: '🔴', child: { action: 'stop' } };
const clone = original;

console.log(original); // {color: "🔴", child: {action: "stop"}}
console.log(clone); // {color: "🔴", child: {action: "stop"}}
```

Ok wow that works, cool done!

But not really, here comes the issue with this.

```js
clone.color = '🟢';
console.log(original); // {color: "🟢", child: {action: "stop"}}
console.log(clone); // {color: "🟢", child: {action: "stop"}}
```

Hmm that's not cool, now our original one is also modified!

This is caused because of objects being reference types. When we choose to use `=` to clone, we make a pointer to object one instead of actually cloning it.

## Clone using the spread operator

The spread operator is introduced in ES6 so fairly new, and not in the official specs yet!

To use it, you create a new object prefixed by three dots `...`

```js
const original = { color: '🔴', child: { action: 'stop' } };
const spread = { ...original };
console.log(original); // { color: '🔴', child: { action: 'stop' } }
console.log(spread); // { color: '🔴', child: { action: 'stop' } }
```

Ok, our basic clone works again, now let's check the change

```js
spread.color = '🟢';
console.log(original); // { color: '🔴', child: { action: 'stop' } }
console.log(spread); // { color: '🟢', child: { action: 'stop' } }
```

Yes, we did it!

But wait let's make sure we can also modify the child element.

```js
spread.color = '🟢';
spread.child.action = 'start';
console.log(original); // { color: '🔴', child: { action: 'start' } }
console.log(spread); // { color: '🟢', child: { action: 'start' } }
```

Wait, what just happened?

This is because the spread operator is a shallow copy, so only the first level will be actually copied, the rest will be assigned.

## Clone in JavaScript using Object.assign

This is by far the method you will read the most about. It's basically the old version of the spread operator.

You can use it as follows:

```js
const original = { color: '🔴', child: { action: 'stop' } };
const assign = Object.assign({}, original);
console.log(original); // { color: '🔴', child: { action: 'stop' } }
console.log(assign); // { color: '🔴', child: { action: 'stop' } }
```

Cool, this also clones, but let's check if it modifies correctly.

```js
assign.color = '🟢';
assign.child.action = 'start';
console.log(original); // { color: '🔴', child: { action: 'start' } }
console.log(assign); // { color: '🟢', child: { action: 'start' } }
```

Damn, still the same issue turns out Object.assign is also a shallow copy.

So now what?

## Using JSON to clone

A quick and dirty hack to deep-clone is using JSON to stringify and then parse the object again.

This is not a "best-practice" but used by many people, and good enough for basic cloning.

> For more robust deep-clone make use of packages like [lodash cloneDeep](https://lodash.com/docs/#cloneDeep).

It works like this:

```js
const original = { color: '🔴', child: { action: 'stop' } };
const json = JSON.parse(JSON.stringify(original));
console.log(original); // { color: '🔴', child: { action: 'stop' } }
console.log(json); // { color: '🔴', child: { action: 'stop' } }
```

Awesome, does the exact same thing, but let's see when we modify data.

```js
json.color = '🟢';
json.child.action = 'start';
console.log(original); // { color: '🔴', child: { action: 'stop' } }
console.log(json); // { color: '🟢', child: { action: 'start' } }
```

Yes, we did it! A fully cloned object that we can modify!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
