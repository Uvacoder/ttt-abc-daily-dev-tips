---
layout: ../../layouts/Post.astro
title: 'Chrome DevTools: CSS Overview'
metaTitle: 'Chrome DevTools: CSS Overview'
metaDesc: 'How to use the new CSS Overview in the Chrome DevTools'
image: /images/30-11-2021.jpg
date: 2021-11-30T03:00:00.000Z
tags:
  - chrome
---

I love how the Chrome dev team keeps making it easier and easier to identify potential issues on websites.
Everything with improving speed and user experience.

The latest addition to these incredible tools is the "CSS Overview".
This new feature is available as a preview in Chrome 96

## Using the Chrome DevTools CSS Overview

First, we need to open the Chrome Dev Tools.

> Mac `Cmd` + `Shift` + `C` or Windows: `Ctrl` + `Shift` + `C`.

Then click the "More options" button find, "More tools", and click CSS Overview.

![How to find the CSS Overview in Chrome DevTools](https://cdn.hashnode.com/res/hashnode/image/upload/v1637300085117/uEsUCCwVw.png)

Once you open the tool, you'll be prompted with an overview and some explanation of what it does.
Click the capture button to start.

![The CSS Overview welcome page](https://cdn.hashnode.com/res/hashnode/image/upload/v1637300154573/aZghjcdOL.png)

Once the tool is done, you'll see a mix of things returned.
I'll break them down per chapter.

### Overview summary

This high-level overview quickly shows you how many elements are found and how many selectors and stylesheets there are.

![CSS Overview summary](https://cdn.hashnode.com/res/hashnode/image/upload/v1637300294493/w6RjzuZCe.png)

### Colors

Then we get the colors panel, which shows all colors found on the page.
This overview gives you a quick example of whether these colors match your brand colors.

![Color panel overview](https://cdn.hashnode.com/res/hashnode/image/upload/v1637300542117/-gDrD6I6p.png)

And show possible contrast issues.

The cool thing here is that you can click on each element to see all occurrences in the stylesheet.

In the image below, I clicked the `#DEBFDE` color, and you can see all elements that have this color.
You can then press each element to highlight it in the DOM.

![Color explorer](https://cdn.hashnode.com/res/hashnode/image/upload/v1637300504304/2C1XdtfBc.png)

Really find this a welcome addition to quickly see unwanted color styles, like white on white or hidden elements.

### Font info

Then we enter the font overview panel, which shows all fonts you use on the page and their style.

![CSS Font overview](https://cdn.hashnode.com/res/hashnode/image/upload/v1637300609016/dCkyGi70w2.png)

I actually noticed through this tool that I'm assigning different fonts on top elements, causing the font issue to go a bit wild.

Again, super easy to quickly identify weird are one-of-a-kind font sizes that might not be in line with your brand.

### Unused declarations

Then we have a panel on unused declarations, making it easy to find styles that will have no effect.

![Unused declarations overview](https://cdn.hashnode.com/res/hashnode/image/upload/v1637300821442/7oOgzoI2Z.png)

In my case, it's a pseudo selector setting `vertical-align` on an element that's not `inline` or a `table-cell`.

(This particular case is actually valid, so I will log this with the DevTools team)

### Media queries

And then, we get an overview panel for our media queries. This makes it super easy to find all your queries.

![Media queries overview](https://cdn.hashnode.com/res/hashnode/image/upload/v1637300999337/HZbz6nVq1.png)

Including screen sizes, preferred schemes, and more.
You might find elements to optimize and combine queries that are about the same size.

## Conclusion

I hope you enjoy this tool as much as I do.
I really like to revamp my CSS to be smaller, more inline, and brand correct.

And this tool definitely helps with that 🎉.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
