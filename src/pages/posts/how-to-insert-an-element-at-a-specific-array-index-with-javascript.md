---
layout: ../../layouts/Post.astro
title: 'How to insert an element at a specific array index with JavaScript'
metaTitle: 'How to insert an element at a specific array index with JavaScript'
metaDesc: "Let's see how we can add a element to an array, but at a specific index"
ogImage: /images/08-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/59c907ef-e5d1-4393-643d-39540bf61900
date: 2022-07-08T03:00:00.000Z
tags:
  - javascript
---

In this article, I'll teach you how to add an element to a JavaScript array but set it to a specific position.

Let's set the stage. I have a sidebar menu with a couple of items in it.

```js
const sidebarMenu = ['home', 'about', 'contact'];
```

However, for premium users, I want to add the courses menu. It has to show right before the contact item.

## Add an element to an array at a specific index with JavaScript

To add this item, we can use the [`splice` method](https://daily-dev-tips.com/posts/vanilla-javascript-slice-vs-splice/). This method has multiple powers and can even be used to delete items.
So be very careful when setting the parameters.

To set an item, we can use the first parameters to define the position, and everything after that is the items we push.

```js
if (premiumUser) {
  sidebarMenu.splice(2, 0, 'courses');
}
```

Our `sidebarMenu` now has the following content: `[ 'home', 'about', 'courses', 'contact' ]`.

So let's see what the numbers mean:

- the first one (`2`): start position
- second one (`0`): delete count
- the rest: items to add

It's important to note that JavaScript arrays start at zero, so when defining the start position, you must keep that in mind.

Our array counts like this:

- 0: Home
- 1: About
- 2: Contact

With the splice method, we technically say:
Add an item at position two, don't remove any existing elements, and the element to add is 'courses'.

## Adding multiple elements

A super cool thing about splice is that it has no limit to how many items it can add.
So we can even add multiple items.

```js
if (premiumUser) {
  sidebarMenu.splice(2, 0, 'courses', 'profile');
}

// [ 'home', 'about', 'courses', 'profile', 'contact' ]
```

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
