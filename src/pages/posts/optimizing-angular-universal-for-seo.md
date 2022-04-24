---
layout: ../../layouts/Post.astro
title: 'Optimizing Angular Universal for SEO'
metaTitle: 'Optimizing Angular Universal for SEO'
metaDesc: 'Optimize Angular Universal for SEO by including a title and meta descriptions'
image: /images/16-02-2021.jpg
date: 2021-02-16T03:00:00.000Z
tags:
  - angular
---

Today we will be continuing our journey to [convert our existing Angular application into Angular Universal](https://daily-dev-tips.com/posts/converting-a-regular-angular-application-into-angular-universal/).

And one of the reasons we want this is SEO.
That is where the title and meta service come in super handy.
They can help us set the title and meta descriptions for pages, not just at runtime but on the server-side level.

Meaning all bots can read what we want them to read.

For the result, we should open the source code of a page and see the title and meta description we provided.

![Angular Universal title and meta description](https://cdn.hashnode.com/res/hashnode/image/upload/v1613024972510/jrDJckmMs.png)

## Adding a title to our Angular component

Let's start by opening up our `welcome.component.ts`. This will be our testing ground. Since it's not the main page, we should quickly see the results while viewing the page source.

We start by importing the `Title` service into our component.

```js
import { Title } from '@angular/platform-browser';
```

The next part is to inject the titleService into our constructor.

```js
constructor(private titleService: Title) { }
```

Now we can use the `titleService` throughout this component.

We will use the `ngOnInit` function to set the title.

```js
ngOnInit(): void {
  this.titleService.setTitle('Welcome to my Angular app');
}
```

Now let's test it by running our app in Universal.

```bash
npm run build:ssr && npm run serve:ssr
```

Open the browser and visit our welcome page. We should see the title come into action:

![Angular Title](https://cdn.hashnode.com/res/hashnode/image/upload/v1613023807905/HNeCgBjIn.png)

But the main goal is that it is now adjusted on the server-rendered version, so let's inspect the page source.

![Angular Title in source code](https://cdn.hashnode.com/res/hashnode/image/upload/v1613023937719/NTAY8kAC4.png)

Yes, we got it, this is something crawlers and bots can read 🤩.

## Adding meta tags to our Angular component

With the title working, we can look at tags. The Meta service allows us to create all kinds of cool tags.
We will be focussing on the Meta tags today.

First, let's start by importing the `Meta` service.

```js
import { Title, Meta } from '@angular/platform-browser';
```

Then let's make it available to the component in the constructor.

```js
constructor(private titleService: Title, private metaService: Meta) {}
```

And like we've seen with the title service, we can now call this in the `ngOnInit`.
Let's set a meta description and some tags.

```js
this.metaService.addTags([
  { name: 'keywords', content: 'Welcome, Hello' },
  {
    name: 'description',
    content:
      'We would like to welcome you to the wonderful world of Angular Universal',
  },
]);
```

Let's try it out by running our app once again:

```bash
npm run build:ssr && npm run serve:ssr
```

Now we can expect our head and see if the meta tags are injected:

![Angular Universal meta description](https://cdn.hashnode.com/res/hashnode/image/upload/v1613024540625/kFNs--4-f.png)

And there you go, you now have the power to inject meta descriptions and titles in the server-side rendered application.
This will help crawlers and bots index your website correctly.

You can find today's source code on [GitHub](https://github.com/rebelchris/angular-starter-demo/tree/feature/title-meta).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
