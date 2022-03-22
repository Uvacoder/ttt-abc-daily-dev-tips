---
layout: ../../layouts/Post.astro
title: 'Adding Netlify redirects to an Eleventy site'
metaTitle: 'Redirects for an Eleventy site with Netlify [2022]'
metaDesc: 'Learn how to add 301 redirects to a Eleventy site hosted on Netlify in this code tutorial.'
image: /images/27-11-2020.jpg
date: 2020-11-27T03:00:00.000Z
tags:
  - static
---

Hey guys, a "weird" tutorial for today.
You might think ok adding some 301 redirects can't be so difficult, but the combination of Netlify and Eleventy has some quirks to it.

Normally redirects would happen, in for example, an `.htaccess` file. In the case of Netlify, they want us to create a **`_redirects` file**.

Alright, simple enough.

Let's add a **\_redirects** file to our Eleventy project.

**But here comes the difficulty:** Eleventy won't output `_` prefixed files.

## How to add redirects to an Eleventy site on Netlify

So how do we add Netlify redirects to our Eleventy blog?

I'm going to showcase my approach, there might be more sides to this, but for me just needing a **301 redirect** this worked perfectly:

I've added the `_redirects` file to my `src` and the content looks like this:

```js
/posts/javascript-map-function/ /posts/javascript-map-method/ 301
/posts/javascript-reduce-function/ /posts/javascript-reduce-method/ 301
/posts/javascript-filter-function/ /posts/javascript-filter-method/ 301
```

As you can see I decided to rename function to method, since it's correct that way.

Now if we deploy it, this file would not be passed through. So open the `.eleventy.js` file and adjust as follows:

```js
module.exports = function (config) {
  //All other stuff

  // Passthrough copy
  // All other passthroughs
  config.addPassthroughCopy('src/_redirects');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    passthroughFileCopy: true,
  };
};
```

As you can see, my setup is to take from the `src` directory and output to the `dist` directory.
This might be different from your setup, so be aware of making changes to the folder names.

Where the magic happens is this code:

```js
config.addPassthroughCopy('src/_redirects');
```

Here we tell Eleventy to add the `src/_redirects` file to our output folder (which is the dist folder).

If we then run the deployment, Netlify deploy center will show the that the redirect rules are processed:

![Netlify eleventy 301 _redirects](https://cdn.hashnode.com/res/hashnode/image/upload/v1606043639167/o7t8FMHyP.png)

Cool, we now have three redirects set up for Eleventy on Netlify!

You can also do the same for the `_headers` file if you need that.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
