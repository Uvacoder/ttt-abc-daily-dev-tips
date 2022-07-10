---
layout: ../../layouts/Post.astro
title: 'How to password protect zips on Mac 🔑'
metaTitle: 'How to password protect zips on Mac 🔑'
metaDesc: 'Protecting our files is essential, how to password lock a zip on Mac?'
image: /images/29-09-2020.jpg
date: 2020-09-29T03:00:00.000Z
tags:
  - developer
---

If you're on Windows, you might think, but why?
Well, Mac doesn't offer a GUI interface for password-protecting zips.

Yes, bizarre, right?

We can right-click a file/folder and `compress` it into a zip.

But we can protect our zip files by using our best friend `The Terminal` password!

![Mac default zip function](https://cdn.hashnode.com/res/hashnode/image/upload/v1600846448840/dXvloRc86.png)

## Using terminal to password protect zip files on Mac

So let's open our favorite terminal program ([mine is iTerm2](https://daily-dev-tips.com/posts/my-personal-top-15-mac-apps/)) and enter the following command.

```bash
zip -er ~/Desktop/super_secure.zip ~/Desktop/secure.csv
```

The parameters are as follows:

- `zip` - The actual zip command
- `-er` - Encrypt Recursive
- `~/Desktop/super_secure.zip` - Output zip name
- `~/Desktop/secure.csv` - Input file/folder

Once we run this, we get prompted to type a password.

> You don't see any input on these password fields!

Press enter, and you need to verify the password.

![Secure-zip on Mac](https://cdn.hashnode.com/res/hashnode/image/upload/v1600846834806/wWUvlZPCt.png)

We now created a secure zip.

If we try to open this zip, we see the following prompt.

![Zip with password on Mac](https://cdn.hashnode.com/res/hashnode/image/upload/v1600846881656/BMLjjDVqP.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
