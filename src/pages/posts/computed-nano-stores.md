---
layout: ../../layouts/Post.astro
title: 'Computed Nano Stores'
metaTitle: 'Computed Nano Stores'
metaDesc: 'What are computed nano stores and how can we use them?'
ogImage: /images/06-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/367c6358-5867-4f0c-e806-9267bf071700
date: 2022-09-06T03:00:00.000Z
tags:
  - astro
---

Now that we had a look at [Maps with Nano Stores](https://daily-dev-tips.com/posts/astro-nano-stores-maps/) let's take a look at the next element, computed stores.

A computed store can take an initial static store and do some computing.
It can even compute from two different stores.

## Nano Stores computed maps

If you'd like to follow this article, use this [GitHub branch](https://github.com/rebelchris/astro-react/tree/part-4) as your starting point.

The first thing we'll do is add a new value to our color objects called primary.
We can use this to determine if a color is a primary color.

Open up the `src/store/colors.js` file and change the color map.

```js
const colors = map({
  blue: {
    primary: true,
    color: 'blue',
    hex: '#9bf6ff',
  },
  green: {
    primary: false,
    color: 'green',
    hex: '#caffbf',
  },
});
```

Then we can start by adding the computed value list.
First, import it.

```js
import { computed, map } from 'nanostores';
```

Then we can use it. Since we are using a map, we have to extract the object values manually.
If you were using Atoms, you'd be able to loop directly over those.

```js
const primaryColors = computed(colors, (list) =>
  Object.values(list).filter((item) => item.primary)
);
```

Now let's go to our `React.jsx` component and add some more buttons to play with.

```js
<button onClick={() => addColor('blue', '#a0c4ff', true)}>Change blue</button>
<button onClick={() => addColor('red', '#ffadad', true)}>Add red</button>
<button onClick={() => addColor('purple', '#bdb2ff', false)}>Add purple</button>
```

Now, let's load the primary colors and assign them to a useStore.

```js
import { primaryColors } from '../store/colors';

const primaryItems = useStore(primaryColors);
```

Then under the existing list, we'll render the primary color list.

```js
<h4>Primary colors</h4>
<ul>
    {Object.values(primaryItems).map(({color, hex}) => (
        <li key={color} style={{ backgroundColor: hex }}>
            {color} {hex}
        </li>
    ))}
</ul>
```

You can now run your application. Try clicking the buttons. This click should result in both the map and computed list changing!

![Computed map with Nano Stores](https://cdn.hashnode.com/res/hashnode/image/upload/v1661580696020/dcCG2jt0Z.png)

And as usual, you can also find the complete code on [GitHub](https://github.com/rebelchris/astro-react/tree/part-5).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
