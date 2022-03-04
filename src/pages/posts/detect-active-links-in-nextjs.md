---
layout: ../../layouts/Post.astro
title: 'Detect active links in Next.js'
metaTitle: 'Detect active links in Next.js'
metaDesc: 'Detecting the active link in a Next.js application'
image: /images/29-09-2021.jpg
date: 2021-09-29T03:00:00.000Z
tags:
  - nextjs
---

Now that we have an almost complete [Next.js website driven by WordPress](https://daily-dev-tips.com/posts/retrieving-the-primary-wordpress-menu-in-nextjs/), let's see how we can detect the active links.

Feel free to follow along by using this [GitHub repo](https://github.com/rebelchris/next-tailwind/tree/layout) as your starting point.

## Migrating to Next.js Links

Before adding our active link check we need to migrate our existing hrefs to the Next.js Link component.

To do so, open up the `Header.js` component and include the Link component.

```js
import Link from 'next/link';
```

Then we need to wrap our href into this Link component like so:

```js
<Link href={item.node.connectedNode.node.slug}>
  <a className="cursor-pointer p-4 ml-2 text-white">{item.node.label}</a>
</Link>
```

This doesn't change the effect we see on the frontend; however, it's the best way to navigate Next.js applications.

## Adding the active route check

Ok, so now how do we check which is the active link?

First, we need to introduce the `useRouter` from the Next router.

```js
import {useRouter} from 'next/router';
```

And inside our Header function define it like so:

```js
const router = useRouter();
```

Then we can use a dynamic className on our `a` element.

```js
<a
  className={`cursor-pointer p-4 ml-2 text-white ${
    router.asPath === `/${item.node.connectedNode.node.slug}`
      ? 'underline'
      : ' hover:underline'
  }`}
>
  {item.node.label}
</a>
```

We use the router `asPath`, which returns something like `/sample-page` to check against the slug we are setting.

In my case, I have to include the `/` in the beginning because it's not set on my slug object.

And that's it. We now have styled our active pages with an underline.

![Active link in Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1632325332369/7kZk7SdxT.png)

And as usual, you can find the complete code on this [GitHub repo](https://github.com/rebelchris/next-tailwind/tree/active-link).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
