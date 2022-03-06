---
layout: ../../layouts/Post.astro
title: 'Laravel basic API routes'
metaTitle: 'Laravel basic API routes'
metaDesc: 'Learn how easy it is to create an API in Laravel'
image: /images/05-04-2021.jpg
date: 2021-04-05T03:00:00.000Z
tags:
  - php
---

Laravel itself already comes with API routes out of the box. In today's article, I will demonstrate some basic usage with no authentication.

In a later stage, we will look into securing our API routes.

The goal for today is to publicly call a book endpoint and retrieve all our books.
We would also like to add a book.

> This will not be behind an authentication layer for now.

## Registering the API routes

In Laravel, we can register our API routes inside the `routes/api.php` file. All routes in here will be prefixed with `API`.

We could add all our routes manually like this:

```php
Route::get('books', 'BookController@index');
Route::post('books', 'BookController@store');
```

However, Laravel comes with another handy technique that allows us to create a resource controller.

And the best part, we can even generate it.

```bash
php artisan make:controller BookController --resource --model=Book
```

This will create a resource controller for our book model.
A resource controller comes with the following routes out of the box.

| Method    | URL           | Action  | Route name    |
| --------- |---------------| ------- | ------------- |
| GET       | `/books`      | index   | books.index   |
| POST      | `/books`      | store   | books.store   |
| GET       | `/books/{id}` | show    | books.show    |
| PUT/PATCH | `/books/{id}` | update  | books.update  |
| DELETE    | `/books/{id}` | destroy | books.destroy |

And we can register all these routes in our API route file by just including this one line.

```php
Route::resource('books', BookController::class);
```

## Returning collection data in our API controller

Now that our endpoints are working, we need to fill them so they will actually return data.

Let's first start by creating a resource.
Resources are a great way to talk between our model and API response.

```bash
php artisan make:resource BookResource
```

Once that is created, head over to the `BookController.php` and change the index function to the following.

```php
public function index()
{
    $books = Book::paginate();
    return BookResource::collection($books);
}
```

Let's see if it works in Insomnia/Postman.

![Testing our API response](https://cdn.hashnode.com/res/hashnode/image/upload/v1617259695834/dptfoS_Pc.png)

And it works!
Now we can fill in the rest of the actions.

The show function will just return one book.

```php
/**
 * Display the specified resource.
 *
 * @param  \App\Models\Book  $book
 * @return \Illuminate\Http\Response
 */
public function show(Book $book)
{
	return new BookResource($book);
}
```

As for creating a new book, we can use the following:

```php
public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'year' => 'required|integer'
    ]);

    $book = Book::create($validated);
    return new BookResource($book);
}
```

The validator is a super cool Laravel function that can do quite extensive validation.

Let's see what happens when we use the wrong request.

![Laravel Validation](https://cdn.hashnode.com/res/hashnode/image/upload/v1617260390048/OB75twXM_.png)

Cool right!
However, we still get an error if we fill it out now.

"message": "Add [title] to fillable property to allow mass assignment on [App\\Models\\Book].",

That is because the title and year are not fillable on our model.
Open up the Book model file and add the following.

```php
protected $fillable = ['title', 'year'];
```

If we now post again, we should add a book and get that book as our response.

![Laravel API create new entity](https://cdn.hashnode.com/res/hashnode/image/upload/v1617260566393/ztDqgSvNi.png)

With this create function, we can simply create the update function.
That will update a book based on its ID.

```php
public function update(Request $request, Book $book)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'year' => 'required|integer'
    ]);

    $book->update($validated);
    return new BookResource($book);
}
```

![Update entity Laravel API](https://cdn.hashnode.com/res/hashnode/image/upload/v1617260736894/K2SPVOfP0.png)

The last function we need is the one to delete a book.
We should be able to delete a book based on its ID as well.

```php
public function destroy(Book $book)
{
    $book->delete();
    return response(null, Response::HTTP_NO_CONTENT);
}
```

And that's it. We now have our basic API controller. Built-in no time and hardly did any difficult custom stuff.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
