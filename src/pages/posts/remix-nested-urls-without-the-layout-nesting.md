---
layout: ../../layouts/Post.astro
title: 'Remix nested URLs without the layout nesting'
metaTitle: 'Remix nested URLs without the layout nesting'
metaDesc: 'How to created nested URLs in Remix without the layout hierarchy'
image: /images/01-05-2022.jpg
date: 2022-05-01T03:00:00.000Z
tags:
  - remix
---

Yesterday we learned how to create [pathless layout routes](https://daily-dev-tips.com/posts/remix-pathless-layout-routes/), which means we can share a layout between routes without sharing the URL routes.

Let's look at how the opposite would work, nested URLs, but without the nested layout.

Let's take our new post, for example.
The current URL structure is like this: `admin/posts/new`.

This is great, but the layout is shared like this:

```
- root
-- admin
--- posts
---- new
```

What happens if we want this to be a page on its own without inheriting all the layout hierarchy?

```
- root
-- admin
--- new
```

## Segmented URLs in Remix

This is where segmented URLs come in super handy. We can segment a URL with dots to replicate the URL nesting but not take the styling.

In our case, we can move the `new.tsx` file to our admin folder and rename it to: `posts.new.tsx`

If we run our application, our URL will remain the same, but we don't see the `posts` layout stuff, only the admin layout.

![Remix segmented URL](https://cdn.hashnode.com/res/hashnode/image/upload/v1650519879555/9WEb4cb96.png)

You can even make this multi-level. Let's see what happens if we move the `posts.new.tsx` file one level up and rename it to `admin.posts.new.tsx`.

![Top level route](https://cdn.hashnode.com/res/hashnode/image/upload/v1650520046347/XXfoBSJyJ.png)

Amazing!

As you can see, Remix can support all kinds of use-cases.
You can even use dynamic parameters within these segmented URLs.

We can make all kinds of routes and layout hierarchies between this and the ability to use pathless routes.

You can find this article's code on [GitHub](https://github.com/rebelchris/remix-starter/tree/segment-url).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
