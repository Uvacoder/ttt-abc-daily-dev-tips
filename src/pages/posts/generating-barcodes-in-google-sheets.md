---
layout: ../../layouts/Post.astro
title: 'Generating barcodes in Google Sheets'
metaTitle: 'Generating barcodes in Google Sheets'
metaDesc: 'Making barcodes in Google Sheets'
image: /images/25-05-2021.jpg
date: 2021-05-25T03:00:00.000Z
tags:
  - developer
---

We learned [how to create QR codes in Google Sheets](https://daily-dev-tips.com/posts/generating-qr-codes-in-google-sheets/), and with that, I thought let me try and see if Barcodes are also possible.

It turns out it is!

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/sheet-barcode_j3xa8t.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/sheet-barcode_btcrdk.mp4" type="video/mp4" />
</video>

## Creating barcodes in Google Sheets

To start, let's write the product IDs in column A. This will be our reference point.

![Google Sheets product IDs](https://cdn.hashnode.com/res/hashnode/image/upload/v1621695380333/VY0QFIfTR.png)

To make a valid barcode, we need to get that value and append two stars (\*).

Let's fix that with a formula in row B.

```
="*"&A1&"*"
```

This will take the value from row A and wrap it in the two stars.
Pull down the cells to have it working for all items.

![Barcode raw](https://cdn.hashnode.com/res/hashnode/image/upload/v1621695505210/A3QrgFxMw.png)

You might be thinking, ok, but how is this now a barcode?
And the magic is actually in the font we will be using!

Select row B and click "More fonts" change the font to be "Libre Barcode" there are two options, but we'll use Code 39 for this article.

You now have barcodes in your Google Sheet.

![Barcodes in Google Sheet](https://cdn.hashnode.com/res/hashnode/image/upload/v1621695660549/wnc2ZR6EK.png)

Check out my [Barcode Google Sheet here](https://docs.google.com/spreadsheets/d/1TVP2I4RALyl2QxrTlmnvH-yNhUcijJrjZ0gt1DMFbBo/edit?usp=sharing).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
