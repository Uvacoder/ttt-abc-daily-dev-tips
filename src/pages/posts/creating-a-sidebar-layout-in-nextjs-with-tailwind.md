---
layout: ../../layouts/Post.astro
title: 'Creating a sidebar layout in Next.js with Tailwind'
metaTitle: 'Creating a sidebar layout in Next.js with Tailwind'
metaDesc: 'Learn how to make a sidebar layout in Next.js 12 using Tailwind v3'
image: /images/31-01-2022.jpg
date: 2022-01-31T03:00:00.000Z
tags:
  - nextjs
  - tailwind
---

We will create a website layout in Next.js powered by Tailwind CSS for all the styling.

The main goal is to show you how to make a reusable layout and be able to navigate between the pages you created.

A showcase of the result:

<!-- ![Creating a sidebar layout in Next.js with Tailwind](https://cdn.hashnode.com/res/hashnode/image/upload/v1642834367343/n1ByKldm0.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1642834394/next-sidebar_kotys7.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1642834394/next-sidebar_lskuwp.mp4" type="video/mp4" />
</video>

## Setting up the Next.js sidebar project

Start by setting up the project first, open your favorite terminal, and start a new Next.js project.

> Note: At the time of writing, this is Next 12

```bash
npx create-next-app next-sidebar
```

Then go into your project, and let's add Tailwind CSS.
We'll be adding Tailwind v3. If you want to use v2, check out this article on [installing Tailwind in Next.js](https://daily-dev-tips.com/posts/setting-up-nextjs-with-tailwind-css/).

```bash
# Install all the dependencies
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# Initialise tailwind
npx tailwindcss init -p
```

Add the following files to the `content` option.

```js
content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
```

And the last step is to add the Tailwind stylesheets to our `styles/global.scss` file.

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

That's it. We are all set to start making the application.

## Adding all the pages

For this article, we'll be building three pages:

- Homepage
- About
- Contact

Let's first change the homepage. You can remove everything inside the `index.js` file and replace it with the following.

```js
export default function Home() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Home</h1>
      <span className='text-7xl'>🏡</span>
    </div>
  );
}
```

Add a new file called `about.js` inside the `pages` directory and add the following code.

```js
export default function About() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>About</h1>
      <span className='text-7xl'>💬</span>
    </div>
  );
}
```

And in the same way, add a `contact.js` file.

```js
export default function Contact() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Contact</h1>
      <span className='text-7xl'>📞</span>
    </div>
  );
}
```

Now we have all our pages, at this point, you'll be able to run the script and see your basic pages.

However, were have no way of navigating between them.

## Adding a sidebar layout in Next.js

We'll be using a [Next.js layout](https://daily-dev-tips.com/posts/creating-a-reusable-layout-in-nextjs/).

This layout file will be our main wrapping element, and each page will be rendered as a child element.

First, create a `components` directory in your project, and inside add a `layout.js` file.

The global structure for this file looks like this:

```js
export default function Layout({ children }) {
  return (
    // Todo
  );
}
```

Now add this layout component in your `_app.js` file so it will be used:

```js
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

Let's start by defining our elements. We want a header aside and the main section.

```html
<div className="min-h-screen flex flex-col">
  <header
    className="bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase"
  >
    Next.js sidebar menu
  </header>
  <div className="flex flex-col md:flex-row flex-1">
    <aside className="bg-fuchsia-100 w-full md:w-60"></aside>
    <main className="flex-1">{children}</main>
  </div>
</div>
```

This will give us the main setup. Now, all we need to add is the actual menu inside the aside element.

For this, let's introduce an array of the pages we want to add.

```js
const menuItems = [
  {
    href: '/',
    title: 'Homepage',
  },
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/contact',
    title: 'Contact',
  },
];
```

Now inside our aside, we can loop over these elements and add a link for them.

```html
<aside className='bg-fuchsia-100 w-full md:w-60'>
  <nav>
    <ul>
      {menuItems.map(({ href, title }) => (
        <li className='m-2' key={title}>
          <Link href={href}>
            <a
              className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer`}
            >
              {title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
</aside>
```

> Note: Don't forget to import `import Link from 'next/link';`

The last thing we want to add is an active page. This should look slightly different so users can quickly see which page they are on.

For this, let's import the router and define a router variable.

```js
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  // Our code
}
```

Then inside our a href classes, we can add a dynamic check to see if this href is the active page.

```html
${router.asPath === href && 'bg-fuchsia-600 text-white'}
```

And that's it. We now have a dynamic sidebar layout in Next.js!

This can be an excellent starter for your next project.

You can find the completed code on [GitHub](https://github.com/rebelchris/next-sidebar).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
