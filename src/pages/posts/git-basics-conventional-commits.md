---
layout: ../../layouts/Post.astro
title: 'Git basics: Conventional commits'
metaTitle: 'Git basics: Conventional commits'
metaDesc: 'What are conventional commits and how can you use them?'
image: /images/20-11-2021.jpg
date: 2021-11-20T03:00:00.000Z
tags:
  - git
---

When it comes to writing commit messages, we all get blackouts. It's very hard sometimes to describe a commit message and make it meaningful.

And that's where conventional commits can help you.
This is a set of rules to help you describe a commit message.

This is not a golden standard in the industry, some companies use it, and some have their commit structure. Always check with your team what they use.

## The conventional commit structure

The basic structure for conventional commits looks like this:

```
<type>([optional scope]): <short description>

[optional body]

[optional footer]
```

Let's dive a bit deeper into the meaning of these elements.

- `type`: This is a must-have type. We'll dive into the types in a second.
- `optional scope`: A optional flag to indicate an isolated scope
- `short description`: Your general description of the commit
- `optional body`: A more detailed description of the commit. This is optional but handy for bigger commits
- `optional footer`: Can state breaking changes and reference issues by ticket number

Right, let's have a look at the types as they are an essential aspect here.

- `build`: Changes that affect the build system like gulp, npm, etc
- `ci`: Changes made to the CI configuration like Travis, Circle, Actions
- `chore`: Other changes that don't modify src or test files
- `docs`: Documentation only changes
- `feat`: A new feature
- `fix`: Fixed a bug
- `perf`: Code changes that improve performance
- `refactor`: A code change that's not mainly a bug or new feature
- `revert`: Revert a previous commit
- `style`: Changes to styling like white space, formatting, semi-colons)
- `test`: Add or fix tests

## Some examples

Let's look at some samples, as they best understand what's going on.

In the example below, we see a new feature being introduced. It also states some more details in the body and references a ticket which can be set to #done.

```
feat: holiday-themed devcard

Our DevCard now features a holiday theme for both Halloween and Christmas!
This also includes a link pointing to Chris' article on how to embed it on your GitHub Profile.

DD-267 #done
```

Below, you can see a build commit that affects only a specific scope, the `extension`.
It updates the version to `3.8.0`

```
build(extension): version 3.8.0
```

The following introduces a breaking change and includes a `!` to draw attention to breaking changes.

```
chore!: drop Node 6 from testing matrix

BREAKING CHANGE: dropping Node 6 which hits end of life in April
```

This one is a `ci` issue where we introduce a new Kubernetes helper.

```
ci: use pulumi common new kubernetes helpers
```

## Reference material

If you want to read up on some more rules and real-world examples, here are some fantastic resources.

- [Conventional Commits website](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)
- [Angular Conventional Commits](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
- [Angular examples](https://github.com/angular/angular/commits/master)
- [Daily.dev examples](https://github.com/dailydotdev/apps/commits/master)
- [Visual Studio Code plugin](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)

I hope you found this helpful. Conventional Commits helped me make my team commit messages much easier and more precise.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
