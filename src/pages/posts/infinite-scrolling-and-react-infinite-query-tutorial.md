---
layout: ../../layouts/Post.astro
title: 'Infinite scrolling and React Infinite Query tutorial'
metaTitle: 'Infinite scrolling and React Infinite Query tutorial'
metaDesc: 'Tutorial on how to add infinite scrolling to React Infinite Query [2022]'
image: /images/09-02-2022.jpg
date: 2022-02-09T03:00:00.000Z
tags:
  - react
---

In the previous article, we looked at using the [React Infinite Query](https://daily-dev-tips.com/posts/infinite-loading-with-react-query/).
However, we still had a button that we needed to click to load the next set of results.

In this article, I'll help you through the process of making it auto fetch the new data once the user hits the bottom of the list.

It will create an infinite scrolling effect like the ones you see on Instagram, Twitter, and Facebook.

<!-- ![Infinite scrolling and React Infinite Query tutorial](https://cdn.hashnode.com/res/hashnode/image/upload/v1643608403589/PmqIqz1vw.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643608454/infinite-scroll_rjhgqh.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643608454/infinite-scroll_b6cnyf.mp4" type="video/mp4" />
</video>

## Add the infinite scroll effect to React Infinite Query

We'll keep the implementation as we had in the [previous article](https://daily-dev-tips.com/posts/infinite-loading-with-react-query/).

Let's add a reference to the button by using the `useRef` hook.

```js
const loadMoreRef = useRef();

<button ref={loadMoreRef}>
```

The useRef hook can reference a dom element, which we can listen to or interact with.

For us, this action is to listen at once. This is at the bottom of the screen.

To allow it to be actioned on, we need to use something else, in our case, an `IntersectionObserver`.
This unique API can be used to determine when we are intersecting a specific element.

And even attach a margin and threshold to make it work for you.

However, we should wrap this entirely in a [`useEffect` hook](https://daily-dev-tips.com/posts/react-basics-explaining-the-useeffect-hook/), as we want to stop it from evaluating when a specific condition is met.

```js
useEffect(() => {
  if (!hasNextPage) {
    return;
  }

  // The rest of our code
}, [loadMoreRef.current, hasNextPage]);
```

We listen to the ref we just set and the `hasNextPage` query from the Infinite Query.
Once this is no longer available, we should stop doing anything else.

Now we can add the intersection observer inside this `useEffect` hook.

```js
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => entry.isIntersecting && fetchNextPage()),
  {
    root: null,
    margin: '0px',
    treshold: 1.0,
  }
);
```

Here we define the observer. The first part is the callback function that will execute. In our case, we want to make sure an entry intersects, and if this is the case, we fire the `fetchNextPage` function.

Then we define the parameters. In our case, they default as we don't need to tweak them.
The root set to null refers to the browser's viewport.

Then we want to define if we have a current ref set. If this is the case, we want to start observing it.

```js
const el = loadMoreRef && loadMoreRef.current;

if (!el) {
  return;
}

observer.observe(el);
```

And that's it. If we now scroll and hit the bottom of the page, it will fire the next page query.

This makes it automatically fetch new pages until there are no more to load.

> Note: This will be a perfect element to convert to a [custom hook](https://daily-dev-tips.com/posts/react-basics-creating-a-custom-media-query-hook/) 💡

You can try it out in this Code Sandbox.

<iframe src="https://codesandbox.io/embed/nervous-andras-3zw9x?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="nervous-andras-3zw9x"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
