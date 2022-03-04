---
layout: ../../layouts/Post.astro
title: 'React basics: Creating our first React app'
metaTitle: 'React basics: Creating our first React app'
metaDesc: 'Creating a basic React app and introducting components'
image: /images/12-10-2021.jpg
date: 2021-10-12T03:00:00.000Z
tags:
  - react
---
I'm a firm believer in learning by doing.
For this series, we'll be going through React step by step.

In this part, we'll create our first app and have a basic look at creating components that we can use.

## Creating our first React app

To create our first app, we need to run the following command.
The `my-app` part is the name of your app.

```bash
npx create-react-app my-app 
```

> Note are reading it right. It's `npx` not `npm` for this command

We can also start as a typescript app by running the following command:

```bash
npx create-react-app my-app --template typescript
```

However, for this application, we'll use the plain version.

Now run the following command in the `my-app` folder to fire up the application:

```bash
npm start
```

This command will open up a browser, and you should see the basic React boilerplate.

![React boilerplate](https://cdn.hashnode.com/res/hashnode/image/upload/v1633248178734/ce3x9L8iI.png)

## Creating our first component

React is a component-based system, meaning everything you see is made up of components.

Open your project in your favorite editor, and let's see how we can start creating our components.

Let's open the `src/App.js` file and start from a clean slate.

```js
function App() {
  return <div className='App'>My react app</div>;
}

export default App;
```

This will render the text "My react app".
Nothing fancy yet, but that's ok.

Let's add our first-ever custom component, which will be a bookshelf.

```js
const Bookshelf = () => {
  return <div>Bookshelf</div>;
};
```

I've chosen to place this code above our `function App` declaration to keep things simple for now.

To use this component we need to modify our app to render the following:

```js
function App() {
  return (
    <div className='App'>
      <Bookshelf></Bookshelf>
    </div>
  );
}
```

If we reload our page now, we should see the word "Bookshelf".

This might not sound fancy yet, but you might be starting to grasp the concept of how to use components here.

Let's also create a book component.

```js
const Book = () => {
  return <div>Book</div>;
};
```

However, instead of the fixed name "Book", we want to give this book a title when we use it.

Let's add a title property for that!

```js
const Book = ({ title }) => {
  return <div>{title}</div>;
};
```

We can now import this book in our app like so:

```js
function App() {
  return (
    <div className='App'>
      <Bookshelf></Bookshelf>
      <Book title='Laravel collections' />
    </div>
  );
}
```

And you should see a book with the title "Laravel collections" show up.

You might see where we are going with this, as we want the book to be inside a bookshelf.
Let's change that and add some more books.

```js
<Bookshelf>
	<Book title='Laravel collections' />
	<Book title='Ruby for beginners' />
	<Book title='CSS is awesome' />
</Bookshelf>
```

But, if we now refresh, we don't get to see anything! 
That's because our bookshelf doesn't know how to render child components.

For that to work we need to define our bookshelf to accept children and render them like so:

```js
const Bookshelf = ({ children }) => {
  return <div>{children}</div>;
};
```

Now we should be able to see all our books!

## Extracting components

If we add some more stuff to our page, we quickly end up with a massive file that contains all kinds of components.

And that's where React is super strong. We can simply move these components to their respective files.

Let's see how that would work by creating a `components` folder in your `src`.
Then add `Bookshelf.js` as a file and add the Bookshelf code like so:

```js
export default function Bookshelf({ children }) {
  return <div>{children}</div>;
}
```

Then we can use this component in our `App.js` file like so:

```js
import Bookshelf from './components/Bookshelf';
```

Go ahead and try the same for the Book component.

By extracting these components, we get much cleaner and maintainable code.

I hope you enjoyed building your first React app.
You can find the complete code example on [GitHub](https://github.com/rebelchris/react-basics).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
