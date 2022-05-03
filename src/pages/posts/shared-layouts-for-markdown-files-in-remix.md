---
layout: ../../layouts/Post.astro
title: 'Shared layouts for markdown files in Remix'
metaTitle: 'Shared layouts for markdown files in Remix'
metaDesc: 'How to add a shared layout for markdown files in Remix'
image: /images/13-05-2022.jpg
date: 2022-05-13T03:00:00.000Z
tags:
  - remix
---

In the previous article, we added the [Typography Tailwind plugin](https://daily-dev-tips.com/posts/adding-tailwind-typography-plugin-in-remix/) to render each blog nicely.
However, we didn't have an excellent place to put the `prose` class for rendering purposes.

We set the prose on the `root.tsx` file.
This works, but it means we add the prose class to literally every rendered page.

To make it a bit more sustainable, we can use the [shared layouts method](https://daily-dev-tips.com/posts/remix-shared-layouts-a-first-look/) to create a unique blog layout.

## Adding a shared markdown layout

When we set up our [markdown files in Remix](https://daily-dev-tips.com/posts/rendering-markdown-in-remix/), we dedicated a `blog` folder for them.

We can simply create a `blog.tsx` file in our routes directory to use the shared layout.

This file can be used to render specific layouts for the blog items.

Let's keep it super simple for now:

```js
import { Outlet } from '@remix-run/react';

export default function Blog() {
  return (
    <div className='prose'>
      <h1>Welcome to the blog:</h1>
      <Outlet />
    </div>
  );
}
```

Each blog item will now have this static heading title and its markdown rendered inside the outlet!

Resulting in the following:

![Markdown layout in Remix](https://cdn.hashnode.com/res/hashnode/image/upload/v1651590094486/DKbcexiiZ.png)

The cool part is that this layout can be as extended as you want, and it will be used by all markdown files in the blog directory!

If you are interested, I uploaded the code for this article on this [GitHub repo](https://github.com/rebelchris/remix-starter/tree/blog-layout).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
