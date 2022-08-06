---
layout: ../../layouts/Post.astro
title: 'Git basics: Ignore files from being committed'
metaTitle: 'Git basics: Ignore files from being committed'
metaDesc: 'How to ignore certain files from being committed to Git'
image: /images/06-11-2021.jpg
date: 2021-11-06T03:00:00.000Z
tags:
  - git
---

There are some files you don't want to commit to Git, simply because they would be too big and don't have any use.

Some examples of these files:

- `node_modules`: Super big and changes every install
- `.env` often contains secrets and keys. Make sure to ignore this file
- Operating system files like: `Thumbs.db`, `.DS_Store`
- `.log` files
- Any cache directory

Luckily there is a simple way always to ignore these from your git repo.

## Introducing the `.gitignore` file

As the name suggests, the `.gitignore` file will ignore specific files you marked inside it.

To use one, create a file called `.gitignore` at the root of your project.

Let's already add our operating files like so:

```
# Ignore platform files
Thumbs.db
.DS_Store
```

But let's put it to the actual test and initialize npm in our testing repo.

```bash
npm init -y
```

Now let's add a random package. I choose `fastify` for testing purposes.

```bash
npm i fastify
```

If we then look at our Git-changed files, we'll see a massive list of files.

![Git open changes for node_modules](https://cdn.hashnode.com/res/hashnode/image/upload/v1635225546510/SX_6U1_w7s.png)

That's not really what we want as this contains all the node_modules files.

Let's modify our `.gitignore` file to ignore these like so:

```
# Ignore platform files
Thumbs.db
.DS_Store

# Packages
node_modules
```

If we take another look, we'll see there are only three files ready to be committed.

![Git commit with gitignore in place](https://cdn.hashnode.com/res/hashnode/image/upload/v1635225678012/UITIKWa2s.png)

Way better!

And there you go, you can add any files you want to this `.gitignore` file but be aware of what you'll don't want to be committed.

I've pushed this to [GitHub](https://github.com/rebelchris/git-test) in case you want to have a look.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
