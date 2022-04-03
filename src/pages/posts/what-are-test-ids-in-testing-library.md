---
layout: ../../layouts/Post.astro
title: 'What are test ids in testing library'
metaTitle: 'What are test ids in testing library'
metaDesc: 'What exactly are test ids in testing library and how can we use them?'
image: /images/13-04-2022.jpg
date: 2022-04-13T03:00:00.000Z
tags:
  - testing
---

When working on testing library test cases, you might come across an option when you want to query something that turns out to be super hard to find with normal selectors.

In general, it's best to try and avoid using test-id if you can use any other form of selectors.

For instance, when you want to query for an image element, try to use `findByRole`.

Test-ids are specific attributes you can add to a element and it looks like this:

```html
<div data-testId="your-unique-key">Some value</div>
```

Don't worry. You can filter these out in the outputted code, so they don't appear in the HTML.

## So, when to use test-ids?

We should only use these when we have no other choice.

I'll give some examples of times we used test-ids over something else.

**SVG with multiple paths:**

We have an SVG with multiple paths inside, and we want to track one specific path to control if it is animated or changed color.

```html
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <g id="1">
      <path d="...path" data-testid="path-1" />
    </g>
    <g id="2">
      <path d="...path" data-testid="path-2" />
    </g>
  </defs>
</svg>
```

As you can see, we don't really have a unique way of identifying the path we want to test for.

It could even be that you have many more paths, and they render dynamically based on some criteria.

You can now get these paths by the following test code.

```js
screen.getByTestId('path-1');
screen.getByTestId('path-2');
```

A quick reminder, you can replace the `getBy` with all the [regular query selectors](https://daily-dev-tips.com/posts/testing-library-query-selectors/).

**A dynamic tag**

You have some components that can render multiple outputs, for instance, a header component that can render `h1` to `h6`.

It might be hard to determine which one should be rendered based on certain conditions. This could be a valid reason to use `data-testid` for this component.

**Duplicate tags**

Another reasonable time to use these is if your component renders multiple almost identical tags.

For instance, it could have two very identical buttons but use a different icon.

You could add a test-id here to identify between the two.

Or it could be you have a span element show twice, once for desktop and once for mobile. (This is a bit of an anti-pattern but could happen in rare cases)

**Input types that recur often**

In some cases, it might occur that you are testing a form where it's super hard to identify unique input elements.

This could again be a super valid case for test-ids.

## Conclusion

Use test-ids only if every other query fails.

They can be easy to default to, but try to see what makes a piece of HTML unique and how you can target it based on that uniqueness.

I'm looking forward to hearing what you used test-ids for?

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
