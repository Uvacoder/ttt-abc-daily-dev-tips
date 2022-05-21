---
layout: ../../layouts/Post.astro
title: 'A11Y 101: Evaluation tools'
metaTitle: 'A11Y 101: Evaluation tools'
metaDesc: "In this article we'll take a look at some fantastic accessibility evalaution tools"
image: /images/21-05-2022.jpg
date: 2022-05-21T03:00:00.000Z
tags:
  - accessibility
---

Now that we know [what accessibility is](https://daily-dev-tips.com/posts/a11y-101-what-is-accessibility/) and [what types of users there are](https://daily-dev-tips.com/posts/a11y-101-type-of-users-and-how-they-interact/). It's time to look at accessibility evaluation tools.

We can use these tools to evaluate where we can improve our accessibility.

In this article, I'll be going over some of the tools I found helpful during my journey.
There are, of course, a million and one other tools you can use, and if you have some amazing ones, please do let me know so I can add them to the list.

Good to mention that W3 has a great list of tools you can use for specific testing elements.

[Visit the W3 web accessibility evaluation tool list](https://www.w3.org/WAI/ER/tools/).

## Use a screen reader!

Screen readers are an excellent tool to find how a large sum of people will use your website.

Not only will it test for some fundamental navigation problems, but you can see what you'd like to expect from it.

I've written a whole article on the different options for screen readers and how you can use them.

[Read the article on-screen readers](https://daily-dev-tips.com/posts/a11y-101-how-to-use-a-screenreader/).

## axe DevTools

The first tool we will look into is axe DevTools.

[Add axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)

After installing this plugin, you'll find a new option in your developer tools in Chrome.
Click the tool, and you will be able to scan your whole page or part of it using this tool.

The cool part about this tool is that it shows the issues neatly organized. You can ask it to highlight the problems one by one, so you can quickly identify them.
You can also inspect the element from the tool, which helps if you want to try and change some things.
And lastly, it provides a lot of information on how and why you should fix this issue.

![axe DevTools evaluation report with Highlight on](https://cdn.hashnode.com/res/hashnode/image/upload/v1652246243879/FmPqfvBy7.png)

It also has a pro plan, in which you can do a guided tour and get even more information on specific issues. (However, there are free alternatives to do this)

## WAVE Evaluation tool

Another really great and visually helpful tool is the WAVE evaluation tool.

[Add WAVE Evaluation tool](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh).

A sidebar will appear once you add the tool and open it on a website.

![WAVE Evaluation tool on daily-dev-tips.com](https://cdn.hashnode.com/res/hashnode/image/upload/v1652246603158/eiKnmPNRf.png)

It also starts showing little icons on your website, where you can quickly identify the areas that can use improvement.
You can get more information about the issue and even quickly navigate it in a code block by clicking on the little icons.

What helped me a lot by using this tool is seeing which areas we are doing well.

## Accessibility Insights for Web

The accessibility insights for web tool is a fantastic guided tool for accessibility testing by Microsoft.

[Add Accessibility Insights for Web](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni?hl=en).

Once you add the tool, you can choose to run a fast pass to identify the three most common issues of accessibility.

Or you can choose to do an assessment.
The assessment is remarkable as it guides you through these issues step by step.

![Heading function test in Accessibility Insights tool](https://cdn.hashnode.com/res/hashnode/image/upload/v1652247407076/m3mVVxThW.png)

By clicking the visual helper on the tool and going back to your website, you can quickly identify which issues there might be.
The tool will add highlights to areas in which you should focus.

![Headers made visual on daily-dev-tips.com by Accessibility Insights tool](https://cdn.hashnode.com/res/hashnode/image/upload/v1652247449514/z8rPRM19O.png)

## Lighthouse

Last but not least is Lighthouse. Not proper accessibility focussed tool, but by running Lighthouse tests, you also get the most common accessibility issues tested.

The focus is high on contrast, semantics, and missing elements.

![Lighthouse report in Google Chrome](https://cdn.hashnode.com/res/hashnode/image/upload/v1652247673005/gFsT9dMpJ.png)

Lighthouse comes with Chrome, as we can run it from the developer tools.

It takes screenshots of the issues it finds, but you can also hover on the element to highlight it on the page.
This way, you can quickly identify the issue.

It also provides a list of issues you can manually verify and check. This is a great starting point for anyone wanting to audit their website and learn about the process.

## Conclusion

There is not one excellent all-knowing tool.
I've found a combination of two or three tools, and doing manual evaluations on how it performs works wonders.

Always try to do these evaluations from the perspective of someone with a particular disability.
This will open you up to what someone might expect.

Let me know if you know any other perfect accessibility tools you use!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
