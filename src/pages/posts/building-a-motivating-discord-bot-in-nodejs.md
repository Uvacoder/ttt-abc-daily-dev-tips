---
layout: ../../layouts/Post.astro
title: 'Building A Motivating Discord Bot In Node.js'
metaTitle: 'Building A Motivating Discord Bot In Node.js'
metaDesc: "In this article we'll learn how to create a discord chat bot in Node.js"
image: /images/19-08-2021.jpg
date: 2021-08-19T03:00:00.000Z
tags:
  - nodejs
---

> This article is originally posted on the [Adeva blog](https://adevait.com/nodejs/building-motivating-discord-bot-nodejs)

Teams making it their own, gamers living there online, friends doing their online hangouts. Yes, we're talking about Discord, the communication tool with more than a quarter-billion users.

No wonder you see many people talking about it, making tools work with it, and notice integrations pop up everywhere.

And we're going to be a part of that because today, we'll learn how to make our very first Discord bot!

And not any bot, a motivating bot for when we feel down. Because developer happiness is very important ❤️.

## Prerequisites

To get started with this project, you will need the following knowledge and tools.

Using the command line
Discord client setup and ready to go
Basic knowledge of Node.js applications
Don't worry, it's not too technical and explained step-by-step for you.

## Setting Up a Discord Bot

Let's start with the configuration side. We'll be setting up a Discord bot, but let's make our test server for our new bot before we get there.

Open your Discord client and click the plus icon:

![new Discord client](https://cdn.hashnode.com/res/hashnode/image/upload/v1629297672863/pNWnAq6z8.png)

Please fill out the details as to what server you'll be creating. For this article, it doesn't matter what you choose.

Once that is done, and your server is up and running. Then we can head over to the [Discord Developer Portal](https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications).

Click on the New application button on the top right of the screen:

![New Discord application](https://cdn.hashnode.com/res/hashnode/image/upload/v1629297717612/0vLaw6B6k.png)

On the pop-up, fill out whatever your app should be named. I used `discord-test-bot`.

In the left menu, click on the `Bot` item, and click the `Add Bot` button:

![Discord new bot](https://cdn.hashnode.com/res/hashnode/image/upload/v1629297757770/jl9El4h-k.png)

You can then give this bot an image and name, making it friendly and personal!

Another critical step is to make sure we give the app and our bot the correct rights.
To manage the rights, head over to the Oauth2 section.

For scopes, turn on the `Bot` scope. Then scroll down and select `Send Messages` and `Read Message History`:

![Bot access rights](https://cdn.hashnode.com/res/hashnode/image/upload/v1629297794141/FvKi6NMGi.png)

Then we need to add this bot to the server we just created. We can do this by copying the link under the scopes section and opening that in a separate window.

It will pop up a select, where you can choose what server you like to add the bot to:

![Add bot to Discord channel](https://cdn.hashnode.com/res/hashnode/image/upload/v1629297820949/Mle_UnH7M.png)

The last thing we need from the developer portal is the token. We can head back to the Bot menu item and click the copy button on the token part:

![Copy Discord bot token](https://cdn.hashnode.com/res/hashnode/image/upload/v1629297849052/Ma4ecsjjF.png)

We'll use this token to give our bot access to do something.

## Creating the Node.js Discord Script

Alright, now that this admin part is done, let's start on our Node.js script.

Open your favorite terminal and create a new project directory and initialize node.

```bash
mkdir discord-bot && cd discord-bot
npm init -y
```

Note: The -y parameter answers all questions of the CLI with yes (saves us some enters).

Next, we'll be using a couple of NPM packages, so let's install those using our terminal.

```bash
npm install axios discord.js dotenv
```

This will install the following packages, which we'll use for:

- `axios`: Making http requests to the quotes API
- `discord.js`: The Discord NPM package
- `dotenv`: Enables environmental config files

With this in place, let's create our `.env` file first. This file will hold the Discord bot token we just copied.

```js
TOKEN = YOUR_TOKEN;
```

> Note: Replace YOUR_TOKEN with the actual token you got from the bot setup.

Now, create an `index.js` file in your editor. The first thing we'll add is all our config.

```js
require('dotenv').config();
const Discord = require('discord.js');
const axios = require('axios');
const TOKEN = process.env.TOKEN;
const bot = new Discord.Client();
```

As mentioned, we won't make an ordinary bot. Our bot will be responding to people who seem to be sad on Discord.

For this, we'll create an array of words that sound sad. You can, of course, enhance this list to your wish.

```js
const targets = ['sad', 'angry', 'unhappy', 'miserable', 'down'];
```

The idea is that when a user uses any of those words, we lift them with a quote.

The next part will be to log in to the bot. This is something the Discord NPM package handles for us, so we have to call the following line of code.

In this line, we call the login function of the bot and pass our token to it.

```js
bot.login(TOKEN);
```

Then we can also see if our bot is connected by executing the following script.

```js
bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}`);
});
```

But more importantly, we want to listen to messages being sent on the Discord server and react to those.

To listen to messages, we use the following function.

```js
bot.on('message', (msg) => {
  // Execute code
});
```

We want to add a check to see if the message was not by any bot. Else we might create an infinite loop 👀.

```js
if (msg.author.bot) return;
```

That line will stop the function when a bot posts a message.

The next part will be to see if the user used any of our target words.

```js
const foundWord = targets.find((target) => msg.content.includes(target));
if (foundWord) {
  console.log(`Found the word ${foundWord}`);
}
```

A quick recap for what's going on, we use the JavaScript array method “find“ to loop over each of our target words. When the message includes that word, it breaks the find method and will return that word.

Example:

- User types message: "I'm angry and sad at the same time"
- We'll loop over our targets
- The first hit is sad
- We found the word sad
- Console logs: "Found the word sad"

That is enough for now, we could check the other way around, but this is the more efficient solution.

The next step is to query a quotes API and return a random quote to uplift the person.

```js
axios.get('https://type.fit/api/quotes').then((response) => {
  // API response inside response object
});
```

This is an array, so let's try and get a random item from this array.

```js
const randomQuote = response.data[Math.floor(Math.random() * response.data.length)];
```

Bear with me here. We define a new variable and call the response.data array, we then pass the number of the item we want to retrieve.

As the variable, we send the Math where we get a random number with a max of all items in the object.

The last thing we need to do is respond to this user with a nice message:

```js
msg.channel.send(
  `Don't be ${foundWord}\n${randomQuote.author}once said:\n${randomQuote.text}`
);
```

And now, let's run the script and test it out!

```bash
node index.js
```

![Discord chatbot responding with uplifting messages](https://cdn.hashnode.com/res/hashnode/image/upload/v1629298149918/INSrPbX1Z.png)

And there we go! Our Discord bot is responding with an uplifting message. The message will change every time someone mentions one of our trigger words. If you're looking for the source code, I hosted the code on [GitHub](https://github.com/rebelchris/node-discord-bot).
