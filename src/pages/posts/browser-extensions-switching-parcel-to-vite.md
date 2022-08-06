---
layout: ../../layouts/Post.astro
title: 'Browser extensions - switching Parcel to Vite'
metaTitle: 'Browser extensions - switching Parcel to Vite'
metaDesc: 'Switching from Parcel to Vite in a browser extension'
ogImage: /images/16-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/34d04827-39b7-4db7-b595-98f04c520c00
date: 2022-08-16T03:00:00.000Z
tags:
  - browser-extensions
---

Not that there was anything wrong with Parcel, but I wanted to try out Vite.

So instead of doing it all from scratch, let's look at how we can migrate from Parcel to Vite.

> Note: You can also use this article as a guide on building an extension powered by Vite.

If you want to follow along with the article and try it out, use the following [GitHub branch](https://github.com/rebelchris/new-tab-extension/tree/react) as your starting point.

For those who don't know Vite yet, it's a build tool we can use to run a development server, and output builds.
It's very similar to Parcel, and at this point of my research, it comes down to personal preferences to pick.

## Cleaning up Parcel

My first process was to clean up the existing Parcel config and related items.

- Remove the following file `.parcelrc`.
- Then, open the `package.json` and remove the following lines.

```json
"parcel": "^2.7.0",
"parcel-reporter-static-files-copy": "^1.3.4",
```

Also, remove all the existing scripts in the `package.json` file. We'll come back to add new ones.

Now run an `npm i` to remove the packages.

At this point, our app is no longer powered by Parcel, but nothing powers it now, so we'll have to fix it.

## Adding Vite

Let's start by adding the packages we need.
As I'm running React, I need the react plugin. This might differ if you use other frameworks.

I also added the new scripts that are needed for Vite.

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vite": "^3.0.4"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^2.0.0"
  }
}
```

> Note: These are only the changes. Your `package.json` should have some more lines already.

Now run `npm i` to install the new dependencies.

This won't run by default as Vite uses a slightly different approach than Parcel.
The first thing we want to change is renaming all our `.js` files to `.jsx`. (this is not a must, but easier)

- `App.js` => `App.jsx`
- `Counter.js` => `Counter.jsx`
- `index.js` => `index.jsx`

While doing this, move the `index.jsx` file inside your `src` directory. (Don't forget to change the import inside the `new-tab.html` file)

Now rename the `static` folder to `public`, as Vite uses the public folder in favor of static.

Then we also need to modify our `tailwind.config.js` file to use `.jsx` files rather than `.js`.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  - content: ['src/*.js'],
  + content: ['src/*.jsx'],
};
```

And lastly, we need to define a `vite.config.js` file at the root of our project.
In here, we need to tell Vite it's a React project.
Since we are not using an `index.html` file, we can also notify Vite that we have a different entry point: `new-tab.html`.

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        app: './new-tab.html',
      },
    },
  },
});
```

And that's it. You can now try a new build by running the following command.

```bash
npm run build
```

To test it out, you must follow the steps described in [this article](https://daily-dev-tips.com/posts/browser-extensions-new-tab-extension/#testing-the-extension), but pick the `dist` folder to be loaded.

And you are done. You converted the Parcel build to use Vite instead.

You can also find the complete code sample on this [GitHub repo](https://github.com/rebelchris/new-tab-extension/tree/vite).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
