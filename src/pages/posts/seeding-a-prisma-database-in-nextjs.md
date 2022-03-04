---
layout: ../../layouts/Post.astro
title: 'Seeding a Prisma database in Next.js'
metaTitle: 'Seeding a Prisma database in Next.js'
metaDesc: 'How to seed a Prisma database with data in Next.js'
image: /images/24-10-2021.jpg
date: 2021-10-24T03:00:00.000Z
tags:
- nextjs
- prisma
---
When working with databases, it's convenient to have some initial data.
Imagine being a new developer. It will be a pain if you need to set up all this data by hand.

That's where migrations come in handy.
Prisma has a super-easy way to deal with these migrations. And today, we'll be creating our seeder!

## Creating the Prisma seed file

Create a new file called `seed.ts` in the `prisma` folder.
This file will handle our seeds, and the rough layout looks like this:

```js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Do stuff
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
```

As you can see, this loads the Prisma client. Then we define the main function, which is an async function.
And eventually, we call this function to catch errors and disconnect once it's done.

Before moving on, let's create a data file for the [playlist model we made in Prisma](https://daily-dev-tips.com/posts/adding-prisma-to-a-nextjs-project/).

I've created a `seeds` folder inside this `prisma` folder.
Inside that `seeds` folder, create a file called `playlists.ts`.

```js
export const playlists = [
  {
    title: 'Wake Up Happy',
    image: 'https://i.scdn.co/image/ab67706f000000030bd6693bac1f89a70d623e4d',
    uri: 'spotify:playlist:37i9dQZF1DX0UrRvztWcAU',
  },
  {
    title: 'Morning Motivation',
    image: 'https://i.scdn.co/image/ab67706f00000003037da32de996d7c859b3b563',
    uri: 'spotify:playlist:37i9dQZF1DXc5e2bJhV6pu',
  },
  {
    title: 'Walking On Sunshine',
    image: 'https://i.scdn.co/image/ab67706f000000035611e6effd70cdc11d0c7076',
    uri: 'spotify:playlist:37i9dQZF1DWYAcBZSAVhlf',
  },
];
```

As you can see, this resembles our fields, and we have three playlists added here.

Now head back to the `seed.ts` file and import this file.

```js
import { playlists } from './seeds/playlists';
```

Now inside our `main` function, we can use the `createMany` function on the Prisma client.

```js
async function main() {
  await prisma.playlist.createMany({
    data: playlists,
  });
}
```

This will create many playlists with the data we just added.

## Running seeds in Prisma

The next thing we need is a way to run this seed script.

Before doing that, we need to install `ts-node` as a dev dependency:

```bash
npm install ts-node -D
```

Then head over to your `package.json` file and add a `prisma` section.

```js
{
   // Other stuff
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  },
}
```

To run the migrations, you can run the following command:

```bash
npx prisma db seed
```

And the seed is also run when you execute `prisma migrate dev` or `prisma migrate reset`.

You can see the seeding in action in the video below.

<!-- ![Seeding a Prisma database in Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1634189913934/UcjcXY5Bo.gif) -->

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/seed_qqocbm.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/seed_tjzjeg.mp4" type="video/mp4" />
</video>

If you want to see the completed project, it's hosted on [GitHub](https://github.com/rebelchris/next-prisma/tree/seed).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
