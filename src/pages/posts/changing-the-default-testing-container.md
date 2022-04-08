---
layout: ../../layouts/Post.astro
title: 'Changing the default testing container'
metaTitle: 'Changing the default testing container'
metaDesc: 'How to define the wrapping container for a component in Testing Library'
image: /images/17-04-2022.jpg
date: 2022-04-17T03:00:00.000Z
tags:
  - testing
---

By default testing, the library will append your render to the body, for which it first will apply a div.

The format will result in something like this:

```html
<body>
  <div>
    <YourComponent />
  </div>
</body>
```

However, you might want to test for other scenarios in some cases.

I'll write two down that I have dealt with so far:

- Custom component wrappers (custom elements)
- HTML based emails (wrapped in table layout)

In those cases, we want to define another type of wrapper.

## Defining a new wrapping container

For example, let's take the [previous article](https://daily-dev-tips.com/posts/testing-library-and-react-context/). What if we want to render the `App` in a table?

This is the current test setup:

```js
const renderComponent = ({ username }) => {
  return render(
    <UserContextProvider user={username}>
      <App />
    </UserContextProvider>
  );
};

it('should show the login option', async () => {
  renderComponent('');
  expect(screen.queryByText('Please login')).toBeInTheDocument();
});
```

Nothing strange so far, when debugging this code it would give us a HTML output like:

```html
<body>
  <div>Please login</div>
</body>
```

Now let's see how we can add a `Table`.
For this to work, we have to pass an optional parameter to the render function called `container`.

```js
const renderComponent = ({ username }) => {
  const table = document.createElement('table');
  return render(
    <UserContextProvider user={username}>
      <App />
    </UserContextProvider>,
    {
      container: document.body.appendChild(table),
    }
  );
};
```

Running the above code would throw us an error, as we cannot directly append text nodes to a `table`.

But now, imagine the component we are testing is a `TableBody` component. It would make sense to test that inside a table.

The output would become:

```html
<table>
  <TableBodyComponent />
</table>
```

## Testing custom elements

In my case, I recently had to test a custom component wrapper. This was mainly due to injecting something specifically in the shadow DOM.

The process for this is very similar. However, we define our custom element as the new tag.

```js
const renderComponent = ({ username }) => {
  const customTag = document.createElement('custom-tag');

  return render(
    <UserContextProvider user={username}>
      <App />
    </UserContextProvider>,
    {
      container: document.body.appendChild(customTag),
    }
  );
};
```

The output will now be:

```html
<custom-tag> Please login </custom-tag>
```

Be aware most components won't need a different container, but there are these exceptions where this can make your life easier to define one.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
