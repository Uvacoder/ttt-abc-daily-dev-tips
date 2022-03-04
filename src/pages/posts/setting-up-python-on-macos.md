---
layout: ../../layouts/Post.astro
title: 'Setting up Python on macOS'
metaTitle: 'Setting up Python on macOS'
metaDesc: 'A basic setup for Python on the macOS system'
image: /images/16-05-2021.jpg
date: 2021-05-16T03:00:00.000Z
tags:
  - python
---

I finally found myself in need of some Python to do some OpenCV work on my Mac.
And although Mac nowadays comes with Python pre-installed, it's not the exact version we are looking for.

To demonstrate that, open a terminal and run the `python` command.
This should now return version 2.

![Mac default Python installation](https://cdn.hashnode.com/res/hashnode/image/upload/v1620800303433/sH3EqrIV5.png)

So how can we make sure that we have the latest Python version available on our Mac system?

## Mac installing Python 3

By far, the easiest way to install Python 3 is to use Homebrew.
If you haven't had Homebrew installed yet, check out this article explaining how to [set up Homebrew on your Mac](https://daily-dev-tips.com/posts/homebrew-one-package-manager-to-rule-them-all/).

With Homebrew installed, we can install Python, and it will install the latest stable (at the time of writing 3.9).

```bash
brew install python
```

And once that is done, we should run the `python3` command to see if our version is matching.

![Mac Python 3 installed](https://cdn.hashnode.com/res/hashnode/image/upload/v1620800686383/IKKe-JF_c.png)

However, it's a bit of a mission to type the number three after Python manually.

To fix that, we can add a new alias to link `python3` to the command `python`.

I'm using Zsh, so I have a `~/.zshrc` file, open this file and add the following line.

```bash
nano ~/.zshrc
```

```text
alias python="python3"
```

Now, if you restart your terminal, you should run just the `python` command.

![Python default command version 3](https://cdn.hashnode.com/res/hashnode/image/upload/v1620800968514/HC7HF_XPw.png)

And that's it. We now have the latest version of Python installed on our MacOs system.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
