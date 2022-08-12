---
layout: ../../layouts/Post.astro
title: 'Browser extensions - Using storage'
metaTitle: 'Browser extensions - Using storage'
metaDesc: 'How to use browser storage in browser extensions'
ogImage: /images/22-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/f475719c-1292-4231-8e99-19ebb31e6000
date: 2022-08-22T03:00:00.000Z
tags:
  - browser-extensions
---

In today's article, we'll transform our already excellent popup browser extension to be a little more personal.

We are going to give the user the option to colorize the popup.
To maintain what the user has picked, we'll leverage [chrome's storage capabilities](https://developer.chrome.com/docs/extensions/reference/storage/).

If you'd like to experiment with this article, use the following [GitHub branch](https://github.com/rebelchris/popup-extension/tree/alarm) as your starting point.

The result for today will be this color-changing popup that maintains the color in local storage.

<!-- ![Browser extensions - Using storage](https://cdn.hashnode.com/res/hashnode/image/upload/v1660323287484/zqYo2opra.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1660323526/storage_fdefvm.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1660323525/storage_aaywip.mp4" type="video/mp4" />
</video>

## Adding storage to a browser extension

The first thing we'll have to do is add the permission of storage to our manifest file.
Open up the `manifest.json` file and add `storage` into the permissions array.

```js
{
  "permissions": [
    "alarms",
    "notifications",
    "storage"
  ]
}
```

With that in place, we should be ready to use the storage.

Now open up the `App.jsx` file as that will be our main focus point for the rest of the article.

I first want to add a select list with some color options for the user.

```js
export function App() {
  return (
    <div
      className={`flex flex-col items-center justify-center w-screen h-auto bg-indigo-400 p-4`}
    >
      <select>
        <option>Pick a color</option>
        <option value='indigo'>Indigo</option>
        <option value='pink'>Pink</option>
        <option value='purple'>Purple</option>
      </select>
    </div>
  );
}
```

> Note: I've added some Tailwind classes to the select list, which you can find [here](https://github.com/rebelchris/popup-extension/blob/d838540ba973b01bb3e0a7ef28328cdd67f4a6e2/src/App.jsx#L35).

Then we'll need to define an array of all available colors.

```js
const colorMatch = {
  indigo: 'bg-indigo-400',
  pink: 'bg-pink-400',
  purple: 'bg-purple-400',
};
```

Then we can add a state that will hold our color variable. By default, we'll use the indigo color.

```js
const [color, setColor] = useState('indigo');
```

Now we can change the wrapping div element to hold this dynamic color.

```js
<div className={`flex flex-col items-center justify-center w-screen h-auto ${colorMatch[color]} p-4`}>
```

Alright, this made our color dynamic, but it will always be indigo at the moment.

Let's start by adding a change catch to our select element and setting the value of the select element.

```js
<select onChange={(event) => pickColor(event.target.value)} value={color}>
  <option>Pick a color</option>
  <option value='indigo'>Indigo</option>
  <option value='pink'>Pink</option>
  <option value='purple'>Purple</option>
</select>
```

Awesome, now let's go ahead and create this `pickColor` function.

```js
const pickColor = (pickedValue) => {
  setColor(pickedValue);
  chrome.storage.sync.set({ color: pickedValue });
};
```

First, we change the state color variable to the selected color, then set it in our storage with the `color` key.

You will already be able to try it out now, but every time you open the popup, it will reset.

We need a way to read the storage and change our default color.

```js
chrome.storage.sync.get('color', (storedColor) => {
  setColor(storedColor.color);
});
```

This will load our storage and set the color to whatever is stored if it exists.

And that's it!
The user can now determine what color he would like the extension, and it will be saved in the storage.

You can find the complete source code in this [GitHub repo](https://github.com/rebelchris/popup-extension/tree/storage).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
