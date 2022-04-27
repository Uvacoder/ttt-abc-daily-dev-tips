---
layout: ../../layouts/Post.astro
title: 'Remix adding resources with the link tag'
metaTitle: 'Remix adding resources with the link tag'
metaDesc: 'The links API is super powerful and Remix enhances these powers'
image: /images/07-05-2022.jpg
date: 2022-05-07T03:00:00.000Z
tags:
  - remix
---

The link tag is a way to add specific resources to your webpage, the most commonly known one is stylesheets.

We can load them in plain HTML by using the link tag like this:

```html
<link rel="stylesheet" href="assets/styles.css" />
```

Another use-case is to load the site's icon like the favicon with this link element.

And last but not least, it's not limited to this. It can be used to preload some assets!

Yes, the [link API](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) is pretty sick and powerful.

## Using the link element in Remix

If you followed along with my [articles on Remix](https://daily-dev-tips.com/tags/remix/), you used one of their fantastic starter where the `root.tsx` file already uses the links element.

In Remix, you can add links to an array like this:

```js
import tailwindStylesheetUrl from './styles/tailwind.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindStylesheetUrl }];
};
```

This `LinksFunctions` can be invoked from every route file you create, so you can also inject very specific stylesheets on different pages.

Inside our render we then simply have to inject a property like this:

```js
export default function App() {
  return (
    <html>
    <head>
	    ...
      <Links />
    </head>
    ...
  );
}
```

If you import this in your root, you don't specifically have to import it on other pages.

## Using specific stylesheets elsewhere

A different single page has some charts that need the CSS stylesheet.
This page can be `about.tsx`, for instance. If we open that up, we can add a links function there like this:

```js
import chartStyles from '../styles/charts.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: chartStyles,
    },
  ];
};
```

And now, if we open the about page, we can see our original tailwind stylesheet and this chart stylesheet injected.

## Types of links

As mentioned, we have the option to add quite a few different types of links.
Let's take a look at some examples.

### Favicon links

First up, a favicon. The icon uses in your web browser.

```js
export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/favicon.png',
      type: 'image/png',
    },
  ];
};
```

### Local links

Then we already saw we could add a local stylesheet. The good thing to note is the import we use.
This import is essential to note as it will make sure Remix will fingerprint this file for production caching. (Making it a unique URL)

```js
import chartStyles from '../styles/charts.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: chartStyles,
    },
  ];
};
```

### External links

We can also load external links by simply passing the full URL to the href property.

```js
export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://example.com/some/styles.css',
      crossOrigin: 'true',
    },
  ];
};
```

### Prefetch images

As mentioned, the links API is very powerful, and it can even be used to prefetch images, for instance.

```js
export const links: LinksFunction = () => {
  return [
    {
      rel: 'prefetch',
      as: 'image',
      href: '/img/bunny.jpg',
    },
  ];
};
```

### Conditional prefetching

The cool part about prefetching is that you can specify media queries for this prefetch.

LEt's say we only want to prefetch this image on bigger screens.

```js
export const links: LinksFunction = () => {
  return [
    {
      rel: 'prefetch',
      as: 'image',
      href: '/img/bunny.jpg',
      media: '(min-width: 1000px)',
    },
  ];
};
```

### Conditional adding stylesheets

We can also use the above media technique to add stylesheets only on certain queries:

```js
export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: printStyles,
      media: 'print',
    },
    {
      rel: 'stylesheet',
      href: highResStyles,
      media: 'screen and (min-resolution: 300dpi)',
    },
  ];
};
```

And that's it. The links element in Remix is super powerful, as it's built on the native links API.
I love that Remix takes such a promising premise of using what is already there and enhancing the browser capabilities.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
