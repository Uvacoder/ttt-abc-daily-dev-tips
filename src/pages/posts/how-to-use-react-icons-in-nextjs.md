---
layout: ../../layouts/Post.astro
title: 'How to use React icons in Next.js'
metaTitle: 'How to use React icons in Next.js'
metaDesc: 'How to load icons in a React Next.js application'
ogImage: /images/05-10-2021.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/bb476ec0-ae6d-4e72-4821-a434a395ff00
date: 2021-10-05T03:00:00.000Z
top: true
tags:
  - nextjs
---

Icons are a big part of most websites/applications. So let's take a look at how we can use React icons in a Next.js project.

React icons is one of the most popular icon libraries for React-based projects.
It utilizes ES6 imports meaning we only load the icons we use!

## Loading React icons in Next.js

We first have to add the package to our project by running the following command in your project folder to get started.

```bash
npm i react-icons
```

Then we can get started by importing the icons.
Head over to the [React icons website](https://react-icons.github.io/react-icons) and find the icon you would like to use (use the left-hand search).

Then on the component we want to use the icon, we can import it like so:

```jsx
import { BsGrid3X3GapFill } from 'react-icons/bs';

<button>
  <BsGrid3X3GapFill />
</button>;
```

Let's put that to use and modify the [grid/list view toggle](https://daily-dev-tips.com/posts/nextjs-toggle-between-grid-and-list-view/) we just created.

## Loading multiple React icons in Next.js

We'll need two icons: a grid and a list icon.
I've chosen both from the same icon set ([bootstrap](https://react-icons.github.io/react-icons/icons?name=bs)).

Let's load both icons:

```js
import { BsGrid3X3GapFill, BsList } from 'react-icons/bs';
```

And then, instead of the plain text we had, let's change that into containing our icons.

```jsx
<div className='flex justify-end p-5'>
  <button
    className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'
    onClick={() => setToggleViewMode(!toggleViewMode)}
  >
    {toggleViewMode ? <BsGrid3X3GapFill /> : <BsList />}
  </button>
</div>
```

And that's it. We now have our React icons set up in a Next.js application.

You can find the complete code example on [GitHub](https://github.com/rebelchris/next-tailwind/tree/icons).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
