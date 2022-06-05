---
layout: ../../layouts/Post.astro
title: "What's new in React 18"
metaTitle: "What's new in React 18"
metaDesc: "Let's take a look at React 18 and see what has been changed"
image: /images/21-04-2022.jpg
date: 2022-04-21T03:00:00.000Z
tags:
  - react
---


Major versions always excite me, and we'll be looking at React this time.

The fun part is that the React team had quite a different approach to this release.
They decided to get a working group (people from the industry) involved, which resulted in a different release than they initially intended.

## Concurrent React

This is the most significant new addition to React, something they call concurrent React.

In the official release note, they tell us we (the React users) don't have to worry about how it works.
It's something implemented on the core and not exposed through any APIs.
However, React library maintainers should be more detailed on this.

As a high-level overview of what it is:
It's a way to render with more freedom. In React < 18, the render flow was one single synchronous transaction.
This has changed in 18 as it can now render things, decide to pause them, choose to stop them altogether, etc.

This means that it can render different states upfront and thus give the user a quicker new state than before.

This part of React is heavily steered by their working group, as the initial plan was to launch this as an always-on option.
The working group clearly stated it would cause friction and less adoption.

So, it's now an opt-in function, meaning if you don't use it, it won't be activated.

So you can update to React 18 without worrying about this yet! (Bear in mind it's wise to start migrating anyway).

## Automatic batching

You may have noticed that react state changes trigger individual re-renders, which can be quite heavy.
And in many cases, these are related anyhow.

React already decided to batch updates inside event handlers, but this excluded updates inside promises, timeouts, or native event handlers.

To give you a quick glimpse:

```js
setTimeout(() => {
  setCount((c) => c + 1);
  setTitle('reloaded');
}, 100);
```

In React < 18, this would trigger two re-renders for each state.

In React 18, however, these will only trigger one re-render at the end of the timeout function.

As you can imagine, this will give us fewer glitches and quicker applications.

## Transitions

Transitions are a new concept in React, and they are used to distinguish between urgent and non-urgent updates.

Examples of urgent updates are direct user interactions, typing, clicking, and pressing.

And non-urgent updates would be: Transitioning the UI.

The main idea is to show urgent transitions directly. The user made some interactions and expected a direct response.

The default is that everything is shown as urgent, but we can defer certain things to be non-urgent by wrapping them in a `startTransition` function.

```js
import { startTransition } from 'react';

// Urgent
setInputValue(input);

// Non-urgent
startTransition(() => {
  setSearchQuery(input);
});
```

The great part is that this intertwines well with the concurrent builds. Elements in the non-urgent section can quickly be interrupted by urgent ones.

Let's take a search field. As long as urgent actions (typing) happen, we can destroy the non-urgent transitions (showing the actual results).

There is also a new hook related to transitions, which we'll talk more about in the new hook section.

## New hooks

There are several new hooks available. Let's go through each one and describe what they do.

**useId**:
As the name suggests, it's a hook for generating a unique ID, and it can be used on the client and server-side.

**useTransition**:
Mark specific updates as non-urgent. This hook gives us a pending state to show the user some loading spinner.

**useDeferredValue**:
A hook to defer re-rendering of non-urgent parts of the render tree.
This one is similar to debouncing, but with no specific time delay, meaning React will try and resolve this as quickly as it can.

**useSyncExternalStore**:
Allows external data stores to support concurrent reads. This removes the need to wrap subscriptions to external stores with useEffect.
It's recommended to use when integrating with states external to React.

**useInsertionEffect**:
This hook can inject styles in the render but is performance optimized. The need for this hook mainly comes with the concurrent rendering, so if you see performance issues with CSS-in-JS, give [this a more profound read](https://reactjs.org/docs/hooks-reference.html#useinsertioneffect).

## Suspense

The whole suspense ecosystem has gotten quite a revamp. It can now be used to load smaller pieces of your component.

Suspense did exist in React but was limited to code splitting.

Suspense in React 18 works best in combination with the Transition API. React can then determine when enough data has been gathered to display results and prevent bad loading states.

They now also support Suspense on the server-side, and they plan to keep improving the API in the future.

## A lot more

This is, of course, not all that has changed, but the bigger aspects of it.

I might dedicate another article to upgrading to 18, and you can expect another one later on to my experience and issues while moving to concurrent React.

So far, I'm super excited about React 18, as it seems to evolve and serve a greater good of a faster web.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
