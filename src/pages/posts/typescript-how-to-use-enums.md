---
layout: ../../layouts/Post.astro
title: 'TypeScript: How to use Enums'
metaTitle: 'TypeScript: How to use Enums'
metaDesc: 'What are Enums and how can we use them in TypeScript'
image: /images/28-02-2022.jpg
date: 2022-02-28T03:00:00.000Z
tags:
  - javascript
  - typescript
---

Before diving into Enums in TypeScript, let's take a second to look at what they are.

Enums are common in most popular programming languages, meaning they are a collection of constants.

Enums are great for defining constants that we often reuse and can't be any other than these set values.

Using Enums in TypeScript, we quickly gain the option to see what assignments are valid for that Enum.

## Declaring a Enum in TypeScript

To declare an Enum in TypeScript, we have to define the `enum` type with a name, much like how we define a [interface in TypeScript](https://daily-dev-tips.com/posts/typescript-types-and-interfaces/).

```js
enum Eeveelutions {
  Eevee,
  Vaporeon,
  Jolteon,
  Flareon,
  Espeon,
  Umbreon,
  Leafeon,
  Glaceon,
  Sylveon
};
```

We can then use this Enum throughout our code by using the following syntax:

```js
const basicPokemon = Eeveelutions.Eevee;
```

You might be wondering what this will return, right?

The default value for enums is numeric, so this would return 0 as enums start at zero.

But we can also define a different starting order:

```js
enum Eeveelutions {
  Eevee = 1,
  Vaporeon,
  Jolteon,
  Flareon,
  Espeon,
  Umbreon,
  Leafeon,
  Glaceon,
  Sylveon
};
```

Note that I only added an index on the first item. Everything else now shifts up from there as it will increment from there.

For instance:

```js
const basicPokemon = Eeveelutions.Eevee;
// 1
const Sylveon = Eeveelutions.Sylveon;
// 9
```

You can use any custom offset. Let's try it with ten and see what happens.

```js
enum Eeveelutions {
  Eevee = 10,
  Vaporeon,
  Jolteon,
  Flareon,
  Espeon,
  Umbreon,
  Leafeon,
  Glaceon,
  Sylveon
};
```

This will result in the following:

```js
const basicPokemon = Eeveelutions.Eevee;
// 10
const Sylveon = Eeveelutions.Sylveon;
// 18
```

However, you might sometimes want to give custom values to these enums.
We might want to assign the Pokemon's number as the value.

```js
enum Eeveelutions {
  Eevee = 133,
  Vaporeon = 134,
  Jolteon = 135,
  Flareon = 136,
  Espeon = 196,
  Umbreon = 197,
  Leafeon = 470,
  Glaceon = 471,
  Sylveon = 700
};
```

If we ask for specific Pokemon, we will return their respective Pokedex number.

```js
const basicPokemon = Eeveelutions.Eevee;
// 133
const Sylveon = Eeveelutions.Sylveon;
// 700
```

## Changing the value

The default is numeric, but we can assign other values to the Enum.

We can choose between:

- Numeric
- Computed
- String
- Heterogeneous

We've seen numeric in action.
Computed, I've never really had a use-case for, but you can use functions inside the declaration like this:

```js
const customSize = (input:number) => ( input * 10 )
enum Sizes {
  Base = 10,
  Medium = Base * 10,
  Large = Base * 10 * 100,
  Custom = customSize(12)
}
Sizes.Base;
// 10
Sizes.Large;
// 10000
Sizes.Custom;
// 120
```

It is possible, but I never had a good use case for it.

Then we get to string values, which is a standard option.
We want to have an enum that can be a specific string.

```js
enum RankType {
  Date = 'DATE',
  Popular = 'POPULAR'
}
RankType.Date;
// 'DATE'
RankType.Popular;
// 'POPULAR'
```

And the last one is heterogeneous, which means a mix of types, and to be honest, I would strongly urge you **not** to use this.

It would look something like this:

```js
enum RankType {
  Date = 1,
  Popular = 'POPULAR'
}
```

## So what happens to these Enums?

You might wonder how they will look once computed to JavaScript, right?

Let's look at the first example and see what will happen when compiling it to JavaScript.

```js
enum Eeveelutions {
  Eevee = 133,
  Vaporeon = 134,
  Jolteon = 135,
  Flareon = 136,
  Espeon = 196,
  Umbreon = 197,
  Leafeon = 470,
  Glaceon = 471,
  Sylveon = 700
};

const basicPokemon = Eeveelutions.Eevee;
console.log(basicPokemon);
const Sylveon = Eeveelutions.Sylveon;
console.log(Sylveon);
```

Now when compiling this, we generate the following JavaScript version of this script:

```js
var Eeveelutions;
(function (Eeveelutions) {
  Eeveelutions[(Eeveelutions['Eevee'] = 133)] = 'Eevee';
  Eeveelutions[(Eeveelutions['Vaporeon'] = 134)] = 'Vaporeon';
  Eeveelutions[(Eeveelutions['Jolteon'] = 135)] = 'Jolteon';
  Eeveelutions[(Eeveelutions['Flareon'] = 136)] = 'Flareon';
  Eeveelutions[(Eeveelutions['Espeon'] = 196)] = 'Espeon';
  Eeveelutions[(Eeveelutions['Umbreon'] = 197)] = 'Umbreon';
  Eeveelutions[(Eeveelutions['Leafeon'] = 470)] = 'Leafeon';
  Eeveelutions[(Eeveelutions['Glaceon'] = 471)] = 'Glaceon';
  Eeveelutions[(Eeveelutions['Sylveon'] = 700)] = 'Sylveon';
})(Eeveelutions || (Eeveelutions = {}));
var basicPokemon = Eeveelutions.Eevee;
console.log(basicPokemon);
var Sylveon = Eeveelutions.Sylveon;
console.log(Sylveon);
```

So basically, TypeScript converted it into a function that it can call to get the correct index.

You can make this more optimal by converting your enum into a const.

```js
const enum Eeveelutions {
  Eevee = 133,
  Vaporeon = 134,
  Jolteon = 135,
  Flareon = 136,
  Espeon = 196,
  Umbreon = 197,
  Leafeon = 470,
  Glaceon = 471,
  Sylveon = 700
};

const basicPokemon = Eeveelutions.Eevee;
console.log(basicPokemon);
const Sylveon = Eeveelutions.Sylveon;
console.log(Sylveon);
```

Now when we compile the TypeScript, we get the following output:

```js
var basicPokemon = 133; /* Eevee */
console.log(basicPokemon);
var Sylveon = 700; /* Sylveon */
console.log(Sylveon);
```

The code slimmed down a lot!
I hope you enjoyed the article. Let me know if you have any questions.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
