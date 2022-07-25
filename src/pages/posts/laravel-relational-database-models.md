---
layout: ../../layouts/Post.astro
title: 'Laravel relational database models'
metaTitle: 'Laravel relational database models'
metaDesc: 'Defining relationships between models in Laravel'
image: /images/04-04-2021.jpg
date: 2021-04-04T03:00:00.000Z
tags:
  - php
---

By now, we [created a database in Laravel](https://daily-dev-tips.com/posts/laravel-creating-our-first-database-table/), and made our [first seeder](https://daily-dev-tips.com/posts/laravel-seeding-the-database/). Another great next step is to look into relational models.

So far, we have created a book model. Let's say we are going to introduce a category.
Each book will belong to one category, and a category can have many books.

Thinking in this way will help you determine which connection you will need.
[Laravel does a super good way of documenting these](https://laravel.com/docs/8.x/eloquent-relationships).

## Creating the category

First, start creating a model and database by running the following command.

```php
php artisan make:model Category --migration
```

This will make a category model and create the migration for it.

Modify the migration to look like this.

```php
Schema::create('categories', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->timestamps();
});
```

Then we also need to add the link to our book table.
Now there are two ways of doing this.

1. Altering the migration we had
2. Writing a new migration that will add this relation

Generally, I like to keep my migrations clean if they have no real-life data. If that is the case, do write a specific new migration.

In this case, since we are creating the relationship later, we can include the book change.
This is what the total migration will look like.

```php
Schema::create('categories', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->timestamps();
});
Schema::table('books', function (Blueprint $table) {
    $table->unsignedBigInteger('category_id')->nullable();
    $table->foreign('category_id')->references('id')->on('categories')->onDelete('set null');
});
```

That adds a relation from the book database to the category database.

Don't forget the add the down function!

```php
Schema::dropIfExists('categories');
Schema::table('book', function (Blueprint $table) {
    $table->dropForeign(['category_id']);
    $table->dropColumn('category_id');
});
```

## Defining the relationships in the models

It is fantastic, and the database can click through, but the real magic now comes in the models.

Let's start by altering the book model.
As mentioned in the intro, one book will belong to one category.

```php
class Book extends Model
{
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
```

That tells the book it belongs to a category. Laravel will do all of the magic for us from here.

Now on the category side, we have to say one category can have many books.

```php
class Category extends Model
{
    public function books()
    {
        return $this->hasMany(Book::class);
    }
}
```

And that is all you need to make relations between models.

Let's run a new migration since we altered our existing migration.

```bash
php artisan migrate:fresh --seed
```

I've added some demo data so you can see the relations work.

![Laravel relationships](https://cdn.hashnode.com/res/hashnode/image/upload/v1617173112625/r5fbxEsV2.gif)

Can you create a seeder for the category part?
You can look at how I created the [Book seeder in Laravel](https://daily-dev-tips.com/posts/laravel-seeding-the-database/).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
