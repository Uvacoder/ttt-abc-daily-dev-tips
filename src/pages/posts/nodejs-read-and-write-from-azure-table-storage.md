---
layout: ../../layouts/Post.astro
title: 'Node.js read and write from Azure Table Storage'
metaTitle: 'Read and write to Azure Table Storage in Node JS [2022]'
metaDesc: 'Tutorial teaching you how to connect your Node.js app to Azure Table Storage to read and write data.'
image: /images/02-10-2020.jpg
date: 2020-10-02T03:00:00.000Z
tags:
  - nodejs
  - azure
---

We have been exploring `node.js` in combination with Azure, and today we will connect to a database!

Not any database, but we will query the Azure Table Storage to read and write data.

We will also finalize our short-url node tool, and it will look like this:

![Node.js Azure Table Storage link shortener](https://cdn.hashnode.com/res/hashnode/image/upload/v1601059354951/gqukaI2Fd.gif)

Click any of these links if you are looking for the other articles in the `Node.js` Azure series.

- [Deploying a Node app to Azure](https://daily-dev-tips.com/posts/deploying-a-node-app-to-azure/)
- [GitHub automated-deployments to Azure](https://daily-dev-tips.com/posts/github-automated-deployments-to-azure/)
- [Adding a custom domain to Azure App Service](https://daily-dev-tips.com/posts/adding-a-custom-domain-to-azure-app-service/)
- [Adding SSL to our Azure Node app](https://daily-dev-tips.com/posts/adding-ssl-to-our-azure-node-app/)

## Creating an Azure Table Storage

Azure Table Storage is a NoSQL database where we can store large amounts of data.

In our case, we are storing URLs, which will get a random unique ID to retrieve them.

To create a new Azure Table Storage, we must go to "Storage accounts" and click the `Add` button.

![Azure add new Storage Account](https://cdn.hashnode.com/res/hashnode/image/upload/v1601055758302/FYR_BwpXv.png)

You will have to fill out the following details on the next screen.

- Resource group: Choose the one we created for the App Service
- Storage account name: Your unique name for this storage account
- Location: Same as our App Service
- Then, we can click `Review + create`

![Storage account settings](https://cdn.hashnode.com/res/hashnode/image/upload/v1601055863202/HeMgVQ6gq.png)

Once that is done, we can open our resource and click the `tables` button.

![Azure Storage account ~ table](https://cdn.hashnode.com/res/hashnode/image/upload/v1601055944299/_JeYNxMwH.png)

We will go to another view where we can add a new Table.

> Note a Storage account can have multiple tables or other storage.

![Azure add new Table](https://cdn.hashnode.com/res/hashnode/image/upload/v1601056006119/tA_Q3G7nr.png)

We can then go ahead and open the Storage Explorer to see our table. (This is still a Preview mode)

![Azure Table Storage preview](https://cdn.hashnode.com/res/hashnode/image/upload/v1601056058916/FTi4dK0T-.png)

## Linking the Azure Table Storage and App Service

If you are testing locally, you can add the following two lines to your `routes.js`.

```js
process.env.AZURE_STORAGE_ACCOUNT = '{storage_account}';
process.env.AZURE_STORAGE_CONNECTION_STRING = '{connection}';
```

You can replace these values with the actual values from the Storage Account:

![Storage account keys](https://cdn.hashnode.com/res/hashnode/image/upload/v1601058901619/lwb0i6Sh6.png)

Once you are ready to publish it to Azure, you can remove the two keys above and visit the App Service in Azure.

Go to `Configuration` and add these two values as `Application Settings`.

![Azure application setting](https://cdn.hashnode.com/res/hashnode/image/upload/v1601058997600/vvnRvOkvL.png)

## Connecting to Azure Table Storage in Node.js

Once we set up our table in Azure, we can modify our `Node.js` app to connect to this database.

> You can find my starter project [here on GitHub](https://github.com/rebelchris/Node-url-shortener).

Let's first NPM install the dependencies we need:

```bash
npm i -s azure-storage
npm i -s shortid
```

That will install the [azure-storage](https://www.npmjs.com/package/azure-storage) package and the [shortid](https://www.npmjs.com/package/shortid) package.

We can then open up our `routes.js` file and add these packages.

```js
const azure = require('azure-storage');
const shortid = require('shortid');
const table = 'links';
const entGen = azure.TableUtilities.entityGenerator;
```

## Writing data to Azure Table Storage

Our first objective is to start writing data to our Table Storage.

Let's define our `POST` route.

The route is called `generate` and accepts a `POST` with a JSON object that looks as such:

```json
{
  "url": "https://daily-dev-tips.com"
}
```

```js
router.route('/generate').post(function (req, res) {
  const { url } = req.body;
  let code = shortid.generate();
  generateCodeUntilSuccess(code, url).then((c) => {
    res.status(200).send('https://dailydevtips.azurewebsites.net/' + c);
  });
});
```

Once the response body comes in, we generate a unique short-id and call the function `generateCodeUntilSuccess`. Once that returns something, we send the browser the new short URL!

Lets see that `generateCodeUntilSuccess` function

```js
async function generateCodeUntilSuccess(code, url) {
  return await addLink(code, url)
    .then((c) => {
      return c;
    })
    .catch((e) => {
      generateCodeUntilSuccess(shortid.generate(), url);
    });
}
```

Here we use an `async...await` method since we need to ensure the generated code is unique.
If that fails, we let the function call itself.

This means all the magic happens in the `addLink` function above.

The addLink function accepts a code and a URL.
It will first connect to the azure Table Storage and query if this code is already used.

If that is the case, we will reject this call.

If the code is not used before we can go ahead and insert this into our table.

To insert into the table storage, we always need to pass the `partitionKey` and the `rowKey`. These are our unique identifiers.

> Be aware: It is not an auto-increment field, and we must provide the actual unique values.

Once we insert our row, we resolve the code to show back to the user.

```js
function addLink(code, url) {
  return new Promise((resolve, reject) => {
    try {
      const tableService = azure.createTableService();
      const query = new azure.TableQuery().top(1).where('RowKey eq ?', code);
      tableService.queryEntities(
        table,
        query,
        null,
        function (error, result, response) {
          if (!error) {
            const link = {
              PartitionKey: entGen.String('link_' + code),
              RowKey: entGen.String(code),
              Url: entGen.String(url),
            };
            tableService.insertEntity(
              table,
              link,
              function (error, result, response) {
                if (!error) {
                  resolve(code);
                }
                reject(error);
              }
            );
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });
}
```

If we run this in Postman, we should see a return like this.

![Postman Result](https://cdn.hashnode.com/res/hashnode/image/upload/v1601058249296/Gbx32vlKJ.png)

## Read data from Azure Table Storage

After we learned how to write data to the Azure Storage, we now look at how to read data the data. We want to visit the URL we just created and get redirected to the final URL we provided as input.

Let's start by defining the route for our unique code.

```js
router.route('/:uniqueId').get(function (req, res) {
  const uniqueId = req.params.uniqueId;
  getRecord(uniqueId)
    .then((url) => {
      res.redirect(301, url);
    })
    .catch((err) => {
      res.status(400).send('Error: Code not found');
    });
});
```

We create a "wildcard" route and retrieve our unique code from the `URL`.

We then call the `getRecord` function to read from the database. And on success of the query, we redirect the user to the returned `URL`.

So, what does this `getRecord` function do?

It's a copy of the above check function but built to read and return the actual URL if the query finds a record.

```js
function getRecord(uniqueId) {
  return new Promise(function (resolve, reject) {
    try {
      const tableService = azure.createTableService();
      const query = new azure.TableQuery()
        .top(1)
        .where('RowKey eq ?', uniqueId);
      tableService.queryEntities(
        table,
        query,
        null,
        function (error, result, response) {
          if (!error) {
            if (result.entries[0] !== undefined) {
              resolve(result.entries[0].Url._);
            } else {
              reject('code not found');
            }
          } else {
            reject(error);
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });
}
```

If we visit our unique `URL`, we get redirected to the defined link at which we want to end up.

You can find the complete code for this project on [GitHub](https://github.com/rebelchris/Node-url-shortener/tree/read-write-table-storage).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
