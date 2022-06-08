---
layout: ../../layouts/Post.astro
title: 'React basics: Looping a list'
metaTitle: 'React basics: Looping a list'
metaDesc: 'How to loop over an array in React'
image: /images/13-10-2021.jpg
date: 2021-10-13T03:00:00.000Z
tags:
  - react
---

In today's article for React basics, we'll enhance our [first ever React components](https://daily-dev-tips.com/posts/react-basics-creating-our-first-react-app/) with a list.

Yesterday we made some static book components like so:

```js
<Book title='Laravel collections' />
<Book title='Ruby for beginners' />
<Book title='CSS is awesome' />
```

However, that quickly becomes a struggle to maintain. So let's look at how we could dynamically load these books from a list.

## Creating a list in React

Open up your `App.js` and add a list like so above your app declaration.

```js
const books = [
  {
    id: 1,
    title: 'Laravel collections',
  },
  {
    id: 2,
    title: 'Ruby for beginners',
  },
  {
    id: 3,
    title: 'CSS is awesome',
  },
];

function App() {}
```

We can leverage the' map' function to render these elements in our React app.

```js
<Bookshelf>
  {books.map((book) => (
    <Book title={book.title} />
  ))}
</Bookshelf>
```

And this little piece of code will do the same thing as before.

## Keys in React

However, I made one big mistake in the example above.
When we render list items in React as we do above, we should always set a key property.
This key will help React identify which items change or should be removed.

To add the key, we can use the following code.

```js
<Book title={book.title} key={book.id} />
```

However, sometimes we do not have a key, so what do we do then?

Well, no worries, React comes with a built-in index we can use as the key.

```js
const numbers = [1, 2, 3];

{
  numbers.map((number, index) => <span key={index}>Number: {number}</span>);
}
```

As you can see, the index is available on the map function as the unique key for each element.

You can find this code on [GitHub](https://github.com/rebelchris/react-basics/tree/list).
I hope you enjoyed this article about loops in React.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
