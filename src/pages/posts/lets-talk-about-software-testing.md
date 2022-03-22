---
layout: ../../layouts/Post.astro
title: "Let's talk about software testing"
metaTitle: "Let's talk about software testing"
metaDesc: 'What is software testing and which types are there?'
image: /images/31-03-2022.jpg
date: 2022-03-31T03:00:00.000Z
tags:
  - testing
---

Software testing seems to be one of the most opinionated things in the software ecosystem.
Some people swear by it and only do TDD (test-driven development), while others wing it and see what happens.

I'm not here to tell you which one to pick, as it's personal and dependent on your time/project/and many more factors.

But let's take a look at what testing can do for you.

## Types of testing we'll look at

Before diving into this in-depth, let's look at which types of testing we'll be looking at.

- Manual vs. automated
- Unit testing
- Integration tests
- Functional tests
- End to End

Most of us will have at least done manual testing, which often means you create a system/feature and manually test different options to see if it works.

This is common regardless of the other tests you might have and is often needed to verify the initial product.

## Automated testing

But we can enhance these manual tests by introducing automated tests. The significant part about these is that they are created once run forever.
It means it initially takes us some setup time, but we can keep running them and see no regression or bugs were introduced.

In the automated section, we have many different approaches to testing.

I won't be going over all of them, so here are some well-used ones.

**Unit testing**
Unit tests are the simplest form of automated tests. They are super low level and test a "unit", which can be one function, one component, or even one interaction.
The idea is to have them as small and quick as possible so we can test many small tests relatively fast and cheap.

**Integration tests**
These are used to test integrations with external factors, such as your database, user system, or external APIs.
They often require mocks of these external systems and are considered heavier to run.

**Functional tests**
These are kind of enhancements to the integration tests, where integrations only care about data coming from a connection.
Functional tests take it one step further and want the data to display correctly.

So an example could be:

- API returns users (Integration test)
- API returns users and renders them in a table (Functional test)

**End to end tests**
This kind of testing is there to validate user flows. We want to verify a user flows through a program correctly.
This can even include loading states, disabling a button, and showing a result from a form.
These tests are super valuable and quite expensive as they take a lot of resources and take longer to set up.

## There are more

There are many more types of testing, and depending on your needs, they might be even more important.

However, for this basic introduction, I want to leave it here.
Do let me know what your favorite combination of tests is and how you go about automating it.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
