---
layout: ../../layouts/Post.astro
title: "Help my browser API's stopped working in Angular Universal"
metaTitle: "Help my browser API's stopped working in Angular Universal"
metaDesc: "How to fix browser API errors in Angular Universal"
image: /images/15-02-2021.jpg
date: 2021-02-15T03:00:00.000Z
tags:
  - angular
---
Yesterday we looked at introducing [Angular Universal to our Angular application](https://daily-dev-tips.com/posts/converting-a-regular-angular-application-into-angular-universal/).
But if you're like me and used some browser API's for specific tasks, you might be regretting the choice since they stopped working.

No fear, we can make them work!

Some more background as to what's happening, we added Angular Universal, so our application is first being served server-side, and the server has no idea about browser API's.

Hence we need to make him aware or temporarily stop these browser API's from executing on the server-side.

## Converting browser API's in Angular Universal server

So let's introduce a simple browser API in our application to see if it will break.

We'll introduce a simple window command to open a URL.
So let's open `welcome.component.ts` and add the following function.

```js
openLink(): void {
	window.open("https://daily-dev-tips.com", "_blank");
}
```

> Note: This is a very basic example, but it should give you an understanding of what will go wrong and how we can fix it.

Now we need to add a button to the `welcome.component.html` file.

```html
<button (click)="openLink()">Open link</button>
```

Now, this could give us an error as such:

```bash
window is not defined
```

Or something like:

```bash
document is not defined
```

And it makes sense. These are browser API's, so Node has no idea what we are talking about.

We can however, install `domino`, which is a browser for Node.

```bash
npm install domino 
```

And then, we can add the missing elements to our `server.ts` file as such.

```js
const domino = require('domino');
const fs = require('fs');
const path = require('path');

// Mock a temporary browser
const template = fs.readFileSync(path.join("dist/browser", "index.html")).toString();

// Define all the global elements
const window = domino.createWindow(template);
global["window"] = window;
global["document"] = window.document;
global["branch"] = null;
global["object"] = window.object;
```

And there you go, we can now use the native `window` or `document` calls again!

Do note in our example app that the script is so small that you hardly get to see the server-side rendering, so it might not throw errors at runtime.

You can find today's code in the following [GitHub repo](https://github.com/rebelchris/angular-starter-demo/tree/feature/browser-api).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
