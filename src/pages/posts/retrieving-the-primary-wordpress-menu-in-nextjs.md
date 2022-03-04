---
layout: ../../layouts/Post.astro
title: 'Retrieving the primary WordPress menu in Next.js'
metaTitle: 'Retrieving the primary WordPress menu in Next.js'
metaDesc: 'How to render the WordPress primary menu in a Next.js website'
image: /images/27-09-2021.jpg
date: 2021-09-27T03:00:00.000Z
tags:
  - wordpress
  - nextjs
---

By now, we have the option to get all [post from WordPress](https://daily-dev-tips.com/posts/loading-wordpress-posts-in-nextjs/), and [pages from WordPress](https://daily-dev-tips.com/posts/rendering-all-wordpress-pages-in-nextjs/) in our Next.js website.

A big thing I wanted to automate in this process has the primary menu to load in our Next.js website automatically.

## Setting up the primary menu in WordPress

Let's have a look at how we can set up the primary menu in WordPress.

Head over to the `Appearance` > `Menus` section of WordPress.
Add a new menu. You can choose the menu name you would like. This doesn't matter.

As the display location pick `Primary menu`, this will make this menu set up the main menu for our website.

You can then go ahead and add menu items as you wish.

![Primary menu item in WordPress](https://cdn.hashnode.com/res/hashnode/image/upload/v1632114263391/VCCeLcn2Z.png)

## Query the WordPress menu in Next.js

Now let's head over to our Next.js website and open the `lib/api.js` file.
We'll start by adding our query to get this primary menu.

```js
export async function getPrimaryMenu() {
  const data = await fetchAPI(`
  {
    menus(where: {location: PRIMARY}) {
      nodes {
        menuItems {
          edges {
            node {
              path
              label
              connectedNode {
                node {
                  ... on Page {
                    isPostsPage
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `);
  return data?.menus?.nodes[0];
}
```

This query will get the menu set as the `PRIMARY` location menu and retrieve all nodes connected to it.

For the Page type, we get the slug and the boolean value for `isPostsPage`, which tells us if the page is our blog.

## Showing the menu

The next step will be to show the menu on the front end.
Let's create a new component for that.

We'll call this component the `Header` component. Go ahead and create a `components` folder in the main project, and inside, create a `Header.js` file.

Inside this file, we will receive the menu items from our parent file, including the header.
As well as render each item.

```js
const Header = ({menuItems: {menuItems}}) => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-blue-500 shadow-lg">
      <ul className="flex items-center justify-end flex-grow w-full">
        {menuItems.edges.map((item) => (
          <li key={item.node.path}>
            <a
              className="p-4 ml-2 text-white hover:underline"
              href={item.node.connectedNode.node.slug}
            >
              {item.node.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
```

## Using the header

For now, let's see how this will work by adding this header to our main `index.js` page.

We'll look at improving this in another article.

First let's fix the imports we need:

```js
import {getLatestPosts, getPrimaryMenu} from '../lib/api';
import Header from '../components/Header';
```

Then we can modify the `getStaticProps` function to include the menu as well.

```js
export async function getStaticProps() {
  const latestPosts = await getLatestPosts();
  const menuItems = await getPrimaryMenu();
  return {
    props: {latestPosts, menuItems},
  };
}
```

And lastly, we can introduce the header so we can see what it will look like:

```js
export default function Home({latestPosts: {edges}, menuItems}) {
  return (
    <>
      <Header menuItems={menuItems} />
      // Other code
    </>
  );
}
```

![WordPress menu in Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1632117506028/SVbgncBkH.png)

And there you go, we loaded our primary WordPress menu into our Next.js website.
However, this is not the final implementation, so keep an eye out for the next article set.

You can find today's code on [GitHub](https://github.com/rebelchris/next-tailwind/tree/wordpress-menu) as well.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
