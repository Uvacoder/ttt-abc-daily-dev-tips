---
layout: ../../layouts/Post.astro
title: 'JavaScript sending data between windows'
metaTitle: 'JavaScript sending data between windows'
metaDesc: 'Sending data between two windows in JavaScript'
ogImage: /images/09-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/5c5be80f-1fe8-4e92-77a4-ac26196a2700
date: 2022-09-09T03:00:00.000Z
tags:
  - javascript
---

I recently worked on a system that needed to open a popup window. A specific action could be done on the popup window and the original window that invoked the popup required to receive the choice.

This might sound a bit crazy to build, but it's easier than you think.

In this article, we'll create our main page. On click, it can open a new popup window.
Another button can send a static message to this window.

Inside this popup window, the user can pick three options and send the chosen one back to the origin.

You can see a demo of this in the video below.

<!-- ![JavaScript sending data between windows](https://cdn.hashnode.com/res/hashnode/image/upload/v1661841738094/iTiYivn1B.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1661841780/messages_z1bdmx.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1661841779/messages_ccdqpx.mp4" type="video/mp4" />
</video>

## Setting up the structure

I decided to create a very straightforward setup for this project.
Start by creating a new folder, and inside create an `index.html`, `sub.html`, and `index.js` file.

Let's start by making the `index.html` content.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Sending messages</title>
  </head>
  <body>
    <p>Welcome. You can click the button below to open a new tab</p>
    <button onclick="openNewWindow()">Open new tab</button>
    <button onclick="sendMessage()">Send message</button>
    <p id="response"></p>
    <script src="index.js"></script>
  </body>
</html>
```

Let's move on to the `sub.html` page, which will be very similar to the index.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Sending messages</title>
  </head>
  <body>
    <p>I'm the sub page</p>
    <p id="response"></p>
    <p>Choose your response</p>
    <button onclick="closeWindow(`That's amazing`)">That's amazing</button>
    <button onclick="closeWindow(`Pretty cool`)">Pretty cool</button>
    <button onclick="closeWindow(`Meh, could be cooler`)">
      Meh, could be cooler
    </button>
    <script src="index.js"></script>
  </body>
</html>
```

## Sending messages between windows with JavaScript

For this specific article, I decided to use one generic JavaScript file. You can, however, also split it up into two files.

Let's open up the `index.js` file.
The first thing we'll want to add is the actual opening of the window.

```js
let newWindow;

const openNewWindow = () => {
  const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=300,height=300`;
  newWindow = window.open('sub.html', 'sub', params);
};
```

I pass several parameters to the `window.open` function.

- `sub.html`: The page we want to open
- `sub`: Name of the page we want to open (can be anything)
- `params`: Options for this new window

You might also have spotted I set this new window as a variable. We have seen this to send data with the other button.

To send the data to this new popup window, we need to create the `sendMessage` function.

```js
const sendMessage = () => {
  newWindow.postMessage({ foo: 'bar' }, '*');
};
```

This will post a new message to the window containing an object with `foo: bar` values.

Now we can work on the receiving end. Since we used the `postMessage` function, we can subscribe to messages for the current window.

To do that, create the following listener.

```js
const response = document.getElementById('response');

window.addEventListener('message', (event) => {
  if (event.data?.foo) {
    response.innerText = event.data.foo;
  }
});
```

This function will listen to all messages, and if one comes in with the `foo` object, it will set the response text to that value.

The next part is around sending data back to the original window. We created three buttons in our `sub.html` file that invokes a `closeWindow` function.
Let's go ahead and add that function.

```js
const closeWindow = (message) => {
  window.opener.postMessage({ msg: message }, '*');
  window.close();
};
```

And again, we can leverage the `postMessage` function, but this time we invoke it on the `opener`, which refers to the original window.

Now let's modify our event listener also to handle this specific message.

```js
window.addEventListener('message', (event) => {
  if (event.data?.foo) {
    response.innerText = event.data.foo;
  }
  if (event.data?.msg) {
    response.innerText = event.data.msg;
  }
});
```

And voila, you can now send messages between two windows in JavaScript.

If you'd like to view the source code, I've uploaded it to [GitHub](https://github.com/rebelchris/javascript-messages).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
