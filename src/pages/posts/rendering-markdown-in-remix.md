---
layout: ../../layouts/Post.astro
title: 'Rendering markdown in Remix'
metaTitle: 'Rendering markdown in Remix'
metaDesc: "Let's see how we can render markdown and MDX in Remix"
image: /images/11-05-2022.jpg
date: 2022-05-11T03:00:00.000Z
tags:
  - remix
---

Another cool out-of-the-box feature of Remix is that it supports markdown.

Both plain markdown and MDX format.

This article will show you how easy it is to get started with markdown for your remix project.

## Using plain markdown files in Remix

Let's create a new directory for our project to get started with plain markdown files in Remix.
We'll call this folder `blog`. (Since we want to keep our posts for now)

Inside this folder, create a `my-first-article.md` file and place the following contents inside of it.

```md
---
meta:
  title: My first article
  description: Fully powered by Markdown
---

# Hello World!

I'm amazing markdown content

## How cool!
```

Now simply run your website and visit the `/blog/my-first-article` endpoint!

You'll be welcomed by the markdown fully rendered!

![Markdown rendered in HTML](https://cdn.hashnode.com/res/hashnode/image/upload/v1651416424240/HbxYetkw2.png)

You might wonder why it all looks the same?
Our source code has all the heading elements, but since we added zero styling, we see everything without it.

I'll tell you more about adding the typography plugin in a follow-up article.

## Rendering MDX in Remix

Besides plain markdown we can also opt for MDX, like super cool, slightly more dynamic version of markdown.

Start by creating an `mdx-sample.mdx` file in the blog directory.

```md
---
componentData:
  name: Chris
---

import Name from "~/components/name";

# Hello MDX!

<Name {...attributes.componentData} />
```

As you can see, we set some component data at the top section and then import a component.

This component then renders this component data.

Let's quickly set up this super basic component.
Create a `components` directory inside your `app` folder.

Create the `name.tsx` file and paste the following component into it.

```js
const Name = ({ name }: { name: string }) => <div>Hello {name}</div>;
export default Name;
```

A super simple component that renders a div that states `hello {name}`.

The name will be received from the markdown file.

Let's look at how it looks when we open this file.

![MDX in Remix](https://cdn.hashnode.com/res/hashnode/image/upload/v1651417117033/NdpjBE8iP.png)

You can also find the complete code samples on [GitHub](https://github.com/rebelchris/remix-starter/tree/markdown).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
