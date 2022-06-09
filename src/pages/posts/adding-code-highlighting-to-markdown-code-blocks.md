---
layout: ../../layouts/Post.astro
title: 'Adding code highlighting to markdown code blocks'
metaTitle: 'Adding code highlighting to markdown code blocks'
metaDesc: 'Making markdown code blocks look nice with a highlighter plugin'
image: /images/03-02-2022.jpg
date: 2022-02-03T03:00:00.000Z
tags:
  - nextjs
---

Now that we created our [markdown powered Next.js blog](https://daily-dev-tips.com/posts/creating-a-markdown-blog-powered-by-nextjs-in-under-an-hour/), we want to show off code blocks.

Code blocks like you would have seen on this website look like this:

```js
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;
```

Let's try and add this feature to our new blog.

Use this [GitHub repo](https://github.com/rebelchris/next-markdown-blog) as your starting point if you like to follow along.

## Installing a highlighting plugin

We can already parse code blocks; however, they all look the same and have no highlighting.

For example, this image below shows how it would look:

![Plain code block in markdown](https://cdn.hashnode.com/res/hashnode/image/upload/v1643088732369/EpChCzI9Y.png)

What we need is a highlighter.
This script converts code blocks into separate span elements with classes to define what each part is.

Since we are using `markdown-it` as our markdown parser, we can use `highlightjs`, an optional plugin.

To install the highlight package, run the following command.

```bash
npm install markdown-it-highlightjs
```

Then head over to your `pages/post/[slug].js` file and modify the imports section to look like this:

```js
import markdownIt from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';
const md = markdownIt().use(highlightjs);
```

We changed the way we load the markdown package and the highlighter separately.
Then we define a new variable that invokes the markdown package and includes the highlighter as a plugin.

We can still use the `md` variable in the same way and don't need to change much there:

```js
md.render(content);
```

Let's see what happens.

![Markdown highlighting plugin](https://cdn.hashnode.com/res/hashnode/image/upload/v1643089034627/6qtJCDhXU.png)

The code block still looks the same, but if we look at the HTML created, we can see all kinds of new span elements with different classes.

We can then find or create a theme for these highlighting classes.

You can find one here: [HighlightJs themes](https://highlightjs.org/static/demo/)

And once you found one, find the respective CSS styles on their [GitHub repo](https://github.com/highlightjs/highlight.js/tree/main/src/styles)

In your application, create a new CSS file called `code.css`, and in the `globals.css` import it like so:

```css
@import 'code';
```

You can paste the CSS from the theme in the code CSS file.

And now, if you reload your application, you should see the theme in action, like the image below.

![Highlight JS in action](https://cdn.hashnode.com/res/hashnode/image/upload/v1643089263331/AZUtYPdeX.png)

You can also find the completed code on [GitHub](https://github.com/rebelchris/next-markdown-blog/tree/code-highlighter).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
