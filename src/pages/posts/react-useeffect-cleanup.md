---
layout: ../../layouts/Post.astro
title: 'React useEffect cleanup'
metaTitle: 'React useEffect cleanup'
metaDesc: 'How to use the cleanup effect in a react useEffect hook'
image: /images/20-03-2022.jpg
date: 2022-03-20T03:00:00.000Z
tags:
  - react
---

[React's useEffect hook](https://daily-dev-tips.com/posts/react-basics-explaining-the-useeffect-hook/) is a super hook to run side effects.
You might be wondering what kind of side effects we could be talking about?

Let's set some examples.

- Change the document title based on rendered values
- Get or set values from local storage
- Run analytics events
- Show some greeting based on time of day
- Focus on a form field after load

## The basic use of useEffect

It will be sufficient to use the hook as intended, so set an example in most cases.

```js
useEffect(() => {
  document.title = `The page is loaded`;
});
```

As we learned before we can set the dependency at which change this needs to fire:

```js
useEffect(() => {
  document.title = `The page ${title} is loaded`;
}, [title]);
```

The above code will only fire once the `title` variable is modified.

We can also opt to run only once on mount, by passing a empty array like this:

```js
useEffect(() => {
  // Only run once
  document.title = `The page ${title} is loaded`;
}, []);
```

## Cleaning up useEffect

The hook comes with a cleanup function, which you might not always need, but it can come in handy.

To invoke the cleanup function you can simply add a return function like so:

```js
useEffect(() => {
  // Your effect

  return () => {
    // Cleanup
  };
}, []);
```

The cleanup can prevent memory leaks and remove unwanted things. Some use-cases for this are:

- Clean up subscriptions
- Clean up modals
- Remove event listeners
- Clear timeouts

Let's create an example where we have a function that adds something only after a specific time.

```js
const [show, setShow] = useState(false);
useEffect(() => {
  let timer = setTimeout(() => setShow(true), 3000);
}, []);
```

However, this will create a timeout in memory, so it would be best to clean this up.

For this let's add the cleanup function:

```js
useEffect(() => {
  let timer = setTimeout(() => setShow(true), 3000);
  return () => {
    clearTimeout(timer);
  };
}, []);
```

Another example is, of course, a web socket call that keeps polling.

```js
useEffect(() => {
  let ws = new WebSocket('wss://ws.your-websocket/');

  ws.onmessage = (msg) => {
    // Do something with the message
  };

  return () => {
    ws.close();
  };
}, []);
```

We open the WebSocket connection, and we can use the cleanup function to close the connection.

Another thing you can use it for is tracking modal close events, for instance.

Let's say we have a modal in our code. Inside the modal component, we could add a useEffect that can fire on cleanup. This way, we capture every event.

A modal could be invoked by another component that cleaned up in the meantime, so there is no way of telling when the user closes it. (Or they close the application)

We can add tracking to fire with a cleanup effect when this happens.

```js
useEffect(() => {
  return () => {
    trackModalClose();
  };
}, []);
```

This way, we have a rock-solid method of tracking when the modal close should be invoked, and you can even add a check to see if the applications as closed or the modal close was invoked.

## Conclusion

I hope you enjoyed this article on the cleanup function for the useEffect hook in React.

Let me know if you have any questions or other use-cases that would be worth exploring.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
