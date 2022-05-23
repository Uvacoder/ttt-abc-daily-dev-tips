---
layout: ../../layouts/Post.astro
title: 'React basics: Passing data between components'
metaTitle: 'React basics: Passing data between components'
metaDesc: 'How to pass data between two components in React'
image: /images/14-10-2021.jpg
date: 2021-10-14T03:00:00.000Z
tags:
  - react
---

Passing data between components in React is a compelling concept.

In this article, we'll look at the following two things:

- Sending data from a parent to a child
- Sending data from a child to a parent

We'll need to use the [`useState` hook](https://daily-dev-tips.pages.dev/posts/react-basics-explaining-the-usestate-hook/) for this concept.

Our result for today will look like this:

<!-- ![React basics: Passing data between components](https://cdn.hashnode.com/res/hashnode/image/upload/v1633416020523/rI8ACJ_Nh.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/react-data_gvzszr.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/react-data_d0hcxb.mp4" type="video/mp4" />
</video>

## Sending data from a parent to a child component in React

The most effortless data flow in React is passing data top-down from parent to child components.

Let's use our current example as a starting point.

[Download the GitHub repo](https://github.com/rebelchris/react-basics/tree/list)

In this repo, we build a simple bookshelf with a couple of books.

In the last example, we looped our books, but we want to pass these books as objects.

We can pass them to our bookshelf by setting the params like so:

```jsx
<Bookshelf books={books}></Bookshelf>
```

Then all we need to do is change our bookshelf code to look like this:

```jsx
import Book from './Book';

export default function Bookshelf({ books }) {
  return (
    <div>
      {books.map((book) => (
        <Book title={book.title} key={book.id} />
      ))}
    </div>
  );
}
```

This separates our data a bit more; we can create multiple bookshelves with their own set of books now.

The cool part about doing this is that it can also be done on a specific action.

Let's head back to our `App.js` file and set a new state to show you what I mean by that.

```jsx
const [books, setBooks] = useState([]);
```

> Note we named this `books` as well, so rename the top data set as `booksData`.

Now we can add a button that `onClick` will load our books.

```jsx
<button onClick={() => setBooks(booksData)}>Load the books</button>
```

And there you go now our books are only loaded when we click the button.

## Sending data from a child to a parent component in React

Now that we can send data from our parent component to our child, let's see how it would work the other way around.

What we want to achieve is that we have an option to know which book was clicked.

However, for this approach, the parent component must have a way to receive this data.

Let's open up our `Bookshelf.js` code as this acts as our parent for the actual books.
Add a new state to keep track of the current book.

```jsx
const [currentBook, setCurrentBook] = useState('');
```

Then we can show the current book if it's set:

```jsx
{
  currentBook && <h1>Currently reading: {currentBook}</h1>;
}
```

And the last thing we want to do is pass the set function to our book component like this:

```jsx
<Book setCurrentBook={setCurrentBook} title={book.title} key={book.id} />
```

We need to accept this function as a parameter inside the book component.
And we can add an `onClick` handler to invoke this function and pass the title back.

```jsx
export default function Book({ title, setCurrentBook }) {
  return <div onClick={() => setCurrentBook(title)}>{title}</div>;
}
```

There you go. We can now bind data in two ways.
From parent to child, and the other way around.

You can find the complete code on [GitHub](https://github.com/rebelchris/react-basics/tree/data).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
