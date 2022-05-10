---
layout: ../../layouts/Post.astro
title: 'Adding an animated state to our Remix form'
metaTitle: 'Adding an animated state to our Remix form'
metaDesc: 'How to add a animated loading state to Remix forms'
image: /images/10-05-2022.jpg
date: 2022-05-10T03:00:00.000Z
tags:
  - remix
---

Now that we have our [form displaying error](https://daily-dev-tips.com/posts/handling-errors-in-remix-forms/), we still have one slight downside.

Let's say our form takes quite a while to load. Some users might be impatient and click the submit button multiple times or even change the inputs.

Let's emulate that by introducing a "sleep" in our action.

```js
export const action = async ({ request }) => {
  // Sleep...
  await new Promise((r) => setTimeout(r, 1000));

  // All the other stuff
};
```

Now our code will always wait 1000 milliseconds.

## Using the Remix useTransition hook

Besides the hooks, we already used, Remix gives us a `useTransition` hook.
We can hook into the fact that the form is busy with something with this hook.

In our case, we want to disable all the form fields and change the text on the button, so the user knows something is happening.

First, we load the hook inside our render.

```js
import { useTransition } from '@remix-run/react';

export default function NewPost() {
  const transition = useTransition();

  // Our render
}
```

Then for the render part we can wrap our form elements inside a fieldset so we can quickly disable all of them:

```js
<Form method='post'>
  <fieldset disabled={transition.state === 'submitting'}>
    // Our form fields
  </fieldset>
</Form>
```

You can see we hook into the transition state, and if that is submitting, we disable the form.

Next, we can change our button to reflect the action as well.

```js
<button
  type='submit'
  className='rounded bg-blue-500 py-2 px-4 text-white hover:bg blue-600 focus:bg-blue-400 disabled:bg-blue-300'
>
  {transition.state === 'submitting' ? 'Creating...' : 'Create post'}
</button>
```

This is the same concept of using the state to determine which text to show.

If we run our code, we should get the following result:

<!-- ![remix-animated-state.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1651257706199/6jOPk1PmL.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1651257690/remix-animated-state_kzbez3.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1651257689/remix-animated-state_jyousg.mp4" type="video/mp4" />
</video>

You can also find the completed code sample on this [GitHub branch](https://github.com/rebelchris/remix-starter/tree/animated-state).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
