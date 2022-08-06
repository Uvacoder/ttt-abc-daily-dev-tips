---
layout: ../../layouts/Post.astro
title: 'Linux adding a timestamp to the bash history'
metaTitle: 'Linux adding a timestamp to the bash history'
metaDesc: 'Adding a timestamp to the Linux bash history'
image: /images/14-06-2021.jpg
date: 2021-06-14T03:00:00.000Z
tags:
  - linux
---

In Linux systems, the history does not include a timestamp, which can be annoying when you want to see when a command was executed to determine an update.

So today, I'll show you how to enable timestamps for the bash history in Linux.

## Retrieving the history

Before we get started, let's look at how the history works and which files are attached.

The bash history is kept so we can retrieve whatever actions some user did.

To retrieve this history, we can type the following command.

```bash
history
```

It should come back with something that looks like this.

![Linux bash history](https://cdn.hashnode.com/res/hashnode/image/upload/v1623304606910/iWKG8LiRO.png)

You can run the following command to find where this file is located.

```bash
echo $HISTFILE
```

It will generally come back with a location like:

```
/root/.bash_history
```

## Changing the bash history output format

However, we must change the configuration settings to change the history output.

These configuration settings are set in a file called `.bashrc`.

We need to add the `HISTTIMEFORMAT` config settings, which will change the output.

There are two ways to include this in your `.bashrc` file.

1. Manually open the `.bashrc` file and paste it in.
2. Echo it into the file.

```bash
# method 1
nano ~/.bashrc
# now paste:
export HISTTIMEFORMAT="%F %T "

# method 2
echo 'export HISTTIMEFORMAT="%F %T "' >> ~/.bashrc
```

The format we are using includes the `%F` and `%T` variables which stand for:

- `%F`: full date (year-month-day)
- `%T`: time (hour:minute:seconds)

Now you won't see the change yet. We have to enable it, which we can do by rebooting or simply running this command:

```bash
source ~/.bashrc
```

When we run the history command, we should see something like this.

![History with timestamps](https://cdn.hashnode.com/res/hashnode/image/upload/v1623306580304/ErsXIYVNF.png)

As you can see, we now have timestamps in front of our history!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
