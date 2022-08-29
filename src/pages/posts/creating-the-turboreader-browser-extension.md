---
layout: ../../layouts/Post.astro
title: 'Creating the TurboReader browser extension'
metaTitle: 'Creating the TurboReader browser extension'
metaDesc: 'How I created the turbo reader browser extension'
ogImage: /images/29-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/f3729988-5b43-4f6a-adb3-5c6bf4162b00
date: 2022-08-29T03:00:00.000Z
tags:
  - browser-extensions
---

So far, we have had a good mix of different elements. This article will show you how I made the turboReader browser extension.

For those unfamiliar with turbo reading, it's a concept where you modify words to be partially bold to increase reading speed. This concept is called Bionic reading.

Read more about [Bionic reading](https://bionic-reading.com/).

In this article, I won't be using the API of bionic but instead opt for my scripted version of the output.

The result will be this fantastic extension that can work on any webpage.

<!-- ![Creating the TurboReader browser extension](https://cdn.hashnode.com/res/hashnode/image/upload/v1660890010075/Nui0rZmpr.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1660890041/turboreader_ghlbnk.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1660890040/turboreader_vsqkiv.mp4" type="video/mp4" />
</video>

## Setting up the project

Let's first start by setting up the project. Our extension will power with the click of the options button.
So we will only need our manifest and background worker.

We'll start by creating a new folder and navigating to it.

```bash
mkdir turboReader && cd turboReader
```

Once inside, open the project and start by adding the `manifest.json` file.

```js
{
  "manifest_version": 3,
  "version": "1.0",
  "name": "TurboReader",
  "description": "Become a faster reader with TurboReader",
  "action": {},
  "icons": {
    "48": "icons/icon-48.png"
  },
  "background": {
    "service_worker": "background.js"
  },
  "permissions": [ "activeTab", "scripting"]
}
```

As you can see, we use manifest version 3.
Then we also define an empty action object, which is needed to attach handlers to the action icon.
And we set our background worker to a file called `background.js`.
Lastly, we'll need permissions to inject scripting on the active tab.

Let's go ahead and create the `background.js` file.
First, we'll need to add the action that fires on clicking the options button.

```js
chrome.action.onClicked.addListener(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: turboMode,
  });
});
```

Here, we fetch the active tab and inject a function called `turboMode`.

Now go ahead and create the `turboMode` function.

```js
const turboMode = () => {
  // Our function
};
```

## Creating the turbo reading mode function

To achieve this function, we first need to retrieve all paragraphs on the page.

```js
const paragraphs = document.getElementsByTagName('p');
```

Then we want to ensure we are not yet in turbo reading mode. We'll do this by checking if a specific class is added to the body.

```js
const isTurboMode = document.body.classList.contains('trms');
```

Then we can loop over each paragraph and do something with each one.

```js
for (const paragraph of paragraphs) {
  if (isTurboMode) {
    // Turbo mode is one
  } else {
    // Turbo mode is off
  }
}
```

If turbo mode is on, we should return the paragraphs to their original form.
We'll do that by replacing the innerText with its non-html version.

```js
paragraph.innerText = paragraph.innerText;
```

> Note: side effect could cause existing bold/italic markup to be removed. 😅

If we are not in turbo mode, we should take the text for each paragraph and split it by word.
Then we'll map each word and eventually return them with a space in between.

```js
paragraph.innerHTML = paragraph.innerText
  .split(' ')
  .map((word) => {
    // Each word
  })
  .join(' ');
```

Now comes the fun part. We must evaluate which part of the word we want to show in bold.

My thoughts here are that we can roughly make half the word bold.
To achieve that, we first need to determine the length of the word.

```js
const length = word.replace(/[^a-zA-Z0-9]+$/, '').length;
```

We can then get the length of the part we'll make bold. If the word is one letter, it should always become bold. Else we floor half of the length.

```js
const boldLength = length === 1 ? 1 : Math.floor(length / 2);
```

And then we return the word, but with the first half being bold.

```js
return `<strong>${word.substring(0, boldLength)}</strong>${word.substring(
  boldLength
)}`;
```

The last part outside of the loop is to add a body class determining if we are in turbo mode or not.

```js
isTurboMode
  ? document.body.classList.remove('trms')
  : document.body.classList.add('trms');
```

And that's it. Our full function will now look like this:

```js
const turboMode = () => {
  const paragraphs = document.getElementsByTagName('p');
  const isTurboMode = document.body.classList.contains('trms');
  for (const paragraph of paragraphs) {
    if (isTurboMode) {
      paragraph.innerText = paragraph.innerText;
    } else {
      paragraph.innerHTML = paragraph.innerText
        .split(' ')
        .map((word) => {
          const length = word.replace(/[^a-zA-Z0-9]+$/, '').length;
          const boldLength = length === 1 ? 1 : Math.floor(length / 2);
          return `<strong>${word.substring(
            0,
            boldLength
          )}</strong>${word.substring(boldLength)}`;
        })
        .join(' ');
    }
  }

  isTurboMode
    ? document.body.classList.remove('trms')
    : document.body.classList.add('trms');
};
```

You can also find the completed code in this [GitHub repo](https://github.com/rebelchris/turbo-reader).

Or install the [Chrome TurboReader plugin](https://chrome.google.com/webstore/detail/turboreader/gigchaacekpdooihhlbikhinmgpiedfb).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
