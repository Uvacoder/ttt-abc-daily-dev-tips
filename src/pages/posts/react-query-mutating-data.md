---
layout: ../../layouts/Post.astro
title: 'React Query mutating data'
metaTitle: 'React Query mutating data'
metaDesc: 'How to manually update React Query cache with useMutation'
image: /images/10-02-2022.jpg
date: 2022-02-10T03:00:00.000Z
tags:
  - react
---

So far, we have looked at how we can [load data with React Query](https://daily-dev-tips.com/posts/a-first-look-at-react-query/) and even use an [infinite loader](https://daily-dev-tips.com/posts/infinite-scrolling-and-react-infinite-query-tutorial/).

But often, we also have the option to manipulate data. This could be either creating, updating, or deleting data.

React Query has a super cool hook for this type of mutation called `useMutation`. Using this hook, you can leverage not having to call the initial query to update.

<!-- ![React Query mutating data](https://cdn.hashnode.com/res/hashnode/image/upload/v1643696986686/-PkYAY8V6.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643697023/useMutation_k54pcj.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643697022/useMutation_waiw5a.mp4" type="video/mp4" />
</video>

## React Query mutation example

Let's sketch an example so it's easier to explain.

We have this list of Pokemon, but we discovered a new one exists.
We use a form to update this Pokemon, which makes a post request to our API and often will return the format we need.

Since the API would already return the data, we need there is no need for us to update the whole query as we know what we already want to add.

Instead, we can leverage this hook to tell us to update the cached values once it's succeeded manually.

Let's see how this works.

## Using the useMutation hook in React Query

First, let's add a button to demo this out, we usually have a complete form, but you'll get the point.

The button acts as our "form" submit and passes the name of this new Pokemon.

```js
<button onClick={() => addNewPokemon('JavaMon')}>Add a random Pokemon</button>
```

Now it's time to introduce you to the `useMutation` hook. Let's start by importing it.

```js
import { useMutation } from 'react-query';
```

We can then use it like this:

```js
const { mutate } = useMutation(mutation, {
  // options
});
```

The mutate extraction is how we can invoke the actual mutation to happen. Since we called our function `addNewPokemon`, we can destructure it to a different name:

```js
const { mutate: addNewPokemon } = useMutation();
```

Then for our mutation, we would generally have a call to your API, but for the sake of this tutorial, we'll mimic that effect and return what our API would return.

```js
const { mutate: addNewPokemon } = useMutation(
  (newPokemon) => {
    // return axios.post('API', newPokemon);
    return { name: newPokemon };
  },
  {
    // options
  }
);
```

Now for the fun part, which is the options, we want to use `onSuccess`. This option is called once the mutation is successfully finished.

Once that happens, we want to use the `setQueryData` function to change the existing data for a specific key.

The setQueryData function has a parameter that can return the old data, and we then merge the old data with this new data.

```js
const { mutate: addNewPokemon } = useMutation(
  (newPokemon) => {
    // return axios.post('API', newPokemon);
    return { name: newPokemon };
  },
  {
    onSuccess: async (newPokemon) => {
      queryClient.setQueryData('pokemon', (old) => [...old, newPokemon]);
    },
  }
);
```

And that's it!
When we click the button, our Pokemon will be added to the list without refetch the whole query.

> Note: On every load, the Pokemon will disappear since we didn't add it to our database.

Feel free to have a play with this Code Sandbox.

<iframe src="https://codesandbox.io/embed/spring-wind-i87i4?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="spring-wind-i87i4"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
