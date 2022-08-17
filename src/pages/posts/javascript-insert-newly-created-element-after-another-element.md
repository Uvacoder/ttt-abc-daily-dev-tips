---
layout: ../../layouts/Post.astro
title: 'JavaScript insert newly created element after another element'
metaTitle: 'JavaScript insert newly created element after another element'
metaDesc: 'How to add a new element after an existing element'
image: /images/13-06-2021.jpg
date: 2021-06-13T03:00:00.000Z
tags:
  - javascript
---

Yesterday we had a look at how you can [insert an element before another element](https://daily-dev-tips.com/posts/javascript-insert-newly-created-element-before-another-element/).

And today, we'll be looking at the after function to insert elements after another element.

## Insert an element after another element

Let's start with an existing element with a unique ID.

```html
<div id="existing">I'm an existing element</div>
```

Let's select this element using its ID in JavaScript.

```js
const el = document.getElementById('existing');
```

And now we can create a new element using the [JavaScript createElement function](https://daily-dev-tips.com/posts/javascript-creating-a-new-element/).

```js
const p = document.createElement('p');
p.textContent = `Hi I'm new here`;

// Insert before the after element
el.after(p);
```

And just like the before function, we can use a simple one-liner to change the text of this after insert.

```js
// Insert element and text
el.after(span, "I'm a new span");
```

You can view this code on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="dailydevtips1" data-slug-hash="NWpBYyq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript insert newly created element after another element">
  <span>See the Pen <a href="https://codepen.io/dailydevtips1/pen/NWpBYyq">
  JavaScript insert newly created element after another element</a> by Chris Bongers 🤓💻⚡️ (<a href="https://codepen.io/dailydevtips1">@dailydevtips1</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
