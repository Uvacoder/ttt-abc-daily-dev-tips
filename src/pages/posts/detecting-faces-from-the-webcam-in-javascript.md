---
layout: ../../layouts/Post.astro
title: 'Detecting faces from the webcam in JavaScript'
metaTitle: 'Detecting faces from the webcam in JavaScript'
metaDesc: 'Detecting a face from the webcam and writing to canvas in JavaScript'
image: /images/01-05-2021.jpg
date: 2021-05-01T03:00:00.000Z
tags:
  - javascript
---

As we looked at the [face detection API](https://daily-dev-tips.com/posts/javascript-native-face-detector-api/) yesterday, let's see how we can make it like the [barcode from the webcam](https://daily-dev-tips.com/posts/detecting-barcodes-from-the-webcam/) example.

We will be doing this one a little bit differently, due to the high drawing rate, we will draw everything on the canvas, which makes it easier to draw the detection.

The end goal for today is cool face detection from a webcam input.

<video width="500" autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/face-detection_gnerpr.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/face-detection_uqiczb.mp4" type="video/mp4" />
</video>

## Writing video input to the canvas

For the first part, let's look at how we can capture the video input, and write it to a canvas.

For our HTML we can use the following:

```html
<canvas></canvas>
```

Now let's introduce the basic onload to call an asynchronous function again.

```js
window.onload = () => {
  detect();
};
```

Inside our detect function, we can have a play with getting the canvas and writing the video stream to it.
But first, let's define all our variables.

```js
async function detect() {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  const faceDetector = new FaceDetector({ fastMode: true });
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: 'environment' },
  });

  const video = document.createElement('video');
  video.srcObject = mediaStream;
  video.autoplay = true;
  video.onloadedmetadata = () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  };
}
```

However this will not write the actual video yet, this will need to be based on the loop to write every change.

So let's add the loop already.

```js
(function renderLoop() {
  requestAnimationFrame(renderLoop);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
})();
```

That will give us the webcam output on the screen.

![Webcam to canvas in JavaScript](https://cdn.hashnode.com/res/hashnode/image/upload/v1619596351577/ZO5aaVcbx.png)

## Detecting faces from the webcam input in JavaScript

So now that we have the webcam on the canvas, let's look at how we can implement our face detection.

We will change our loop to call the render function.

```js
(function renderLoop() {
  requestAnimationFrame(renderLoop);
  render();
})();
```

This render function in return will call the face detector API.

```js
function render() {
  faceDetector
    .detect(video)
    .then((faces) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    })
    .catch(console.error);
}
```

Now let's draw an outline for each face we find.

```js
context.strokeStyle = '#FFFF00';
context.lineWidth = 5;
faces.forEach((face) => {
  const { top, left, width, height } = face.boundingBox;
  context.beginPath();
  context.rect(left, top, width, height);
  context.stroke();
});
```

And it should give us a result like this.

![Detected face in JavaScript](https://cdn.hashnode.com/res/hashnode/image/upload/v1619596565010/XlU4HbJMs.png)

If you have the flag enabled in Chrome.

Open Chrome, and type the following address: `chrome://flags`, in there enable the `#enable-experimental-web-platform-features`.

You should be able to try out this Codepen as well.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="KKaYRKM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Detecting faces from the webcam in JavaScript">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/KKaYRKM">
  Detecting faces from the webcam in JavaScript</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser support

This API is unfortunately not publicly available, so browser support can't be provided at this stage.
However, is a very cool one to look out for!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
