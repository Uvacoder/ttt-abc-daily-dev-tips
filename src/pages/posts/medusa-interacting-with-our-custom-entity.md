---
layout: ../../layouts/Post.astro
title: 'Medusa interacting with our custom entity'
metaTitle: 'Medusa interacting with our custom entity'
metaDesc: 'Interacting with our custom entity in medusa, create and list records'
ogImage: /images/02-10-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/bc1d59a8-9a43-48b3-7c7f-d9fe99732300
date: 2022-10-02T03:00:00.000Z
tags:
  - webshop
---

Now that we have our [custom entity](https://daily-dev-tips.com/posts/creating-custom-entities-in-medusa/) set up and ready to go, let's see how we can interact with it.

In this article, we'll learn how to create a new record for this custom entity and how we can list all active items in the database.

## Creating the repository

The first thing we'll need to create is a new repository that can interact with our model.

Create a new folder called `repositories`; inside, create the `post.ts` file.

```js
import { EntityRepository, Repository } from 'typeorm';

import { Post } from '../models/post';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {}
```

This file extends the typeORM functionality for repositories so we can interact with the entity.

## Creating the service

As we learned before, services are the logic for medusa, so let's create a new custom service we'll call `post.js`.

On the basis, we'll need to construct the elements we need.

```js
import { TransactionBaseService } from '@medusajs/medusa';

class PostService extends TransactionBaseService {
  constructor({ postRepository, manager }) {
    super({ postRepository, manager });

    this.postRepository = postRepository;
    this.manager_ = manager;
  }
}

export default PostService;
```

Then we'll move on to adding the two functions we'll need.
First up is the create function to add new records.

```js
class PostService extends TransactionBaseService {
  async create(name) {
    const postRepository = this.manager_.getCustomRepository(
      this.postRepository
    );
    const post = await postRepository.create({ name: name });
    return await postRepository.save(post);
  }
}
```

Here we have the `create` function that accepts one param and will invoke the `create` function of typeORM on this entity.
Then we'll save the newly created entity.

Because we used `BeforeInsert` on our entity it will auto create a new ID for each item.

The second function we'll want is the list function to list all posts in our database.

```js
class PostService extends TransactionBaseService {
  async list() {
    const postRepository = this.manager_.getCustomRepository(
      this.postRepository
    );
    return await postRepository.find();
  }
}
```

And that's it for our service.

## The routes

The last part is to create some routes to interact with this service.

I'll be using the `api/index.js` file for this.

Let's start with the creation of the new record. For this, we'll need to enable the body parser so we can accept data.

```js
import { Router } from 'express';
import bodyParser from 'body-parser';

export default () => {
  const router = Router();

  router.post('/store/post', bodyParser.json(), async (req, res) => {
    const postService = req.scope.resolve('postService');
    const { name } = req.body;
    if (!name) {
      res.status(400).json({
        msg: 'Name not supplied.',
      });
      return;
    }
    const post = await postService.create(name);
    console.log(post);
    res.json({ msg: 'Post created', id: post.id });
  });

  return router;
};
```

This method will retrieve our custom post service and extract the name property from the sending body.
We'll notify the user with a 400 status if it's not there.

Let's see what happens if we post to this route now.

![Create new record medusa](https://cdn.hashnode.com/res/hashnode/image/upload/v1663828206794/RQluGY1_v.png)

Else, we'll invoke the create function we just added.

Let's move on to the list function.

```js
router.get('/store/post', async (req, res) => {
  const postService = req.scope.resolve('postService');
  res.json(await postService.list());
});
```

And that's it. You can now get the records:

![List all records medusa](https://cdn.hashnode.com/res/hashnode/image/upload/v1663828231936/JrkMxwi46.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
