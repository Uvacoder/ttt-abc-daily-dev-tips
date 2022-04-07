---
layout: ../../layouts/Post.astro
title: 'Testing library and React context'
metaTitle: 'Testing library and React context'
metaDesc: 'How to test React context with testing library'
image: /images/16-04-2022.jpg
date: 2022-04-16T03:00:00.000Z
tags:
  - testing
  - react
---

In many cases, we don't want a one-dimensional testing setup where we test our component and that's it.

Often we want to include some context that affects the render or interacts with actions performed by the user.

Let me set the following example:

We have an application that has a user context. Based on "do we have a logged user," we should show different rendered output.

For once, the anonymous user sees a login button, whereas the logged-in user sees a profile and logout button.

## Setting the stage

Let's quickly set up a super basic context so we have something to test with.

> Note: This will be a little bit of a non-completed context. If you'd like to learn more about it: [Read this article on React context](https://daily-dev-tips.com/posts/react-basics-explaining-the-usecontext-hook/)

Let's get started by creating a file called `UserContext.js`.

```js
import { createContext, useMemo } from 'react';

const UserContext = createContext(null);
export default UserContext;

export const UserContextProvider = ({ children, user }) => {
  const userContext = useMemo(() => ({
    user: user ?? null,
  }));

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};
```

I won't go into too many details here, but basically, we create a new empty context and create the provider to hold values for a user object.

We can now use this context in our main application entry point. I've added this in my `index.js` file.

```js
import { UserContextProvider } from './UserContext';

ReactDOM.render(
  <UserContextProvider user='Chris'>
    <App />
  </UserContextProvider>,
  document.getElementById('root')
);
```

This is purely for the demo purpose, and you usually would retrieve this `user` value from some external party, but for our testing use-case, this is perfect to demo with.

Now let's modify the `App` component to work based on the value of this context.

```js
import React, { useContext } from 'react';
import UserContext from './UserContext';

function App() {
  const { user } = useContext(UserContext);
  return user ? `Hello there ${user}` : 'Please login';
}

export default App;
```

This might seem super trivial, but it will be enough to showcase how our context can be tested.

First of all, let's run our application. We should see `Hello there Chris` as we hardcoded the value to be `Chris`.

## Testing React context

Now let's skip to the fun part, testing this React context.

There are multiple ways of using this context, but I'll focus on the most basic explanation, so it's easy to try this out yourself.

Let's create an `App.test.js` file.

We also directly used the' render' function in our [previous test cases](https://daily-dev-tips.com/posts/adding-jest-to-react/). In this case, we want to wrap the render with the context.

The simplest way to do this is to start by creating a new `renderApp` function.

```js
const renderComponent = ({ username }) => {
  return render(
    <UserContextProvider user={username}>
      <App />
    </UserContextProvider>
  );
};
```

This example provides the context with an optional `username` parameter.
Inside of that, we simply render the `App` component.

Then we can write our first test to see if it shows the login text if we don't provide a user.

```js
it('should show the login option', async () => {
  renderComponent('');
  expect(screen.queryByText('Please login')).toBeInTheDocument();
});
```

Try running the above test and see what happens?
It succeeds, yes 🎉

The next test is to provide a user and test if the text has changed.

```js
it(`should show the username`, async () => {
  renderComponent({ username: 'Chris' });
  expect(screen.queryByText('Hello there Chris')).toBeInTheDocument();
});
```

Running the above test will also succeed.

And that's it, the first introduction to testing React context.
This is only a super high-level abstraction as your context often has multiple setters you'd like to test.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
