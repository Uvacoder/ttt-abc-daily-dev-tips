---
layout: ../../layouts/Post.astro
title: 'Detect object changes with JavaScript Proxy'
metaTitle: 'Detect object changes with JavaScript Proxy'
metaDesc: 'How to detect object changes in JavaScript using the Proxy object'
ogImage: /images/10-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/00812d97-e93d-40b6-7cd1-e68003689d00
date: 2022-07-10T03:00:00.000Z
tags:
  - javascript
---

Let's say we have an object for our users. How can we detect when a property changes?

```js
const user = {
  firstName: 'Chris',
  lastName: 'Bongers',
  age: 10,
};
```

Now the user changes his age by using the following code.

```js
user.age = 33;
```

However, we want to log this change to keep track of specific changes.

## Using JavaScript Proxy to detect object changes

That's again where the [Proxy object](https://daily-dev-tips.com/posts/javascript-proxy-a-first-introduction/) comes in handy.
As we learned in the previous article, the Proxy object comes with a `set` handler (trap).

The `set` handler can pass us the following three parameters.

- object: The whole object we are trying to modify
- property: The property we are trying to modify
- value: The new value we are trying to set

Let's create a proxy to our user object so we can attach a handler.

```js
const handler = {
  set(target, prop, value) {
    // Our code
  },
};

const proxyUser = new Proxy(user, handler);
```

As for the code, we want to log which property is being changed, what the previous value was, and what the new value will be.

Then we need to ensure that we set the new value.

The result is the following function.

```js
const handler = {
  set(target, prop, value) {
    console.log(`changed ${prop} from ${target[prop]} to ${value}`);
    target[prop] = value;
  },
};
```

Let's try it out by modifying the age again.

```js
proxyUser.age = 33;
```

Now the console will show this change and log `changed age from 10 to 33`.

## Detecting additional Object properties

Sometimes we might push new properties to the object. Let's see how we can capture that.

```js
proxyUser.email = 'info@daily-dev-tips.com';
```

And again, this will neatly log the change: `changed email from undefined to info@daily-dev-tips.com`.

However, there is one small exception.

If we have a sub-object or array in our main object, it won't work out of the box.

```js
const user = {
  firstName: 'Chris',
  lastName: 'Bongers',
  age: 10,
  address: {
    postalCode: '1234AB',
  },
};

proxyUser.address.postalCode = '5678CD';
```

This now logs nothing new, but the property is changed!
And that's because there is now a deep proxy set.

To log on that level, we can again leverage the `get` handler and proxy each property to be a proxy itself 🤯.

```js
const handler = {
  get(target, key) {
    if (typeof target[key] === 'object' && target[key] !== null) {
      return new Proxy(target[key], handler);
    }
    return target[key];
  },
  set(target, prop, value) {
    console.log(`changed ${prop} from ${target[prop]} to ${value}`);
    target[prop] = value;
  },
};
```

And now, when we rerun our code, we see the log appear as `changed postalCode from 1234AB to 5678CD`.

I added these examples to CodePen so you can try them out yourself.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="JjLoRLY" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/JjLoRLY">
  JavaScript proxy a first introduction</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
