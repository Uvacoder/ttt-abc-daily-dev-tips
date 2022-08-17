---
layout: ../../layouts/Post.astro
title: 'React basics: explaining the useState hook'
metaTitle: 'React basics: explaining the useState hook'
metaDesc: 'How to use the useState hook in React'
image: /images/15-10-2021.jpg
date: 2021-10-15T03:00:00.000Z
tags:
  - react
---
Hooks are a superb way to store and manage state inside React components.

The useState hook is a super-easy way to maintain states efficiently.

## Declaring a new state

To use the hook, we first need to import it from React like so:

```js
import React, { useState } from 'react'
```

To use it, we can declare a new variable. Let's say we have a name variable.

```js
const [name, setName]  = useState(''); 
```

Let's expand a bit on the above code piece:

- `name`: The variable name, we can display it to the user like so `{name}`.
- `setName`: The setter function as we can't modify the name variable directly. 
- `useState('')`: The initial constructor, in this case, we set it to an empty string

You can set all kinds of default values some examples:

```js
const [count, setCount] = useState(10);
const [show, setShow] = useState(false);
const [books, setBooks] = useState([]);
const [car, setCar] = useState({});
```

As you see, the naming convention for the set function has to be the same as the variable but prefixed with `set`.

## Reading the state

As mentioned, it's super easy to use this state variable, as we can render it out or map it if it's an array.

```js
<p>Your name must be {name}</p>

{books.map((book) => (
	<Book />
))}
```

## Updating the state

When it comes to updating the state, let's take the number example for a second.

```js
const [count, setCount] = useState(10);
```

This will give us an initial value of 10. Let's then add a button that will invoke a function to add one each time we click it.

```js
function App() {
  const [count, setCount] = useState(10);

  return (
    <div className='App'>
      <p>The count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  );
}

export default App;
```

This is the most basic example, and it works. However, it might give us some issues.

Let's change this a bit to demonstrate an issue we might have.

```js
function App() {
  const [count, setCount] = useState(10);

  const addOne = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div className='App'>
      <p>The count is {count}</p>
      <button onClick={addOne}>Add one</button>
    </div>
  );
}

export default App;
```

Same thing as before, but now we are using a function to add a new count. And actually, call it twice.

Should we expect to see the number go up by two, right?
But this is not the case. Since React will take the initial value and has not been changed yet, it counts with that in the second call.

There is an easy way to fix this.
The setter function comes with a previous value argument we can use like so:

```js
setCount((prevValue) => prevValue + 1);
```

If we now change our code to look like this:

```js
function App() {
  const [count, setCount] = useState(10);

  const addOne = () => {
    setCount((prevValue) => prevValue + 1);
    setCount((prevValue) => prevValue + 1);
  };

  return (
    <div className='App'>
      <p>The count is {count}</p>
      <button onClick={addOne}>Add one</button>
    </div>
  );
}

export default App;
```

Now, we'll see the count increment by two each time we click!

I hope you had some fun learning about setState in React. I created this small playground for you to try out yourself.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="qBjeWMB" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/qBjeWMB">
  React Function Component Examples</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
