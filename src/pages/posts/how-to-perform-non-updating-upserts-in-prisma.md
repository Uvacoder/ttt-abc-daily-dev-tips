---
layout: ../../layouts/Post.astro
title: 'How to perform non updating upserts in Prisma'
metaTitle: 'How to perform non updating upserts in Prisma'
metaDesc: 'How the upsert query works in Prisma'
image: /images/28-10-2021.jpg
date: 2021-10-28T03:00:00.000Z
tags:
  - prisma
---

In our example yesterday, we are [pushing specific playlists to our database](https://daily-dev-tips.com/posts/nextjs-posting-data-to-postgres-through-prisma/). However, if we add a playlist twice, we will see that the URI is not unique and exists already.

There are several ways to go about this.
And for this example, I want to look at doing a non-updating upsert.

This means we check if the URI already exists. If this is the case, we perform an update.
If it doesn't exist, we perform the creation.

The small caveat here is that we push an empty update object.

This will result in the API returning the old existing object without updating it.

## Upsert in Prisma

You can use the `upsert` command to perform an upsert in Prisma.
It takes a where a query that should query on a unique field.

Then it comes with both the update and creates functions like so:

```js
const playlist = await prisma.playlist.upsert({
  where: {
    uri: uri,
  },
  update: {},
  create: playlistItem,
});
```

And there you go. This gives us a super good way only to create this if it doesn't exist functionality.

You can find the complete example based on the Spotify database on [GitHub](https://github.com/rebelchris/next-spotify-login/tree/upsert-data).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
