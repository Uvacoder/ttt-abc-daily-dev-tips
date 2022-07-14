---
layout: ../../layouts/Post.astro
title: 'Adding Tailwind CSS to an Angular project'
metaTitle: 'Adding Tailwind CSS to Angular 10 projects [2022]'
metaDesc: 'How to add Tailwind CSS to components in an Angular project with NPM. Tutorial with code examples.'
image: /images/14-10-2020.jpg
date: 2020-10-14T03:00:00.000Z
tags:
  - angular
  - tailwind
---

Yesterday we learned how to set up our [first Angular 10 project](https://daily-dev-tips.com/posts/creating-our-first-angular-project/). Today we will be adding Tailwind CSS to Angular 10, so we can easily use its simplicity when styling components.

> Note: when setting up your project, select `SCSS`.

Tailwind is a CSS framework, much like bootstrap, but it doesn't include any `card` or `navbar` components.
We can call Tailwind a utility framework. It uses utility classes like: `shadow-lg`, `rounded`, `w-full`, etc.

> At the time of writing, I'm using Angular 10 and Tailwind 1.8

## Adding Tailwind CSS to our Angular app

Ok, so we set up our basic Angular application. Now, let's add the Tailwind CSS package.

First, open your terminal and run the following command in NPM to install Tailwind:

```bash
npm install tailwindcss -D
```

Then we need the `ngx-build-plus` package.

```bash
npm install ngx-build-plus
```

We also need various post-css packages and a custom webpack builder.

```bash
npm install  postcss-scss postcss-import postcss-loader -D
```

That's all for the installs. Now we need a `‌webpack.config.js` file at the root of our project.
This file will have the following webpack configuration:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            syntax: 'postcss-scss',
            plugins: [
              require('postcss-import'),
              require('tailwindcss'),
              require('autoprefixer'),
            ],
          },
        },
      },
    ],
  },
};
```

I won't go into too much detail about the configuration. We are creating rules for webpack to run `SCSS` in our application and register Tailwind as a plugin.

Next, we need to change our `angular.json` file to tell it that we created this custom webpack config.

Open your editor and make the following changes.

- build/builder: `ngx-build-plus:browser`
- ✚ add line:

```js
"options": {
  "extraWebpackConfig": "webpack.config.js",
}
```

- serve/builder: `ngx-build-plus:dev-server`
- ✚ add line:

```js
"options": {
  "extraWebpackConfig": "webpack.config.js",
},
```

![Code changes in Angular to install Tailwind CSS package](https://cdn.hashnode.com/res/hashnode/image/upload/v1602051812470/qqM60p64u.png)

## Adding the Tailwind styles

Now it's time to add the Tailwind CSS to our application.

Open the `styles.scss` file. You can find it in the `src` folder.

Add the following lines.

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

This tells our application to import all the Tailwind default CSS styles.

We need to initialize our Tailwind configuration by running the following code in our terminal.

```bash
npx tailwind init
```

This will create a `tailwind.config.js` file for us.

## Using Tailwind CSS in Angular 10

We can now go ahead and try out the Tailwind CSS package.

Let's open up our `welcome.component.html` file and make the following changes:

```html
<div class="fixed inset-0 z-10 overflow-y-auto">
  <div
    class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
  >
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
    >&#8203;
    <div
      class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div
            class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
          >
            <!-- Heroicon name: exclamation -->
            <svg
              class="w-6 h-6 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              class="text-lg font-medium leading-6 text-gray-900"
              id="modal-headline"
            >
              Deactivate account
            </h3>
            <div class="mt-2">
              <p class="text-sm leading-5 text-gray-500">
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button
            type="button"
            class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
          >
            Deactivate
          </button>
        </span>
        <span class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            type="button"
            class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
          >
            Cancel
          </button>
        </span>
      </div>
    </div>
  </div>
</div>
```

> Note: You can find more CSS examples on the [Tailwind component page](https://tailwindui.com/preview).

Now, if we run `ng serve`, we should see the following result.

![Angular with Tailwind CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1602051635453/kyVwjiQgM.png)

You can also find this project on [GitHub](https://github.com/rebelchris/angular-starter-demo/tree/feature/tailwind).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
