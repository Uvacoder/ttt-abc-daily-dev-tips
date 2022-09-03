---
layout: ../../layouts/Post.astro
title: 'Read a Google Sheet in Node.js 🤓'
metaTitle: 'Node.js Google Sheets API to read data'
metaDesc: 'Tutorial with code examples and explanations. You can use Google Sheets with Node.js like a flexible data storage.'
image: /images/07-09-2020.jpg
date: 2020-09-07T03:00:00.000Z
tags:
  - nodejs
---

When it comes to databases, we often think about a SQL database or NoSQL alternative, but have you considered Google Sheets?

Huh, wait, what? YES, Google Sheets can serve as a data store!

So in this tutorial, we will make a `Node.js` script that can read data from a Google Sheet via their API.

It will look like this:

![Node Google spreadsheet access](https://cdn.hashnode.com/res/hashnode/image/upload/v1599282989462/QVoFUFIMb.gif)

## Starting the project

We will be starting the project from scratch. First, let's set up a new node project:

```bash
npm init
```

You can follow the prompts here. Nothing special needed

> More info about [starting a Node JS app](https://daily-dev-tips.com/posts/basic-nodejs-express-application/) here.

Next step, let's install the Google API package to access Google Sheets data:

```bash
npm install googleapis@39 --save
```

That's it!

Now we need to download our `credentials.json` file from Google.

Visit the following URL and click the `Enable the Google Sheets API` button.

[Google Quickstart](https://developers.google.com/sheets/api/quickstart/nodejs)

Copy the `credentials.json` file into your project.

## Create a Node.js script with the Google API

There we go. We will be using the Google-provided Node.js script to get started.

Create an `index.js` file in your project.

We start by defining our variables.

```js
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
```

Then we need to tell Google which APIs we want to use:

```js
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
```

And define an empty `token.json` path (Google will store our token there)

```js
const TOKEN_PATH = 'token.json';
```

Then we need to read the credentials file and authorize it with Google!

And when that is all done, we will call our `listMajors` function, which is the main function!

```js
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  authorize(JSON.parse(content), listMajors);
});
```

Ok, let's make that authorization function!

```js
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}
```

We are defining our credentials received from the file and creating a new OAuth client.
Then we start a new `token.json` file and call the `getNewToken` function.

```js
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err)
        return console.error(
          'Error while trying to retrieve access token',
          err
        );
      oAuth2Client.setCredentials(token);
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}
```

This is a bit of a wow, what's happening.
But when we run our function, we get prompted to visit a URL.
We must then visit it and give Google access to our spreadsheets.
We will get a code back, which we paste.
After then, our token will be created!

![Run Node script with Google Sheets API](https://cdn.hashnode.com/res/hashnode/image/upload/v1599283021140/SojtvwRc5.png)

![Confirm Access to Google Account](https://cdn.hashnode.com/res/hashnode/image/upload/v1599283069162/S35Ug2ZqT.png)

## Read data from Google Sheets in Node JS

To make the actual function that reads from the Google spreadsheet (`listMajors`), we use the following code:

```js
function listMajors(auth) {
  const sheets = google.sheets({ version: 'v4', auth });
  sheets.spreadsheets.values.get(
    {
      spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      range: 'Class Data!A2:E',
    },
    (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const rows = res.data.values;
      if (rows.length) {
        console.log('Name, Major:');
        // Print columns A and E, which correspond to indices 0 and 4.
        rows.map((row) => {
          console.log(`${row[0]}, ${row[4]}`);
        });
      } else {
        console.log('No data found.');
      }
    }
  );
}
```

So, we start by defining a new Google Sheets API, passing it our Authentication credentials.
Then we call `values.get`, where we pass a spreadsheet ID and a range of cells.

> Note: This ID is the default Google Testing document!

Then once we get the data, we `console.log` the specific data back to the console!

There you go. We now made a Node JS script that can read from a Google Sheet.

## Running our Node JS script

We can run the script by executing the following command:

```bash
node .
```

> When putting this code in `Git`, make sure to keep your credentials and token safe 🤓

You can find my full code on [GitHub](https://github.com/rebelchris/node-google-sheet) or on [Google](https://developers.google.com/sheets/api/quickstart/nodejs).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
