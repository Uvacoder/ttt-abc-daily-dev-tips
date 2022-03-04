---
layout: ../../layouts/Post.astro
title: 'Astro moving from collections to dynamic routing'
metaTitle: 'Astro moving from collections to dynamic routing'
metaDesc: 'Migrating Astro collections to Dynamic routing'
image: /images/28-08-2021.jpg
date: 2021-08-28T03:00:00.000Z
tags:
  - astro
---

Since Astro is relatively new, elements are still evolving and changing for the better.
We set up a recipe website in Astro using their collections. However, this is now changed to dynamic routing.

The principal is still the same, but the implementation became more straightforward and quicker.

This article will walk you through the change needed to move from Astro collections to Astro dynamic routing.

If you have read my older articles on collections in Astro, those are now modified to work with dynamic routing:

- [Astro recipe collection website - Part 1 Setup collections](https://daily-dev-tips.com/posts/astro-recipe-collection-website-part-1-setup-collections/)
- [Astro recipe collection website - Part 3 Category filter pages](https://daily-dev-tips.com/posts/astro-recipe-collection-website-part-3-category-filter-pages/)

## An overview of Astro dynamic routing

Astro is a static site generator, meaning once we build, we get one output. Astro can't randomly generate a new page unless we run another build.

However, it can generate these dynamic pages on build time.
We have to use `[bracket].astro` notation for our files when we want to use this.

These bracket files will have a `getStaticPaths()` export function.

> You might notice this was the `createCollection()` method before.

Some of these files might look like this:

- `pages/blog/[slug].astro`: Which will generate pages like: `blog/hello-world`, or `blog/post-2`.
- `pages/[username]/settings.astro`: Gives us a page like `chris/settings`, or `fred/settings`.
- `pages/recipes/all/[...page].astro`: Gives us the option for pagination: `recipes/all`, or `recipes/all/2`.

As you can see, this is super powerful also because it allows multiple brackets in the structure:

- `pages/recipes/[slug]/[...page].astro`: Giving us URLs like: `recipes/breakfast`, or `recipes/dinner/2`.

## Converting a collection into dynamic routes in Astro

Let's take our recipe `/all` collection as an example of how we can move from a collection to dynamic routes in Astro.

Before, we had a page like this: `pages/$recipes.astro`.

Which had a export like so:

```js
export async function createCollection() {
  const allRecipes = Astro.fetchContent('./recipe/*.md').sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  return {
    paginate: true,
    route: '/recipes/:page?',
    async props({paginate}) {
      return {
        recipes: paginate(allRecipes, {pageSize: 5}),
      };
    },
  };
}

const {recipes} = Astro.props;
```

This would give us URLs like: `recipes/1` and `recipes/2`.

We have to create another folder level in our `pages` folder to achieve the same with dynamic routes.
This being the `recipes` folder.

Inside the new recipes folder create a file called: `[...page].astro`. We use the three dots to allow paginated URLs to work and a URL with nothing behind it.
Some examples being: `recipes`, `recipes/3`, or `recipes/10`.

This file will look way simpler compared to the old collection:

```js
export async function getStaticPaths({paginate}) {
  const allRecipes = Astro.fetchContent('./../recipe/*.md').sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  return paginate(allRecipes, {pageSize: 5});
}

const {page} = Astro.props;
```

Easier right!

In the old setup, we used the `recipes` variable as our output. In the new version, we use the page object.
This will now have several properties:

- `page.data`: The actual data for this page
- `page.start`: Index of the first item of the page
- `page.end`: Index of the last item on the page
- `page.size`: Number of items on this page
- `page.total`: Total number on all pages combined
- `page.currentPage`: Current page, starting at 1
- `page.lastPage`: Total number of pages
- `page.url.current`: Current URL
- `page.url.prev`: Link to the previous page
- `page.url.next`: Link to the next page

## Conclusion

Dynamic routing is a bit of a change in the file structure but gives us way more freedom, primarily because of the multiple slug options per route.

It's also a pretty straightforward way of migrating from the old way of doing things to this new routing structure.

I hope you enjoyed this and will give Astro a shot.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
