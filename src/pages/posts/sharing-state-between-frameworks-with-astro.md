---
layout: ../../layouts/Post.astro
title: 'Sharing state between frameworks with Astro'
metaTitle: 'Sharing state between frameworks with Astro'
metaDesc: 'How to share state between different frameworks inside Astro'
ogImage: /images/04-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/d9a4bd8f-cd38-4d2f-d92d-5fffe6086c00
date: 2022-09-04T03:00:00.000Z
tags:
  - astro
---

Since Astro is set up as an island architecture and even can run [multiple frameworks](https://daily-dev-tips.com/posts/running-multiple-frameworks-in-astro/) at the same time, managing the state is a bit difficult.

We can't solely rely on, for example, context like we do in React or Vue.

This is where Nano Stores come in super handy.
I've wanted to try them out ever since I read about them.

This article will look at how we can share a state between a React and Vue component.

If you'd like to follow this article, take the following [GitHub branch](https://github.com/rebelchris/astro-react/tree/part-2) as your starting point.

## Setting up the Nano Stores

The first thing we'll have to install is the actual Nano Stores package.

```bash
npm i nanostores
```

We'll need this base package to set up a store.

Let's go ahead and create a store for the counter we already have in our React and Vue components.

I created a folder called `stores` and added a `counter.js` file.

Here we can leverage a Nano Stores atom, which can be used to store small values.

```js
import { atom } from 'nanostores';

const initialValue = { value: 0 };

const counter = atom(initialValue);

const increaseCounter = () => counter.set({ value: counter.get().value + 1 });

const decreaseCounter = () => counter.set({ value: counter.get().value - 1 });

export { counter, increaseCounter, decreaseCounter };
```

As you can see, this is our counter code but abstracted to pure JavaScript.
I went with an objective approach to make things more readable.

However, this code on its own won't do much yet. We'll have to adjust our React and Vue components to work with this.

Luckily for us, both frameworks have their neat hook for managing Nano Stores.

```bash
// React nano store
npm i nanostores @nanostores/react

// Vue nano store
npm i nanostores @nanostores/vue
```

Now open up your React counter and adjust it to the following code.

```js
import { useStore } from '@nanostores/react';
import { counter, increaseCounter, decreaseCounter } from '../store/counter';

export default function React() {
  const count = useStore(counter);
  const name = 'React';

  return (
    <div>
      <button onClick={decreaseCounter}>-</button>
      <pre>{count.value}</pre>
      <button onClick={increaseCounter}>+</button>
      <p>I'm a {name} component</p>
    </div>
  );
}
```

We abstracted all the functions to use our store replication.
The critical part here is that we initialize the count as a `useStore`.

For the Vue component, we can do a similar thing like this:

```vue
<script>
import { useStore } from '@nanostores/vue';
import { counter, increaseCounter, decreaseCounter } from '../store/counter';
export default {
  data() {
    const count = useStore(counter);
    return {
      count,
      name: 'Vue',
      increaseCounter,
      decreaseCounter,
    };
  },
};
</script>

<template>
  <button @click="decreaseCounter">-</button>
  <pre>{{ count.value }}</pre>
  <button @click="increaseCounter">+</button>
  <p>I'm a {{ name }} component</p>
</template>
```

And that's it!

We now have a shared state between two completely different frameworks, powered by Nano Stores.

You can see the result demo in the video below.

<!-- ![Sharing state between frameworks with Astro](https://cdn.hashnode.com/res/hashnode/image/upload/v1661406543486/ifvffnJcZ.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1661406589/nano-stores_fjhtwk.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1661406589/nano-stores_pqmzuu.mp4" type="video/mp4" />
</video>

You can find the complete code sample on [GitHub](https://github.com/rebelchris/astro-react/tree/part-3).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
