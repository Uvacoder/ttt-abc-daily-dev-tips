---
layout: ../../layouts/Post.astro
title: 'A11Y 101: How to alt tags'
metaTitle: 'A11Y 101: How to alt tags'
metaDesc: 'Why are alt tags important and how can I improve them?'
image: /images/31-05-2022.jpg
date: 2022-05-31T03:00:00.000Z
tags:
  - accessibility
---

Alt tags have been along since the dawn of HTML and creating websites. However, for some people (including me), they were never a top priority.

Let's change that behavior!

And I'll tell you why. What about visually impaired people who cannot see what we are looking at?
Or, assume you are on a road trip and have terrible internet for a second. You might disable images or read via an RSS reader that turns those off for you.

Now some writers, including my past self, would have these super fun images of graphs, and below that, "As seen in the graph above".

Uhm, yes, Chris, but what exactly should we see in this graph if we don't know what it's about?

And that's precisely why alt tags are so important, to help people that can't see your images understand what they are supposed to be looking at.

> Note: Remember, it's not just visually impaired people!

## What should an alt tag look like

First, it's important to note that we can omit the use of "picture of" or "image of" as screen readers will already announce this to the user.

So, for example:

❌: Picture of a race car
✔: race car

So what should an optimal alt tag describe?

The answer is simple, look at the picture as if you couldn't see it.
What words would describe the picture best to you?

Sometimes, you might want to be super specific if the context allows it.
But in some cases, you might want to address the emotion in the photo over anything.

Let's take the following example image.

![Chris holding a massive church door](https://cdn.hashnode.com/res/hashnode/image/upload/v1653153747960/N8K8eiTB0.JPG)

For the non-visual viewers: we see an image of Chris holding a massive church door.

However, depending on the context, this image could have different meanings.

**Scenario 1**: This is the movie poster for the new game of thrones season.

In that case, it could say: "The main character Hodor is holding the doors to keep white walkers out."

**Scenario 2**: The image is used as a promotion for the newly renovated church door

Which could have an alt like: "The contractor holding the newly renovated church door".

The examples show that each scenario could have very different alt attributes.
But while we think about this, this makes total sense.
Our images should enhance what the user is already reading and enrich their experience.

For visual readers, the image's context is often more apparent, so when addressing non-visual users, we should help them as much as possible.

## Don't write for SEO

A common mistake is that your alt tags should focus on your keywords.

Don't be the guy that does that!

Optimize for readers! Google values readers way, way more than your SEO optimizations.
It will show that if they find good relevant content on your website!

To optimize for the user, not for SEO

## What if the image is purely decorative?

Glad you asked this question. Some images have pure decorative use-cases.
For instance, simple background images or images we add for the styling of our website.

First, it's good to note we should always add alt tags. There is never a good situation to **not** have them.

But, with that being said, we can have empty alt tags.

```html
<img src="bg.jpg" alt="" />
```

This is fine if the image doesn't add anything!
Screen readers will not read the image.

A quick pro-tip, though, it's a good idea to add `role="presentation"` to these images.
This makes it easier for you to understand that empty alt tags exist for a reason.

And you can even leverage CSS to showcase missing alt tags and omit those with this tag on them.

## And what about complex graphs

If your graph is super important, like, for instance, browser support, the best case is to add it as a visually hidden element table.

This way, screen readers will still be able to read out your table, which is essential for the context.

This, however, is, of course, a big commitment, and perhaps you can opt to only showcase the most important take-aways from the graphic?

In other cases, you could have a more descriptive text explaining the graphic.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
