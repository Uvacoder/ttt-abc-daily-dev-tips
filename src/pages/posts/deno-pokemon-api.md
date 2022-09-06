---
layout: ../../layouts/Post.astro
title: 'Deno Pokemon API'
metaTitle: 'Deno Pokemon API'
metaDesc: 'Building a basic Pokémon API in Deno'
image: /images/09-08-2020.jpg
date: 2020-08-09T03:00:00.000Z
tags:
  - deno
---

Today I wanted to dive deeper into [Deno](https://daily-dev-tips.com/posts/getting-started-with-deno/) and see how a fundamental file API would look. To get a better feel for the Deno.

We are going to build a Pokémon API; We'll be able to do the following actions:

- Retrieve a list of all our Pokémon
- Catch a new Pokémon
- Level up a Pokémon
- Release a Pokémon back to the wild

> Please note this uses local storage and is not connected to a Database!

## Deno API

We will be using the `oak` module (see the Pokémon reference?) and import the Application and Router object:

```js
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
```

Next up, we start by defining our variables:

```js
const env = Deno.env.toObject();
const PORT = env.PORT || 3000;
const HOST = env.HOST || '127.0.0.1';
```

Now we have to start our Oak application and run it.

```js
// Define our router
const router = new Router();
// Define all our routes
router
  .get('/pokemon', getPokemons)
  .get('/pokemon/:name', getPokemon)
  .post('/pokemon', catchPokemon)
  .put('/pokemon/:name', levelUpPokemon)
  .delete('/pokemon/:name', releasePokemon);

// Define our application
const app = new Application();

// Tell the application to use our defined routes
app.use(router.routes());
// We do have to allow all methods since Deno is a secure environment
app.use(router.allowedMethods());

// And we'll start our app on the defined port and address
await app.listen(`${HOST}:${PORT}`);
```

That's our setup, but we now have to go and define all methods!

### Deno Declaring our Interface

Before defining our methods, we must declare our Pokémon interface and basic Pokémons.

```js
interface Pokemon {
  name: string;
  level: number;
}

let pokemons: Array<Pokemon> = [
  {
    name: 'Pikachu',
    level: 10,
  },
  {
    name: 'Eevee',
    level: 50,
  },
  {
    name: 'Snorlax',
    level: 20,
  },
];
```

Extraordinary now, we can start and build our methods. Let's start by making our get function:

### Deno Getting All Pokémon

`GET: /pokemon`

```js
export const getPokemons = ({ response }: { response: any }) => {
  response.body = pokemons;
};
```

Easy as that, on the request, we return the response of our Pokemon, and it will look like this:

![Get all Pokémon](https://dev-to-uploads.s3.amazonaws.com/i/nr9lmeffzv4f98owd8nl.png)

### Deno Get Specific Pokémon

Ok, but what if we want to get one specific Pokémon based on their name?

`GET: /pokemon/Pikachu`

```js
export const getPokemon = ({
  params,
  response,
}: {
  params: {
    name: string,
  },
  response: any,
}) => {
  const pokemon = pokemons.filter((pokemon) => pokemon.name === params.name);
  if (pokemon.length) {
    response.status = 200;
    response.body = pokemon[0];
    return;
  }

  response.status = 400;
  response.body = { msg: `Cannot find pokemon ${params.name}` };
};
```

Here we are listing to the params name and filtering our Pokémons array. If none is found, we will return that we can't find the Pokémon.

![Get single Pokémon](https://dev-to-uploads.s3.amazonaws.com/i/gz7pafqgrwh7wnyawu5b.png)

### Deno Catch a Pokémon

But we are proper Pokémasters, and we want to catch a Charizard!

`POST: /pokemon`

```js
export const catchPokemon = async ({
  request,
  response,
}: {
  request: any,
  response: any,
}) => {
  const body = await request.body();
  const { name, level }: { name: string, level: number } = body.value;
  pokemons.push({
    name: name,
    level: level,
  });

  response.body = { msg: 'OK' };
  response.status = 200;
};
```

We will post the name and level of the Pokémon to add it to our local storage.

![Catch Pokémon](https://dev-to-uploads.s3.amazonaws.com/i/9icvm3zqn6bwjkkkfrmb.png)

### Deno Level Up a Pokémon

Of course, we are perfect trainers, and our Eevee will level up!

`PUT: /pokemon/Eevee`

```js
export const levelUpPokemon = async ({
  params,
  request,
  response,
}: {
  params: {
    name: string,
  },
  request: any,
  response: any,
}) => {
  const temp = pokemons.filter((pokemon) => pokemon.name === params.name);
  const body = await request.body();
  const { level }: { level: number } = body.value;

  if (temp.length) {
    temp[0].level = level;
    response.status = 200;
    response.body = { msg: 'OK' };
    return;
  }

  response.status = 400;
  response.body = { msg: `Cannot find pokemon ${params.name}` };
};
```

![Pokémon level up](https://dev-to-uploads.s3.amazonaws.com/i/6y348f1p2q7xnw9rkr1p.png)

### Deno Releasing a Pokémon

There comes a time when you must let go of some Pokémon to release them back in the wild.

`DELETE /pokemon/snorlax`

```js
export const releasePokemon = ({
  params,
  response,
}: {
  params: {
    name: string,
  },
  response: any,
}) => {
  const lengthBefore = pokemons.length;
  pokemons = pokemons.filter((pokemon) => pokemon.name !== params.name);

  if (pokemons.length === lengthBefore) {
    response.status = 400;
    response.body = { msg: `Cannot find pokemon ${params.name}` };
    return;
  }

  response.body = { msg: 'OK' };
  response.status = 200;
};
```

![Release Pokémon](https://dev-to-uploads.s3.amazonaws.com/i/1ozudiotkb4uki41ro4d.png)

I hope you found this helpful tutorial!
You can find this project on [GitHub](https://github.com/rebelchris/deno/tree/pokemon).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
