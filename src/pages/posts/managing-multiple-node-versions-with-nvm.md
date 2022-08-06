---
layout: ../../layouts/Post.astro
title: 'Managing multiple node versions with NVM'
metaTitle: 'Managing multiple node versions with NVM'
metaDesc: 'How to manage multiple local node versions with NVM'
ogImage: /images/13-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/d8809881-0760-454b-6f38-6d26d1fc0400
date: 2022-07-13T03:00:00.000Z
tags:
  - javascript
  - nodejs
---

While working on multiple projects, some of them may use different node versions.

This can be a real pain point when you accidentally ran npm install or npm update with a different npm version.

To address these issues, we get something unique called nvm.
It stands for: Node Version Manager.

And it can be used to switch between different node versions on your local machine quickly.

## Installing NVM

The easiest way to install NVM is by using [Homebrew](https://daily-dev-tips.com/posts/homebrew-one-package-manager-to-rule-them-all/).

Run the following command:

```bash
brew install nvm
```

Once installed, you must add it to your preferred profile file so we can use it globally.
A profile file can be one of these: (`~/.bash_profile`, `~/.zshrc`, `~/.bashrc`).

Once you have identified it, add the following lines.

```bash
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

This will ensure that you can run the nvm commands every time a terminal opens.

We can quickly test if it works by running the following command in a terminal.

```bash
nvm -v
```

This should output the version of nvm you are using.

## Installing and using different node versions

The idea behind nvm is that we can install and manage multiple node versions.

The first step is to install the versions we might need.

```bash
nvm install 16

nvm install lts

nvm install 12.14.3
```

The above are all accepted node versions you can install.

Once we have them installed, we can use the following command to use them.

```bash
nvm use 16

nvm use lts

nvm use 12.14.3
```

## Pro tip

Add a `.nvmrc` file to the root of your project. In there, add the version of the node this project uses.

For instance, a file could have node 12.14.3. We can then add the `.nvmrc` file and the following content.

```
12.14.3
```

Now when you open the project in your favorite editor, you can run the `nvm use` command, and it will install the version defined in the `.nvmrc` file.

Bonus tip:
A great visual studio code plugin does this every time you open a project!

[Download the NVM VSC plugin](https://marketplace.visualstudio.com/items?itemName=abumalick.vscode-nvm)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
