---
layout: ../../layouts/Post.astro
title: 'Adding tailwind typography plugin in Remix'
metaTitle: 'Adding tailwind typography plugin in Remix'
metaDesc: 'Adding the Typography plugin in Tailwind CSS using Remix'
image: /images/12-05-2022.jpg
date: 2022-05-12T03:00:00.000Z
tags:
  - remix
  - tailwindcss
---

Now that we added some markdown files to our Remix website, we saw the issue of the actual content not rendering the headings.

This is because Tailwind doesn't really know what to render this as.
Thus, we can use the [Tailwind Typography plugin](https://daily-dev-tips.com/posts/make-your-life-easy-with-the-tailwind-typography-plugin/) to help with this issue.

## Installing the Tailwind Typography plugin in Remix

The installation of this plugin is super straightforward, as we simply have to install the dependency with NPM:

```bash
npm install -D @tailwindcss/typography
```

Once this is done, we need to register it in our tailwind config file. This file is located at the root of our project named: `tailwind.config.js`.

Inside this file add the plugin:

```js
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
```

We can add the prose class to any element we want to use this plugin on.

In our case, let's add it to our root file so we can use it for our markdown files.

```js
export default function App() {
  return (
    <html lang='en' className='h-full'>
      ...
      <body className='h-full p-4 prose'>
        <Outlet />
        ...
      </body>
    </html>
  );
}
```

Note the `prose` class on the body. This is what will make it active.
If we now run our website and view a markdown rendered post, we see it in action.

![Screenshot 2022-05-02 at 07.19.04.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651468768701/iqX5mMdLj.png)

You can also find the completed code on [GitHub](https://github.com/rebelchris/remix-starter/tree/typography).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
