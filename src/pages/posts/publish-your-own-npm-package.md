---
layout: ../../layouts/Post.astro
title: 'Publish your own NPM package'
metaTitle: 'Publish your own NPM package'
metaDesc: 'You can make your own package on the NPM registry a how-to guide'
image: /images/28-07-2021.jpg
date: 2021-07-28T03:00:00.000Z
tags:
  - javascript
---

The title might sound scary to you. I know it was for me.
However, I'll show you it's not so scary and a fun experience to publish your very first NPM package in this article.

![Publish your NPM package](https://cdn.hashnode.com/res/hashnode/image/upload/v1626933416963/OiSxYBefx.png)

I'm sure you've heard of NPM and even used it before if you're interested in this article.

Just a quick reminder, NPM is the biggest software registry and a package manager and installer.

Are you wondering how to install NPM?
It comes shipped with Node. If you're looking to install Node, check out [Homebrew](https://formulae.brew.sh/formula/node).

## Why publish an NPM package?

Perhaps you made something that you use all the time in your projects?
Then you might have realized it's a pain to update it in all those projects.
Then imagine being able just to run the NPM update command 🤯.

Another reason might be you made something that you think the public might find valuable.
This is the case, as I made my first [Astro public component](https://www.npmjs.com/package/@rebelchris/astro-static-tweet). (Still a WIP, actually)

## Create your own NPM package

Let me start from scratch as it will be easier to explain like that.

First, we'll create our local folder.

```bash
mkdir astro-static-tweet && cd astro-static-tweet
```

Now we can initialize NPM.

```bash
npm init
```

Fill out the questions as you go along.

As for the naming of your package, you can use a public name like `my-plugin`, but chances are it's already taken.

You can use the `npm search` command to see if your name is still valid.

However, another option is to publish a scoped package, meaning it's prefixed with your username.

You can then use a name like `@username/my-plugin`, making it unique.

### Writing our code

Now let's add some code so our plugin does something.

Let's make a super simple example as a package that will do some basic math for us.

Create an `index.js` file and add the following code.

```js
function add(one, two) {
  return one + two;
}

module.exports = add;
```

Now when we want to use this package later on, we can require the add function like this:

```js
const add = require('plugin-name');
console.log(add(2, 5));
```

### Adding multiple functions

Of course, it's not an excellent plugin if we can only use add calculations.

Let's add more functions and see how we can export and use those.

```js
function add(one, two) {
  return one + two;
}

function subtract(one, two) {
  return one - two;
}

function multiply(one, two) {
  return one * two;
}

module.exports = { add, subtract, multiply };
```

And we can then import those once we load our package like this:

```js
const { add, subtract, multiply } = require('plugin-name');
```

### Adding a README

A good habit of doing is to add a Readme in your project. You can make these as extensive as you like.
However, there should be a minimum requirement of:

- Installation guide
- Example of how to use it
- Tell people how to log issues

Some optional parts:

- What you're still working on
- License
- Contribution guide

## Testing your package

It's always a good idea to include some tests in your package. This makes it easy to check if your code is still working once you change something.

I won't go into detail about testing code, as that is another topic.

However, the most basic test we can do is a manual test.
We can test out the package before it is live on the NPM registry.

To do this, we need to link it locally.

Navigate to your package folder and execute the following command:

```bash
npm link
```

Then in the project where you want to test out this package, use the following command.

```bash
npm link your-package-name
```

Once you're happy with the package, move on to the next step.

## Publishing our own NPM package

Before publishing to the NPM registry, we need to make sure we have an account for the NPM website.

[Signup for NPM](https://www.npmjs.com/signup)

Once you have an account, you can run the following command in your terminal.

```bash
npm login
```

Follow the steps as the script will prompt you.

Once you are done and ready to push your code live, use the following command:

```bash
npm publish
```

Did you use a scoped package? (@username/my-package).
Then you'll get a message saying scoped packages can't be published without paying.

However, we must publish it as a public package and use the following command.

```bash
npm publish --access=public
```

And now you can head over to [npmjs](https://www.npmjs.com/package/@rebelchris/astro-static-tweet)

### Updating your package

When it comes to updating, you change the code as you need to.
The next step here is to update your package version.

The best approach is to use semantic versioning.
Meaning we use a three-point version number.

Version: **1.2.3**

Where the following can be said:

- `1`: Major change can have incompatible function changes
- `2`: Minor change, mostly backward compatible
- `3`: Patch change, a bugfix for instance

You can read more on the [semver website](https://semver.org/).

Once you have updated the version, you can publish it as you did before:

```bash
npm publish
# OR IF YOU SCOPED YOUR PACKAGE:
npm publish --access=public
```

## Conclusion

And that's it. We now have our package on the NPM registry!

Keep an eye out for issues logged by people using your package and keep your package up to date with security issues.

Made an exciting package?
Let me know on Twitter/email me ✨

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
