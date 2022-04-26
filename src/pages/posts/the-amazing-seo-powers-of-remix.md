---
layout: ../../layouts/Post.astro
title: 'The amazing SEO powers of Remix'
metaTitle: 'The amazing SEO powers of Remix'
metaDesc: "Let's see how we can add SEO tags to our Remix website"
image: /images/06-05-2022.jpg
date: 2022-05-06T03:00:00.000Z
tags:
  - remix
---

All modern frameworks focus more and more on SEO and how to make it easier for the developers to incorporate this into their websites.

SEO stands for Search Engine Optimization and comes down to how well you optimize your website for the search engines.

> Note: Check out these [five tags to get started with SEO](https://daily-dev-tips.com/posts/exploring-5-meta-tags-to-help-beginners-with-seo/).

## Where does Remix render SEO tags

Remix has a super nifty hook to set your Metadata, and it all starts in the `root.tsx` file.

You can find the basic meta setter there in the form of this function:

```js
export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix Notes',
  viewport: 'width=device-width,initial-scale=1',
});
```

As you can see, we only set some basics here. We'll dive a bit deeper into changing this in follow-up sections.

Then in the render below we use the `<Meta />` element to render the actual section like this:

```js
export default function App() {
  return (
    <html lang='en' className='h-full'>
      <head>
        <Meta />
        <Links />
      </head>
      ...
    </html>
  );
}
```

The cool part about this setup is that we can use this `MetaFunction` from everywhere in our app.

When we inspect our source code for any of our pages, we should at least see the following.

```html
<head>
  <meta charset="utf-8" />
  <title>Remix Notes</title>
  <meta content="width=device-width,initial-scale=1" name="viewport" />
</head>
```

## Setting the meta props on a single page

Let's take our [Pokémon example](https://daily-dev-tips.com/posts/remix-loading-data-from-an-external-api/) as the baseline.

Open up the `routes/pokemon/index.tsx` file and let's add the meta function there:

```js
export const meta: MetaFunction = () => ({
  title: 'The complete Pokémon list',
  description: 'This is the list with all existing Pokémon.',
});
```

You might have spotted we added a description, which we didn't use before.
This is not an issue for Remix, as it will simply add it to this page alone.

It results in the following HTML output for this `/pokemon` page.

```html
<head>
  <meta charset="utf-8" />
  <title>The complete Pokémon list</title>
  <meta content="width=device-width,initial-scale=1" name="viewport" />
  <meta
    content="This is the list with all existing Pokémon"
    name="description"
  />
</head>
```

## Dynamic SEO tags in Remix

We used some static tags until now, where we define the strings we want to set.

But what happens if we want to add dynamic SEO tags on our single Pokémon page?

Remember how we used the loader function on this single page?
We can use that returned data in our metafunction by simply passing it.

```js
export const meta: MetaFunction = ({
  data,
}: {
  data: LoaderData | undefined,
}) => {
  if (!data) {
    return {
      title: 'Pokémon not found',
      description: 'We could not find this Pokémon',
    };
  }

  const name = data.pokemon.name;
  return {
    title: `This is the amazing ${name}`,
    description: `We caught the Pokémon with the name: ${name}`,
  };
};
```

Here we get the data property that our loader provided.
We can then determine if the data is available and even add a fallback for when we can't find it.

Let's say we open the `/pokemon/charizard` page, we then get the following meta tags:

```html
<head>
  <meta charset="utf-8" />
  <title>This is the amazing charizard</title>
  <meta content="width=device-width,initial-scale=1" name="viewport" />
  <meta
    content="We caught the Pokémon with the name: charizard"
    name="description"
  />
</head>
```

Perfect! We made it dynamic now.

## Remix SEO options

So far, we only touched on some very basic SEO tags we can set with Remix, but there are tons we can set using this metafunction.

We can use all meta tags and even set our custom ones if you ever need to.

To find a complete list of all meta tags, visit the following website: [Meta tags overview](https://www.metatags.org/all-meta-tags-overview/).

For an example of something we could set:

```js
export const meta: MetaFunction = () => {
  return {
    charset: 'utf-8',
    description: 'Welcome to our Remix app',
    keywords: 'Remix,app',
    'twitter:image': 'https://remix.app/social.png',
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@DailyDevTips1',
    'twitter:site': '@DailyDevTips1',
    'twitter:title': 'Remix app',
    'twitter:description': 'Chris created this Remix app, check it out',
    custom: 'Something custom you like.',
  };
};
```

Which would result in the following HTML:

```html
<head>
  <meta charset="utf-8" />
  <meta content="Welcome to our Remix app" name="description" />
  <meta content="Remix,app" name="keywords" />
  <meta content="https://remix.app/social.png" name="twitter:image" />
  <meta content="summary_large_image" name="twitter:card" />
  <meta content="@DailyDevTips1" name="twitter:creator" />
  <meta content="@DailyDevTips1" name="twitter:site" />
  <meta content="Remix app" name="twitter:title" />
  <meta
    content="Chris created this Remix app, check it out"
    name="twitter:description"
  />
  <meta content="Something custom you like" name="custom" />
</head>
```

I must say, I'm pretty impressed with how easy Remix makes it to set these SEO properties out of the box.

You can also look at my [source code on GitHub](https://github.com/rebelchris/remix-starter/tree/seo).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
