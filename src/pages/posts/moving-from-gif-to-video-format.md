---
layout: ../../layouts/Post.astro
title: 'Moving from GIF to video format'
metaTitle: 'Moving from GIF to video format'
metaDesc: 'Why video format is better then GIF for animated content'
image: /images/27-06-2021.jpg
date: 2021-06-27T03:00:00.000Z
tags:
  - html
---

Perhaps you've seen my recent tweet about improving the technical side of the website.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Put in some extra work to fix meta descriptions and titles.<br />Love fixing these small issues to make the website better.<br /><br />Now just need to revamp some old articles spelling wise 😅 <a href="https://t.co/GZH1zqRauR">https://t.co/GZH1zqRauR</a> <a href="https://t.co/DDBLIrkwgB">pic.twitter.com/DDBLIrkwgB</a></p>&mdash; Chris Bongers 🤓💻⚡️ (@DailyDevTips1) <a href="https://twitter.com/DailyDevTips1/status/1406862517142495233?ref_src=twsrc%5Etfw">June 21, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I've noted the biggest technical downside is the actual size of images that are being served.

And looking at the data [ahrefs](https://ahrefs.com/) gives us, it looks like GIFs are the biggest struggle.

![Ahrefs issue audit report](https://cdn.hashnode.com/res/hashnode/image/upload/v1624339958594/4v7SPFgi0.png)

Let's take a page with the biggest GIF in file size and see what it looks like now.

We'll be looking for the second GIF and see how we can improve.

The first thing I'll do from here is open the actual URL and run the Lighthouse report for this page.

![Lighthouse report](https://cdn.hashnode.com/res/hashnode/image/upload/v1624340084469/xFFQxFqf4.png)

As you can see, Lighthouse states we should use video formats for animated content (GIFs). Also, below that, you'll see we should avoid enormous network payloads, which well also fix by moving from GIF to Video.

## Using video instead of GIF for animated content

Then I'll go ahead and download the GIF from the website and save it on my desktop.

Now I'm going to open my terminal and navigate to the Desktop folder.

The first conversion is from GIF to MP4.

```bash
ffmpeg -i {original}.gif -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p {output}.mp4
```

> Note: change the variables to the actual names of the files you are using and want to get.

This will give us a converted MP4 file, but let's also make a WebM file. These are even smaller.

```bash
ffmpeg -i {original}.gif -c vp9 -b:v 0 -crf 41 {output}.webm
```

To see the difference, let's check out the finder and see what we gained.

![Difference between GIF, MP4 and Webm file](https://cdn.hashnode.com/res/hashnode/image/upload/v1624340525598/2G2oc6IGi.png)

This is a massive difference:

- `GIF`: 13,2MB
- `MP4`: 945KB
- `WEBM`: 370KB

As you can imagine, this will make our website way faster already, and it actually doesn't make much difference user experience-wise.

## Placing the video format as the content

Currently a image is loaded like this:

```html
<img src="image.gif" alt="descriptive text" loading="lazy" />
```

To convert this into video, we can use the video tag and specify both formats.

```html
<video autoplay loop muted playsinline>
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

After this, let's deploy the website and see if we fixed anything.

![Lighthouse score after changes](https://cdn.hashnode.com/res/hashnode/image/upload/v1624341081549/hqWWB6qrq.png)

You can see no more errors in the console, and the total requests are down to 119KiB.
This is a massive improvement without really disbursing the user. If any, we help them by serving the website faster.

I'll be converting my GIF content to video this way throughout the weeks. Are you joining me?

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
