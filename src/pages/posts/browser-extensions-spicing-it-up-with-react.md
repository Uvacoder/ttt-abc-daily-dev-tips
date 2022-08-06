---
layout: ../../layouts/Post.astro
title: 'Browser extensions - spicing it up with React'
metaTitle: 'Browser extensions - spicing it up with React'
metaDesc: 'How to add React to a browser extension via Parcel'
ogImage: /images/15-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/a7026468-5d57-422e-14de-5d5fc343c100
date: 2022-08-15T03:00:00.000Z
tags:
  - browser-extensions
---

Now that we have our Browser extension up and running with Tailwind CSS and Parcel let's look at how we can make it more interactive.

You can choose any framework you are familiar with. I decided to go with React for this one.

The idea is to add React to have an interactive new tab browser extension.

<!-- ![Browser extensions - spicing it up with React](https://cdn.hashnode.com/res/hashnode/image/upload/v1659679069790/xnH-zht7B.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1659679125/react-browser_jqqqkk.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1659679125/react-browser_i0gl1f.mp4" type="video/mp4" />
</video>

> Note: if you want to follow along, use the following [GitHub branch](https://github.com/rebelchris/new-tab-extension/tree/tailwind).

## Installing the dependencies

First, we must let our project know we plan to use React, so let's install the needed dependencies.

```bash
npm i react react-dom
```

Then you can go ahead and create an `src` folder. It will become the central place of our React application.

## Setting up React

Now that we have everything installed, those two are the only ones we need 🤯.

We can go ahead and render the React app.
Open up your `new-tab.html` page. Until now, this was our application's source, but let's remove the HTML and place this inside.

```html
<body>
  <div id="app"></div>
  <script type="module" src="index.js"></script>
</body>
```

This will become our injection point as to where we can inject React.

We also added a script that will handle the React injection.

Go ahead and create this `index.js` file.

```js
import ReactDOM from 'react-dom';
import { App } from './src/App';

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
```

Now we can move on to creating this `App` component.
Add the `App.js` file in your `src` directory and place the following contents inside.

```js
export function App() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-indigo-400 text-6xl font-bold text-white'>
      <p>Welcome 👋</p>
    </div>
  );
}
```

This will render what we already had in the first place.
Let's make it more interactive by creating a `Counter.js` component.

```js
import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter((count) => count + 1);
  const decrease = () => setCounter((count) => count - 1);
  return (
    <div>
      <button onClick={decrease}>-</button>
      <span className='px-4'>{counter}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}
```

Now go back to the `App.js` component and import the Counter.

```js
import Counter from './Counter';

export function App() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-indigo-400 text-6xl font-bold text-white'>
      <p>Welcome 👋</p>
      <br />
      <Counter />
    </div>
  );
}
```

Now, if you run your watch or build command, you should be able to use your new React-powered browser extension.

```bash
npm run build
```

> Note: ensure to use the `dist` folder when loading the extension

![React powered browser extension](https://cdn.hashnode.com/res/hashnode/image/upload/v1659678873325/m1cGNX23u.png)

You can find this article's code on [GitHub](https://github.com/rebelchris/new-tab-extension/tree/react).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
