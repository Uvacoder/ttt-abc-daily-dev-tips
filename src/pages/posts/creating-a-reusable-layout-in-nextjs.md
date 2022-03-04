---
layout: ../../layouts/Post.astro
title: 'Creating a reusable layout in Next.js'
metaTitle: 'Creating a reusable layout in Next.js'
metaDesc: 'How to create a reusable layout in Next.js'
image: /images/28-09-2021.jpg
date: 2021-09-28T03:00:00.000Z
tags:
  - nextjs
---

Yesterday we [added a menu to our Next.js application](https://daily-dev-tips.com/posts/retrieving-the-primary-wordpress-menu-in-nextjs/). However, this was hardcoded on one page.

Today we'll take a look at how we can introduce a layout component to have a shared layout for our menu on each page.

## Creating the layout component

Create a file called `layout.js` in the `components` folder.

This file will act as the main layout. In our case, it will render the header and the children for each page.

```js
import Header from './Header';

export default function Layout({children, menu}) {
  return (
    <>
      <Header menuItems={menu} />
      <main>{children}</main>
    </>
  );
}
```

The children are passed through our main page, the `_app.js`, and we will pass the `menu` variable, so we'll have a look at how that works next.

## Retrieving the menu items

Before we go there, let's see how we can retrieve the menu items in one place instead of doing it per page.

For this, we need to open the `_app.js` file. Here we can add a function called `getInitialProps`.

This function can be used to retrieve the menu and eventually pass it to our layout.

```js
import {getPrimaryMenu} from '../lib/api';

MyApp.getInitialProps = async () => {
  const menuItems = await getPrimaryMenu();
  return {menuItems};
};
```

## Passing items to the layout component

Let's see how we can now make sure the layout is used everywhere and pass the menu items.

Let's first add the layout to our `_app.js` file.

```js
import Layout from '../components/Layout';

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

To access the menu items, we have to add them to the `MyApp` function.

```js
function MyApp({Component, pageProps, menuItems}) {
  return (
    <Layout menu={menuItems}>
      <Component {...pageProps} />
    </Layout>
  );
}
```

And with this, we have a fully functional universal layout.

- `_app` loads the menu and passes it to our layout component
- `layout` works as the main layout and renders the header

If we now run our application, we can see the menu work on all pages automatically.

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/layout_glwzmo.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/layout_tlfu9n.mp4" type="video/mp4" />
</video>

<!-- ![Creating a reusable layout in Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1632208147971/Lwx9qRv_b.gif) -->

You can find the complete code on [GitHub](https://github.com/rebelchris/next-tailwind/tree/layout).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
