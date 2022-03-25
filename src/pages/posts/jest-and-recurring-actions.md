---
layout: ../../layouts/Post.astro
title: 'Jest and recurring actions'
metaTitle: 'Jest and recurring actions'
metaDesc: 'How to set up recurring actions for each test in Jest'
image: /images/04-04-2022.jpg
date: 2022-04-04T03:00:00.000Z
tags:
  - testing
---

Sometimes you want to have Jest perform a recurring action between each task.

Some examples:
Query a database, clear storage, clear mocked data, or reset a mocked route.

We don't really want to be bothered with having this recurring code in each test, and luckily Jest has a solution for us.

## Recurring actions

There are four functions we can hook into:

- `beforeEach`: Runs before each test
- `afterEach`: Runs after each test
- `beforeAll`: Runs before all tests
- `afterAll`: Runs after all tests

Let's sketch an example.
We have a database function to call, so the steps we want to achieve are:

- create database
- populate with mock data
- re-populate for each test
- remove database

This scenario is a perfect case for all four functions to hook into.

The first thing we want is to create our database, for which we'll use the `beforeAll` function.

```js
beforeAll(() => {
  return createDatabase();
});
```

The next step is to populate the database with demo data we can alter in our tests.

```js
beforeEach(() => {
  return populateDatabase();
});
```

Our test might alter/remove/create elements in this database, so we want to clear it between each test.

```js
afterEach(() => {
  return clearDatabase();
});
```

And once we are all done, we should remove the database so the next run will be fresh again.

```js
afterAll(() => {
  return removeDatabase();
});
```

And that's it, these four steps will now run at the needed times.
To showcase this, let's create this sample test file and see when each call is used.

```js
test('user database has Chris', () => {
  expect(db.user.hasName('Chris')).toBeTruthy();
});

test('user database doesnt have Thomas', () => {
  expect(db.user.hasName('Thomas')).not.toBeTruthy();
});
```

The firing order is as follows:

- `beforeAll`: Created the database
- `beforeEach`: Populates database
- Test 1 runs: Find user Chris
- `afterEach`: Clear database
- `beforeEach`: Populates database
- Test 2 runs: Can't find Thomas
- `afterEach`: Clear database
- `afterAll`: Remove database

And that's the flow it will take.

We can quickly make our test more manageable and work in specific ways to ensure each test is solid and fresh.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
