---
layout: ../../layouts/Post.astro
title: 'HTML Input multiple attribute'
metaTitle: 'HTML Input multiple attribute'
metaDesc: 'How does the multiple attribute on input fields in HTML work?'
image: /images/30-01-2021.jpg
date: 2021-01-30T03:00:00.000Z
tags:
  - html
---

Did you know there is a multiple attribute for HTML input fields?

If you ever worked with a file upload, you might know why you want this, but it even works on email fields!

Today I will show you how it works and why you can benefit from it.

Try out the multiple attribute in this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="oNzrwBp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML Input multiple attribute">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/oNzrwBp">
  HTML Input multiple attribute</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

The syntax for the multiple attribute is straightforward. It's enough to add the word to an input:

```html
<input type="{file/email}" multiple />
```

## Making an HTML file input accept multiple files

The most common use case for the `multiple` attribute is to use if on a `<input type="file">`, adding the multiple attributes to this will ensure that the user can select multiple files in one go.

The syntax will look like this:

```html
<input type="file" name="files" multiple />
```

This will allow us actually to select multiple files in the file picker.

![HTML Input file multiple](https://cdn.hashnode.com/res/hashnode/image/upload/v1611554716453/x01O6tMv7.png)

However, if you want to receive them on a backend you need also to adjust the name to reflect an array.

```html
<input type="file" name="files[]" multiple />
```

This will ensure our backend will receive them in an array way instead of just the first selected file.

In `PHP`, for instance, we would get the following.

```php
['files'] = [
 [
	 "name" => [
		 "24-01-2021.jpg",
		 "25-01-2021.jpg"
	 ],
	 "type" => [
		 "image/jpeg",
		 "image/jpeg"
	 ],
	 "tmp_name" => [
		 "/private/var/random_path",
		 "/private/var/random_path",
	 ]
	 "size" => [
		 255650,
		 326338,
	 ]
 ]
]
```

This will of course, differ for each backend language that you are using.
At least you know it will arrive as an array of values.

## Making an HTML email input accept multiple email addresses

Another great use-case for the multiple attribute is the email type.

By default, this type can check for emails on a form, but did you know we can enable it to accept multiple emails?

```html
<input type="email" multiple />
```

The input expects email addresses with comma-separated values as:

```js
// info@daily-dev-tips.com, email2@daily-dev-tips.com
```

I will be showing you how the default Chrome browser validation parses this.

First of all, let's try an input without this multiple attribute.

![Email non mulitple](https://cdn.hashnode.com/res/hashnode/image/upload/v1611555840890/Rgg0bZRzr.png)

As you can see, the validation will state that the comma is not correct if we don't enable the multiple attribute.

Now let's try adding the multiple attribute, but type the email wrong.

![Email second address wrong](https://cdn.hashnode.com/res/hashnode/image/upload/v1611555962305/XRToxz6pJ.png)

As you can see above, it now accepts the second email but states it's wrong.

We can even make a mistake in the first email, and it will pick up on that.

![HTML Multiple email missing @](https://cdn.hashnode.com/res/hashnode/image/upload/v1611556036172/aub0G7bjs.png)

> Note: Seeing this all works, we can of course, also leverage the JavaScript validation engine in the same way!

## Browser Support

The HTML Multiple attribute has outstanding support. It won't work in some mobile browsers and IE9.

![HTML Multiple attribute browser support](https://caniuse.bitsofco.de/image/input-file-multiple.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
