---
layout: ../../layouts/Post.astro
title: 'Laravel seeding the database'
metaTitle: 'Laravel seeding the database'
metaDesc: 'Seeding our database in Laravel using Laravel seeders and factories'
ogImage: /images/03-04-2021.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/c8a30ed9-6187-47b8-1060-d4628c017300
date: 2021-04-03T03:00:00.000Z
tags:
  - php
---

Yesterday we made our first database, and another cool function of Laravel is the option to seed it.

The default installation comes with a basic `database/seeders/DatabaseSeeder`.

This is a collection place to run specific seeders. For our one, we will create a separate new one.

## Creating the Laravel seeder

Let's first generate a new seeder for our newly created books table.

```bash
php artisan make:seeder BookSeeder
```

This will generate the `BookSeeder.php` file for us. Let's change the run function to create ten random books for us.

```php
public function run()
    {
    foreach (range(1, 10) as $index) {
        $year = rand(1700, 2020);
        DB::table('books')->insert([
            'title' => Str::random(10),
            'year' => $year,
        ]);
    }
}
```

To run this function, we need to make one adjustment in our main DatabaseSeeder file.

```php
public function run()
{
    $this->call([
        BookSeeder::class
    ]);
}
```

And then, we can run it by executing the following command.

```bash
php artisan db:seed
```

This creates ten random books, as shown in the image below.

![Laravel seeded database](https://cdn.hashnode.com/res/hashnode/image/upload/v1617085232847/MG9_V_FbB.png)

## Using the Laravel seeder with a Factory

As you saw above, that is one way of entering our database entries. Still, we can also make use of something called Model factories.
They are generally used when you need to enter large data sets.

Let's create a new factory for our Books model.

```bash
php artisan make:factory BookFactory
```

The Factory works on Models, so let's also create an empty Book model for now.

```bash
php artisan make:model Book
```

Then inside the BookFactory, we can set the model to be the Book model we just created.

```php
use App\Models\Book;

protected $model = Book::class;
```

And let's add some data for our definition.

```php
public function definition()
{
    return [
        'title' => $this->faker->realText(50),
        'year' => rand(1700, 2020),
    ];
}
```

This, again, will generate some random text for our titles and pick a random year.

Next up, we need to change our `BookSeeder.php` file.

```php
Book::factory()
    ->count(10)
    ->create();
```

This says to use the BookFactory to create ten entries.

If we now rerun our seeder, we should see another ten random entries.

![Laravel seeder with Factory](https://cdn.hashnode.com/res/hashnode/image/upload/v1617085921720/G6Rm2L7pL.png)

Pretty cool, right!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
