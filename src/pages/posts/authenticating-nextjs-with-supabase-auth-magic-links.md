---
layout: ../../layouts/Post.astro
title: 'Authenticating Next.js with Supabase auth magic links'
metaTitle: 'Authenticating Next.js with Supabase auth magic links'
metaDesc: 'How to authenticate in Next.js using Supabase magic links authentication'
image: /images/08-12-2021.jpg
date: 2021-12-08T03:00:00.000Z
tags:
  - nextjs
---

Now that we have a basic understanding of Supabase and how we can interact with it, let's see how we can use their auth system!

We'll use their magic link login in this article, which I've been dying to try out.

We'll be working on our existing Supabase example. I urge you to read through [this article on setting up the basics environment for Supabase](https://daily-dev-tips.com/posts/adding-supabase-to-a-nextjs-application/).

The result for today will look like this:

<!-- ![Authenticating Next.js with Supabase auth](https://cdn.hashnode.com/res/hashnode/image/upload/v1638015417020/jJD1bUBAo.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1638015660/auth_g7snnw.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1638015660/auth_wifpyv.mp4" type="video/mp4" />
</video>

## Adding Tailwind CSS to Next.js

We quickly add Tailwind CSS at this point, to make it look a bit fancier.

You can find the full detailed article on [Tailwind for Next.js](https://daily-dev-tips.com/posts/setting-up-nextjs-with-tailwind-css/) here.

But the summary is as follows:

Install all the dependencies

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Init tailwind config

```bash
npx tailwindcss init -p
```

Add purge to `tailwind.config.js` file.

```js
purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
```

Edit `styles/globals.css` to look like this:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

## Checking Supabase auth state in Next.js

The cool part about all this is that we don't need to set up anything new for a basic magic login.

It's already supported out of the box.

We can open up our `pages/index.js` file and import the necessary dependencies.

```js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/initSupabase';
```

Then we can modify our component to have the following logic.

```jsx
export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <main>{!session ? 'Show login' : 'show profile'}</main>;
}
```

What we do here is define a new state, which holds the session object. By default, this is a null state.

However, once the auth from Supabase changes, we set the session to be that.

The [useEffect hook](https://daily-dev-tips.com/posts/react-basics-explaining-the-useeffect-hook/) will run only on mount as we defined the `[]` at the end of it.

Then we return a conditional statement based on the fact: do we have a session or not?

If yes, we show a login text else a profile text.
We'll start making these unique components just now.

## Creating the login component

As mentioned, the login will happen through a magic link, so we want to capture an email from the user.

Start by adding a `Login.js` file to your components directory.

This component should import the following dependencies:

```jsx
import { useState } from 'react';
import { supabase } from '../lib/initSupabase';
```

Then we can define our component.

```jsx
export default function Login() {
  const [email, setEmail] = useState('');

  const handleLogin = async (email) => {
    try {
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <div className='container mx-auto grid place-content-center min-h-screen'>
      <p className='mb-4'>Sign in via magic link with your email below</p>
      <input
        className='mb-4 border-2 border-gray-500 rounded-xl p-4 w-full'
        type='email'
        placeholder='Your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogin(email);
        }}
        className='w-full mt-4 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300'
      >
        <span>Send magic link</span>
      </button>
    </div>
  );
}
```

We define a new state to capture the user's email.
And display a form where the user can fill out their email.

Once they click the button, it invokes the `handleLogin` function.

In return, they request the Supabase auth sign-in method and pass the email they provided.

We show a simple alert, and the user should now receive an email in their mailbox.

When they click this email, they will be logged in and shown the profile text!

## Making the profile component

The profile component will be a bit easier. As for now, it will only show the user's email address that we retrieve from the session.

Create a `Profile.js` file in the components directory.

```jsx
import { supabase } from '../lib/initSupabase';

export default function Profile({ session }) {
  return (
    <div className='container mx-auto grid place-content-center min-h-screen'>
      <p>Oh hi there {session.user.email}</p>
      <button
        className='mt-4 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300'
        onClick={() => supabase.auth.signOut()}
      >
        Logout
      </button>
    </div>
  );
}
```

We pass a session in and show the user's email from the session.
We also give them the option to sign out from here.

## Rounding it up

Head back over to the `index.js` page and import the two new components like so:

```jsx
import Login from '../components/Login';
import Profile from '../components/Profile';
```

Then modify the render function to show these two components dynamically.

```jsx
return <main>{!session ? <Login /> : <Profile session={session} />}</main>;
```

> Note: Did you note that we are passing the session to the profile component?

And that's it. We now have a magic link login!

You can find the completed example code on [GitHub](https://github.com/rebelchris/next-supabase/tree/supabase-auth).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
