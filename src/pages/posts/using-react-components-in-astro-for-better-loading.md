---
layout: ../../layouts/Post.astro
title: 'Using React components in Astro for better loading'
metaTitle: 'Using React components in Astro for better loading'
metaDesc: 'Converting JavaScript in Astro to React component to leverage hydration'
image: /images/22-07-2021.jpg
date: 2021-07-22T03:00:00.000Z
tags:
  - astro
---

Yesterday we made a super cool [portfolio in Astro](https://daily-dev-tips.com/posts/recreating-my-portfolio-website-in-astro/). However, as mentioned in that article, I cloned my existing website.

The downside is the header, and testimonial slider are using JavaScript.
I just copied that over in an Astro file in the current state so it would work as-is.

An example of the header file with JavaScript:

```jsx
---
import site from "../data/site.json";
const {nav} = site;
---
<header id="header">
    <ul>
        {nav.map((item) => (
            <li>
                <a href={item.link} target={item.target} rel="noopener noreferrer">{item.name}</a>
            </li>
        ))}
    </ul>
</header>
<script type="text/javascript">
const header = document.getElementById("header");
window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
</script>
```

This specific example works well, but I wanted to convert this into some React code to leverage the Astro loads better.

## Converting Astro components into React

We'll first convert the `.astro` file into a `.jsx` file (React).

Before you continue, check if you set your renderer to include React.

Open up the `Astro.config.mjs` file and ensure the renderers include the following elements.

```js
renderers: ['@astrojs/renderer-react'],
```

Now let's start with the header component.

The basic react component will look like this:

```jsx
import React, { useState, useEffect } from 'react';
import site from '../../data/site.json';
const { nav } = site;
import './header.scss'; // include global CSS

const Header = () => {
  return (
    <header id='header'>
      <ul>
        {nav.map((item, i) => (
          <li key={i}>
            <a href={item.link} target={item.target} rel='noopener noreferrer'>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Header;
```

As you may see, I moved this whole file into its folder (header) and added a css file for the header in this folder.

However, now we're missing the whole JavaScript part, so let's add it back in the React way of doing things.

```jsx
const Header = () => {
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (window.pageYOffset > 50) {
      return setColorchange(true);
    }
    return setColorchange(false);
  }

  return (
    <header id='header' className={colorChange ? 'active' : ''}>
      <ul>
        {nav.map((item, i) => (
          <li key={i}>
            <a href={item.link} target={item.target} rel='noopener noreferrer'>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
```

Here I'm using the useEffect hook to listen to scroll events. While this happens, we invoke the `handleScroll` function.
We also remove the listener once the component closes.

The handleScroll function will check the scroll offset, and if that is greater than 50, we set the colorChange to true.

This is then added to the className of the header element.

The last part we need to change is the actual loading of the component.
We do this in our `pages/index.astro` file.

The basic import changes to the new file extension, and we can add partial hydration to that.

For partial hydration, we can use the following types:

- `client:load`: Hydrates on page load
- `client:idle`: Hydrate as soon as the main thread is free
- `client:visible`: Hydrate as soon as this component hits the viewport
- `client:media={query}`: Hydrate when a specific media query is met

We'll use a load for this specific one:

```jsx
import Header from '../components/header/Header.jsx';

<Header client:load />;
```

## Converting the Testimonial slider

We can also convert the testimonial slider using this approach.
I've decided to make this a whole React component, so the testimonial wrapper and the element inside.

Let's have a look at the slider first.

```jsx
import React, { useState, useEffect } from 'react';
import TestimonialItem from './TestimonialItem.jsx';
import site from '../../data/site.json';
const title = `Don't take my word for it`;
const { testimonials } = site;
import './testimonials.scss'; // include global CSS

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newIndex =
        activeSlide + 1 === testimonials.length ? 0 : activeSlide + 1;
      setActiveSlide(newIndex);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [activeSlide]);

  return (
    <section id='testimonials'>
      <h2>{title}</h2>
      <div className='testimonial-grid'>
        {testimonials.map((testimonial, i) => (
          <TestimonialItem
            key={i}
            item={testimonial}
            active={activeSlide === i}
          />
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
```

Quote a lot going on here. The most crucial part is that we want to auto-play which element is active.

I've decided to create a state for this and update it on an interval basis.
We will add a counter, and it will reset if it's on the last slide.

Then we pass this active state to the specific element that should be active.

Let's take a look at how this looks on the TestimonialItem.

```jsx
import React from 'react';
import './testimonials.scss'; // include global CSS

const TestimonialItem = ({ item, active }) => {
  return (
    <div className={active ? 'testimonial-item active' : 'testimonial-item'}>
      <div className='testimonial-item--inner'>
        <img width='64' height='64' src={item.image} alt={item.name} />
        <div className='testimonial-item--content'>
          <strong>
            {item.name} <i>{item.title}</i>
          </strong>
          <br />
          <p>{item.quote}</p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialItem;
```

As you can see, this is now turned into a React component.
We can leverage React binding to bind the item and the active state with this.

We then use a React conditional rendering to add the active class to one specific item or not.

Since this specific component is lower down the page, let's use the `client:visible` option.

```jsx
import Testimonials from '../components/testimonials/Testimonials.jsx';

<Testimonials client:visible />;
```

Pretty cool, right?
This specific component will only start working once we hit it in the viewport, making it easier on the load.

You can view the live demo here: [Chris Bongers portfolio](https://chrisbongers.com/).
Or view the source code on [GitHub](https://github.com/rebelchris/astro-portfolio).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
