---
layout: ../../layouts/Post.astro
title: 'How to use CSS Vars'
metaTitle: 'How to use CSS Vars'
metaDesc: 'Beginner guide to CSS Vars'
image: /images/02-05-2020.jpg
date: 2020-05-02T03:00:00.000Z
tags:
  - css
---

CSS Vars are unique, and you should leverage these where possible.
I admit I'm only using them recently, but a tip for any developer is that if you have to re-use code, it's useless. Write better classes, have it in one stop, etc.

CSS Vars can be a solution here. Let's look at how these work.

## HTML Setup

```html
<div class="section">
  <div class="card card-blue"></div>
</div>
<div class="section">
  <div class="card card-red"></div>
</div>
```

And then, for the CSS, we can do the following:

```css
:root {
  --primary-color: #89bbfe;
  --secondary-color: #6f8ab7;
  --card-color: #cae5ff;
  --border-color: #acedff;
  --border-radius: 10px;
  --border-small: 3px;
  --padding-medium: 10px;
  --padding-small: 5px;
}
section {
  width: 100vw;
  height: 100vh;
  background: var(--primary-color);
  padding: var(--padding-medium);
  display: flex;
  justify-content: center;
  align-items: center;
}
section:nth-child(even) {
  background: var(--secondary-color);
}
.card {
  width: 50%;
  height: 50%;
  background: var(--card-color);
  padding: var(--padding-small);
  border-radius: var(--border-radius);
  border-top: var(--border-small) solid var(--border-color);
}
```

So the cool part is we declare the `:root` section where we can make our variables. This can be many things, including colors, paddings, spaces, etc.

In our example, we can even use them inside complicated css statements like the border one: `border-top: var(--border-small) solid var(--border-color);`.
As you can see, we can use two variables without problems here.

Then in our code we use these variables like `var({name})`. You must replace the `{name}` with the actual name.

You can see this in action in this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="VwvzKKm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="How to use CSS Vars">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/VwvzKKm">
  How to use CSS Vars</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## When to use CSS Variables?

That's a good question. I think it's essential you don't re-use code; it's pretty useless to type the same code over and over, so anything that is re-used, you should make a variable for.

Also, this process makes it easier to change things in one place later.

Let's say your boss wants to rebrand to red instead of blue, now you have to change your variable, and you're done!

## Browser support

The bad thing about these excellent variables is that Internet Explorer does not support them.

![CSS Variables support](https://caniuse.bitsofco.de/image/css-variables.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
