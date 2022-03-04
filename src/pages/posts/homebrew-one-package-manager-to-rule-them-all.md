---
layout: ../../layouts/Post.astro
title: 'Homebrew - One package manager to rule them all'
metaTitle: 'Homebrew - One package manager to rule them all'
metaDesc: 'An article about homebrew, then one and only package manager you will ever need!'
image: /images/02-01-2021.jpg
date: 2021-01-02T03:00:00.000Z
tags:
  - mac
---

If you are on Mac and needed to install some kind of package or software the changes you came across Homebrew are about 99%.

[Homebrew](https://brew.sh/) is a package manager for Mac, it makes it easy to install different software. Or even different versions of for instance PHP.

You use homebrew in your terminal, my [favorite terminal is iTerm2](https://daily-dev-tips.com/posts/getting-started-with-the-terminal/).

![Homebrew list installed packages](https://cdn.hashnode.com/res/hashnode/image/upload/v1609140789340/bCyI8E0tO.png)

## Installing homebrew on Mac

The installation is one of the easiest I've ever seen.

Open up your terminal and execute the following command.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

That will install the latest version of homebrew.

## Using homebrew

To use homebrew you can again open your terminal and run `brew` commands.

A list of useful commands:

- `brew --version`: Display the installed version of homebrew
- `brew help`: Display the help
- `brew doctor`: Check the system for potential issues
- `brew update`: Fetch the latest homebrew version
- `brew upgrade`: Upgrade all brews (packages)
- `brew list`: List all installed packages
- `brew install <formulae>`: install specific formula
- `brew services start <service>`: Start a specific service

## Installing specific packages

To install specific packages we can generally follow the following guide.

> Note: this example uses httpd as the package, you can find all [homebrew formulae's here](https://formulae.brew.sh/)

1. `brew install httpd`

Done... Literally, just that one command will install httpd and everything it needs.

In this case, since it's a service we can use homebrew to start it.

```bash
brew services start httpd
```

Amazing right!

If you are on Mac and not running homebrew, make the change today, it will change your life!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
