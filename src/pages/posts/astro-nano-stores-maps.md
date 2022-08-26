---
layout: ../../layouts/Post.astro
title: 'Astro Nano Stores maps'
metaTitle: 'Astro Nano Stores maps'
metaDesc: 'How to use Maps in Nano Stores'
ogImage: /images/05-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/8cf58dbd-1e72-49cb-b065-a52882792f00
date: 2022-09-05T03:00:00.000Z
tags:
  - astro
---

In the previous article, we first introduced the [Nano Stores](https://daily-dev-tips.com/posts/sharing-state-between-frameworks-with-astro/) and how they can sync states between frameworks.

In this article, we'll dive deeper into these Nano Stores and look specifically at the Maps.

Maps are a kind of store that can be used to store objects where you want to maintain a key value.
You can then use this key to update existing items in the store.

## Maps in Nano Stores

Let's build out an example. It will help explain how Maps work and what they can do for us.

If you'd like to follow along, use this [GitHub branch](https://github.com/rebelchris/astro-react/tree/part-3) as your starting point.

We want to create a list of colors where the user can update an existing color and add a new one.

First, let's add a new store we'll call `/store/colors.js`.

Inside start by importing the map function.

```js
import { map } from 'nanostores';
```

Then we can define our initial object. In our case, we want to add one color to it already.

```js
const colors = map({
  blue: {
    color: 'blue',
    hex: '#9bf6ff',
  },
});
```

As you can see, it has a key identifier (`blue`) that we can use to control this specific entry.

Now let's also add a function that can add colors to this map.

```js
const addColor = (color, hex) => colors.setKey(color, { color, hex });
```

This will add a specific object to our map, but based on the key, it can override an existing one.

Then we'll export the map and this add function.

```js
export { colors, addColor };
```

Now let's modify our React component to use this color map.

```js
import { useStore } from '@nanostores/react';
import { addColor, colors } from '../store/colors';

export default function React() {
  const colorItems = useStore(colors);

  return (
    <div>
      <ul>
        {Object.values(colorItems).map(({ color, hex }) => (
          <li key={color} style={{ backgroundColor: hex }}>
            {color} {hex}
          </li>
        ))}
      </ul>
      <button onClick={() => addColor('blue', '#a0c4ff')}>Change blue</button>
      <button onClick={() => addColor('red', '#ffadad')}>Add red</button>
    </div>
  );
}
```

This code renders the map and shows the colors that are in it.
We then added two buttons.

- Change the blue color
- Add a new red color

If we run our project, we'll see that we can change the blue color to a different hex value and even add red color to our map.

<!-- ![Astro Nano Stores maps](https://cdn.hashnode.com/res/hashnode/image/upload/v1661494287847/_5VDWndgH.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1661494328/colors_x1k9py.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1661494327/colors_f0cjcq.mp4" type="video/mp4" />
</video>

If you'd like to inspect the source code, I've added it to this [GitHub branch](https://github.com/rebelchris/astro-react/tree/part-4).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
