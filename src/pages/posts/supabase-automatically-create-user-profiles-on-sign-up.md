---
layout: ../../layouts/Post.astro
title: 'Supabase automatically create user profiles on sign up'
metaTitle: 'Supabase automatically create user profiles on sign up'
metaDesc: 'How can we automatically create a user profile on sign up using Supabase'
image: /images/12-12-2021.jpg
date: 2021-12-12T03:00:00.000Z
tags:
  - nextjs
---

We introduced a [social login to our Supabase login](https://daily-dev-tips.com/posts/nextjs-supabase-adding-a-github-login/) system. It's actually possible to automate the profile creation.

This is super cool, as most social providers already give us a username and profile image.

Let's take our existing GitHub login as an example and see how to automate the profile creation.

## Triggers and functions in Supabase

The cool part about Supabase is that it's Postgres based, and Postgres has this super cool feature called ["Triggers"](https://www.postgresql.org/docs/9.1/sql-createtrigger.html).

This means you can set a trigger for a specific action which action should happen.

Mix that with [Supabase functions](https://supabase.com/blog/2021/07/30/supabase-functions-updates), and we can trigger a function to create a profile on user creation. ✨

You can create these triggers and functions through the interface, but the easiest way is to run a SQL query.

![Supabase SQL interface](https://cdn.hashnode.com/res/hashnode/image/upload/v1638363774084/MklKxRVIF.png)

Open the query interface and run the following one.

```plsql
-- inserts a row into public.users
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, avatar_url)
  values (new.id, new.raw_user_meta_data ->> 'user_name', new.raw_user_meta_data ->> 'avatar_url');
  return new;
end;
$$;

-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

What we do here is create a new function called `handle_new_user`.

This function states that it should insert on the `public.profiles` table and add `id`, `username`, and `avatar_url`.
It takes the values from the `new` object, which refers to the item invoking this, which will be the `auth.users` one.

And then, we add the trigger which binds after each insert on the `auth.users` table to execute the function we just made.

Once you run this query, you can find them in your Supabase account under the database options.

![Supabase Triggers and Functions](https://cdn.hashnode.com/res/hashnode/image/upload/v1638363805748/m-est-gde.png)

I've modified my own started template to auto show the image on signup, and you can see this now gets pulled from the login.

![Enriched profile in Supabase](https://cdn.hashnode.com/res/hashnode/image/upload/v1638363905616/nNW7K0mru.png)

I found this super helpful, as it allows us to handle this on the database side and doesn't include new code for our application.

You can also use these functions and triggers for other purposes. Maybe you wish to update a count or invoke an external action.

What would you use them for?

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
