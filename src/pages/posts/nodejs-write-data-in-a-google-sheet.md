---
layout: ../../layouts/Post.astro
title: 'Node.js write data in a Google Sheet'
metaTitle: 'Write to Google Sheets in Node JS'
metaDesc: 'Today we will be writing hdata into a Google spreadsheet in Node.js and with help from the Google Sheets API and NPM.'
image: /images/08-09-2020.jpg
date: 2020-09-08T03:00:00.000Z
tags:
  - nodejs
---

In this tutorial, we will **write** to Google Sheets from Node JS and use the spreadsheet as a database.

Yesterday we looked at [reading data from a Google Sheet](https://daily-dev-tips.com/posts/nodejs-reading-a-google-sheet/).
Today we will take a step further and write data to the spreadsheet. It will work with the help of the **Google Sheets API**.

We will be using the same script, to begin with.

So if you're looking for the first step of installing the Google API with **NPM**, as well as explanations on authentication, visit the article on [reading data from a Google Sheet in node.js](https://daily-dev-tips.com/posts/nodejs-reading-a-google-sheet/).

Today's exercise is going to look like this:

![writing to google sheets](https://cdn.hashnode.com/res/hashnode/image/upload/v1599394414740/GKVvc-N0a.gif)

## Node.js write data to a Google spreadsheet

First, we had the initial app setup only to be able to read data. So, we need to give it new API permissions for _writing_:

Change

```js
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
```

To use the whole functionality of Google sheets APIs

```js
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
```

> Note: We can't use Google's sheet, so copy the sheet to your version.

If we already have a `token.json`, remove it and rerun the `node .` command to get a new API token.

Now let's change the action we do when we read the `credentials.json` file.

We used to call the `listMajors` function. Now we are going to change that to be `writeData`

The JavaScript function will now look like this:

```js
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  authorize(JSON.parse(content), writeData);
});
```

Great. Now we can go ahead and create this `writeData` function:

```js
function writeData(auth) {
  const sheets = google.sheets({ version: 'v4', auth });
  let values = [
    ['Chris', 'Male', '1. Freshman', 'FL', 'Art', 'Baseball'],
    // Potential next row
  ];
  const resource = {
    values,
  };
  sheets.spreadsheets.values.append(
    {
      spreadsheetId: '1XnbJ5JHeJS2KsTzz6wXtwASb5mkwkICn_XP_pDJIyTA',
      range: 'Class Data!A1',
      valueInputOption: 'RAW',
      resource: resource,
    },
    (err, result) => {
      if (err) {
        // Handle error
        console.log(err);
      } else {
        console.log(
          '%d cells updated on range: %s',
          result.data.updates.updatedCells,
          result.data.updates.updatedRange
        );
      }
    }
  );
}
```

We start by defining our new Google sheets API object and pass it our authentication data.

Then we define our "new" object. We have to convert this into a JavaScript object for the API to accept it.

Then we call the Sheets API and use the `append` method.

For this endpoint, we are passing four items:

- spreadsheetId: Your unique spreadsheet id. You can find this in the URL
- range: For this example, we are using the A1 row. It will automatically append the new data at the first available row.
- valueInputOption: This can be used to pass a formula. But we use 'RAW' data.
- resource: The actual new object.

We then get an error or result object. In our case, we console.log both of them.

As a result, you get a full object stating which rows have been affected by this query.

That's it. We can now add data to a Google sheet!

You can find the example code on [GitHub](https://github.com/rebelchris/node-google-sheet/tree/insert).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
