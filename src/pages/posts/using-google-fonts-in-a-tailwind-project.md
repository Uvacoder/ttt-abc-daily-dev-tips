---
layout: ../../layouts/Post.astro
title: 'Using Google Fonts in a Tailwind project'
metaTitle: 'Using Google Fonts in a Tailwind project'
metaDesc: 'How can we use Google Fonts in a Tailwind CSS file'
image: /images/28-02-2021.jpg
date: 2021-02-28T03:00:00.000Z
tags:
  - css
  - tailwind
---

Many websites leverage Google Fonts to introduce excellent and unique fonts to a website.
And fonts can make or break you're website. Let's take a look at how we can introduce a Google Font into the [plain HTML Tailwind starter](https://daily-dev-tips.com/posts/plain-html-starter-with-tailwind-css/)
we made yesterday.

> If you're looking for any project, check out my article on [how to use Google Fonts](https://daily-dev-tips.com/posts/how-to-use-google-fonts/)

For Tailwind, the process is similar, but we'll use some handy features of the Tailwind config.

The result will look like this:

![Custom Google Font in Tailwind CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1614061248074/YW0J-X1g2.png)

## Loading a Google font

First, head to [Google Fonts](https://fonts.google.com/) and find a cool font you want to use.

Open the font and click the "Select this style" button for each style you like.

![Select Google Font style](https://cdn.hashnode.com/res/hashnode/image/upload/v1614060531226/KCKUtaP8N.png)

With it selected, you'll get a sidebar on the right showing the `<link>` attribute.
Copy this link method.

Now head back to your project and open the `index.html` file. We'll place this import above our styles.css file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- other stuff -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
</html>
```

> Note: The second link is specific to the font you picked.

## Making the Google font available in Tailwind

Now let's extend our Tailwind theme to have it know about this font.

Open the `tailwind.config.js` file and extend the theme's fontFamily option.

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
    },
  },
};
```

If your font, like this example, uses spaces, it's best to use the double escape `'"` it will make sure it's used in the right way.

Our font will now be available as `font-press-start` we can add this to our heading on the homepage like this:

```html
<h1 class="text-6xl font-press-start">Welcome</h1>
```

And that will render the following:

![Google font loaded in Tailwind](https://cdn.hashnode.com/res/hashnode/image/upload/v1614061094307/2RwZtsAH_.png)

You can find this complete code on the following [GitHub repo](https://github.com/rebelchris/HTML-Tailwind-Starter/tree/google-fonts).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
