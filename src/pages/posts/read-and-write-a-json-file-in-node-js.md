---
layout: ../../layouts/Post.astro
title: Read and write a JSON file in Node.js
metaTitle: Read and write JSON files in Node JS [2022 Tutorial]
metaDesc: Learn how to load json files into Node JS to change and save them - including code examples and a Codepen demo.
image: /images/27-03-2020.jpg
date: 2020-03-27T03:00:00.000Z
tags:
  - nodejs
---

Ever needed to load, write and save a file in `node.js`?
Of course, I've heard of databases, but sometimes writing a small JSON file is easier. 🔥

## Creating a basic node.js app

To read and write files in `node.js`, we need to include the file system package in our application.

First, we will create a basic application to test this. Open up your terminal and execute the following command.

Read more: [Basic Node.js Express application](https://daily-dev-tips.com/posts/basic-nodejs-express-application/)

> Note: Ensure you have `node.js` installed on your machine. See [nodejs website](https://node.js.org/en/) for the installation procedure.

```js
mkdir fs-app && cd fs-app && npm init
```

This will create a directory called `fs-app`, make the terminal change into this directory, and then execute the `npm init` function.

`npm init` will create a default starting app for `node.js`.

Now we need to create our application index file. Open your favorite terminal and create an index.js file.

## Installing the file system package in node.js

To install the package, all we have to include in our index.js file is the following code:

```js
const fs = require('fs');
```

All this tells our application we are planning to use the fs package. Now we can load JSON files, add changes and save them again.

## Read a JSON file in Node JS

To read a file, we will start by creating our demo file. Create a file called people.json and place the following content in it.

```json
{
  "people": [
    {
      "firstname": "Chris",
      "lastname": "Bongers"
    }
  ]
}
```

Now we add the following code to our index.js

```js
let rawdata = fs.readFileSync('people.json');
let people = JSON.parse(rawdata);
console.log(people);
```

If we now run `node index.js` in our terminal, we should see our JSON object logged out. 👏

## Write JSON data to a file in node.js

To write data back to the file, we will manipulate the contents of our JSON object, let's add another person, and now save it to the JSON file.

```js
people.people.push({
  firstname: 'Steve',
  lastname: 'Jobs',
});

fs.writeFileSync('people.json', JSON.stringify(people));
```

We use `people.people` because our index in the JSON file is called people and the object we created.
Then we tell the fs package to write to the people.json file the newly adjusted object.

Now, if we rerun `node index.js` and open our people.json file, we should see two entries!

Congrats, you just read and wrote a JSON file in `node.js`.

You can find this project on [GitHub](https://github.com/rebelchris/nodejs-file-system)

### Let me know what you think!

I love it when people get in touch with me and tell me what topics they are interested in.
Reach out to me on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)!
