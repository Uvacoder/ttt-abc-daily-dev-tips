---
layout: ../../layouts/Post.astro
title: 'React Query as a persistent state manager'
metaTitle: 'React Query as a persistent state manager'
metaDesc: 'Peristent state and peristent context with React Query as a state manager'
image: /images/14-02-2022.jpg
date: 2022-02-14T03:00:00.000Z
tags:
  - react
---

I had to leverage a context-based state a while ago; however, the element needing context was so small that it seemed overkill to make a complete context for this.

And that's when I started building this context of a small reusable hook that does just that.

To demonstrate the difference and difficulties with managing a persistent shareable state, I will also demo another option and work our way up to modify it by leveraging React Query.

Below you can see a short video demo to showcase the downsides of the persistent state hook compared to the React Query hook.

<!-- ![React query as a persistent state manager](https://cdn.hashnode.com/res/hashnode/image/upload/v1644065536109/P_7ua0oW8.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1644065574/rq-state_uqf6ej.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1644065574/rq-state_w7qyoi.mp4" type="video/mp4" />
</video>

## A persistent state hook in React

Let's start by creating a persistent state hook in React.
This will be a hook that we can use to read and write from a specified storage module.
I'll use local storage in this example, but you can change this to any repository.

The hook should be able to retrieve the data set in the storage module and return that.
In return, it should be able to persist a new value in the storage, and the module should return this.

Let's create a file called `usePersistentState`.
The hook will look like this:

```js
import { useState, useEffect } from 'react';

export default function usePersistentState(key) {
  const [value, setValue] = useState(null);

  const setValueAndPersist = (newValue) => {
    if (newValue !== value) {
      setValue(newValue);
      return localStorage.setItem(key, newValue);
    }
    return value;
  };

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      setValue(item);
    }
  }, []);

  return [value, setValueAndPersist];
}
```

We leverage a [react `useState` hook](https://daily-dev-tips.com/posts/react-basics-explaining-the-usestate-hook/) to keep track of the value.
And we use the [`useEffect` hook](https://daily-dev-tips.com/posts/react-basics-explaining-the-useeffect-hook/) to run once it mounts by using the `[]` property.

> By using `[]` will only run on load.

To use this hook, we can do something like this:

```js
function SetState() {
  const [value, setValue] = usePersistentState('item_state');
  return (
    <button onClick={() => setValue(value === 'on' ? 'off' : 'on')}>
      Click me {value}
    </button>
  );
}
```

And this will work perfectly.

Until... We need to introduce another component that needs to read this value separately.
Since we used `useState` it does not update across our application, and it will cause bizarre side effects.

## React Query as a state manager

You might have remembered that React Query does not have to work with API calls. It can keep track of any variable.

And in our case, we want it to keep track of our storage object.
So let's also create a `usePeristentContext` hook.

This will be our hook that uses React Query to keep track of our state.

```js
import { useMutation, useQuery, useQueryClient } from 'react-query';

export default function usePersistentContext(key) {
  const queryClient = useQueryClient();

  const { data } = useQuery(key, () => localStorage.getItem(key));

  const { mutateAsync: setValue } = useMutation(
    (value) => localStorage.setItem(key, value),
    {
      onMutate: (mutatedData) => {
        const current = data;
        queryClient.setQueryData(key, mutatedData);
        return current;
      },
      onError: (_, __, rollback) => {
        queryClient.setQueryData(key, rollback);
      },
    }
  );

  return [data, setValue];
}
```

You can see that we define the query to read from the localStorage. This will be able to set our initial value if it exists.

Then we use a React Query mutation as our set value. This can update our storage and, in the meantime, mutate the query data so it will reflect application-wide!

We can use this hook in the following fashion:

```js
function SetContext() {
  const [value, setValue] = usePersistentContext('item_context');
  return (
    <button onClick={() => setValue(value === 'on' ? 'off' : 'on')}>
      Click me {value}
    </button>
  );
}
```

The benefit of this method is that another component can read it simultaneously, and the updated value **will** be read!

Viva la React Query!

You can try both methods on this Code Sandbox.

<iframe src="https://codesandbox.io/embed/hardcore-violet-5ishr?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="hardcore-violet-5ishr"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
