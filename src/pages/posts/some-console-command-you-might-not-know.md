---
layout: ../../layouts/Post.astro
title: 'Some console command you might not know'
metaTitle: 'Some console command you might not know'
metaDesc: 'Do you know and use all these console commands?'
image: /images/15-04-2021.jpg
date: 2021-04-15T03:00:00.000Z
tags:
  - developer
---

When it comes to debugging code, there are many options, but I find myself relying on console.logs quite often.

It's a quick and complete way to log a data set at a certain point or see where the code returns.

By all means, it may not be the best way, but it's widely used.

Did you know you can do more than a plain console.log?

## Grouping console logs

A super handy console command is to group-specific logs.
You can easily start a new group with `console.group('name')` and end it with `console.groupEnd('name')`.

The name of the group can be any string you would like it to be.

An example can look like this:

```js
console.group('test group');
console.log('log line 1');
console.error('Something went wrong in the group');
console.groupEnd('test group');
```

This will show up as:

![Console group commands](https://cdn.hashnode.com/res/hashnode/image/upload/v1618208772690/wSDFD0jbh.gif)

## Console log a table

Ever needed to display a giant JSON array?
It can be tedious the show a larger array in the console.

But there is an option to display this as a table.

```js
const myArray = [
  {
    title: 'Article 1',
    views: 400,
    url: 'https://daily-dev-tips.com/article-1'
  },
  {
    title: 'Article 2',
    views: 6500,
    url: 'https://daily-dev-tips.com/article-2'
  }
];
console.table(myArray);
```

![Console table command](https://cdn.hashnode.com/res/hashnode/image/upload/v1618209008429/Kl9LPZkNq.png)

## Console count

Another super useful command is the `console.count` command.
It can be used to count how often a loop is run, for instance.

```js
for (let i = 0; i < 5; i++) {
  // Do something
  console.count('loop one');
}
```

You can provide a label as we did above.

![Console loops](https://cdn.hashnode.com/res/hashnode/image/upload/v1618209164928/vouJHkV2U.png)

## Console log/info/debug/warn/error

Besides your default console.log, you might want to show data a little differently. Hence you can use one of the following to make it appear so:

- `console.info`
- `console.debug`
- `console.warn`
- `console.error`

They will show up like this:

![Different log levels](https://cdn.hashnode.com/res/hashnode/image/upload/v1618208439231/SXACCTn7W.png)

> Note: The info used to have its own icon but seems to be mixed with a regular log now.

With these, you can easily filter on the different levels.

![Console log levels](https://cdn.hashnode.com/res/hashnode/image/upload/v1618208553321/R6Qgmcz7t.gif)

## Other console commands

There are some other console commands that can be useful.

- [Timing functions with console.time](https://daily-dev-tips.com/posts/vanilla-javascript-timing-functions/)
- [Style your console.logs](https://daily-dev-tips.com/posts/spice-up-your-console-logs-with-styling/)
- [Console.log with params](https://daily-dev-tips.com/posts/console-log-with-params/)

And some we might cover in a later stage:

- console.assert
- console.dir
- console.trace
- console.clear

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
