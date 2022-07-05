---
layout: ../../layouts/Post.astro
title: 'React cleaner use of setTimeout'
metaTitle: 'React cleaner use of setTimeout'
metaDesc: 'Creating a custom hook to use setTimeout and clear it out automatically'
ogImage: /images/15-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/33fec8a3-b245-4ab3-8741-5b8ea31f1900
date: 2022-07-15T03:00:00.000Z
tags:
  - react
---

When working with `setTimeout` we generally don't have to worry about cleaning up our timeouts.

However, introducing it into React can create some nasty edge-cases.

This often happens because we want to manipulate data after x time.
The component might be unmounted by then, but the timeout is still trying to activate.

You might see some edge cases where your interactions seem to be reverted.
Or even get memory leak messages in your console.

## Clear your timeouts!

The general rule of advice is to keep track of the timeouts you create in your code and clean them.

To clean your timeouts, we can leverage the [useEffect cleanup function](https://daily-dev-tips.com/posts/react-useeffect-cleanup/).

A quick example could look like this:

```js
export default function Test() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const test = window.setTimeout(() => {
      setShow(false);
    }, 1500);
    return () => {
      clearInterval(test);
    };
  }, []);

  return (
    <div>
      <h1>Loading...</h1>
      {show && <p>I'm fully loaded now</p>}
    </div>
  );
}
```

However, I prefer to use a reference to clear the interval.

```js
const timeoutRef = useRef();

useEffect(() => {
  timeoutRef.current = window.setTimeout(() => {
    setShow(false);
  }, 1500);
  return () => clearInterval(timeoutRef.current);
}, []);
```

This will work, but it's a bit of a hassle to remember to clean this up on unmount, etc.

So why not create a small hook for it?

## React useTimeout hook

We can start by introducing a `useTimeout` hook.
This hook will be our React version of the `setTimeout` function.

This hook should have the following options.

- Receive the callback function (an action that should happen after the timeout)
- Receive the delay (time for it to timeout)
- Return a function that can be invoked to start it

```js
import { useCallback, useEffect, useRef, useMemo } from 'react';

export default function useTimeout(callback, delay) {
  const timeoutRef = useRef();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    return () => window.clearTimeout(timeoutRef.current);
  }, []);

  const memoizedCallback = useCallback(
    (args) => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
        callbackRef.current?.(args);
      }, delay);
    },
    [delay, timeoutRef, callbackRef]
  );

  return useMemo(() => [memoizedCallback], [memoizedCallback]);
}
```

First, we see the parameters passed as `callback` and `delay`.
Then we add two references to keep track of the active timeout and active callback.

Then we'll need two `useEffects`, the first one to listen to the callback in case it changes after rendering (this could happen if you change any state inside the callback).

The second one is used to handle the cleanup effect for the timeout. (When the component gets unmounted)

Then we create a `useCallback`, where we first clear out any existing timeouts in our ref.
Then we assign the new timeout. This whole callback listens to changes on all our variables.

And the last part is to return a memoized function that will listen to changes on its callback.

This might seem an overkill method, but it will help solidify your timeouts and keep everything as clean as possible.

### Using the hook

To use the hook, we can introduce the following code.

```js
import useTimeout from './useTimeout';

const [timeout] = useTimeout(() => {
  setShow(false);
}, 1500);

timeout();
```

Wow, way cleaner, right?
And now, we only have one place to keep track of our timeouts and ensure they are constantly cleaned up.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
