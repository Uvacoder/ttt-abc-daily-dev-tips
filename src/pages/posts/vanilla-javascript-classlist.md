---
layout: ../../layouts/Post.astro
title: 'Vanilla JS classLists: Add, Remove & Toggle'
metaTitle: 'Vanilla JavaScript classList add, remove & toggle'
metaDesc: 'Learn the ins and outs of the JavaScript classList. In this tutorial we will look at reading, adding, deleting and toggeling classes with simple JS.'
image: /images/14-04-2020.jpg
date: 2020-04-14T03:00:00.000Z
tags:
  - javascript
---

The `Vanilla JavaScript` `classList` is one of the best features to know when working with `JavaScript`. In essence it's a read-only property that returns a `DOMTokenList`. The token list contains the classes of the HTML element we call the `classList` method on.

## Reading ClassList of an element with Vanilla JavaScript

To **read** a `classList` we will use the following HTML markup:

```html
<div class="class-one class-two class-three" id="getMe">Fuu</div>
```

In JavaScript we can then use the following code to get all classes:

```js
const element = document.getElementById('getMe');
console.log(element.classList);
// DOMTokenList(3) ["class-one", "class-two", "class-three", value: "class-one class-two class-three"]
```

It returns a `DOMTokenList` with the three classes of the element in it.

Ofcourse it's cool to retrieve this list, but it doesn't do much. Let's see what more awesome things we can do 🤩.

## Adding a class to an element

To **add** a class to the list, we simply run the following `Vanilla JavaScript` snippet:

```js
element.classList.add('class-four');
console.log(element.classList);
// DOMTokenList(4) ["class-one", "class-two", "class-three", "class-four", value: "class-one class-two class-three class-four"]
```

As you can see the element now has a fourth class.

## Remove class from an element

To **remove** a class from the class list we basically do same as with `add`, but we use the remove method:

```js
element.classList.remove('class-one');
console.log(element.classList);
// DOMTokenList(3) ["class-two", "class-three", "class-four", value: "class-two class-three class-four"]
```

Now we removed the class called `class-one` from the element.

## Toggle a class on an element

Sometimes you want to **toggle** a class on an element. Use-cases are for example when an element should become visible or hidden once you click it.

We can do the toggle with the following code:

```js
element.classList.toggle('visible');
console.log(element.classList);
// DOMTokenList(4) ["class-two", "class-three", "class-four", "visible", value: "class-two class-three class-four visible"]
```

It will _add_ the class `visible` if it doesn't exist or _remove_ it if it already existed.

## Check if an element contains a certain class

If we want to check if our element's class list contains a certain class we can use the following JS snippet:

```js
console.log(element.classList.contains('visible'));
// true
```

The code will return `true` or `false`, so and we can also use this in `if...else` statements.

## Adding and removing multiple classes

The classList can even accept a array of classes to remove or add multiple items:

```js
element.classList.remove('class-two', 'class-three', 'class-four');
console.log(element.classList);
// DOMTokenList ["visible", value: "visible"]

element.classList.add('two', 'three', 'four');
// DOMTokenList(4) ["visible", "two", "three", "four", value: "visible two three four"]
```

## Replace a class

To replace an existing class we can use the following code:

```js
element.classList.replace('four', 'one');
console.log(element.classList);
// DOMTokenList(4) ["visible", "two", "three", "one", value: "visible two three one"]
```

As you can see this can be very useful for making elements animate or show and hide them.

I hope you learned something new about the `Vanilla JavaScript` `classList` function.

## Try the example code in Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="dyYodyq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript classList">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/dyYodyq">
  Vanilla JavaScript classList</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The `JavaScript` `classList` has good browser support.

IE doesn't know how to handle the multiple classes very well, but we can even [polyfill](https://www.npmjs.com/package/classlist-polyfill) this back to IE6.

![classList browser support](https://caniuse.bitsofco.de/image/classlist.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
