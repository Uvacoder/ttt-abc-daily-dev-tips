---
layout: ../../layouts/Post.astro
title: "A11Y 101: What's WCAG"
metaTitle: "A11Y 101: What's WCAG"
metaDesc: 'What exactly is WCAG and why should we care about it with accessibility?'
image: /images/19-05-2022.jpg
date: 2022-05-19T03:00:00.000Z
tags:
  - accessibility
---

While researching accessibility, you will come across **WCAG** a lot, but what is this WCAG actually, and should we care about it?

## What is WCAG

WCAG stands for Web Content Accessibility Guidelines, and it's an international standard on how to make web content more accessible for people with disabilities.

The guidelines are published by World Wide Web Consortium, also known as W3C.

And in short, they are guidelines on how to make the web more accessible.

There are different versions of the WCAG, including:

- WCAG 2.0
- WCAG 2.1
- WCAG 2.2 (Draft at the time of writing)
- WCAG 3.0 (In progress)

It's good to note that all guidelines from 2.0 are also included in 2.1, and everything from 2.0 and 2.1 is included in 2.2.

So if you already made sure you were 2.0 compliant, the updates will be less work for you.

## Who is WCAG for?

According to these guidelines, it's basically a guideline to help those wanting to make their website accessible.

It includes:

- Web developers
- Web tool developers who include accessibility
- Accessibility tool developers
- Developers who need accessibility for other platforms like mobile apps, for instance

Each section of the WCAG contains multiple guidelines divided into four leading principles.

- **perceivable**: Content must be presented so that users can perceive it. It can't be invisible to all their senses.
- **operable**: UI and navigations must be operable. The interface cannot require interactions a user cannot perform.
- **understandable**: Users must understand the information and how to operate the UI.
- **robust**: Content should scale with technology. As tech and user agents evolve, your content should remain accessible.

Also known as **POUR**.

Each of these four principles has its own guidelines on what you should do to comply with these rules.

## The levels of conformance

Each of the pillars defines three levels of conformance. This is used to identify different groups and needs.

These levels are:

- **A**: Lowest
- **AA**: Mid-range
- **AAA**: Highest

And here, the same rules apply. If you are A compliant, these sections automatically cross for AA.

The minimum level of compliance is A, and we should at least adhere to this level.
For level AA, there are some additional elements we can incorporate.
Level AAA is the maximum level we can achieve. However, this is not recommend for most websites as it is not possible to satisfy this level for some content.

## So what's required?

The main question from me was, ok but then what's required?
Or what should we aim for?

And the truth is, it's a bit vague and depends on your country's rule.

As these policies are different worldwide, W3C has a comprehensive list of which countries use which ruleset.

[Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/)

A quick glance at this table shows that most countries will legally set WCAG 2.0 to be met.

If we take The Netherlands as an example.

![Dutch laws around accessibility](https://cdn.hashnode.com/res/hashnode/image/upload/v1652075428542/zNyAq5ytY.png)

We can click on the country and see the details for the legally required policy.

We can quickly see it's a law enacted in 2016 and that it's mandatory for both government and the public sector!

It is stated by law you are required to adhere to WCAG 2.0, and looking in more detail, you can find the standard: **EN 301 549**
Which is a European standard for web accessibility and each European country can use this standard within their laws to test web content.

TLDR:
Most countries require at least WCAG 2.0 to be met at level AA.
However, I would recommend looking at 2.1 as these documents will shortly be updated to a new standard.

## Conclusion

The WCAG is a great list of guidelines with which we can assess our web content.

If you'd like more information, the [official guide](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=pageinfo%2C314#principle1) is very comprehensive and complete.

In the upcoming articles, we'll go into a bit more detail about how we can adhere to these rules.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
