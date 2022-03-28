---
layout: ../../layouts/Post.astro
title: 'Adding Jest to React'
metaTitle: 'Adding Jest to React'
metaDesc: "Let's explore how we can use Jest in a React application"
image: /images/07-04-2022.jpg
date: 2022-04-07T03:00:00.000Z
tags:
  - testing
  - react
---

Jest works absolutely perfectly with React. In fact, if you used Create React App to set up your app, it already comes with Jest.

You can see by checking your `package.json` file, which should contain something similar to:

```js
{
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
  },
  "scripts": {
    "test": "react-scripts test",
  },
}
```

> Note: The above file also has other things, but these should be there.

This will allow us to use Jest to test components and functions.

## Writing our first tests

For this article, I'll be using a plain React starter. If you want to follow along, you can find it on [GitHub here](https://github.com/rebelchris/React-starter).

As for the app, let's create something super basic so it's easier to test for.
I want to create a counter application as this will allow us to test for multiple elements and actions.

This is the app I'll be using:

```js
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>The counter is now on {count}</p>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </>
  );
}
```

This app renders a paragraph and a button, as you can see above. The app should add one to the count when we click on the button.

As you may have seen, the app already comes with a basic testing file called `App.test.js`.

We will be modifying that file to address our needs.
Let's first see what tests we want to perform:

- We want to check the paragraph is there independent of the count
- We want to see it defaults to 0
- We want to check that it can +1

Let's quickly setup the wireframe for this:

```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders default text', () => {
  // Todo
});

test('should default to zero', () => {
  // Todo
});

test('should update the count', () => {
  // Todo
});
```

Now let's start with the first test. We want to render the application, which is done with the `render` function.

```js
test('renders default text', () => {
  render(<App />);
});
```

Then we want to check if a specific part of the text is on the screen.
In our case, let's use a regex since the number at the end can be different.

```js
test('renders default text', () => {
  render(<App />);
  const defaultText = screen.getByText(/The counter is now on/g);
  expect(defaultText).toBeInTheDocument();
});
```

Now feel free to test out this test already.

The next one is very similar, but we want to ensure it defaults to zero as the first value.

```js
test('should default to zero', () => {
  render(<App />);
  const defaultText = screen.getByText('The counter is now on 0');
  expect(defaultText).toBeInTheDocument();
});
```

As you can see, we no longer need the regex as it should qualify the whole text part.

For the last test, we first need to get the button component. There are multiple ways, but we can use the `findByRole` function since we only have one.

```js
const button = await screen.findByRole('button');
```

Since we used the `await` here, we need to make this test an `async` function.
And next to that, let's `click` on this button and then see if the text is now updated.

```js
test('should update the count', async () => {
  render(<App />);
  const button = await screen.findByRole('button');
  button.click();
  const plusText = screen.getByText('The counter is now on 1');
  expect(plusText).toBeInTheDocument();
});
```

And that's it. We now have added some primary test cases to our React application.

These are, of course, very basic but can already make a huge difference in making your app work as intended.

You can find the result on this [GitHub branch](https://github.com/rebelchris/React-starter/tree/jest).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
