---
layout: ../../layouts/Post.astro
title: "I've automated my morning routine 🤖"
metaTitle: "I've automated my morning routine 🤖"
metaDesc: 'Bash script to open browser tabs'
image: /images/31-08-2020.jpg
date: 2020-08-31T03:00:00.000Z
tags:
  - developer
  - bash
---

Call me lazy, but I just love automating things.
Today we are automating my morning routine.

You may be wondering what that routine is.

- Make coffee (Shit, we won't automate this, Yet!)
- Open 10 tabs

Yes, that last part we are automating using the magic and mighty `bash`!

See here how cool this project is:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/bash-chrome_vebzv5.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/bash-chrome_f9bbxu.mp4" type="video/mp4" />
</video>

## Bash opening browser tabs

> Note: This script is written/tested on Mac and can differ for you on different machines.

First, we will be making a plain old `.txt` file that will hold all the pages we want to open:

```
https://hashnode.com/
https://daily-dev-tips.com/
https://twitter.com/
```

Now we will be making a bash script to open all browser tabs:

```bash
alias google-chrome='/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
while read line; do
    google-chrome --new-tab "$line"
done < ~/www/browser-hack/list.txt
```

I have defined the alias for google-chrome; I think on windows, you can leave the alias out (untested).

Then we will loop through each line defined in list.txt and call google chrome to open a new tab for that website.

Next, we can add an alias to make it even cooler:

```bash
alias morning=~/path/to/script/bash.sh
```

Now in your terminal type: `morning` and see the magic happen

Voila, we just hacked our morning routine to be that much quicker!

You can find this project on Github: [Browser-hack](https://github.com/rebelchris/browser-hack)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
