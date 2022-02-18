---
layout: ../../layouts/Post.astro
title: 'Accepting all invites on LinkedIn'
metaTitle: 'Accepting all invites on LinkedIn'
metaDesc: 'A super quick way to accept all invites on LinkedIn'
image: /images/10-04-2021.jpg
date: 2021-04-10T03:00:00.000Z
tags:
  - developer
---

Suppose you're anything like me and get many invites after posting your LinkedIn handle on Twitter. In that case, you might be wondering if there's not a simple way to accept all of them at once.

LinkedIn used to have the option itself, but for whatever reason, it no longer does.

Luckily we as developers can leverage the power of JavaScript!

TL;DR:

```js
// Open invite page on LinkedIn and paste this in your debug console
const buttons = document.querySelectorAll('button.artdeco-button--secondary');
buttons.forEach(button => button.click());
```

## How to accept all invites on LinkedIn at once

First, we need to go to the LinkedIn website and see there are multiple open invites.

![LinkedIn multiple invites](https://cdn.hashnode.com/res/hashnode/image/upload/v1617687027675/chZI43pls.png)

The next step is to find out what makes an invite button unique, so we will be using the inspector to find this out.

- Mac: `Cmd` + `Shift` + `C`
- Windows: `Ctrl` + `Shift` + `C`

![LinkedIn invitation buttons](https://cdn.hashnode.com/res/hashnode/image/upload/v1617687299054/mkHXNEBSM.png)

Here you can see both buttons, the top one being the button to decline an invitation and the bottom one to accept.

The top one has a unique class of `button.artdeco-button--tertiary`.
The bottom one `button.artdeco-button--secondary`.

With those two selectors, we can either accept or decline all invites at once!

Let's write a selector to get all the accept buttons.

```js
const buttons = document.querySelectorAll('button.artdeco-button--secondary');
```

Then we can simply loop over the results and click them.
Making the full function we need to execute in our console tab:

```js
const buttons = document.querySelectorAll('button.artdeco-button--secondary');
buttons.forEach(button => button.click());
```

And that's it, a super simple way to accept all invites on LinkedIn at once!

![LinkedIn console click all invites](https://cdn.hashnode.com/res/hashnode/image/upload/v1617687547247/rHd5IPOAu.png)

Feel free to [add me on LinkedIn](https://www.linkedin.com/in/chrisbongers/) as well.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
