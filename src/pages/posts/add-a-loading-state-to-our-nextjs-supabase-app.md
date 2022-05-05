---
layout: ../../layouts/Post.astro
title: 'Add a loading state to our Next.js Supabase app'
metaTitle: 'Add a loading state to our Next.js Supabase app'
metaDesc: 'How to add loading so the user knows what is going on, in Next.js with Supabase'
image: /images/10-12-2021.jpg
date: 2021-12-10T03:00:00.000Z
tags:
  - nextjs
---

Now that we have our basic Next.js login app done, you might have noticed there is not much feedback from the user.

We are loading the user in the background, but the user might be unaware.

So let's add some loading elements to show the user we are busy loading things.

## Adding a loading indicator to the user profile

Let's start with the profile component. Here, we can even distinguish between the initial load of the user profile and the update load if we want to.

That way, the user is fully aware of what's going on.

Open up the `components/Profile.js` component.

First, we'll add two states to keep track of our loading and updating states.

```js
const [loading, setLoading] = useState(true);
const [updating, setUpdating] = useState(false);
```

As you can see, we set the loading to be true by default, as we will always be loading from the gecko.

Then in the `getProfile` function, we can disable it once we are done with loading.

```js
async function getProfile() {
  try {
    // ... all the stuff
  } catch (error) {
    alert(error.message);
  } finally {
    setLoading(false);
  }
}
```

And for the `updateProfile` we can start by setting the loading state and disabling it when we are done.

```js
async function updateProfile() {
  try {
    setUpdating(true);
    // ... update call
  } catch (error) {
    alert(error.message);
  } finally {
    setUpdating(false);
  }
}
```

And now, we need to make sure we show the user that we are busy retrieving their profile.

```jsx
return (
    <div className='container mx-auto grid place-content-center min-h-screen'>
      <p>Oh hi there {session.user.email}</p>
      {loading ? (
        <p>Loading your profile...</p>
      ) : (
        // The form
      )}
    </div>
);
```

We want to disable the button and show the button as loading in the form.

```jsx
<button
  onClick={(e) => {
    e.preventDefault();
    updateProfile();
  }}
  disabled={updating}
  className='w-full mt-4 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300'
>
  <span>{updating ? 'Updating profile' : 'Update profile'}</span>
</button>
```

And with that done, we first get to see the loading profile text, and once we update, we see the button change like so:

<!-- ![Add a loading state to our Next.js Supabase app](https://cdn.hashnode.com/res/hashnode/image/upload/v1638199002302/4r1PI75JB.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1638199381/update_bo7mwq.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1638199377/update_n93e2n.mp4" type="video/mp4" />
</video>

## Fixing the login component

Let's also add a loading component to the login component so that the user knows something is happening.

Open the `components/Login.js` file and add a state like so:

```jsx
const [loading, setLoading] = useState(false);
```

Then we need to add a disabled state to the button and the conditional text.

```jsx
<button
  onClick={(e) => {
    e.preventDefault();
    handleLogin(email);
  }}
  disabled={loading}
  className='w-full mt-4 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300'
>
  <span>{loading ? 'Sending the link' : 'Send magic link'}</span>
</button>
```

And there you go!
We now have a cool way of updating the user with what's going on 👏.

You can find the complete code example on [GitHub](https://github.com/rebelchris/next-supabase/tree/loading-state).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
