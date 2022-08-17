---
layout: ../../layouts/Post.astro
title: 'Javascript native barcode detector API'
metaTitle: 'Javascript native barcode detector API'
metaDesc: 'Detecting barcodes with the native barcode detector API'
image: /images/28-04-2021.jpg
date: 2021-04-28T03:00:00.000Z
tags:
  - javascript
---

Today I'm looking at a super cool new API, the Barcode detector API.
This is now shipped as a stable version since Chrome 83.

Be aware it's not a fully supported API by all browsers yet.

The Barcode detector API, as its name suggests can detect barcodes of several formats from an image or video source.

The end result for today will look like this:

![Barcode Detector API](https://cdn.hashnode.com/res/hashnode/image/upload/v1619339927010/Ygp5o8-aY.png)

> Note: You can find a full demo below

## Using the Barcode Detector API

Using the barcode API is actually pretty simple.
We can create a detector like this:

```js
// Plain one:
const barcodeDetector = new BarcodeDetector();

// Specific format one:
const barcodeDetector = new BarcodeDetector({
  formats: [
    'aztec',
    'code_128',
    'code_39',
    'code_93',
    'codabar',
    'data_matrix',
    'ean_13',
    'ean_8',
    'itf',
    'pdf417',
    'qr_code',
    'upc_a',
    'upc_e',
  ],
});
```

As you can see we can pass an array of formats we want to be scanning for, this might come in handy if you are only looking for one type of barcode.

Then we can simply call the `detect` function and pass an image stream.

```js
try {
  const barcodes = await barcodeDetector.detect(image);
  barcodes.forEach((barcode) => doSomething(barcode));
} catch (e) {
  console.error('Barcode detection failed:', e);
}
```

In our case, we will be using a fixed image to detect the barcode.

```html
<img
  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1619338701344/-rJKsBrhI.png"
  crossorigin
  alt="QR Coden Daily Dev Tips"
/>
```

And now we can simply create a barcode detector that will use this image, and output all data in a newly created `pre` tag.

```js
const barcodeDetector = new BarcodeDetector();
const image = document.querySelector('img');

barcodeDetector
  .detect(image)
  .then((barcodes) => {
    let pre = document.createElement('pre');
    pre.innerHTML = JSON.stringify(barcodes, null, 2);
    image.after(pre);
  })
  .catch(console.error);
```

And it gives us the result of a bounding box, corner-points, and the actual value.

You can try this out on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="RwKvQdB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Javascript native barcode detector API">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/RwKvQdB">
  Javascript native barcode detector API</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser support

As mentioned the API is still in progress being rolled out, as of Chrome 83 and Edge 82 we can use it.
However, Firefox does not yet support it.

![CSS barcode detector support](https://cdn.hashnode.com/res/hashnode/image/upload/v1619340054375/52URFcbqB.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
