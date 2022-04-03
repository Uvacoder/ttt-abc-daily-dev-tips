---
layout: ../../layouts/Post.astro
title: 'Python read data from a Google sheet'
metaTitle: 'Python read data from a Google sheet'
metaDesc: 'Learn how to read data from a Google sheet using Python'
image: /images/28-05-2021.jpg
date: 2021-05-28T03:00:00.000Z
tags:
  - python
---

We made a node script that could read data from a Google Sheet a while ago.
I thought it would be cool to check how we could achieve the same thing in Python.

So today, you'll be learning how to read data from a Google Sheet in Python.

The result will be as shown in this GIF.

![Python read data from a Google sheet](https://cdn.hashnode.com/res/hashnode/image/upload/v1621924300622/GFPd8mbIY.gif)

## Setup Google credentials

To get started with this project, you need to create a google project and generate credentials.

To get started, visit the [Google cloud console](https://console.cloud.google.com/apis). If you don't have a project yet, you can create one.

However, from here, click the Credentials button on the left.
Then click on "Create Credentials."

![Google new credentials](https://cdn.hashnode.com/res/hashnode/image/upload/v1621922728543/SBbWGgZVz.png)

Choose "Desktop app" and give it a good name as the application type.

![Credentials for Google Sheet](https://cdn.hashnode.com/res/hashnode/image/upload/v1621922780654/bOray41p_.png)

You can then click the download button on the right-hand side of your newly created key to download the JSON.

![Download key](https://cdn.hashnode.com/res/hashnode/image/upload/v1621922860615/ObKMMDxf0.png)

Rename this file to "credentials.json" and place it inside your project root folder.

## Python reading from a Google sheet

Now it's time to work on the Python part of the project.
First, let's install the packages we need.

```bash
pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
```

This will install the Google API and auth packages we need.

Then we can create a file called `main.py`.

We then define our imports in the file.

```python
from __future__ import print_function
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
```

We'll make some variables to use in the code with that done.

```python
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
SAMPLE_SPREADSHEET_ID = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms'
SAMPLE_RANGE_NAME = 'Class Data!A2:E'
```

The scopes define which API scopes we wish to use. For now, it's readonly. If you change these, don't forget to remove the token.json file.

Then we define the spreadsheet ID and which range we want to use.

> Note: This is a google provided demo spreadsheet. You don't need to have this in your drive.

We will [create a Python function](https://daily-dev-tips.com/posts/writing-functions-in-python/) called `main`, which will hold all our logic.

```python
def main():
```

In there, we will make all our needed actions. I'll break these up into sections.

In the first part, we need to authenticate our application with the API.
We start by creating a `creds` variable. Then we will check if we already have a `token.json` file locally.

If we don't have this file, we will ask the credential flow to run. This will prompt a browser and asks us to authenticate our google account with the application and set the token.json file.

Else we can build the service to use with the credentials.

```python
def main():
    """Shows basic usage of the Sheets API.
    Prints values from a sample spreadsheet.
    """
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.json', 'w') as token:
            token.write(creds.to_json())

    service = build('sheets', 'v4', credentials=creds)
```

We can get the values based on the spreadsheet and the range we defined above with this service.

Then we will loop over the values and print out the results.

```python
    service = build('sheets', 'v4', credentials=creds)

    # Call the Sheets API
    sheet = service.spreadsheets()
    result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID, range=SAMPLE_RANGE_NAME).execute()
    values = result.get('values', [])

    if not values:
        print('No data found.')
    else:
        print('Name, Major:')
        for row in values:
            # Print columns A and E, which correspond to indices 0 and 4.
            print('%s, %s' % (row[0], row[4]))
```

And the last part is now to run the function at the end:

```python
main()
```

## Testing the application

The first time we run the application, a browser will be opened to prompt us for access.

![Google prompt access](https://cdn.hashnode.com/res/hashnode/image/upload/v1621924131456/HYpRnRFhR.png)

Once you accept this prompt, a token.json file will be created locally, and you should see the results of the code in your terminal.

You can also find the code on my [GitHub](https://gist.github.com/rebelchris/fef3f79af30a45f6522fc4ac73ed8901).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
