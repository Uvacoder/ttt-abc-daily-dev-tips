---
layout: ../../layouts/Post.astro
title: 'Our First Ionic App'
metaTitle: 'Our First Ionic App'
metaDesc: 'First introduction into making an Ionic App'
image: /images/02-07-2020.jpg
date: 2020-07-02T03:00:00.000Z
tags:
  - ionic
---

It's been a while for me since I've made an app, you must realize I did build apps for a living at one stage, and these were all built in `Ionic`.

Even though we are now years ahead, `Ionic` is still a solid bet, so let me guide you through making our first app in `Ionic`.

## What is Ionic?

`Ionic` is an open-source mobile UI Toolkit to create cross-platform native and web applications.
Basic a framework to create hybrid apps.

Nowadays, they support multiple languages, which is amazing; you can choose `Angular`/`React` or `Vue`.

## Installing the Dependencies

Getting started with `Ionic` is quite easy nowadays.

> Make sure you have node installed!

Open your favorite terminal of choice (iTerm2) and run the following command:

```bash
npm install -g @ionic/cli
```

Then we can start creating our app

```bash
ionic start ionicApp tabs
```

This will start a boilerplate application with a tabbar menu.

The start command will prompt us with some questions:

- Framework, we can choose angular/react (I'll be doing Angular)
- Integrate Capacitor (Click yes)

`Ionic` has a full market place where we can get even more starter templates: [Ionic Marketplace](https://market.ionicframework.com/)

Once this command is run, we are ready to run our app for the first time.

## Running our Ionic App

So the install is done, now what.

We `cd` into the folder using `cd ionicApp` and run the command:

```bash
ionic serve
```

This will install all packages and open our dev server in the browser.

You will now see a basic application with three tabs at the bottom.
Feel free to navigate through the tabs to see what happens.

## Ionic Structure

We will go more in-depth into making new pages in another article, but let's quickly open the project in our editor.

The application itself sits inside the `src` folder.
In there we can find the following folders:

- `app`: Holds the actual pages and root `app.component`, it also holds the `app-routing` which handles the routes.
- `assets`: Holds the icon and any assets we want to use
- `environments`: Here, we find a local and prod file, we can add our variables here as well.
- `theme`: Holds a variable file, inside we can overwrite ionic variables.

There you have it, our first introduction to `Ionic`.
Let's see what we can make and change to it.

Feel free to download the starter project on [GitHub](https://github.com/rebelchris/ionic-app).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
