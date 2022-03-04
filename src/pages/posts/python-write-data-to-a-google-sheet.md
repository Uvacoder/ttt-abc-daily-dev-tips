---
layout: ../../layouts/Post.astro
title: 'Python write data to a Google sheet'
metaTitle: 'Python write data to a Google sheet'
metaDesc: 'Learn how to write data to a Google sheet using Python'
image: /images/29-05-2021.jpg
date: 2021-05-29T03:00:00.000Z
tags:
  - python
---

Yesterday we looked at [reading data from a Google sheet](https://daily-dev-tips.com/posts/python-read-data-from-a-google-sheet/).
And today, I want to take it to the next level and add some data to the sheet.

You can work alongside this article by downloading the started code from yesterday on [Reading data from Google Sheets](https://gist.github.com/rebelchris/fef3f79af30a45f6522fc4ac73ed8901).

What we will be building today will look like this.

![Python write data to a Google sheet](https://cdn.hashnode.com/res/hashnode/image/upload/v1622010672961/robreFMPO.gif)

## Writing data to Google sheets with Python

As we are starting with the data from yesterday, we have to make some changes to that code to add to work.

As mentioned yesterday, we set our permissions to be read-only. For this example, we need to change it to `spreadsheets` in general.

```python
# before
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
# after
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
```

> Note: Because we changed this, remove any token.json you might still have locally.

Yesterday we used Google's example sheet for this article; however, we need our own copy.

I copied the one Google had to my own Google sheets so that we can modify it. (Make sure to change the spreadsheet_id)

Next up is that we have to change the part after we get our credentials.
Remove everything that's below the service variable.

Let's start by creating the new data set we would like to enter.

```python
list = [
    [
        'Chris',
        'Male',
        '1. Freshman',
        'FL',
        'Art',
        'Baseball'
    ]
]
resource = {
    "majorDimension": "ROWS",
    "values": list
}
```

I've built this one in two sections, where I created the list of items that can hold multiple data rows. (In this case, only 1)

And a resource set that contains the type of resource Google wants to receive.

After that, we can add our new data set into our Google sheet.

```python
# Call the Sheets API
sheet = service.spreadsheets()
sheet.values().append(
    spreadsheetId=SAMPLE_SPREADSHEET_ID,
    range=SAMPLE_RANGE_NAME,
    valueInputOption='USER_ENTERED',
    body=resource
).execute()

print("Added a new row to your Google sheet")
```

This will call the spreadsheet API and use the `append` function, which will append a new row at the bottom.

Inside, we define the spreadsheet and the range it covers,
as well as the body (our data).

When we now run this, it adds a new row every time!

You can download the entire script from [this GitHub link](https://gist.github.com/rebelchris/bcaff7f9c0a2e9ad37bef948c04dcd07).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
