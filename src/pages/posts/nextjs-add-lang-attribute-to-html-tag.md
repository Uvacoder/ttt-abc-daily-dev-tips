---
layout: ../../layouts/Post.astro
title: 'NextJS add lang attribute to HTML tag'
metaTitle: 'NextJS add lang attribute to HTML tag'
metaDesc: 'How can we add a lang attribute to a Next.JS website'
image: /images/29-05-2022.jpg
date: 2022-05-29T03:00:00.000Z
tags:
  - nextjs
---

When working on accessibility, a common issue you might come across is that your HTML tag doesn't have a lang attribute.

The lang attribute tells the user which language the page is written in.

Some examples of valid lang attributes are:

```html
<!-- French content -->
<html lang="fr"></html>
```

> Note: Find [all languages](https://www.w3schools.com/tags/ref_language_codes.asp) codes here.

We can also extend the use-case to define specific versions of a language, for instance, British English.

```html
<html lang="en-gb"></html>
```

## Adding this lang tag to Next.js

In any regular plain HTML website, we would add this tag to the HTML element. However, in the case of Next.js, we don't have direct access to it.

So to add this tag, we need to use the `next.config.js` file.

```js
module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
```

If your website supports multiple languages, you can even put various values in the `locales` array.

The default locales are then used to set the current one.

You can even use this config to set up custom domains, but we might dive into that separately.

## Alternative method

There is an alternative way of adding a custom HTML tag if you want to override multiple HTML properties.

Inside your `pages` directory, you can add a `_document.js` file.

This page will override the default Next.js document.
Inside of it, add the following structure, and you are good to go.

```js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

And that's it, two different ways of adding the lang tag in Next.js.
I like to use the config way as it's a bit cleaner and future-proof.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
