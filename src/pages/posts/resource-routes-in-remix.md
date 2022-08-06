---
layout: ../../layouts/Post.astro
title: 'Resource routes in Remix'
metaTitle: 'Resource routes in Remix'
metaDesc: 'How to create different resource routes in Remix'
image: /images/02-05-2022.jpg
date: 2022-05-02T03:00:00.000Z
tags:
  - remix
---

So far, we have been looking at routes in Remix, and they are always HTML-based output routes.

It means they render some HTML, but what happens if we want to have a different route type?

Some examples:

- JSON endpoints
- Images
- PDF files

Don't worry. Remix got your back on that, as we can use their fantastic resource routes for this.

## Resource routes in Remix

There are multiple ways of achieving the endpoint URL to create these routes.

You can create any of the following formats:

```
- app/routes/reports/$id/pdf.ts
- app/routes/reports/$id[.pdf].ts
- app/routes/reports/$id[.]pdf.ts
- app/routes/reports.$id[.]pdf.ts
```

All of these will have the same output format:

`http://yourwebsite.com/reports/id.pdf`

But let's see how we can output it as a file rather than plain HTML.
To achieve this we have to use the loader function to change our output like this:

```js
export async function loader({ params }) {
  const report = await getReport(params.id);
  const pdf = await generateReportPDF(report);
  return new Response(pdf, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
    },
  });
}
```

This example uses some functions we don't have, including the `getReport` and `generateReportPDF` functions.
This means it's only an example of how you can achieve it (taken from the official Remix docs).

## Using different types

Let's say we instead want to have a JSON format?

Let's change our document to the following format:

`app/routes/reports.$id[.]pdf.ts`

```js
import { json } from '@remix-run/node';

export async function loader({ params }) {
  return json({ foo: params.id });
}
```

We format the ID from our dynamic URL into a JSON object in this example.

![JSON output in Remix](https://cdn.hashnode.com/res/hashnode/image/upload/v1650645921975/pv_NONCw3.png)

This is pretty cool. This way, we can support all these different formats in Remix.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
