---
layout: ../../layouts/Post.astro
title: 'Remix pathless layout routes'
metaTitle: 'Remix pathless layout routes'
metaDesc: 'How to created layout routes, without the paths'
image: /images/30-04-2022.jpg
date: 2022-04-30T03:00:00.000Z
tags:
  - remix
---

Now that we know how to make [shared layouts in Remix](https://daily-dev-tips.com/posts/remix-shared-layouts-a-first-look/), there might be times when you want a shared layout but not the shared routes.

For instance, what happens when we want to introduce multiple auth routes that share one layout?

We might go for an `auth` folder and inside create files like: `login.tsx` and `register.tsx`.

That would work, right?
And the answer is yes.

But the downside of that approach is that we get all the URLs prefixed with `/auth`:

`http://mywebsite.com/auth/login`
`http://mywebsite.com/auth/register`

Remix came up with pathless layout routes for this problem.

## Pathless layout routes in Remix

The main idea behind these pathless layout routes is that they can share a layout but are not read as URL segments.

To use them, you have to prefix the folder with two underscores: `__auth`.

And for the layout file goes the same, prefix it with `__auth.tsx`.

Let's try and set up these login pages to see it in action.

First, create the `__auth` folder inside your routes directory.

Then go ahead and create the layout file, which will hold our main auth layout.
This file is called `__auth.tsx` and is located at the root of the routes directory.

First, remove any existing `login` or `register` routes and create `login.tsx` and `register.tsx` inside the `__auth` directory.

Each one can have a file similar to this:

```js
export default function Login() {
  return <p>This is the login page</p>;
}
```

> Note: Make sure to rename the function name and the actual copy.

If we now run the website, we can navigate to `/login` and `/register`, and our auth layout will still be there!

![Auth routes](https://cdn.hashnode.com/res/hashnode/image/upload/v1650430431362/jIowK3Dc0.png)

Pretty cool stuff, Remix!

You can also find the completed code on [GitHub](https://github.com/rebelchris/remix-starter/tree/pathless-layout).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
