---
layout: ../../layouts/Post.astro
title: 'Make your life easier with React Query DevTools'
metaTitle: 'Make your life easier with React Query DevTools'
metaDesc: 'React Query is already pretty amazing, but their DevTools make things even better'
image: /images/06-02-2022.jpg
date: 2022-02-06T03:00:00.000Z
tags:
  - react
---

When it comes to using _React Query_ and especially the more advanced topics, it can be pretty hard to debug what's happening.

Or sometimes, you want to invalidate a query to see if everything works fine quickly.

That's precisely where **React Query DevTools** come in handy 🥳.

This is what it looks like when enabled:

![Make your life easier with React Query DevTools](https://cdn.hashnode.com/res/hashnode/image/upload/v1643349189447/XLfQFf761.png)

## Enabling React Query DevTools

If you want to use the DevTools, installing them in your main app wrapper is recommended. This way, they will be visible everywhere.

And don't worry, by default, they will only show up when your env is in `development` mode.

Open up your `App.js` file and import the DevTools.

```js
import { ReactQueryDevtools } from 'react-query/devtools';
```

To import it, we should place it inside the `QueryClientProvider` block like so:

```js
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      # Your app components
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
```

For this mode, we can pass the following optional properties.

- `initialIsOpen`: You can set this to `true` if you want it to default show as open
- `position`: Can be one of the following: `top-left`, `top-right`, `bottom-left`, `bottom-right`, and it determines the position of the React Query logo.

Then we get some options that can be used to extend default styles or click handlers.
All of these can be used to override defaults like: `className`, `style`, and `onClick` where applicable:

- `panelProps`
- `closeButtonProps`
- `toggleButtonProps`

Alternatively, you can render it as a plain component when used in embedded mode:

```js
import { ReactQueryDevtoolsPanel } from 'react-query/devtools';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtoolsPanel />
    </QueryClientProvider>
  );
}
```

## Using the React Query DevTools

Once you spool up your application with the DevTools setup, you can quickly keep track of all the fired queries.

By clicking on one of them, you get to see a lot of information for this query.

- Query key
- Current status
- Last updated
- Data inside the cache

And you can quickly choose any of the following actions:

- Refetch
- Invalidate
- Reset
- Remove

![React Query options](https://cdn.hashnode.com/res/hashnode/image/upload/v1643349036317/56lOABelz.png)

Trust me. React Query DevTools can make your life a lot easier.
Knowing when a query is refetched, what data it has, or how many times it retried fetching it is such a win.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
