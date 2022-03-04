---
layout: ../../layouts/Post.astro
title: "You don't need --save anymore for NPM installs"
metaTitle: "You don't need --save anymore for NPM installs"
metaDesc: "Why you don't need the --save command anymore for npm installs"
image: /images/18-08-2021.jpg
date: 2021-08-18T03:00:00.000Z
tags:
  - javascript
---

If you ever installed an NPM package, the following syntax looks very familiar to you:

```bash
npm install --save package_name
```

This was long the golden standard to install a package and save it as a dependency in your project.

If we didn't specify the `--save` flag, it would only get locally installed and not added to the package.json file.

## NPM evolved

Over time NPM evolved into a huge player in package management, and ever since version 5 of NPM, we no longer need to define this `--save` argument.

Meaning our packages will be saved by default into our package.json file.

I'm thrilled with this addition, as it's scarce to want to install a package that you don't need in your package.json file.

## Installing dev dependencies using NPM

We also used the following command to install a package as a dev dependency.

```bash
npm install --save-dev package_name
```

This will place the package in your dev dependencies in the package.json file.

So to recap, the standard install will install our package under the `dependencies`, while the `--save-dev` argument will place them under `devDependencies`.

```js
{
  "name": "my_project",
  "version": "0.0.1",
  "dependencies": {
    "package_name": "^1.0.0",
  },
  "devDependencies": {
    "package_dev_name": "^1.0.0",
  }
}
```

## NPM install additional flags

As we saw, the default install has no flags and will install our dependency. NPM, however, gives us some flags to control the options.

- `-P`, '--save-prod`: Package will install as a dependency
- `-D`, `--save-dev`: Package will be installed as a dev dependency
- `-O`, `--save-optional`: Package will be installed as an optional dependency
- `--no-save`: Package won't be saved in package.json file

These are the essential flags we can use. However, the only one you frequently use might be the `-D` flag.

Do keep in mind the letter flags are capital sensitive.

So to recap: we don't need to use the `--save` attribute anymore. This is now the default behavior.
We can provide the `-D` flag to save a package as a dev dependency.

Thank you for reading this article. I hope you learned something new today. And thank you, NPM, for making this available.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
