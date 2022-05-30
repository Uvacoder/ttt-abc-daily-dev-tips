---
layout: ../../layouts/Post.astro
title: 'Revisiting Tailwind square divs with aspect ratio'
metaTitle: 'Revisiting Tailwind square divs with aspect ratio'
metaDesc: 'Using aspect ratio in Tailwind CSS'
image: /images/23-09-2021.jpg
date: 2021-09-23T03:00:00.000Z
tags:
  - tailwind
---

The other day I posted this article on how to [create square divs in Tailwind CSS](https://daily-dev-tips.com/posts/tailwind-css-responsive-square-divs/).
The code works, and there is nothing wrong with it. However, it is a bit of a "hack" to do this.

In the past, I've written about [CSS Aspect ratio](https://daily-dev-tips.com/posts/css-aspect-ratio-its-finally-here/) and at the time of writing that it wasn't well supported.

When I published the Tailwind article [IgnusG mentioned on Daily.dev](https://app.daily.dev/posts/gg8pN84wj) that aspect ratio is now well supported.

![IgnusG comment on Daily.dev](https://cdn.hashnode.com/res/hashnode/image/upload/v1631854564834/4EkK0rfCW.png)

So taking another look at aspect-ratio, it is way better supported, and another winning aspect is that it comes as a Tailwind plugin!

![CSS Aspect ratio browser support](https://caniuse.bitsofco.de/static/v1/mdn-css__properties__aspect-ratio-1631854792913.webp)

Already improved, and it's coming to Safari in the technology preview.
You can keep an eye out [here for the live graph](https://caniuse.com/mdn-css_properties_aspect-ratio).

## Using the Tailwind aspect ratio plugin

Let's start by adding the tailwind aspect ratio plugin to our project.

```bash
npm install @tailwindcss/aspect-ratio
```

Next, up we need to register it in our `tailwind.config.js` file as such:

```js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
};
```

And as we learned from our [CSS aspect ratio](https://daily-dev-tips.com/posts/css-aspect-ratio-its-finally-here/) article, we need to define the width and height of the aspect ratio.

The plugin gives us these two classes for that:

- `aspect-w-{x}`
- `aspect-h-{x}`

Where x can be a number between 1 and 16.
In our case, we want a square, so we'll use 1 and 1.

```html
<div
  class="w-full h-0 bg-yellow-300 shadow-lg aspect-w-1 aspect-h-1 rounded-xl"
></div>
```

That will result in this:

![CSS Aspect ratio in action](https://cdn.hashnode.com/res/hashnode/image/upload/v1631855155662/6HdV9mjRB.png)

You can also try it out in this [Tailwind Playground](https://play.tailwindcss.com/johiZp33uH).

Thanks to Ignus for pointing out that this is now well supported! 🎉
It's lovely how the community points these things out so we can all learn from them.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
