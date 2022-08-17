---
layout: ../../layouts/Post.astro
title: 'React basics: explaining the useEffect hook'
metaTitle: 'React basics: explaining the useEffect hook'
metaDesc: 'How to use the useEffect hook in React'
image: /images/16-10-2021.jpg
date: 2021-10-16T03:00:00.000Z
tags:
  - react
---

Hooks are a superb way to store and manage state inside React components.

The `useEffect` hook gives us an easy way to perform side effects.

Basically this hook replaces the old React class lifecycles like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

You can see it as an invoker that takes arguments.
Let's see some examples of how it works.

If you plan to follow along, I'll be working on my [previous state article](https://daily-dev-tips.com/posts/react-basics-explaining-the-usestate-hook/).

## Using the useEffect hook

To use the hook, we first need to import it from React like so:

```js
import React, { useEffect } from 'react';
```

Then to use it, we could write something like this to change our document title with the latest count.

```js
useEffect(() => {
  console.log('effect called');
  document.title = `#${count} clicks`;
});
```

As you can see, I included a console log, and while we are at it, I've run the program and performed some actions.

- Load: effect called
- Click "Add one", effect called
- Click "Add one", effect called
- Click another state, effect called

So as you can see, this will call the effect every time something changes.

## Only run useEffect on load

But let's say we only want this to run once on load and never again.

This might be handy to load some initial data.

```js
useEffect(() => {
  loadExternalData();
}, []);
```

This is, of course, just an example, but this would only be called once.

You might wonder why? That's because the last argument, `[]` is the state value it should run on.
When we pass an empty array, it only runs on load!

## Running useEffect only for specific changes

This is probably the most used case, where we only want the function to run once our count value changes.

To make that work, we need to pass the count as the value.

```js
useEffect(() => {
  console.log('effect called');
  document.title = `#${count} clicks`;
}, [count]);
```

What happens now is the following:

- Load: effect called
- Click "Add one", effect called
- Click "Add one", effect called
- Click another state, effect **NOT** called

This state value is not limited to just one, we can pass multiple items like so:

```js
useEffect(() => {
  document.title = `#${count} clicks`;
}, [count, state2, state3]);
```

## The unmount of useEffect

The cool part is that the `useEffect` hook also comes with a unmount state.

To invoke this we can use the return callback like so:

```js
useEffect(() => {
  // Do some effect

  return () => {
    // Cleanup
  };
}, [state]);
```

The good thing to remember here is that the cleanup will run every time the state changes and the effect is done, but also on unmount!

To demonstrate, let's use the above example.

- Load: effect called
- Click "Add one", cleanup called, effect called
- Click "Add one", cleanup called, effect called
- Click another state, effect **NOT** called
- Unmount app, cleanup called

This cleanup can, as the name suggests, cleans up things. Some good use cases for this might be:

- Fetch requests
- Timer functions
- Web sockets
- Debounce/throttle

Let's take the web socket as an example of how this could look.
The code only needs to fire on mount, but we need to close the connection once we leave.

```js
function App() {
  const [socketMessage, setSocketMessage] = useState('');

  useEffect(() => {
    const socket = new WebSocket('wss://localhost:8000');
    socket.onmessage = (event) => {
      setSocketMessage(JSON.parse(event.data));
    };

    return () => {
      socket.close();
    };
  }, [socketMessage]);
}
```

This gives us an excellent way to clean up the socket every time we are done with it!

I hope you had some fun learning about the `useEffect` hook in React. I created this small playground for you to try out yourself. (Do view the console, please)

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="ExXqOrK" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ExXqOrK">
  React basics: explaining the useState hook</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
