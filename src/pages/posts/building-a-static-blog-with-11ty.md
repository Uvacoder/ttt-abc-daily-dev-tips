---
layout: ../../layouts/Post.astro
title: 'Building a Static Blog with 11ty'
metaTitle: 'Build a Static Blog with 11ty [2022 Tutorial]'
metaDesc: 'Guide teaching how to create a static blog with Eleventy.'
image: /images/20-04-2020.jpg
date: 2020-04-20T03:00:00.000Z
tags:
  - eleventy
---

Ever wondered what powers this beautiful blog? It's a static site generator (SSG) called [Eleventy](https://www.11ty.dev/), which is super simple to get started with.

But the main reason for me to use **Eleventy (11ty)** is that it's so blazing fast and customizable.

Yes, I've tried some others like [jekyll](https://jekyllrb.com/), but somehow **11ty** was much easier for me (opinion yes 🤫)

Let's learn how to create a blog with Eleventy! 🔥

## Setting up the project

Like other articles like [this one](https://daily-dev-tips.com/posts/basic-nodejs-express-application/) about setting up `node.js`, we start by creating a basic folder structure.

```bash
mkdir blog
cd blog
```

This will create a' blog' directory and navigate into it.

```bash
npm install
```

This will install a basic node application.

```bash
npm install --save-dev @11ty/eleventy
```

This will add Eleventy to our package. According to their docs, a local installation is preferred over a global one.

That's it; We can now start working on **adding pages** in 11ty.

## Adding a homepage to Eleventy

Of course, every website/blog needs a homepage. So let's start with opening the project in your favorite code editor.

First, we will add a file in our root called `index.njk`

> njk is short for `[Nunjucks](https://mozilla.github.io/nunjucks/)` which is a templating language

```html
---
layout: layouts/home.njk
---

<h1>Latest posts will come here</h1>
```

As you can see, it's a mix between Markdown and Layout.

We define a layout for this file up top `layouts/home.njk`, which we will create in a bit.

Now let's create the layout structure.

Create a folder called `_includes` in which we create another folder, `layouts`.

First, we create our base layout. Create a file called `base.njk`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ renderData.title or title or metadata.title }}</title>
    <meta
      name="Description"
      content="{{ renderData.description or description or metadata.description }}"
    />
    <link rel="stylesheet" href="{{ '/css/index.css' | url }}" />
  </head>
  <body>
    <main {% if templateClass %} class="{{ templateClass }}" {% endif %}>
      {{ content | safe }}
    </main>
  </body>
</html>
```

And our `home.njk` file

```html
---
layout: layouts/base.njk
templateClass: tmpl-home
---

{{ content | safe }}
```

### Running Eleventy locally

To see the blog we created with Eleventy so far, run the following command in your terminal:

```bash
npx eleventy --serve
```

The open up [http://localhost:8080](http://localhost:8080/) to see the blog!

It is nothing fancy, but it should show an `H1` with the text `Latest posts will come here`.

## Blog functionality with Eleventy

A blog wouldn't be much without actual blog posts. So let's dive into creating some blog posts.

Start by creating a new folder in your root called `posts`. We will then add 5 Markdown files.

```markdown
---
title: Post number 1
description: Whatever you want to say
date: 2020-04-17
tags:
  - posts
layout: ../../layouts/Post.astro
---

# Lorem ipsum dolar si amet!?

Yes! I agree
```

Follow through these until you have 5. Let's call them `post-one.md`.

The critical part here is the `tags` option, we can have multiple tags, but in this case, we set one being `posts`. This will become our **collection**!

Also, we mention a new layout here, so lets create `_includes/layouts/post.njk`

```html
---
layout: layouts/base.njk
templateClass: tmpl-post
---

<p><a href="{{ '/' | url }}">Back home</a></p>
<hr />
<h1>{{ title }}</h1>

{{ content | safe }}
```

We extend the base template again and add an essential back to home button.

Then we show the title of this blog post and the content.

Now, let's go back to our `index.njk` file and change it to the following:

```html
---
layout: layouts/home.njk
---

<h1>Latest posts</h1>

{% set postslist = collections.posts %} {% include "postslist.njk" %}
```

As mentioned in the post files, we included a tag called `posts`, and here we are getting those collections called `posts`!

> You can also use `collections.all` to get ALL collections.

Now let's make the actual `postlist.njk`

```html
<ul>
  {%- for post in postslist -%}
  <li><a href="{{ post.url }}">{{ post.url }}</a></li>
  {%- endfor -%}
</ul>
```

Here we loop through our post list and create a URL to that specific post.

Now rerun the following command:

```bash
npx eleventy --serve
```

Yes!

We now have our working **11ty blog**. Let's work from here and make it more awesome!

You can find this project on [Github here](https://github.com/rebelchris/eleventy-demo/releases/tag/1.0).

See how we can [host this blog on Netlify](https://daily-dev-tips.com/posts/hosting-a-static-blog-on-netlify/).

Want to learn how to [add a page to this blog](https://daily-dev-tips.com/posts/adding-pages-to-eleventy/)?

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
