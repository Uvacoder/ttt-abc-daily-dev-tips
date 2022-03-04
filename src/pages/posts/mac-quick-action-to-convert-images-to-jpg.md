---
layout: ../../layouts/Post.astro
title: "Mac quick action to convert images to JPG"
metaTitle: "Mac quick action to convert images to JPG"
metaDesc: 'How to automate image conversions on your Mac with Automator'
image: /images/18-11-2021.jpg
date: 2021-11-18T03:00:00.000Z
tags:
  - mac
---
If you also own an iPhone and send pictures to your Mac, they often come in HEIC format.

This is the format used for the Live Photo feature, which is cool, but we can't upload these pictures.

I'll show you a super handy shortcut to automate converting any image into a JPG format in this article.

## Using Automator to create a quick action

Quick actions on the Mac are mighty. They create shortcuts we can use natively.
And the cool part is that with Automator, we can make our own ones!

Open up the Automator app on your Mac.

![Mac Automator app](https://cdn.hashnode.com/res/hashnode/image/upload/v1636280499152/j6vfvsYTQy.png)

On the first screen, press the "New Document" button at the bottom.

![New Automator action](https://cdn.hashnode.com/res/hashnode/image/upload/v1636280581711/JMvGZ0Qmz.png)

The action we'll be making is a Quick Action.

![Quick action in Automator](https://cdn.hashnode.com/res/hashnode/image/upload/v1636280626859/c-Zyr1IIW.png)

Inside this quick action, we can have all kinds of actions, pretty cool to find out what's possible.

## Convert images to JPG

But let's stay on topic and see how we can convert images to JPG.

Change the workflow to receive image files in the top section.

![Workflow section](https://cdn.hashnode.com/res/hashnode/image/upload/v1636280846426/T6j7bM3a4.png)

Then on the left, click the Photos action and find the action that states "Change Type of Images".

![Type of image change](https://cdn.hashnode.com/res/hashnode/image/upload/v1636280919112/V1yQHPRrC.png)

Double click it, or drag it to your middle screen to add it.
You can see it also adds a "Copy Finder Items" this enables it always to output these new images to your desktop, but you can change the output folder.

Change the type to JPEG.

![JPG output](https://cdn.hashnode.com/res/hashnode/image/upload/v1636281029122/5FBGLnFWX.png)

That's it. We can now export this function but clicking the File menu and selecting Export.

![Export action](https://cdn.hashnode.com/res/hashnode/image/upload/v1636281080236/DwRmCFoF1.png)

## Install and use the quick action

Now find the action in your selected folder and double click it.
This will prompt you to install it.

![Automator install quick action](https://cdn.hashnode.com/res/hashnode/image/upload/v1636281143692/6kBvgxZqx.png)

Now find an image somewhere and right-click it.
You should now see your custom action under the quick action menu.

![Quick action menu on Mac](https://cdn.hashnode.com/res/hashnode/image/upload/v1636281315326/4ixgx86KC.png)

And if we click it, a new image in JPG format will appear on our desktop!

![Converted HEIC to JPG on desktop](https://cdn.hashnode.com/res/hashnode/image/upload/v1636281380137/mcKh2s10nW.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
