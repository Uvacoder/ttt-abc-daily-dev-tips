---
layout: ../../layouts/Post.astro
title: 'Generating QR Codes in Google Sheets'
metaTitle: 'Generating QR Codes in Google Sheets'
metaDesc: 'Automating QR code generation in Google Sheets'
image: /images/23-05-2021.jpg
date: 2021-05-23T03:00:00.000Z
tags:
  - developer
---

Being a developer comes down to using the right tool for the right job. And sometimes, it can be a Google sheet or Excel sheet that can automate a simple task for you.

Have you ever needed to generate QR codes from a whole list of URLs, for instance?

Well, Google has your back on that.
Today, we'll use Google Sheets and Google Charts to generate QR Codes!

![Generating QR Codes in Google Sheets](https://cdn.hashnode.com/res/hashnode/image/upload/v1621491034345/0q398HEE4.gif)

## Generating a QR code with Google Charts

Google Charts is a fantastic tool that can generate several types of charts for us.
One of the charts we can generate is a QR code.

The benefit of this is that we get a dynamic endpoint where we can change the encoded QR element to be something variable.

[Read more on the Google Chart QR Code](https://developers.google.com/chart/infographics/docs/qr_codes)

If you follow along with my article, this is the end URL we will be using.

```text
https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=https://daily-dev-tips.com
```

Where the variables we use are:

- `chs`: Chart size, we defined a 200x200 square
- `cht`: Chart type, in our case, QR
- `chl`: This is the data we want to encode

Using that URL as an image, we get the following result.

![Daily dev tips QR code](https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=https://daily-dev-tips.com)

## Google Sheets dynamic QR codes

Now that we know about creating QR codes, let's put this into action as we generate them dynamically in Google Sheets.

Open up a new Google Sheets and fill out column A with random websites.

Then in column B, we will add the following formula.

```text
=IMAGE("https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="&A1&"")
```

Then we can drag this formula down to the other cells!

Make the rows a bit bigger so you can see the image correctly.
And that's it. We now have a dynamic QR generator in Google Sheets.

You can view the [Google QR Sheet here](https://docs.google.com/spreadsheets/d/1qcpM5jyOC2bb8Yg3V3JfvnSefo9yzmb_B1UNUgu3Hyc/edit?usp=sharing).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
