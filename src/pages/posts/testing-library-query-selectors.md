---
layout: ../../layouts/Post.astro
title: 'Testing library query selectors'
metaTitle: 'Testing library query selectors'
metaDesc: 'A first look at query selectors in testing library'
image: /images/12-04-2022.jpg
date: 2022-04-12T03:00:00.000Z
tags:
  - testing
---

Today we'll look into testing library. This is a set of packages to help you test UI components from a user perspective.

We already have it available in our [React tests](https://daily-dev-tips.com/posts/adding-jest-to-react/). (Follow this article to get started)

We have to keep in mind that this library is mainly a selector library, meaning it can be used to query certain elements.
It's not bound to a specific framework or testing library.

For instance to query something by text:

```js
const defaultText = screen.getByText(/The counter is now on/g);
```

However, we still need Jest to make sure what we retrieved with testing library is true.

```js
expect(defaultText).toBeInTheDocument();
```

## Query selectors in testing library

A big part of testing library is its ability to use query selectors. You can even see the one above here in the example.

They are a way to find elements in the DOM quickly, and we can use the following types:

- `get`
- `find`
- `query`

The main difference is how they query and whether to throw an error or await for something.

And then, each of these has the option to define whether we want one or multiple elements.
You can define this by either using `By` or `AllBy` behind your selector.

Let's say we want to use single element selectors:

- `getBy`
  - Nothing found? It will throw an error
  - 1 element found, returns the element
  - More found? Throw an error
- `findBy`
  - Nothing found? It will return null
  - 1 element found, returns the element
  - More found? Throw an error
- `queryBy`
  - Nothing found? It will throw an error
  - 1 element found, returns the element
  - More found? Throw an error

So basically, `getBy` and `queryBy` do the same thing. There is just one major difference.
`findBy` will return a promise so that we can await this.

For multiple elements, it's the same. However, instead of returning the element, it returns an array of elements.

## Types of queries

Now that we know how to query, we can dive into the types of queries we can use.

**ByRole**

We can use the `ByRole` selector to find elements with a specific role in the DOM, for instance, if we want to query a button.

```js
const button = screen.getByRole('button');
```

**ByLabelText**

The `ByLabelText` query can find labels with specific text.

For instance if we have the following HTML setup:

```html
<label>Name</label>
```

We can use the following query to select this:

```js
const label = screen.getByLabelText('Name');
```

**ByPlaceholderText**

Much like the above, we can use this to query elements with a specific placeholder value:

```js
const placeholder = screen.getByPlaceholderText('Enter your email');
```

**ByText**

This is a commonly known text selector we have used in [previous articles](https://daily-dev-tips.com/posts/adding-jest-to-react/).
It can be used to query for text elements in the dom, and it's super powerful as it can leverage regular expressions.

```js
const defaultText = screen.getByText(/The counter is now on/g);
const defaultText = screen.getByText('The counter is now on 0');
// etc
```

**ByDisplayValue**

As the name suggests, this one can be used to query elements by their current displayed value.

For instance having the following HTML:

```html
<input type="text" id="lastName" value="Bongers" />
```

We can query this element like this:

```js
const value = screen.getByDisplayValue('Bongers');
```

**ByAltText**

`ByAltText` is a quick test case for finding elements with specific alt tags.

```js
const alt = screen.getByAltText('my amazing photo');
```

**ByTitle**

A not so commonly known selector to target elements with a `title` attribute.

```html
<i title="Delete"><Icon /></i>
```

```js
const title = screen.getByTitle('Delete');
```

And then there is `ByTestId`, but we'll go into more details on that one in the following article.

## Conclusion

I hope you learned something new about the types of query selectors and how to use each one of them.

Please keep a lookout for the upcoming articles as we dive even more into testing.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
