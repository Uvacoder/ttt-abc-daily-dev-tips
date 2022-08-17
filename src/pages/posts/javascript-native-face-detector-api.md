---
layout: ../../layouts/Post.astro
title: 'Javascript native face detector API'
metaTitle: 'Javascript native face detector API'
metaDesc: 'Natively detecting faces from an image in JavaScript'
image: /images/30-04-2021.jpg
date: 2021-04-30T03:00:00.000Z
tags:
  - javascript
---

As we now looked at the [barcode detector API](https://daily-dev-tips.com/posts/detecting-barcodes-from-the-webcam/), I want to introduce you to the face detection API.

This is not yet publicly available, unlike the barcode one, but we can enable it in Chrome by enabling a flag.

Open Chrome, and type the following address: `chrome://flags`, in there enable the `#enable-experimental-web-platform-features`.

![Enabling experimental web flag](https://cdn.hashnode.com/res/hashnode/image/upload/v1619506691206/a6odngNMk.png)

Now we should be able to use this face detection as well.

The result for today will be to detect faces in a picture, as seen in the image below.

![JavaScript face detection](https://cdn.hashnode.com/res/hashnode/image/upload/v1619508585879/vusXmX0lj.png)

## Using the Face Detector API

In general use, the face detector is pretty straightforward.

We can create a new detector like this:

```js
const faceDetector = new FaceDetector();

// Pass options:
const faceDetector = new FaceDetector({
  maxDetectedFaces: 5,
  fastMode: false,
});
```

As you can see, we can pass an optional argument, where we can limit the number of faces being found.
And we can turn the fast mode on or off.
FastMode on means it will focus on speed over accuracy.

The next part is simply calling the detect function and passing an image or video source.

```js
try {
  const faces = await faceDetector.detect(image);
  faces.forEach((face) => doSomething(face));
} catch (e) {
  console.error('Face detection failed:', e);
}
```

## Making a face detection demo

Let's create our demo. We will use a fixed image for the demo, so let's set up a photo with some people in it.

```html
<img
  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
  crossorigin
  alt="Group of people"
/>
```

Then we can make a window onload function to wait till everything is loaded.

```js
window.onload = () => {
  detect();
};
```

Here we call the detect function. We will be making this function asynchronous.

```js
async function detect() {
  const image = document.querySelector('img');
  const faceDetector = new FaceDetector({ fastMode: true });

  try {
    const faces = await faceDetector.detect(image);
    faces.forEach((face) => {
      console.log(face);
    });
  } catch (e) {
    console.error('Face detection failed:', e);
  }
}
```

The function takes the image we set at hand and will call the face detector in fast mode.

Then we can detect faces on that image and loop through each image.

A response of an image looks like this:

- boundingBox: The size and position of the box the face fits
- landmarks: Elements like the eye and mouth of a person

So in our example, we get four faces, which is correct.
Let's add some boxes over the faces to see what we are looking at!

First, let's wrap our image in a relative holder.

```html
<div id="holder">
  <img
    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    crossorigin
    alt="Group of people"
  />
</div>
```

Now we can make the holder a relative element and the image absolutely positioned.

```css
img {
  position: absolute;
}
#holder {
  position: relative;
}
```

And in our detection, we can now grab each face and get the width, height, top, and left values.

```js
const faces = await faceDetector.detect(image);
faces.forEach((face) => {
  const { top, left, width, height } = face.boundingBox;
  const faceDiv = document.createElement('div');
  faceDiv.className = 'face';
  Object.assign(faceDiv.style, {
    width: `${width}px`,
    height: `${height}px`,
    left: `${left}px`,
    top: `${top}px`,
  });
  holder.appendChild(faceDiv);
});
```

We then create a new div element with the className `face` and set the styles for this div. We then add it to our holder div.

Let's quickly add some basic styles for our face div.

```css
.face {
  position: absolute;
  border: 2px solid yellow;
}
```

If you enabled the flag, you should be able to try out the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="JjEzxMX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Javascript native face detector API">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/JjEzxMX">
  Javascript native face detector API</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

And that's it. We have now done some basic face detection using a native API!
I'll leave it up to you to get the eyes and mouth pinned!

## Browser support

UNFORTUNATELY, this API is not publicly available, so browser support can't be provided at this stage.
However, it is a very cool one to look out for!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
