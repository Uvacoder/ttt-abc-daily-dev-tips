---
layout: ../../layouts/Post.astro
title: 'Python read and write files'
metaTitle: 'Python read and write files'
metaDesc: 'Reading files in Python and writing data to those files'
image: /images/27-05-2021.jpg
date: 2021-05-27T03:00:00.000Z
tags:
  - python
---

There are many great use-cases to read and write data to a local file.
It might be for crawling purposes, price checks, logs, or whatnot.

Today I'll be exploring the basics of reading and writing data to a file in Python.

## Read files in Python

The first part of file interaction would be to read data from an existing file.

Let's create a basic `txt` file called `text.txt` at the root of our project.

```
Hi there

How cool of you to try and read me
Hope you have fun
```

To read this file in Python, we can use the `open()` function built into Python.

After opening the file, we can use the `file.read()` function to see what's in it.

```python
file = open('test.txt', 'r')
print(file.read())
```

This will print the exact content of our file.

## Write data to a file in Python

Now that we know how to read a file let's see how we can write data to that same file.

There are two options when we open a file for writing.

- `a`: Append data to the existing file
- `w`: Write, this option will overwrite any existing content

Let's first try the append option:

```python
file = open('test.txt', 'a')
file.write("I'm an extra line of content")
file.close()
```

If we now check our file, it shows:

```
Hi there

How cool of you to try and read me
Hope you have fun
I'm an extra line of content
```

Now let's use the write function and see what happens.

```python
file = open('test.txt', 'w')
file.write("I have new content now")
file.close()
```

Checking the file now shows us:

```
I have new content now
```

As you can see, the old content is gone now.
So choose wisely which of the two options you wish to use.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
