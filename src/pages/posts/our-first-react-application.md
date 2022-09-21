---
layout: ../../layouts/Post.astro
title: 'Our first React application'
metaTitle: 'Our first React application'
metaDesc: 'Learn with me in creating our first React application'
image: /images/10-04-2020.jpg
date: 2020-04-10T03:00:00.000Z
tags:
  - react
---

Today we are looking into building our first app in React.

I've been experimenting with `React`, `Vue` and `Angular`. React has been a stable workhorse with a lot of features. Hence this tutorial on how to start our first app in React.

React, of course, is built on top of JavaScript, so make sure you have a good enough understanding of Vanilla JavaScript.

## React: good to knows

We have to keep in mind a couple of things when building React applications.

- React is built with [components](https://daily-dev-tips.com/posts/react-props-and-components/). Components are small and reused through your application.
- [Props](https://daily-dev-tips.com/posts/react-props-and-components/) is how we can make components dynamic. We can pass props through components.
- State is a variable in every component. A state can hold information dynamically. So very similar to props, but states are private and fully controlled by its component.
- JSX is an XML/HTML-Like syntax that React uses so we can have HTML in our components.

## Creating our first React app

Make sure we have `Node.js` installed, then open your favorite terminal and run the following command:

```
npm install -g create-react-app
```

This will install the React CLI globally (-g option).

Next, we can create a new app.

```
create-react-app react-starter
```

This creates our first React application and automatically creates the following files for us:

![Basic React structure](https://cdn.hashnode.com/res/hashnode/image/upload/v1608532478648/cZmsEgoSU.png)

### Running our React app

To run the application, we run the following command:

```
cd react-starter
yarn start
```

Now we can open up [http://localhost:3000/](http://localhost:3000/) to see our first React application!

## A basic Component in React

Let's have a look into how a basic component in React looks.

```js
import React from 'react';
import './App.css';
import Child from './components/child';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Child />
    </div>
  );
}

export default App;
```

As you can see, we first do some imports to define what elements this component will use.

We can import `css` files, other components, and more.

Then comes the actual component defined as a function in the example above.
It has a render function which is the actual output of this component.

And last but not least, we make sure to export the component.

Check out our next day [React props and components tip](https://daily-dev-tips.com/posts/react-props-and-components/)

Feel free to download a starter template from [GitHub](https://github.com/rebelchris/React-starter).

Or read more on the [React website](https://reactjs.org/docs/getting-started.html)

### Thank you for reading, and let's connect!

Let me know what React topics you would like to see in more depth, and feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1).
