---
layout: ../../layouts/Post.astro
title: 'JavaScript Proxy a first introduction'
metaTitle: 'JavaScript Proxy a first introduction'
metaDesc: 'What is the JavaScript Proxy object and how can it be used'
ogImage: /images/09-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/c21df486-facf-4d4f-bb0c-6e739156ff00
date: 2022-07-09T03:00:00.000Z
tags:
  - javascript
---

Recently I had my first production use-case for the Proxy object. So let me tell you a bit more about it and how you can use it in your code.

A Proxy object is a method that copies an object and can apply overwrites to specific functions.

This is a great way to intercept essential object functions like `get` or `set`.

## JavaScript Proxy object

Let's start with a basic object definition.

```js
const user = {
  firstName: 'Chris',
  lastName: 'Bongers',
  age: 10,
};
```

Now, let's proxy this object.

```js
const proxyUser = new Proxy(user, handler);
```

The Proxy object takes two arguments, the first one is the original object and the second one is a handler. The handler defines which operations will be intercepted or modified.

Let's say we want to modify the `get` function.

```js
const handler = {
  get(target, prop) {
    console.log('get called', target, prop);
    return target[prop].toUpperCase();
  },
};
```

In the above example, we log what is being called and modify the get always to return an uppercase variant.

Let's now try to get the first name of the person.

```js
console.log(proxyUser.firstName);
console.log(proxyUser.lastName);

// Returns: CHRIS BONGERS
```

Pretty neat!

Let's quickly take a closer look at the variables we received.
The target holds the entire object, and the prop has the one that is being changed.

You can also only act on specific properties.

```js
const handler = {
  get(target, prop) {
    if (prop === 'firstName') {
      return target[prop].toUpperCase();
    }
    return target[prop];
  },
};

console.log(proxyUser.firstName);
console.log(proxyUser.lastName);

// Returns: CHRIS Bongers
```

In this case, only the firstName property will be returned in uppercase.

## Type of handlers

We have seen the `get` handler being used, but there are more handlers we can leverage.

These handlers are often called traps, as they trap calls to the target object.

Here is a list of the traps we can overwrite.

- `apply`
- `construct`
- `deleteProperty`
- `defineProperty`
- `enumerate`
- `get`
- `getPrototypeOf`
- `getOwnPropertyDescriptor`
- `has`
- `isExtensible`
- `ownKeys`
- `preventExtensions`
- `set`
- `setPrototypeOf`

Each handler comes with its own set of properties. You can find the complete list on MDN.

[MDN trap list](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#a_complete_traps_list_example)

You can also try out the sample I prepared in this CodePen.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="vYRYaGq" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/vYRYaGq">
  Using setTimeout in JavaScript</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Conclusion

We can use the Proxy object to overwrite or catch specific object actions.

By using proxies, we can leverage some normally inaccessible handlers. These handlers can then be applied to all or some of the properties of an object.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
