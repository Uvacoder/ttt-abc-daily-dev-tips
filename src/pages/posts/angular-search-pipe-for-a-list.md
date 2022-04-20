---
layout: ../../layouts/Post.astro
title: 'Angular search pipe for a list'
metaTitle: 'Angular search pipe for a list'
metaDesc: 'Adding a angular search pipe to filter a list of items'
image: /images/11-01-2021.jpg
date: 2021-01-11T03:00:00.000Z
tags:
  - angular
---

We'll be creating a live-search function for an Angular list in today's article.

I plan to have a list rendered in Angular and an input type above it. If we type in this input, we should see the list contents change.

You can see the result in this GIF.

![Angular search pipe for a list](https://cdn.hashnode.com/res/hashnode/image/upload/v1609774154572/IH5sfx_R-.gif)

## Setting up the project

We will be using my master Angular project for this project since we don't want to set up Angular from Scratch.

> Note: Check out this article if you plan to [install Angular from scratch](https://daily-dev-tips.com/posts/creating-our-first-angular-project/)

Download the starter project or install it yourself, then you can open your terminal and run `ng serve`.

## Creating the list

The next part is to create a new component. This is the List component.
We can use the Angular generator to generate this component for us.

```bash
ng generate component list
```

You can then add this list component to your `app.component.html` file.

```html
<li><a routerLink="/welcome" routerLinkActive="active">Welcome</a></li>
<li><a routerLink="/list" routerLinkActive="active">List</a></li>
```

Then we need to active the route in our routing file.
Open up the `app-routing.module.ts`.

You'll need to import the Component on the top.

```js
import { ListComponent } from './list/list.component';
```

And add the following line as a route.

```js
{ path: 'list', component: ListComponent },
```

Now we should be able to run our application and visit the `/list` route.

The next thing we want to add is our data, so open up the `list.component.ts` file and add the following data set.

```js
people = [
  {
    firstname: 'Chris',
    lastname: 'Bongers',
  },
  {
    firstname: 'Peter',
    lastname: 'Rabbit',
  },
  {
    firstname: 'Donald',
    lastname: 'Duck',
  },
  {
    firstname: 'Lady',
    lastname: 'Gaga',
  },
];
```

We want to show this list on the `HTML` side, so we need to render it in our HTML file.

```html
<ul>
  <li *ngFor="let person of people">
    {{ person.firstname }} {{ person.lastname }}
  </li>
</ul>
```

If we run this code, we should see our list rendered.

![Angular rendered list](https://cdn.hashnode.com/res/hashnode/image/upload/v1609743284478/v96F1iWeC.png)

We need to have a search input on top of this list. This needs to be connected to a model so we can use the value.

First, we need to enable the ReactiveForms module.

We can add it to our `app.module.ts` file.

```js
// Other imports
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [...],
  imports: [ReactiveFormsModule, ...],
  providers: [],
  bootstrap: [AppComponent],
})
```

With this in place, we can create the form in our `list.component.ts`.

The first thing we add is a variable for our searchForm.

```js
searchForm;
```

Then we modify the constructor to load the formBuilder and create the search form.

```js
constructor(private formBuilder: FormBuilder) {
  this.searchForm = this.formBuilder.group({
    search: '',
  });
}
```

This will create a form we can use in our `HTML` file.

Add the following form to the top of our list.

```html
<form [formGroup]="searchForm">
  <input formControlName="search" />
</form>
```

> Note: The formControlName references the formBuilder group name.

## Generating the Angular Search Pipe

To generate this pipe, we can run the following command.

```bash
ng generate pipe SearchFilter
```

This will generate and register our pipe for us.

To use this pipe, we need to add it to the ngFor on the list we created in `list.component.ts`.

```html
<li *ngFor="let person of people | searchFilter: searchForm.value.search"></li>
```

As you can see above, we add the `searchFilter` pipe and pass the argument of the search field value.

Now we need to make sure this search filter pipe will return only matching results.

Let's create the outline for this filter first.
Our filter has two parameters, one being the input (value) and one being the search (string).

We use typescript to define what our value looks like. In this case, it's an array with an object in it.

Then you'll see the `:`, which defines the output for this transform function.

```js
transform(
  value: { firstname: string; lastname: string }[],
  search: string
): { firstname: string; lastname: string }[] {
  //return something
}
```

Now, let's create the actual function.

We start by checking if the value is set.

```js
if (value) {
  // Do something
}
```

If we get a value, we need to create a regular expression to match against based on the search parameter.

```js
const regexp = new RegExp(search, 'i');
```

Then we also want to get all the property's keys.

```js
const properties = Object.keys(value[0]);
```

What the above does is get the keys for the first array element.

```js
// ['firstname', 'lastname'];
```

Then it's time to return an actual value.

```js
return [
  ...value.filter((item) => {
    return properties.some((property) => regexp.test(item[property]));
  }),
];
```

This is a bit of a tricky one. We return an array `[]`.
Inside this array, we use the spread operator to get a copy of the value array.

We use the [JavaScript filter method](https://daily-dev-tips.com/posts/javascript-filter-method/) to filter the values.
Inside the filter, we return a boolean because we use the [JavaScript some method](https://daily-dev-tips.com/posts/javascript-some-method/) on the property array.

To demo what will happen if we search for `chris`.

We'll get in the loop and ask if one of the properties (firstname/lastname) matches the regular expression based on the search string.

In the first case, this is true so that the result will be returned as yes. In the other ones, it's false.

The result is an array of 1 object, `Chris Bongers`.

![Angular search list result](https://cdn.hashnode.com/res/hashnode/image/upload/v1609773820684/aPLB2C_tp.png)

The entire search pipe will look as follows.

```js
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    value: { firstname: string, lastname: string }[],
    search: string
  ): { firstname: string, lastname: string }[] {
    if (value) {
      const regexp = new RegExp(search, 'i');
      const properties = Object.keys(value[0]);
      return [
        ...value.filter((item) => {
          return properties.some((property) => regexp.test(item[property]));
        }),
      ];
    }
  }
}
```

You can also find this project on [GitHub](https://github.com/rebelchris/angular-starter-demo/tree/search-list).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
