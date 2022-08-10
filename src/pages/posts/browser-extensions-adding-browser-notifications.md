---
layout: ../../layouts/Post.astro
title: 'Browser extensions - Adding browser notifications'
metaTitle: 'Browser extensions - Adding browser notifications'
metaDesc: 'How to send browser notifications via a browser extension'
ogImage: /images/20-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/e3f8c20d-52da-4c8d-9291-103c79aae900
date: 2022-08-20T03:00:00.000Z
tags:
  - browser-extensions
---

In this article, we'll be exploring how to add browser notifications to our browser extension.

As the starting point, I'll use our [popup extension](https://daily-dev-tips.com/posts/browser-extension-popup-extension/).
If you want to follow along, use the following [GitHub repo](https://github.com/rebelchris/popup-extension/tree/part-1).

The result of this article is the following interaction.

<!-- ![Browser extensions - Adding browser notifications](https://cdn.hashnode.com/res/hashnode/image/upload/v1660146274871/vumFpgOYt.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1660146325/notification_qlwotx.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1660146325/notification_b6gwtu.mp4" type="video/mp4" />
</video>

## Adding browser notifications to a browser extensions

[Browser notifications](https://web.dev/push-notifications-overview/) are native browsers that add notifications, much like you are used to on your mobile devices.

However, not many people opt-in for them at this stage. Let's hope this changes in the future.

For this article, we'll be using the popup extension to trigger a browser notification.

The first thing we'll have to do is give the correct permissions to our application.

Open up your `manifest.json` file and add the following permissions.

```js
{
  "permissions": [
    "notifications"
  ]
}
```

This will allow us to access the native notification layer.

Then we can open up our `src/App.jsx` file.
Let's add a button in the rendering part.

```js
export function App() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-auto bg-indigo-400 p-4'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-2xl px-4 rounded'
        onClick={createNotification}
      >
        Surprise me 🎉
      </button>
    </div>
  );
}
```

You might have spotted the `createNotification` on the click handler. Let's quickly add that function to our file.

```js
const createNotification = () => {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon-48.png',
    title: 'Hi there 👋',
    message: 'Just a reminder that you rock!',
    buttons: [{ title: 'I know ☺️' }],
    priority: 0,
  });
};
```

This function calls the browser notification API and creates a new notification.
The notification will be called instantly.
We set a title, message, and custom button in our example.

> Note: You can find all options in [the documentation](https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions)

Now let's build our app and see what happens.
Follow the [guide here](https://daily-dev-tips.com/posts/browser-extensions-new-tab-extension/#testing-the-extension) to build your app.

You should now see the notification occur!

![Notification via browser extension](https://cdn.hashnode.com/res/hashnode/image/upload/v1660146248778/A3U59ZNic.png)

If you want to see the complete source code, I hosted it on [GitHub](https://github.com/rebelchris/popup-extension/tree/notifications).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
