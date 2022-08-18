---
layout: ../../layouts/Post.astro
title: 'Browser extensions - Modify images on the page'
metaTitle: 'Browser extensions - Modify images on the page'
metaDesc: 'How to replace all images on a webpage with a popup browser extension'
ogImage: /images/28-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/e6f5faa6-8a37-4c95-dbe7-cebb8cc68500
date: 2022-08-28T03:00:00.000Z
tags:
  - browser-extensions
---

This article will examine how we can modify images on the active page.

If you'd like to follow along with the article, use the following [GitHub branch](https://github.com/rebelchris/popup-extension/tree/messaging) as your starting point.

Below is a video of today's article code in action. You can see we replace all images on an IMDB page with kittens.

<!-- ![Browser extensions - Modify images on the page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3f3yho8bzwsbmwoc3o8j.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1660807836/spoof-images_xjwqgo.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1660807835/spoof-images_et7kbk.mp4" type="video/mp4" />
</video>

## Modify all images on the page

As usual, we must register a new button in our popup menu.
This button will be the invocation for changing all the images on the page. Open up the `src/App.jsx` file and add the following content:

```js
<button onClick={imageSpoof}>Change images</button>
```

We'll need to use the scripting we learned about in the [previous article](https://daily-dev-tips.com/posts/browser-extensions-messaging/) to inject a function on the page.

```js
const imageSpoof = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: spoofImages,
  });
};
```

With this in place, we can create the actual `spoofImages` function we defined.

```js
const spoofImages = () => {
  const images = document.getElementsByTagName('img');
  for (const image of images) {
    image.removeAttribute('srcset');
    image.src = 'http://placekitten.com/300';
  }
};
```

This will replace all images on the page with a kitten placeholder.
I also decided to remove the `srcset` simply because it would take higher priority.

> Note: This will currently place the same kitten image everywhere.

And that's it, and we can now replace images on every website we visit.

You can find the completed code on [GitHub](https://github.com/rebelchris/popup-extension/tree/image-spoof).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
