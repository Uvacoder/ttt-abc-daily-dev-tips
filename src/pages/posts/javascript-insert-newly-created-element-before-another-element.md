---
layout: ../../layouts/Post.astro
title: 'JavaScript insert newly created element before another element'
metaTitle: 'JavaScript insert newly created element before another element'
metaDesc: 'How to add a new element before an existing element'
image: /images/12-06-2021.jpg
date: 2021-06-12T03:00:00.000Z
tags:
  - javascript
---

The other day we learned [how to create a new element with JavaScript](https://daily-dev-tips.com/posts/javascript-creating-a-new-element/).
And in this article, I'll show you how you can insert it before another element.

As a recap, we can create an element using the `createElement` function.

## Insert an element before another element

First, we have to make a sample element we can target in JavaScript.

```html
<div id="existing">I'm an existing element</div>
```

Now we can select this element based on its ID.

```js
const el = document.getElementById('existing');
```

And now, let's create a paragraph element and add it before this one.

```js
const p = document.createElement('p');
p.textContent = `Hi I'm new here`;

// Insert before the existing element
el.before(p);
```

There is also the option to create these new elements on the fly, passing an element and text in one go.

```js
// Insert element and text
el.before(span, "I'm a new span");
```

You can view this code on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="dailydevtips1" data-slug-hash="KKWeEZN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript insert newly created element before another element">
  <span>See the Pen <a href="https://codepen.io/dailydevtips1/pen/KKWeEZN">
  JavaScript insert newly created element before another element</a> by Chris Bongers 🤓💻⚡️ (<a href="https://codepen.io/dailydevtips1">@dailydevtips1</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
