---
layout: ../../layouts/Post.astro
title: 'JavaScript creating a new element'
metaTitle: 'JavaScript creating a new element'
metaDesc: 'How to create a new element in JavaScript'
image: /images/21-04-2021.jpg
date: 2021-04-21T03:00:00.000Z
tags:
  - javascript
---

I've realized I've done quite a few articles already where I used the technique to create elements from scratch in Vanilla JavaScript.

But I've never actually gone through the basics of creating elements in JavaScript.

TLDR; You can use `document.createElement()` to create new elements.

## Creating new elements in JavaScript

When using the `createElement()` function you can pass the element you can to create, but you don't need to pass in the brackets `<>`.

Some examples:

```js
document.createElement('div');
document.createElement('aside');
document.createElement('custom');
```

Run this in JavaScript and it will create these three elements for you.

As you can see it allows known HTML element or even custom elements.

These however will not get added to the dom directly.
We can console log them to see what's happening.

![Created element in JavaScript](https://cdn.hashnode.com/res/hashnode/image/upload/v1618766006690/OSEesd6Jf.png)

Let's create a full element and add it to the dom now.

```js
let div = document.createElement('div');
div.textContent = `I'm created`;
div.style.backgroundColor = 'red';
div.id = 'custom_id';

document.body.appendChild(div);
```

And this will actually append a red div to our dom.
The red div will have a custom ID even.

![Styled element to dom in JavaScript](https://cdn.hashnode.com/res/hashnode/image/upload/v1618766226537/02HQDExYl.png)

Pretty cool right?
You can try this out yourself in the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="RwKYPBP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript creating a new element">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/RwKYPBP">
  JavaScript creating a new element</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
