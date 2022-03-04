---
layout: ../../layouts/Post.astro
title: 'Bash CleanMyMac alternative 🧼'
metaTitle: 'Bash CleanMyMac alternative 🧼'
metaDesc: 'Quickly removing files using a Bash script'
image: /images/11-09-2020.jpg
date: 2020-09-11T03:00:00.000Z
tags:
  - developer
  - bash
---
As you might know by now, I really like Bash!

So far, we have built some fun stuff using Bash like [hacking our morning routine](https://daily-dev-tips.com/posts/ive-automated-my-morning-routine/) and making an [after work git check](https://daily-dev-tips.com/posts/bash-never-forget-to-git-commit-again/).

For a lot of my articles I use [Carbon](https://carbon.now.sh/) to generate these cool previews.
Very cool app, but my Downloads folder gets full of these things.

So how can Bash help us CleanOurMacs?

![Bash CleanMyMac](https://cdn.hashnode.com/res/hashnode/image/upload/v1599562189223/4duG8kaxe.gif)

## Bash clean files

> Note: This script can be very dangerous since it uses Bash to remove files. Please be cautious!

We will be using a `txt` file to loop over files we want to remove.

These files can include a wildcard (*) or start with a specific string:

- Start with: `carbon`
- Wildcard: `carbon*.png`

Then on to the script!

```bash
while read line; do
    find . -name "$line" -exec rm -rf {} \;
done < ~/www/cleanMyPc/files.txt
echo 'All done';
```

Wow, simple as that right!

We loop through the lines in our `files.txt`, and for each line we execute the `find` command it searches for a specific name and calls `-exec rm -rf` 

The `rm` stands for `remove` and `rf` for `recursive force`.

## Running the script

This script initially worked so it would scan all your files, but I adjusted it for security reasons to only scan a specific folder.

1. So open a Terminal
2. Navigate to the folder you want: `cd Downloads`
3. Execute command `~/path/to/script/bash.sh`
4. Voila, all done

It's a very simple script, but it can be useful to find/remove certain files on your computer.

Find this project on [GitHub](https://github.com/rebelchris/cleanMyPc)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
