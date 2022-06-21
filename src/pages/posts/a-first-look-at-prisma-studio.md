---
layout: ../../layouts/Post.astro
title: 'A first look at Prisma Studio'
metaTitle: 'A first look at Prisma Studio'
metaDesc: 'What is Prisma Studio and how can a database GUI help us'
image: /images/16-01-2022.jpg
date: 2022-01-16T03:00:00.000Z
tags:
  - prisma
---

Since I started showing interest in Prisma, the Studio element kept showing up everywhere.

Prisma studio is a GUI for the data in your database.
I haven't used it myself since writing, so we'll be learning what it can do together.

For this, we'll use the project we just created, and you can follow along by using this [GitHub branch](https://github.com/rebelchris/local-prisma/tree/part-2).

## What is Prisma Studio

Prisma Studio is a visual interface to the data in your database.

You can use this to visualize data quickly and work with the data there.

![Prisma studio](https://cdn.hashnode.com/res/hashnode/image/upload/v1641449124818/38UArvTsP.png)

The cool part is that it runs in your browser, and you don't need to set up any connection as it's already available in your project.

> Note: You can download a desktop app as well if your prefer

You can quickly open all the models your application has and interact with it the CRUD way from the tool.

`CRUD` stands for: Create, Read, Update, Delete.

You can also use filters and sorting options, making navigating your data super easy.

## Launching Prisma Studio

I've never seen a database GUI that was so easy to launch. All you have to do is run the following command from a Prisma project.

```bash
npx prisma studio
```

It will automatically open `localhost:5555`, where you can see your data.

![Local Prisma studio](https://cdn.hashnode.com/res/hashnode/image/upload/v1641449171487/uJP7qiMBGB.png)

Alternatively, you can download a native app from the Prisma website.

[Download the Prisma Studio app](https://www.prisma.io/studio)

## Conclusion

Cool, we can launch a GUI without any setup needed.
I will 100% use this if I need a quick data visualization.

Will you be trying out Prisma Studio?

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
