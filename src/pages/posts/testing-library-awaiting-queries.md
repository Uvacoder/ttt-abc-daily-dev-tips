---
layout: ../../layouts/Post.astro
title: 'Testing library awaiting queries'
metaTitle: 'Testing library awaiting queries'
metaDesc: 'How can we wait for certain actions to happen before we query in Testing library'
image: /images/14-04-2022.jpg
date: 2022-04-14T03:00:00.000Z
tags:
  - testing
---

So far, we have mainly used [direct queries to find elements](https://daily-dev-tips.com/posts/testing-library-query-selectors/).
Sometimes you could have a query that we need to be waited for.

Some examples might be:

- Element fades in
- Element only shows after user interaction
- Element might disappear after a user action

## Using the findBy queries

The easiest way to deal with this is using the findBy queries.
They are a combination of `getBy` and `waitFor`.

Let's say we have some user interaction on a button.
Once we click, we need to wait for the element to re-render with the new text.

```js
const button = screen.getByRole('button');
button.click();
await screen.findByText('Clicked once');
button.click();
await screen.findByText('Clicked twice');
```

As you can see, the two latter ones have a check based on the awaiting promise.

Remember that the testing library is only the selector helper, so we still need to use some testing library, Jest, to check if this is true.

```js
const button = screen.getByRole('button');
button.click();
expect(await screen.findByText('Clicked once')).toBeInTheDocument();
button.click();
expect(await screen.findByText('Clicked twice')).toBeInTheDocument();
```

## Using waitFor

Sometimes we cannot leverage `findBy` queries, maybe because we need to await some function to execute.

Or perhaps we have to await some time to pass before we can do the next thing.

This is precisely where the `waitFor` function comes in handy. We can wrap some code with this.
For example, wrapping a promise with `waitFor` will wait until the promise throws a rejection.

```js
await waitFor(() => {
  expect(mockCall).toHaveBeenCalledTimes(1);
});
```

In the above example, we wait for an API to be called, and only once it's called once will we pass this step.

We can also pass some options to this `waitFor`:

- `container`: The HTML element, by default, the global document
- `timeout`: Default 1000ms
- `interval`: Default 50ms
- `onTimeout`: Prints the container and error in the console, but you can override this
- `mutationObserverOptions`: The actual behavior that checks for changes

## Using the waitForElementToBeRemoved

As we now have seen the `waitFor` in action, we can also leverage `waitForElementToBeRemoved`.

As the name suggests, it can wait for elements to be removed.
It has the same call signature and options as `waitFor`.

It can take one, or multiple elements will wait to be removed.

```js
waitForElementToBeRemoved(document.queryByRole('button')).then(() =>
  console.log('Button no longer in DOM')
);
```

Or in the case of multiple:

```js
waitForElementToBeRemoved(document.queryAllByRole('img')).then(() =>
  console.log('All images are gone')
);
```

And that's how we can wait for elements to show up, be modified, or be removed from the DOM.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
