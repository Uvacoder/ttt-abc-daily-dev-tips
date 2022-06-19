---
layout: ../../layouts/Post.astro
title: 'Counting all words across markdown files ~ CLI'
metaTitle: 'Counting all words across markdown files ~ CLI'
metaDesc: 'How to count all words across multiple markdown files by using the CLI'
ogImage: /images/13-06-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/be5ce44f-6f8b-4225-f230-63a2e9974800
date: 2022-06-13T03:00:00.000Z
tags:
  - developer
  - cli
---

Quite a while ago, my good friend and colleague Graham asked me if I knew how many words I'd written.

And although I'm at 800+ articles, I had no idea how many words this was.

So I decided to find a solution to give him an answer and shock myself (and maybe even you?)

This solution will use the command-line interface (CLI), which is the simplest way to do it.
In a future article, I might dive into some other solutions.

## CLI count words in markdown files

The first step is to count words in some text; luckily for us, Unix already has this command called `wc` (word count).

To use it, we can simply use a command like this:

```bash
wc -w <<< "Some random words"
```

This should output 3 as there are three words in this string.

![Word count command in Unix terminal](https://cdn.hashnode.com/res/hashnode/image/upload/v1654236292422/q0yHGQjw_.png)

Now that we know how to count words, we need a way to extract the actual content from our markdown file.

There are several Unix markdown parsers. If you have a favorite one, you can use that. Else, I suggest using `pandoc`.

If you don't have it yet, you can install it with [Homebrew](https://daily-dev-tips.com/posts/homebrew-one-package-manager-to-rule-them-all/).

```bash
brew install pandoc
```

We can then use it to read a markdown file like this:

```bash
pandoc --strip-comments -t plain {your-markdown}.md
```

The commands include the `--strip-comments` command to strip all HTML comments and comments from the markdown.
And the `-t` as the parameter to define what to convert it to, in our case, `plain` text.

When I run this on one of my markdown files, I get the following result.

![Pandoc converting markdown into plain text](https://cdn.hashnode.com/res/hashnode/image/upload/v1654236743632/k61pEEfgj.png)

So how do we now count these words quickly?

We can combine the `pandoc` and the `wc` command into one line.

```bash
pandoc --strip-comments -t plain {your-markdown}.md | wc -w
```

And it will result in the number of words in that document!

![Result of counting all words in markdown file](https://cdn.hashnode.com/res/hashnode/image/upload/v1654236850800/ef-n0O6we.png)

Pretty awesome! We now know how to count all words in a single markdown file.

## Retrieving all words across all markdown files

Now that we know how it's done, the real question is, how many words did you write in total?

And to answer that, we must count all words across all markdown files.

And no, we don't want to run this command for each file and add each output.

So to make this work, we can leverage the find command to find all files that end in the `.md` extension.

```bash
find . -iname "*.md"
```

This will result in a list of all your markdown files in the folder structure you are in.

We can combine the above two commands with this find command to count all words. (Be aware it might take a while depending on how many files you have)

```bash
find . -iname "*.md" | xargs pandoc --strip-comments -t plain | wc -w
```

![Result showing 416006 words written](https://cdn.hashnode.com/res/hashnode/image/upload/v1654237243238/o3pBqVCKJ.png)

Wow, I already wrote 416006 words? That is just crazy stuff.

If you are anything like me, the question around how many books would that be popped up.

And a quick google shows: "The average word count for adult fiction is between 70,000 to 120,000 words."

Does this mean I wrote around four novels already?

My mind is blown 🤯.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
