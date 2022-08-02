---
layout: ../../layouts/Post.astro
title: 'Linux zip files'
metaTitle: 'Linux zip files'
metaDesc: 'Learn how to zip files and folders on Linux systems'
image: /images/15-06-2021.jpg
date: 2021-06-15T03:00:00.000Z
tags:
  - linux
---

Today we'll look at how to zip up one or multiple files on Linux systems.
Zipping files can come in handy when dealing with multiple files or backups that need to be transferred or moved.

In my case, this situation occurred because I wanted to email attach multiple log files.

## The Linux ZIP command

Let's first look at the command itself.

```bash
zip options zip_name files
```

Where this works as follows:

- `zip`: The Linux command to zip things
- `options`: We can pass in arguments for the end zip results
- `zip_name`: The output name, without the `.zip` part
- `files`: One or more files comma separated

We could do this to show you the most simple zip command for one file.

```bash
zip archive test.txt
```

This will create an archive.zip in that folder containing the test.txt file.

## Installing `zip` on Ubuntu or Centos

You can run the following command to install the zip command on Ubuntu or Debian systems.

```bash
sudo apt install zip
```

For CentOS and Fedora systems, you can use Yum.

```bash
sudo yum install zip
```

## Zipping multiple files in Linux systems

To add multiple files, we can specify them with a space between like this.

```bash
zip archive test.txt test2.txt test3.txt
```

However, in most cases, you want to zip a whole folder and its contents, right?

We can pass the `-r` option (Recursive) to achieve this.

```bash
zip -r archive my_directory
```

This will take all the files inside my_directory and zip them into one archive.

As we did above, we can still add separate files in the zip by passing them along.

```bash
zip -r archive my_directory test.txt
```

## Linux zip options

So far, we have seen the `-r` option to recursively add files in a folder.

As you may know, there are multiple compressions levels for zip files. The default one is `deflate`. But we can also zip files using the `bzip2` compression.

We can pass the `-Z` option to use a different compression method.

```bash
zip -r -Z bzip2 archive my_directory
```

We can also specify the level of compression we want.
This is passed with a number from 0-9.
Where 0 is no compression and 9 is the highest.
The default compression is -6.

To use it:

```bash
zip -r -9 archive my_directory test.txt
```

Another cool option is to encrypt the zip. This means we put a password on it.

```bash
zip -r -e archive my_directory
```

This will prompt you for the password twice.

```bash
# Enter password:
# Verify password:
```

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
