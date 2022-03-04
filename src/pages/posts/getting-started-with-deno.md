---
layout: ../../layouts/Post.astro
title: 'Getting Started with Deno 🦕'
metaTitle: 'Getting Started with Deno 🦕'
metaDesc: 'What is all this Deno hype about? A getting started guide!'
image: /images/06-08-2020.jpg
date: 2020-08-06T03:00:00.000Z
tags:
  - javascript
  - deno
---

Today, we'll be covering getting started with Deno! Deno is a `JavaScript` server language like `node.js` but built in `Typescript`.
It's designed to improve the shortcomings of `node.js`.

It's been quite hyped over the last couple months, and even when writing this article, I have zero experience with it, so this guide is also my guide.

## What is TypeScript?

As mentioned, `TypeScript` is a superset of `JavaScript`. TypeScript is a strongly typed language, meaning types must be defined when declaring variables. This makes it more strict and easier to spot errors and faults.

## Setting up Deno

To get started, we need to install Deno locally first.

If you are on Linux/Mac run the following command:

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

If you're on Windows:

```bash
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

> Note: You can find your install package on the [Deno website](https://deno.land/)

You can verify the installation by running:

```bash
deno --help
```

## Our First Deno Application

So let's start by creating our first Deno application.

Create a new folder and our starting file `server.ts`

```bash
mkdir deno && cd deno
```

Let's start adding lines to our `server.ts` file

```js
import {serve} from 'https://deno.land/std@0.63.0/http/server.ts';
```

This tells our server to import the `serve` module from a URL; in `node.js` we would have to use `npm install` first!

Now we are going to create a new Deno server:

```js
const server = serve({port: 1337});
```

We are starting our server on port 1337.

Sending a response to the browser

```js
for await (const req of server) {
  req.respond({body: 'Hello Deno!!'});
}
```

So this is a bit different then what we see in `node.js`.
We loop through each incoming request, and for each request, we are returning a body!

## Running Our Deno Server

To run our deno server, we can run the following command in our terminal.

```bash
deno run --allow-net server.ts
```

Now we can open our browser and go to `localhost:1337`. We should now see our body!

Awesome, getting started was really quick and easy!

You can download my starter project on [GitHub](https://github.com/rebelchris/deno)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
