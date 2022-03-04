---
layout: ../../layouts/Post.astro
title: 'Adding Tailwind to Eleventy'
metaTitle: 'Adding Tailwind to Eleventy'
metaDesc: 'Lets add Tailwind CSS to our Eleventy SSG'
image: /images/21-01-2021.jpg
date: 2021-01-21T03:00:00.000Z
tags:
  - static
  - eleventy
  - tailwind
---

Already on part-3 of our journey to re-create my lifestyle blog in Eleventy.

> Part 1: [Rebuilding my lifestyle blog in eleventy](https://daily-dev-tips.com/posts/rebuilding-my-lifestyle-blog-in-eleventy-part-1/)
> Part 2: [Adding posts to my lifestyle blog in Eleventy](https://daily-dev-tips.com/posts/adding-posts-to-my-lifestyle-blog-in-eleventy-part-2/)

And I've mentioned this from part-1, thinking Tailwind might be the better option. I was right to let's just include Tailwind and got from there.

So in this article, we will learn how to add Tailwind to an Eleventy project.

The end result will be that we can use Tailwind in Eleventy to make cards like this:

![Tailwind in Eleventy](https://cdn.hashnode.com/res/hashnode/image/upload/v1610637759904/lNx1C9Cac.png)

## Installing the dependencies

I've already made use of an SCSS converted, and some other stuff, so let's start by removing those dependencies and re-adding the ones we will need for Tailwind.

In my case, I removed all my dependencies from the `package.json` file and ran the following command.

```bash
npm install --save-dev concurrently @11ty/eleventy autoprefixer postcss-cli tailwindcss
```

This will install all the needed elements as our devDependencies.

Then let's add a new script to process our `CSS` file.

```js
"scripts": {
    "tailwind:process": "npx postcss src/scss/global.css --o src/_includes/assets/css/global.css --watch"
}
```

This is a nom command that will run the postcss to turn our global.css file into the global.css file inside the assets directory.

We can then change our `start` command to run this script.

```js
"scripts": {
	"tailwind:process": "npx postcss src/scss/global.css --o src/_includes/assets/css/global.css --watch",
	"start": "concurrently \"npm run tailwind:process\" \"npm run serve\"",
	"serve": "npx eleventy --serve"
},
```

## Changing our CSS file

Now that we no longer use the custom SCSS file we did in [part-2](https://daily-dev-tips.com/posts/adding-posts-to-my-lifestyle-blog-in-eleventy-part-2/) let's change the `src/scss/global.css` file to look like this:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

That tells the CSS file to include all the [tailwind classes](https://daily-dev-tips.com/posts/converting-existing-css-into-tailwind-classes/).

Now we can also go ahead and run the following command to generate a basic tailwind config:

```bash
npx tailwindcss init
```

This command will generate the `tailwind.config.js` file, which we will leave as is for now.

Also create a `postcss.config.js` file in the root director and add the following:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
```

That tells postcss to render tailwind elements as a plugin.

The last thing I changed is that I added the direct file in the `src/_includes/layouts/base.njk` file as such:

```html
<link rel="stylesheet" href="/global.css" />
```

You might think, but how does this global file get there?

We are going to add it, by changing the `.eleventy.js` file.

```js
config.addPassthroughCopy({
  'src/_includes/assets/css/global.css': './global.css'
});
```

This tells eleventy to move the global.css file to the main dist root so we can use it.

## Testing out Tailwind in Eleventy

Now to test it out let's add a basic div with some classes in our `index.njk` file.

```html
<div class="max-w-sm p-3 m-4 rounded-lg shadow-lg">Testing tailwind</div>
```

This should render a basic block with this styling:

![Tailwind in Eleventy](https://cdn.hashnode.com/res/hashnode/image/upload/v1610637759904/lNx1C9Cac.png)

That's it, we just added Tailwind to our Eleventy project.
Tomorrow we might have a look at how we can redo the menu with Tailwind classes.

If you are following along, you can find today's code on [GitHub](https://github.com/rebelchris/eleventy-todoist/tree/part3).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
