---
layout: ../../layouts/Post.astro
title: 'Host images via Google Drive'
metaTitle: 'How to host images on Google Drive [2021 Tutorial]'
metaDesc: 'Learn how to host your images on Google Drive and create public image URLs.'
image: /images/15-05-2021.jpg
date: 2021-05-15T03:00:00.000Z
tags:
  - hosting
---

The other day I was playing around with some image effects and needed a host to serve them from an online place.

Don't get me wrong. I know there are many tools and websites to do this for you.
Yet I learned that Google Drive could also be an image host.

As a person who owns unlimited Google storage, it was worthwhile giving it a go.

## Hosting public images on Google Drive

So today, I'll be showing you how to host images on Google Drive and have them available for everyone.

Firstly open your [Google drive](https://drive.google.com/drive/u/0/my-drive) and upload an image.

For this purpose, it doesn't matter if it's in a folder or not.

![Image uploaded in Google drive](https://cdn.hashnode.com/res/hashnode/image/upload/v1620712526448/QYjw87XYA.png)

That's part one. Now, we can click the picture and select the sharing option.

![Google drive share button](https://cdn.hashnode.com/res/hashnode/image/upload/v1620712672796/k_YLwvGAG.png)

I changed the option to everyone with the link to be on the safe side. You'll get a link like this:

```
https://drive.google.com/file/d/10YD7sJI_HHDXmQM4h96alvyGIU53nGYZ/view?usp=sharing
```

## Create public Image URL hosted on Google Drive

In the link, the part after the /d/ is what we are looking for, as it's the unique ID of the image.

We can copy the unique ID and create the following **image URL**:

```
https://drive.google.com/uc?id={ID}
```

So in our case, we get a link like this:

```
https://drive.google.com/uc?id=10YD7sJI_HHDXmQM4h96alvyGIU53nGYZ
```

And we can use the image as such:

![Image of yes I do host on Google Drive](https://drive.google.com/uc?id=10YD7sJI_HHDXmQM4h96alvyGIU53nGYZ)

And that's it. You're now able to use your Google Drive to host images for you.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
