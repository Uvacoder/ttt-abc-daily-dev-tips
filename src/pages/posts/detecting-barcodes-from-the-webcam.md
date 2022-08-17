---
layout: ../../layouts/Post.astro
title: 'Detecting barcodes from the webcam'
metaTitle: 'Detecting barcodes from the webcam'
metaDesc: 'Converting our barcode detector to fetch from the webcam'
image: /images/29-04-2021.jpg
date: 2021-04-29T03:00:00.000Z
tags:
  - javascript
---

Yesterday we had a look at the [barcode detector API](https://daily-dev-tips.com/posts/javascript-native-barcode-detector-api/) using an image as our source.
Today I'd like to explore how this works when we use a webcam as the input source.

This will work a little bit differently from what we've done with the image since we need to loop the function that detects the barcodes.

The end result will be this application that can scan unique barcodes and outputs them as a list.

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/barcode_bn1ota.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/barcode_itbof1.mp4" type="video/mp4" />
</video>

## Detecting barcodes from the camera

First of all, let's start without `HTML` structure which has nothing fancy going on, we just want a placeholder for our list items.

```html
<ul id="barcode-list"></ul>
```

Next up, we want to change the unload function to call an async function.

```js
window.onload = () => {
  detect();
};

async function detect() {
  // Function code
}
```

We want it like this since we want to wait for the video to be accepting and working.

Let's start by defining some variables inside our detect function.

```js
const barcodeDetector = new BarcodeDetector();
const list = document.getElementById('barcode-list');
let itemsFound = [];
const mediaStream = await navigator.mediaDevices.getUserMedia({
  video: { facingMode: 'environment' },
});
```

We create out barcodeDetector as we did with the image.
Then we define what element our list is, and we make a variable array that can hold our codes that have been found.
Then we create a new media device targeting the webcam.

The next step is to output this webcam onto the screen, so the user has some visual feedback.

```js
const video = document.createElement('video');
video.srcObject = mediaStream;
video.autoplay = true;

list.before(video);
```

Here we create a new element of the type of video and set the source to be the media stream we just created.
We then add it before our list.

This should now give us the webcam output on our screen.

![Adding webcam output to HTML](https://cdn.hashnode.com/res/hashnode/image/upload/v1619422122998/nHUUX3yY4.png)

Then we need to have a function that can check for out barcodes.
However, this function needs to keep running.

So inside the detect function, we can have another function like this:

```js
async function detect() {
  function render() {
    // Do the detection
  }

  (function renderLoop() {
    requestAnimationFrame(renderLoop);
    render();
  })();
}
```

This will make sure the render function is called at a certain rate, and call it initially.

The render function itself is much like what we've done before:

```js
function render() {
  barcodeDetector
    .detect(video)
    .then((barcodes) => {
      barcodes.forEach((barcode) => {
        if (!itemsFound.includes(barcode.rawValue)) {
          itemsFound.push(barcode.rawValue);
          const li = document.createElement('li');
          li.innerHTML = barcode.rawValue;
          list.appendChild(li);
        }
      });
    })
    .catch(console.error);
}
```

For each barcode we find, we add a new list item.

You can try this code out on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="jOyJOzr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Detecting barcodes from the webcam">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/jOyJOzr">
  Detecting barcodes from the webcam</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser support

As mentioned the API is still in progress being rolled out, as of Chrome 83 and Edge 82 we can use it.
However, Firefox does not yet support it.

![CSS barcode detector support](https://cdn.hashnode.com/res/hashnode/image/upload/v1619340054375/52URFcbqB.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
