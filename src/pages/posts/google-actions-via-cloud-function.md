---
layout: ../../layouts/Post.astro
title: 'Google actions via cloud function'
metaTitle: 'Google actions via cloud function'
metaDesc: "Converting the Google action to use a cloud function for it's data source"
ogImage: /images/11-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/16888795-4b56-45df-d4bc-43a059578800
date: 2022-09-11T03:00:00.000Z
tags:
  - google-actions
---

Yesterday we created our [very first Google action](https://daily-dev-tips.com/posts/a-wild-idea-appeared/) by using the visual builder.

Today we'll recreate the same thing but use the cloud function variant.
This way, we are ready to build our kind of manipulations and data fetching later.

Alright, let's get started.

## Google action via cloud functions

We'll first want to add a webhook, click on the webhook item in the sidebar, and pick "inline cloud functions" from the option.

![Inline cloud action](https://cdn.hashnode.com/res/hashnode/image/upload/v1662012029304/r9MEcYbnd.png)

Once it's spooled up, you will technically have a Firebase cloud function but managed within the Google actions console.
This makes it easier to link everything together.

Let's set up the main wireframe for the index file.

```js
const { conversation } = require('@assistant/conversation');
const functions = require('firebase-functions');

const app = conversation({ debug: true });

app.handle('greeting', (conv) => {
  conv.add('Here is the latest daily dev tip.');
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);
```

This will create a new conversation app and add a greeting function.
This greeting function will add a simple text to the conversation.

You can save the fulfillment and deploy it.

> Note: The deployments can take some time, so don't try and test it directly (give it a minute or so)

To use this, we have to go back to our central invocation.
First, remove the "Send prompts" content and uncheck this checkbox.

Then in the line above, check "Call your webhook" and put "greeting" inside the textbox. (Since greeting is the name of our event handler)

Now you can go ahead and test your action.
In my case, I went back to the webhook and also added a Card like this.

```js
const {
  conversation,
  Simple,
  Card,
  Image,
} = require('@assistant/conversation');
const functions = require('firebase-functions');

const app = conversation({ debug: true });

app.handle('greeting', (conv) => {
  conv.add('Here is the latest daily dev tip.');
  conv.add(
    new Card({
      title: 'My article',
      text: 'Short description of the article',
      image: new Image({
        url: 'https://developers.google.com/assistant/assistant_96.png',
        alt: 'Daily Dev Tips header',
      }),
    })
  );
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);
```

When I run my action, it will prompt like this:

![Google action via cloud function](https://cdn.hashnode.com/res/hashnode/image/upload/v1662012345743/8VZWbRqFM.png)

Pretty cool!

In the following article, we'll try and fetch data from an external source so we can make it a bit more dynamic.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
