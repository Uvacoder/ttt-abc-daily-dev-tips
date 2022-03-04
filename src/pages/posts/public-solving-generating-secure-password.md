---
layout: ../../layouts/Post.astro
title: "Public Solving: Generating secure password"
metaTitle: "Public Solving: Generating secure password"
metaDesc: 'Generating unique password with different options in JavaScript'
image: /images/22-12-2021.jpg
date: 2021-12-22T03:00:00.000Z
tags:
  - devadvent
  - javascript
---
Santa's head elf is one of those old-school dudes who creates passwords from the top of his head instead of using a [password manager](https://daily-dev-tips.com/posts/top-5-password-managers-for-mac/).

The board of elves has asked us to create a password generator to help the head elf come up with unique and secure passwords.

And they came to the right place!

[You can find the complete puzzle here.](https://github.com/devadvent/puzzle-11)

## Thinking about the problem

Before we can dive into the solution, let's see what we have to work with.

There are two parameters the function should take:

1. **Length**: The length of the password
2. **Options**: Certain options the password should include, see below:

The options are as follows:

- `lowercase`: Lowercase letters (a-z)
- `uppercase`: Uppercase letters (A-Z)
- `numbers`: Numbers (0-9)
- `specialCharacters`: Special characters (only `!@#$%^&*()`)

Knowing this, we should be able to help the elves.

Two side notes are essential and will help us:

- We should throw an error if no options are passed
- When the length of the option is longer than the length we should also throw an error

## Creating a JavaScript password generator

Alright, let's get right into it.

The first thing I did, check the two errors we should throw.
Since the options are an object, and we want to check the length, I've converted it with `Object.keys`.
This will convert it into an array.

```js
const optionKeys = Object.keys(options);
if (!optionKeys.length) throw Error('NOT_ENOUGH_OPTIONS');
if (length < optionKeys.length) throw Error('PASSWORD_TOO_SHORT');
```

That will make sure the errors are thrown when needed.

Then I've decided to create a new object with the option values.

```js
const optionValues = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  specialCharacters: '!@#$%^&*()',
  get uppercase() {
    return this.lowercase.toUpperCase();
  },
};
```

You can see all the alphabetic characters defined in the lowercase property, all numbers, and the special characters.
For the uppercase version, I've decided to use a function to leverage our existing input.

> Note: The keys here match the option keys we should support.

Since we want to mix a random password with the options, I want to loop over each option and get a random number from that option.

We can check the main password length with a basic while loop like so.

```js
let password = '';
while (password.length < length) {
	// password += 'SOMETHING';
}
```

This will loop until the length of the password is long enough.

As mentioned above, I want to use an equal number of options for each password. 
So I've decided to use a [`for...of` loop](https://daily-dev-tips.com/posts/javascript-basics-loops/#heading-javascript-for...of-loop). I've chosen this particular loop because we can break out of it.

We need to break out of it because we could push too many letters.

For example, we want to generate a 3 character password with 2 options.
The while loop will fire 2 times, and the options will loop 2 times as well, meaning we get a 4 character password.

```js
while (password.length < length) {
	for (let option of optionKeys) {
	  if (password.length >= length) break;
	  // Add a character
	}
}
```

As you can see, I break the loop if we hit the length inside the for loop.

Now we just need to grab a random character for the current looped option and add it to the password.

```js
password += optionValues[option][Math.floor(Math.random() * optionValues[option].length)];
```

Some things to note:

- optionValues[option] refers to our option value object, and picks the current option
- `Math.floor(Math.random() * optionValues[option].length)` picks a random item from the current option array

With this in place we finished our function, so it looks like this:

```js
export const generatePassword = (length, options = {}) => {
  const optionKeys = Object.keys(options);
  if (!optionKeys.length) throw Error('NOT_ENOUGH_OPTIONS');
  if (length < optionKeys.length) throw Error('PASSWORD_TOO_SHORT');
  let password = '';
  while (password.length < length) {
    for (let option of optionKeys) {
      if (password.length >= length) break;
      password += optionValues[option][Math.floor(Math.random() * optionValues[option].length)];
    }
  }
  return password;
};
```

One last thing, the test should turn green.

![Passing all coding tests](https://cdn.hashnode.com/res/hashnode/image/upload/v1639233893230/AbGJQ-M0e.png)

And yes, we did it!

I'm always looking forward to hearing what you would have done differently and why.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
