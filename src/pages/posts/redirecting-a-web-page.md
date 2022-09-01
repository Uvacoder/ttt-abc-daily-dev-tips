---
layout: ../../layouts/Post.astro
title: 'Redirecting a Web Page'
metaTitle: 'Redirecting a Web Page'
metaDesc: 'Exploring ways to redirect a web page'
image: /images/04-07-2020.jpg
date: 2020-07-04T03:00:00.000Z
tags:
  - html
  - javascript
  - php
---

Today we will look at the concept of redirecting a web page. We can use redirects for several purposes. Being but not limited to:

- changing domain [abc.com is now def.com]
- changing the page [page-a is now page-b]
- thank you page to homepage [/thanks to /] (mainly after x seconds)

There are many ways of doing this; we will cover a couple of examples in this article.

> Note: There are more ways of doing this than described in this article alone.

## HTTP Response Codes

In specific redirects, it's good to understand the different `HTTP Response Codes`; these are codes the browser sends back on a request. All response codes have a particular meaning:

- `200`: Means the page loaded, no issues found
- `404`: The page could not be found
- `2XX`: There is a wide range of `200` codes which all mean success
- `3XX`: For redirects, however we are interested in the several `300` codes:
- `301`: Moved Permanently, the page is moved to another page
- `302`: Moved Temporary, The page is moved only temporary

## HTML Redirects

This is by far the easiest and one of the most flexible options. I do use this to redirect after x seconds very often automatically.

We place a meta tag at the head of our document like this:

```html
<meta http-equiv="refresh" content="15; URL='http://ebsite.com/homepage'" />
```

As you can see, we can define the `content` attribute, which tells us to wait `15` seconds before redirecting to the homepage.

However, we can use `0` as an argument, which will directly redirect.

This is the easiest way; some browsers do not like this method. This means; the user can experience a flash before it redirects to the end page.

## JavaScript Redirects

Another way to redirect a page is using `JavaScript`.
It's as easy as using the `window` object.

```js
window.location = 'http://website.com/homepage';
```

There are multiple ways of doing this in `JavaScript`:

```js
window.location = 'http://website.com/home';
window.location.href = 'http://website.com/home';
window.location.assign('http://website.com/home');
window.location.replace('http://website.com/home');
```

Of course we can wrap this in a 15-second timeout if we would like to:

```js
setTimeout(function () {
  window.location = 'http://website.com/homepage';
}, 15000);
```

### HTAccess Redirects

A way that is mainly used for more permanent redirects or moving a whole subdomain or even domain is using the `.htaccess` file.
This file allows us to send the `HTTP Status Codes` as well.

```bash
Redirect 301 / http://xyz.com
Redirect 302 / http://xyz.com
```

Being said, we can match a whole section, for instance:

```bash
RedirectMatch 301 /blog(.*) http://xyz.com$1
```

This will redirect everything that starts with `blog` to xyz.com/blog/query.

## PHP Redirects

Even PHP can easily redirect to another web page:

```php
<?php
  header('Location: http://xyz.com', true, 301);
  exit;
?>
```

As you can see, we can define the `HTTP Status Code` again, if you leave this empty, the default value `302` will be used.

## And many more...

There are many more ways of redirecting; I've used all of the above in one way or another.
It depends on what your software is built on and what goal it should serve.

Other redirect methods:

- nginx
- ruby
- .net
- nodejs
- flash
- go
- etc...

Let me know in the comments what your preferred way of redirecting is.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
