---
layout: ../../layouts/Post.astro
title: 'React basics: creating a custom media query hook'
metaTitle: 'React basics: creating a custom media query hook'
metaDesc: 'Tutorial on creating your own hooks in React'
image: /images/19-10-2021.jpg
date: 2021-10-19T03:00:00.000Z
tags:
  - react
---
So far, we have checked out some pre-defined basic hooks in React.

- [React useState hook](https://daily-dev-tips.com/posts/react-basics-explaining-the-usestate-hook/)
- [React useEffect hook](https://daily-dev-tips.com/posts/react-basics-explaining-the-useeffect-hook/)
- [React useContext hook](https://daily-dev-tips.com/posts/react-basics-explaining-the-usecontext-hook/)

But there is another way you can go about this: creating your own custom hooks.

Let's put it to the test and see why we even want to extract something to be its own hook?

## Creating a media query check

I've created a sample [GitHub repo](https://github.com/rebelchris/react-basics) that you can use to play along.

Open up the `App.js` file, and let's say we want to show a conditional text to desktop users and small screen users.

```jsx
import { useEffect, useState } from 'react';

function App() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 960px)');
    const listener = () => setIsDesktop(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);

  return (
    <div className='App'>
      {isDesktop ? <h1>Desktop</h1> : <h1>Small screen</h1>}
    </div>
  );
}

export default App;
```

What we do here is create a simple boolean state called `isDesktop`.
Then we leverage the `useEffect` to listen to our window and look for a media query that matches `(min-width: 960px)`.
We then set the desktop variable to true or false, based on what the media query evaluates.

Lastly, we add a listener to the resize event to detect whenever the screen resizes and updates accordingly.

Then we return a conditional header based on whether this is true or false.

And it works!

<!-- ![React basics: creating a custom media query hook](https://cdn.hashnode.com/res/hashnode/image/upload/v1633775518073/twrvZJqv1.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/react-hook_otmcmy.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/react-hook_fvjiwm.mp4" type="video/mp4" />
</video>

However, now imagine we also want to use this logic in another component?

We could copy-paste this code there and be done with it.
Yes, correct, but it's not a neat solution as we would be re-using code that we could extract.

And that's precisely where custom hooks can come in handy.

## Creating a custom media query hook in React

Let's take what we just created, but place it inside a custom hook now.

Create the hook file called `useMedia` inside a `hooks` directory (You must create this directory).

Pay attention to the `use` part as this is a condition to hooks. They MUST start with `use`.

```jsx
import { useEffect, useState } from 'react';

const useMedia = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 960px)');
    const listener = () => setIsDesktop(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);
  return isDesktop;
};

export default useMedia;
```

We can now go back to our `App.js` and clean up the code to look more like this.

```jsx
import useMedia from './hooks/useMedia';

function App() {
  const isDesktop = useMedia();

  return (
    <div className='App'>
      {isDesktop ? <h1>Desktop</h1> : <h1>Small screen</h1>}
    </div>
  );
}

export default App;
```

Pretty solid. We now have a hook that we can re-use in multiple components.

However, we can go a step further and extract the actual media query from it.
That way, we can test for multiple media queries using the same hook.

First, make sure the `useMedia` hook can accept a query parameter.

```jsx
const useMedia = (query) => {
```

Then we need to modify our variables inside this hook and use the query to test against.

```jsx
const useMedia = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener();
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
  return matches;
};
```

Now we can modify our use to look like this:

```jsx
const isDesktop = useMedia('(min-width: 960px)');
```

Pretty solid, right!
You can even go ahead and use this to check for multiple media queries now.

Do note we also changed the listener, so instead of adding a resize listener, we add one to the media query to see if that changes!

This stuff super stokes me as it becomes way easier to split out our codebase with custom hooks.

You can find this complete example on [GitHub](https://github.com/rebelchris/react-basics/tree/custom-hook).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
