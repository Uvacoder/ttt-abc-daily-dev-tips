---
layout: ../../layouts/Post.astro
title: 'Creating a custom Eleventy filter'
metaTitle: 'Creating a custom Eleventy filter'
metaDesc: "Let's see how you can make your own custom filter in Eleventy."
image: /images/23-01-2021.jpg
date: 2021-01-23T03:00:00.000Z
tags:
  - eleventy
---

I wanted to make this article a bit bigger but hit a roadblock when trying to use filters in Eleventy.

So I decided to dedicate this article to showcasing how filters can work in Eleventy.

A filter is a function we can extend in our frontend by calling the pipe `|` delimiter followed by the function.

```js
{
  {
    someVar | uppercase;
  }
}
```

The `uppercase` is then counted as our filter.

## Eleventy Filter types

Eleventy knows quite a few filter types, as mentioned on their [documentation on Filters](https://www.11ty.dev/docs/filters/)

```js
module.exports = function(eleventyConfig) {
  // Liquid Filter
  eleventyConfig.addLiquidFilter("uppercase", function(value) { … });

  // Nunjucks Filter
  eleventyConfig.addNunjucksFilter("uppercase", function(value) { … });

  // Handlebars Filter
  eleventyConfig.addHandlebarsHelper("uppercase", function(value) { … });

  // JavaScript Template Function
  eleventyConfig.addJavaScriptFunction("uppercase", function(value) { … });

  // or, use a Universal filter (an alias for all of the above)
  eleventyConfig.addFilter("uppercase", function(value) { … });
};
```

We are going to use the Universal filter method.

What I missed in the documentation was the ability to add parameters to the function.

## Adding arguments to the filter

So far, we have been talking about an `uppercase` filter, but we want to make a `filteredPosts` one.

What it should do:

Filter posts and slice the first `{x}` from the results

You might wonder why?

Because my layout uses three different layouts, it made more sense to split them.

```js
{% set firstItem = pagination.items[0] %}
{% set secondItem = pagination.items[1] %}
{% set postListItems = pagination.items | filteredPosts(2) %}
```

Here you can see how I set my variables.

You might have spotted the filter already!
And, more importantly, how the argument is passed to it.

`filteredPosts(argument)`

## Building the filtered post filter

We must modify our `.eleventy.js` file to build this filter.

```js
config.addFilter('filteredPosts', function (value, argument) {
  return modifiedValue;
});
```

This is our universal filter that accepts the argument. It consistently receives the value, but the second part is the argument.

We want to strip out the first two elements, for which we can use the `slice` method.

I had some issues using [slice vs. splice](https://daily-dev-tips.com/posts/vanilla-javascript-slice-vs-splice/), but a quick refresh on those made me realize we can use splice to modify the incoming value, remove the first two elements and return it.

```js
config.addFilter('filteredPosts', function (value, limit) {
  value.splice(0, limit);
  return value;
});
```

That ensures the first two elements are cut from the array since we already assigned them to their variables.

## Adding multiple arguments

We can, of course, also send multiple arguments to our Eleventy Filter.

```js
{% set postListItems = collections.posts | filteredPosts(0, 2) %}
```

And receive them as such:

```js
config.addFilter('filteredPosts', function (value, from, limit) {
  value.splice(from, limit);
  return value;
});
```

We could even set default values:

```js
config.addFilter('filteredPosts', function (value, from = 0, limit = 2) {
  value.splice(from, limit);
  return value;
});
```

There you go. I hope this helps someone create their cool filters with Eleventy 🤩.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
