---
layout: ../../layouts/Post.astro
title: 'Getting Started With the Terminal'
metaTitle: 'Getting Started With the Terminal'
metaDesc: 'Does the Terminal scare you? Read my beginner guide to Terminal commands'
image: /images/06-07-2020.jpg
date: 2020-07-06T03:00:00.000Z
tags:
  - developer
---

The other day Carl made a useful [comment](https://daily-dev-tips.com/posts/our-first-ionic-app/#heading-2-comments-on-this-page):

> Terminals and command lines scare me. Do you have any dev tips on getting started with these or know any good resources?

And it made me realize I also was scared to use the Terminal at one point. It is one of these things wherein the beginning. You just don't know what's happening.

So let's walk through some basic commands today, which will make us more comfortable using the Terminal.

## Which Terminal to Use?

Perhaps a good starting point is which Terminal to use. To be honest, it's much of a preferred choice than actually making a difference. But I use [iTerm2](https://www.iterm2.com/), which works beautifully!

If you rather stick to another choice or the default Terminal, be my guest. It won't make a difference in what we are going to do today.

## Basic Terminal Commands

Oke, let's get cracking on some commands.

### Bash Change Directory

`cd` command means `change-directory`, which is the same as clicking on a folder on your regular desktop.

For instance:

```bash
cd Desktop // move into the desktop "folder"
```

We can also go up one level by using `..`

```bash
cd ..
// Or even multiple levels
cd ../../
```

We can always go back to the starting point by using `cd` without arguments.

```bash
cd
```

### Bash Where are We?

You forget where you are now and then, and you want to know the current folder.

You can use the `pwd` command `Print Working Directory.`

```bash
pwd // Return something like: /Users/chrisbongers/Desktop
```

### Bash List

Another handy command is `ls`; it means `list` and can be used to show folders inside the directory we are in.

```bash
ls // Show current directory
ls .. // Show parent directory
ls Desktop // Show specific directory
```

### Bash Creating Folders

Sometimes it's easier to create a folder in the Terminal because you are already there.

We can use `mkdir` `make directory` for this.

```bash
mkdir NewApp
```

### Bash Removing

Be careful when using remove commands. The Terminal is strong and can remove system files, so use these with care.

We can use `rmdir` `Remove Directory` to remove a folder.

```bash
rmdir NewApp
```

Or we can use `rm` `Remove` in general.

```bash
rm testfile.txt
```

For the `rm` command, we can give it the `-r` parameter, which stands for `recursive`. It will delete everything inside the folder you pass.

```bash
rm -r NewApp
```

### Bash Copy

We can also copy folders and files with the Terminal by using the `cp` `Copy` command.

```bash
cp testfile.txt test2.csv
```

Where the first argument is the source and the second the destination file.

We can also copy a complete folder and contents:

```bash
cp -r NewApp TestApp
```

### Bash Move

Another excellent command is `mv` `Move`. It works the same as the `cp` one but will move the elements instead of copying them.

```bash
mv testfile.txt Desktop/testfile2.txt
```

As you can see, we can even move and rename.

### Bash Creating Files

Perhaps the most interesting one is the ability to create files.
There are multiple ways of creating files, the most common is `touch`, but my personal favorite is `nano`.

Nano works great because it's generic. It can create but also edit a file at the same time.

```bash
nano testfile.txt // Will create the file and open it!
```

Once you open a file in `nano` you can type whatever you want, and once you are done, use `CTRL+X` to close and save the file.

## Resume

I hope these Terminal commands were helpful, and I challenge you to have a play around with these.

Let me know in the comments if there are any really good ones I might have missed.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
