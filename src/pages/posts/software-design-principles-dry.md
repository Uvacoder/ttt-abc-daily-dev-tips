---
layout: ../../layouts/Post.astro
title: 'Software design principles: DRY'
metaTitle: 'Software design principles: DRY'
metaDesc: 'Understanding the Dont Repeat Yourself principle'
image: /images/16-11-2020.jpg
date: 2020-11-16T03:00:00.000Z
tags:
  - developer
---

Today we'll be exploring a design principle called `DRY` it stands for `Don't Repeat Yourself`. Of course, a pretty obvious one, meaning you shouldn't type code more than once.

The principle states: "Every piece of logic must have a single unambiguous representation within a system".

Of course, we see fewer and fewer reused codes with the upcoming component-based frameworks.

## DRY Examples

I will demonstrate some simple use-cases, but they should give you a good understanding of what DRY means.

```js
const foods = ['🧀', '🌶', '🍉'];
const animals = ['🦞', '🐁', '🐕'];

revFoods = foods.reverse();
revAnimals = animals.reverse();
```

This is only a very simple function, but this can be converted to a DRY part:

```js
const foods = ['🧀', '🌶', '🍉'];
const animals = ['🦞', '🐁', '🐕'];

let reverse = (input) => {
  return input.reverse();
};

revFoods = reverse(foods);
revAnimals = reverse(animals);
```

Why would you do this?
Think of this code as a little bit more complicated, a full sorting function, and suddenly, the sorting key changes. You now have to make changes twice instead of doing it once.

Another good example is validations; this is where I personally fail sometimes.

```php
<?php
class Validator {
    public function validate(array $post)
    {
        if(!isset($post['title']) {
            throw new \Exception('validation failed, no title set');
        }
        if(!isset($post['date']) {
            throw new \Exception('validation failed, no date set');
        }
        if(!isset($post['description']) {
            throw new \Exception('validation failed, no description set');
        }
    }
}
```

While it's not specifically a violation, we could enhance this and make our lives easier if that exception ever changes.

```php
<?php
class Validator {

    private $validateAttributes = [
        'title',
        'date',
        'description'
    ];

    public function validate(array $post)
    {
        foreach ($this->validateAttributes as $attribute) {
        if (!isset($post[$attribute])) {
            throw new \Exception('validation failed, no '.$attribute.' set');
        }
    }
    }
}
```

There you go. I hope you learned something about not repeating yourself in code.

I am looking forward to hearing what kind of things you do that you could optimize?

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
