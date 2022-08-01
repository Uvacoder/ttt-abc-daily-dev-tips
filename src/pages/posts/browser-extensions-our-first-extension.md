---
layout: ../../layouts/Post.astro
title: 'Browser extensions - our first extension'
metaTitle: 'Browser extensions - our first extension'
metaDesc: 'Creating our very first browser extension'
ogImage: /images/11-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/843bd2db-28a1-4bd7-f9f5-5e6c73451f00
date: 2022-08-11T03:00:00.000Z
tags:
  - browser-extensions
---

Now that we learned the [different types of extensions](https://daily-dev-tips.com/posts/types-of-browser-extensions/), let's see how we can create our first browser extension.

In this article, we'll create an extension that changes the body color on each page to pink.
Because pink is a great color.

![Chrome extension active](https://cdn.hashnode.com/res/hashnode/image/upload/v1659333470356/5hCA3izT-.png)

## The browser extension wireframe

Browser extensions function through something called a manifest.
This is a JSON file that contains all specific data about the extension.

It states the extension's metadata and the actual content it should run.

Let's create a new folder and navigate to it.

```bash
mkdir pinkify-extension && cd pinkify-extension
```

The next step is to create a `manifest.json` file which will become the brain of this operation.

Inside, place the following information.

```js
{
  "manifest_version": 2,
  "name": "Pinkify",
  "version": "1.0",
  "description": "Convert any page to a pinkish page 💖",
  "icons": {
    "48": "icons/pinkify-48.png"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["pinkify.js"]
    }
  ]
}
```

As you can see, it contains quite a lot of data about the application.

- `manifest_version`: Which type of manifest to use? Three is recommended but not supported in Firefox yet, so I use two.
- `name`: The name of your extension
- `version`: The version of this extension
- `description`: A small description of what it does
- `icons`: You can add multiple icon files for your extension
- `content_scripts`: This is the actual function that will be injected. We say on all URLs, add the `pinkify.js` script.

We'll dive into more details on the content_scripts later.

You can place a sample 48x48 pixels icon in the root directory.

Then you can add the script file, called `pinkify.js`, and put the following line of code in it.

```js
document.body.style.setProperty('background', '#FDF2F7');
```

This will set the body background color to light pink.

> Note: I didn't add any overwrites, so if a page already sets the body color, it won't be activated.

## Testing your extension

We don't want to publish to the stores without testing our extension, so let's see what it takes to try it locally.

I prefer to use Chrome as it has a quicker interface for it.

In Chrome, click the plugins button and open up that page.

![Chrome extension overview](https://cdn.hashnode.com/res/hashnode/image/upload/v1659333220794/C7-4tkk9O.png)

Next, toggle the developer mode on. You'll get another menu where you get the option to load unpacked extensions.

Click the load unpacked and navigate to the `pinkify-extension` folder.

![Chrome load unpacked extension](https://cdn.hashnode.com/res/hashnode/image/upload/v1659333349950/kyqtbdhy4.png)

Once loaded, you should see something like this:

![Pinkify extension loaded](https://cdn.hashnode.com/res/hashnode/image/upload/v1659333418208/VwWAXmzFW.png)

Now navigate to google.com or any webpage, and you should be able to see the pinkish background activated.

![Chrome extension active](https://cdn.hashnode.com/res/hashnode/image/upload/v1659333470356/5hCA3izT-.png)

Amazing you made your first ever browser extension. As you can see, it's not as hard as one would think.

In the following articles, we'll create some more advanced extensions as well.

You can find today's code in the following [GitHub repo](https://github.com/rebelchris/pinkify-extension).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
