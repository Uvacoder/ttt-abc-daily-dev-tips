---
layout: ../../layouts/Post.astro
title: '5 amazing Chrome accessibility tools you didnt know!'
metaTitle: "5 amazing Chrome accessibility tools you didn't know!"
metaDesc: "If you're into accessibility these 5 tools from Chrome DevTools should be on your list! See the guide to learn how to use them."
image: /images/08-10-2020.jpg
date: 2020-10-08T03:00:00.000Z
tags:
  - chrome
  - developer
---

We are all aware that we, as web developers, are responsible for making the web more accessible. But what does "accessibility" mean in development?

By web accessibility, we mean making a web page designed and coded so people with disabilities can access and use them.

I, for one, never know how to start.
I keep hearing people shout, "MAKE YOUR WEBSITE ACCESSIBLE".

Ok, but how? And with which web development tools?

With these 5 Chrome DevTools for accessibility, we will learn how.

## Open Chrome DevTools

We are using Chrome dev tools for all the below five items, which can be found using the following shortcuts.

Mac `Cmd + Shift + C` or Windows: `Ctrl + Shift + C`.

## 1. Chrome Accessibility inspector

The first and perhaps most apparent Tool is the accessibility inspector.

This will show us mainly the ARIA properties of certain DOM elements.

We need to open Chrome dev tools and right-click an element to access this menu. It's under the inspect tab but can be hidden under the extra options.

![Chrome accessibility inspector](https://cdn.hashnode.com/res/hashnode/image/upload/v1601568403902/SX8OZfx9v.png)

If you want to learn more about creating suitable ARIA labels, look at this [article on WAI-ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA).

## 2. Vision emulator

Did you know we can emulate vision deficiencies like color blindness?

You want to use this function to ensure that people with vision deficiencies see your web page correctly.
It might be that people with visual disabilities can not distinguish between, e.g., button colors on the user interface.

Open up Chrome dev tools.
Then we click more tools and choose, Rendering.

![Chrome DevTools tools for rendering](https://cdn.hashnode.com/res/hashnode/image/upload/v1601534344496/i7zWA8mup.png)

Scroll down to the bottom of the Rendering tab and find "Emulate vision deficiencies".

![Chrome emulate vision deficiencies](https://cdn.hashnode.com/res/hashnode/image/upload/v1601534431019/GWubCSDvw.png)

We can filter on the following:

- Blurred vision (People who can't see sharp)
- Protanopia (Color-blind, shades of red/greens)
- Deuteranopia (Color-blind, green-blind)
- Tritanopia (Color-blind, blue, yellow shades)
- Achromatopsia (Total color blind)

This will look as follows:

> Note the image below shows a blurred vision of a website in a web browser!

![Chrome blurred vision](https://cdn.hashnode.com/res/hashnode/image/upload/v1601534516165/VWD5tpM-t.png)

## 3. Lighthouse reports

We have Lighthouse, which nowadays has a full accessibility tab built-in.

Open Chrome dev tools and click on the Lighthouse tab.
We can then check the accessibility checkbox.

![Lighthouse accessibility](https://cdn.hashnode.com/res/hashnode/image/upload/v1601534740971/SxTEfI-QM.png)

We then get a report like this.

![Chrome Lighthouse report](https://cdn.hashnode.com/res/hashnode/image/upload/v1601534804926/CQ6QEwpxH.png)

It analyzes the DOM for things such as:

- ARIA definitions
- Role attributes
- Contrast ratios
- Lang-attribute on HTML
- Tabindex on forms
- Alt-elements
- And many more!

## 4. Contrast ratio

A big thing when it comes to accessibility is contrast. We also saw this in our vision deficiency item.

Google Chrome has a quick way to show contrast in a specific element.

To open the Contrast ratio, we need to open Chrome DevTools.
Then inspect a text element and find a color box.
Click the little color box and choose the pointer element.

![Chrome contrast ratio](https://cdn.hashnode.com/res/hashnode/image/upload/v1601535241761/5NtnDEnOB.png)

You might think, ok, but what does this mean?

- The first value is your current contrast ratio
- The second value is the minimum contrast ratio (AA)
- The last one is the enhanced contrast ratio (AAA)

You can change the color and see if you can enhance your contrasts.

## 5. Inspect element tooltip in DevTools

Another great tooltip that combines many of the above is the inspector tooltip in Chrome.

We can use the inspector tooltip by opening DevTools and selecting the pointer icon.

Then we can hover over an HTML element and see with one quick glimpse what the contrast is the role, and if it's focusable by the keyboard.

![Chrome Inspector tooltip](https://cdn.hashnode.com/res/hashnode/image/upload/v1601568633044/P2jw7wLJm.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
