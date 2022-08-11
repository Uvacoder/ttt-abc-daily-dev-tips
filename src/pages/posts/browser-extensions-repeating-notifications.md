---
layout: ../../layouts/Post.astro
title: 'Browser extensions - Repeating notifications'
metaTitle: 'Browser extensions - Repeating notifications'
metaDesc: 'Schedule and repeat browser notifications via our browser extensions'
ogImage: /images/21-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/2ea01829-2b55-4abf-b161-9b7ff3bfb400
date: 2022-08-21T03:00:00.000Z
tags:
  - browser-extensions
---

In the previous article, we had an [introduction to browser notifications](https://daily-dev-tips.com/posts/browser-extensions-adding-browser-notifications/).
We were able to send a notification when the user clicked the button.
However, that's quite once-off and pointless. Let's see how we can make it a recurring action.

We want the user to start the flow and get a message every hour to remind them that they are awesome.

I'll be working with the previous article as the starting point. You can use this [GitHub branch](https://github.com/rebelchris/popup-extension/tree/notifications) if you like to follow along.

## Creating repeating notifications

To achieve the repeating notifications, we have to leverage the [alarm API](https://developer.chrome.com/docs/extensions/reference/alarms/). This allows us to create alarms that can go off at a specified time.

To gain access to this API, we must register it in our `manifest.json` file.

```js
{
  "permissions": [
    "alarms",
    "notifications"
  ]
}
```

While we have this file open, we also need to introduce a background worker. Since we are working with V3 of the manifest, we should register it as a service worker like this.

```js
{
  "background": {
    "service_worker": "background.js"
  },
}
```

This background worker will act as the operation's brains and send out the notifications.

Let's first modify our `App.jsx` so we can trigger the right things.
The first thing I did was add another button, so the user always has the option to stop the repeating alarm.

```js
export function App() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-auto bg-indigo-400 p-4'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-2xl px-4 rounded'
        onClick={createNotification}
      >
        Motivate me 🎉
      </button>
      <br />
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-2xl px-4 rounded'
        onClick={stopNotification}
      >
        Stop motivating me 😅
      </button>
    </div>
  );
}
```

Now let's go ahead and create the two actions.

The first one will be `createNotification`. This should add a repeating alarm.

We can use the alarms API and the `periodInMinutes` option to achieve that. With this option set, the alarm will repeat itself every minute. (to the value you use).

```js
const createNotification = () => {
  chrome.alarms.create({
    periodInMinutes: 60,
  });
  window.close();
};
```

Optional you can use the `delayInMinutes` to add a custom delay.

> Note: When testing, you can set it to 1 minute.

Then we need to add the function that will stop the alarms when the user requests this.

```js
const stopNotification = () => {
  chrome.alarms.clearAll();
  window.close();
};
```

And that's it. Our alarms are now managed. However, we won't see any notifications yet.

This is where the background script comes in.
Create a `background.js` file inside your `public` folder.

In there, we need to add a listener to the chrome alarms. Each time the alarm goes off, we want to send a notification as we did before.

```js
chrome.alarms.onAlarm.addListener(() => {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon-48.png',
    title: 'Hi there 👋',
    message: 'Just a reminder that you rock!',
    buttons: [{ title: 'I know ☺️' }],
    priority: 0,
  });
});
```

## Adding a failsafe

Our code is working, but at the moment, it would trigger on every alarm, this could mean other plugins also set the alarm, and our script would trigger.

To help with that, we can set a specific name for our alarm.
Modify the `App.jsx` script to set the alarm with a name.

```js
chrome.alarms.create('motivation_alarm', {
  periodInMinutes: 1,
});
```

Then we need to change our `background.js` script to only fire notifications if this alarm went off.

```js
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'motivation_alarm') {
        chrome.notifications.create({
            ...
        });
    }
});
```

And that's it. Our alarms now only go off for our extension.

You can find the complete code example on this [GitHub branch](https://github.com/rebelchris/popup-extension/tree/alarm).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
