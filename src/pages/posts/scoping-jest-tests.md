---
layout: ../../layouts/Post.astro
title: 'Scoping Jest tests'
metaTitle: 'Scoping Jest tests'
metaDesc: "Let's take a look at how we can write isolated test scopes in Jest"
image: /images/05-04-2022.jpg
date: 2022-04-05T03:00:00.000Z
tags:
  - testing
---

So far, we only looked at tests executing on the highest level. All tests are basically in the same scope.

But Jest gives us the option to scope down. This can be super easy for recurring tests setup.

For instance, in the previous article, we learned about [Jest recurring actions](https://daily-dev-tips.com/posts/jest-and-recurring-actions/), which are prime examples of use for scoping.

## How to define scope in Jest

To define a scope in Jest, we can use the `describe` function to wrap all our tests.

```js
describe('user related actions', () => {
  test('Create new user', () => {
    expect(createUser('Chris', 'p4sSw0rD')).toBe(true);
  });

  test('Update user', () => {
    expect(updateUser(1, 'Chris new name')).toBe(true);
  });
});
```

Now, these two tests will run inside this scope, and besides it being nice to organize, we get some added benefits of this scope.

For instance, this scope can get its own recurring actions. These defined actions will only fire for this scope.
However, global scope-defined actions will also fire!

For instance, let's say we have a public database, but for one section, we want to apply a hobby database as well.

```js
beforeAll(() => {
  return createDatabase();
});

beforeEach(() => {
  return populateUsers();
});

afterEach(() => {
  return clearUsers();
});

afterAll(() => {
  return removeDatabase();
});

test('Add a new user', () => {
  expect(addUser('Chris')).toBe(true);
});

describe('hobby related tasks', () => {
  beforeEach(() => {
    return populateHobbies();
  });

  beforeEach(() => {
    return clearHobbies();
  });

  test('Add a new hobby', () => {
    expect(addHobby(1, 'Photography')).toBe(true);
  });
});
```

Let's run this code and see what gets called to see what happens.

- before all
- before each (global scope)
- user test
- after each (global scope)
- before each (global scope)
- before each (hobby scope)
- hobby test
- after each (hobby scope)
- after each (global scope)
- after all

As you can see, a complete riddle of executions, but it's essential to look at the `before each` and `after each` fire order.

The scope can also be used to define and overwrite variables that you might use.

For instance, we might have a different logged-in user for whom we want to write test cases.

```js
describe('user related tasks', () => {
  const loggedUser = 1;
  test('Add a new user', () => {
    console.log(`adding new user: ${loggedUser}`);
  });
});

describe('hobby related tasks', () => {
  const loggedUser = 2;
  test('Add a new hobby', () => {
    console.log(`adding new hobby for: ${loggedUser}`);
  });
});
```

As you can see, we define the `loggedUser` twice, and the output of this sequence would nearly be as expected:

- adding new user: 1
- adding new hobby for: 2

I hope this gives you an excellent first introduction to defining scoped test blocks.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
