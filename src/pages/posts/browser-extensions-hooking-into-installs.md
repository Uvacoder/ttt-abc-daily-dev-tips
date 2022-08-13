---
layout: ../../layouts/Post.astro
title: 'Browser extensions - Hooking into installs'
metaTitle: 'Browser extensions - Hooking into installs'
metaDesc: 'Hooking into the install actions for browser extensions'
ogImage: /images/23-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/792c8396-9171-4186-b065-5a9bbf2b6e00
date: 2022-08-23T03:00:00.000Z
tags:
  - browser-extensions
---

In some cases, you might want to hook into the install script of your extensions, for instance, when you want to onboard the users with some extra information.

In other cases, you might want to catch updates so that you can redirect users to the latest changelog.

And you can even use this install runtime to set a uninstall URL. This URL will be called whenever the user removes your extension.

## Catching onInstall actions in browser extensions

If you would like to code along with this article, take the following [GitHub branch](https://github.com/rebelchris/popup-extension/tree/storage) as your starting point.

This project already has the main setup and uses a background worker, which we'll need.

> Note: Read the following article for [more information about the background worker](https://daily-dev-tips.com/posts/browser-extensions-repeating-notifications/).

Now open up the `public/background.js` file and add the following script.

```js
chrome.runtime.onInstalled.addListener((details) => {
  // Do something
});
```

This registers as soon as your extension is installed.
We can leverage the details, which is a [`OnInstalledReason` type](https://developer.chrome.com/docs/extensions/reference/runtime/#type-OnInstalledReason).

The reasons can be:

- install
- update
- chrome_update
- shared_module_update

Let's see how we can use that for catching the install and update actions.
We'll add some [browser notifications](https://daily-dev-tips.com/posts/browser-extensions-adding-browser-notifications/) in those cases, as we already have access to those.

```js
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon-48.png',
      title: 'Hi there 👋',
      message: 'Welcome to the best extensions you ever installed',
      buttons: [{ title: 'Thanks 😅️' }],
      priority: 0,
    });
  }

  if (details.reason === 'update') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon-48.png',
      title: 'Thank you',
      message: 'For updating this extensions',
      buttons: [{ title: 'Cool' }],
      priority: 0,
    });
  }
});
```

Another cool thing we can do is to set the uninstall URL. This is the URL that the user will be redirected to when they uninstall the extension.
It can be helpful to ask them questions about why they are leaving, for instance.

```js
chrome.runtime.onInstalled.addListener(details => {
    chrome.runtime.setUninstallURL('https://daily-dev-tips.com');
}
```

> Note: You can also safely add that code inside your `install` reason, but this is safer if your extension was previously deployed without it.

And now, when users remove the extension, they are redirected to this link.

You can view the complete code in this [GitHub branch](https://github.com/rebelchris/popup-extension/tree/installs).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
