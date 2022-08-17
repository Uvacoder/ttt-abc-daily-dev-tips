---
layout: ../../layouts/Post.astro
title: 'Browser extensions - Popup page modifications'
metaTitle: 'Browser extensions - Popup page modifications'
metaDesc: 'Modifying the active tab through a browser popup extension'
ogImage: /images/26-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/4b27088a-130a-4bfa-945a-b0b50acdb700
date: 2022-08-26T03:00:00.000Z
tags:
  - browser-extensions
---

We already created a basic extension that [made all the websites we visit pink](https://daily-dev-tips.com/posts/browser-extensions-our-first-extension/), but what if we want that action to only happen when we click a button inside our popup extensions?

Well, in this article, we'll learn just that, and even better, we base the color of our [local storage](https://daily-dev-tips.com/posts/browser-extensions-using-storage/) that we implemented in a previous article.

If you wish to follow this article, use this [GitHub branch](https://github.com/rebelchris/popup-extension/tree/options) as your starting point.

## Popup extension modifies a page

What we want to achieve today is that by clicking a button inside our popup extension, the color of the active tab changes.

<!-- ![Browser extensions - Popup page modifications](https://cdn.hashnode.com/res/hashnode/image/upload/v1660670380498/wVYOY4Bk5.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1660670565/modify-page_rux0n9.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1660670565/modify-page_bn1wze.mp4" type="video/mp4" />
</video>

We'll first need to add some new permissions to our `manifest.json` file.

```js
{
  "permissions": ["alarms", "notifications", "storage", "activeTab", "scripting"],
}
```

The new ones are `activeTab` and `scripting`.
Which do the following:

- `activeTab` allows us to modify and retrieve the active tab
- `scripting` allows us to inject scripts via the browser

Now let's go ahead and modify our popup page. Open the `src/App.jsx` file and add a button in the render section.

```js
return <button onClick={colorize}>Colorize 💖</button>;
```

Now let's add this `colorize` function.

```js
const colorize = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeColor,
  });
};
```

This looks super complicated, but don't worry. I'll guide you through this.

First, we need to fetch the active tab. We can use the tabs query for this.

Once we have the active tab, we can invoke the chrome scripting API.
We call the `executeScript` function, which can inject a script or simple function on that tab.
In our case, we inject the `changeColor` function.

We can then add this function to this file to be used.

```js
const changeColor = () => {
  chrome.storage.sync.get('color', ({ color }) => {
    document.body.style.backgroundColor = color;
  });
};
```

This function will read out local storage and grab the color from it.
Then we'll set the documents body to that color.

And voila!
With the click of a button, you're able to change any website!

> Note: Remember that we [added the colors in local storage](https://daily-dev-tips.com/posts/browser-extensions-custom-options-page/)? You can play around by changing the color in your options.

You can also find the complete code on [GitHub](https://github.com/rebelchris/popup-extension/tree/page-modifications).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
