---
layout: ../../layouts/Post.astro
title: 'Browser extensions - Icon action'
metaTitle: 'Browser extensions - Icon action'
metaDesc: 'Adding a custom action to the browser extension toolbar icon'
ogImage: /images/25-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/fdac44d0-bc46-4af3-4b53-f41951767500
date: 2022-08-25T03:00:00.000Z
tags:
  - browser-extensions
---

So far, we have had a couple of articles around popup extensions. These typically thrive on the icon click action.

But what about our new tab experience? When clicking on that icon, nothing happens.

Let's fix that.

> Note: If you like to work along with this article, use the following [GitHub branch](https://github.com/rebelchris/new-tab-extension/tree/weather) as your starting point.

We want a new tab to open when the user clicks the toolbar icon.

## Browser extension icon action

This action, funny enough, is not defined in the manifest. Instead, we have to log a manual action in a background script.

As we don't use one for our new tab, let's add the `background.js` file inside your `public` folder.

Then open up your `manifest.json` and register the background script as a service worker (version 3).

While here, we also need to define an empty `action` object. This will ensure we can use actions.

```js
{
	"action": {},
  "background": {
    "service_worker": "background.js"
  }
}
```

Now head back to the background script. We will need to register an action for the `browserAction`.

```js
chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: './new-tab.html', active: true });
});
```

We register an on-click handler on the action attribute (the icon). When the user clicks this icon, we navigate them to a new tab, with our `new-tab.html` as the source.
Since this is a relative link, this will work.

When the user clicks the icon, they navigate to a new tab with our default page.

You can find the completed code samples in the following [GitHub branch](https://github.com/rebelchris/new-tab-extension/tree/action).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
