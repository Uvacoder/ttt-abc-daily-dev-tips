---
layout: ../../layouts/Post.astro
title: 'React props and components'
metaTitle: 'React props and components'
metaDesc: 'Lets add some props and components to our React app'
image: /images/11-04-2020.jpg
date: 2020-04-11T03:00:00.000Z
tags:
  - react
---

Yesterday we built [our first React app](https://daily-dev-tips.com/posts/our-first-react-application/), and while it's still fresh, let's dive deeper into `Components` and `Props`.

To recap, `React` is built as a component-based language. A lot of `components` make up a `React` app.

And `Props` are how we can make `Components` dynamic. `Props` cannot be changed, however.

## Creating a data set in React

Let's start building on the basic React app we created [yesterday](https://daily-dev-tips.com/posts/our-first-react-application/).

We will make multiple components in the main `App.js` file. In a best practice world, I would suggest moving components out into their files, but for now, it's visually better to work like this until we get the hang of `components`.

Let's start by adding a data source to our file, an array of people.

We can add this array under our `import` statements.

```js
const people = [
  {
    firstName: 'Chris',
    lastName: 'Bongers',
  },
  {
    firstName: 'Hub',
    lastName: 'Bongers',
  },
  {
    firstName: 'Sanne',
    lastName: 'Bongers',
  },
];
```

Nothing fancy, just 3 people from my household.

What we want to achieve here is to show this data in a `table` and add our own fantastic `component` to render some avatar for each person.

## Writing our first component in React

Now let's change our App function to the following:

```js
function App() {
  return <Table data={people} />;
}
```

Way more straightforward than the previous code, but this won't do anything and give errors.

React doesn't know what a `Table` element is... So let's create our first `component`: `Table`.

We pass our people JSON object into this `Component` and call it data this is the `Prop`.

Above this function, we will add the following snippet:

```js
const Table = ({data}) => (
  <table className={'table'} cellSpacing={0} cellPadding={0}>
    <tbody>
      {data.map((row, i) => {
        return <TableRow row={row} key={i} />;
      })}
    </tbody>
  </table>
);
```

We use `ES6` arrow functions, which is just a quicker way of writing a complete `function`.

This `component` is nothing fancy but returns an HTML `table` element.

Then it maps each row inside our data object (which we passed in our basic App `component`).

For each row in our data object, we then say return a `component` called `TableRow` and give it the `props` `row` and `key.`

- Note that `key` is not a prop we are passing through, but each unique list item or row item in `React` must have a unique identifier.

For our TableRow `component`, we use the following snippet:

```js
const TableRow = ({row}) => (
  <tr>
    <td>
      <Avatar person={row} />
    </td>
    <td>{row.firstName}</td>
    <td>{row.lastName}</td>
  </tr>
);
```

Again, you would say nothing fancy. It accepts `row` as a `prop` and returns an HTML `<tr>` with the rows firstName and lastName.

Then you see we added another `Component` called `Avatar`, and we give it a `prop` called `person`, which is our current row.

So let's look at how this `Avatar` `component` looks like

```js
const Avatar = ({person}) => {
  const {firstName, lastName} = person;
  let name = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

  return <div className={'avatar'}>{name}</div>;
};
```

I set up the Avatar `component` slightly differently to show you our options in `React`.

We deconstruct a new const `firstName` and `lastName` from the person object.

This is the same we did in the `TableRow` component as `row.firstName`.

Then we define a new variable called `name`. We get the first character off our firstName and convert it to uppercase. Then we do the same for the lastName.

We then return a `div` with a class `avatar` and pass the newly created variable `name` to it.

This will render a div with CB for our first contact Chris Bongers.

You can see a demo here:

<iframe
  src="https://codesandbox.io/embed/react-playground-i637i?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="React props and components"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

Feel free to download this part from [GitHub](https://github.com/rebelchris/React-starter/tree/props-and-components).

### Thank you for reading, and let's connect!

Let me know what React topics you would like to see in more depth and feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1).
