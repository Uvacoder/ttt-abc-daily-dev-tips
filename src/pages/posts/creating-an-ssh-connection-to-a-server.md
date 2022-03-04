---
layout: ../../layouts/Post.astro
title: 'Creating an SSH connection to a server'
metaTitle: 'Creating an SSH connection to a server'
metaDesc: 'Adding secure shell access to a server is a win for every developer'
image: /images/19-04-2021.jpg
date: 2021-04-19T03:00:00.000Z
tags:
  - developer
---

SSH is an amazing way to make secure connections to servers.
It stands for Secure Shell, and it's a network protocol between two computers.

In our case my laptop, and the server.

Often servers will come with a terminal you will be able to access from their platform. However, this becomes a shell inside a shell.

It's slow, you can't use copy-paste and it hangs suddenly.

Or perhaps you are in need of a connection to configure some auto deployments from GitHub!

All good reasons to have an SSH connection to your server.

In today's article, I'll show you how to set up an SSH connection to a server.

Your basic command will look like this:

```bash
ssh user@server.domain.com
// or
ssh user@123.132.12.22
```

And we could use it with a password we set on the server, however in this case we don't want that.
We want an instant connection.

## Generating the SSH key

Before we can do anything we need an SSH key.
It might be that your computer already has one in place for GitHub or whatever reason.

I prefer to make separate ones that I can remove one-by-one.

So let's open up the terminal and run the following command to create a new key.

```bash
ssh-keygen -t ed25519 -C "you@email.com"
```

Change the email to whatever note you want.

This will prompt the following options.

File (Generally something like: `/Users/chrisbongers/.ssh/id_ed25519` however you might want to make the name more unique to identify the use case.

In my case, I'll be using `server_1`.

Then it will ask for a passphrase, and we just type enter, do not use a passphrase here.

In the reporting passphrase also leave it empty.

![SSH KeyGen output](https://cdn.hashnode.com/res/hashnode/image/upload/v1618554724478/vFek0-rZu.png)

Right, we should now have the public and private keys.

## Setting the Authorized keys

The next step is to set this key as an enabled host on the server.
At this point you can use the server terminal interface.

Your server should have a `~/.ssh/` directory, if not you can make it.

Inside we should have or add the file: `authorized_keys`.

```bash
nano ~/.ssh/authorized_keys
```

Inside on a new rule place your key which you can get with the following command on your local computer.

```bash
pbcopy < ~/.ssh/server_1.pub
```

Where server_1 is the name you gave your key.

It will copy a string like this to your keyboard.

```bash
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIH4TBYa16+8t9LJmqCuMjq+4PSxca81L8sN8OSgT5YW9 you@email.com
```

Save the file and we should now be able to connect with this key!

## Connecting to the server with the SSH key

Now since we named our key differently we should either do a manual statement of the key or add it in our SSH config.

We can add our new key with the following command.

```bash
ssh-add -K ~/.ssh/server_1
```

And now we should be able to test out our SSH key.

```bash
ssh user@127.127.10.12
```

Change the user and IP according to your server.

And running the above command should bring us into the server!
The first time we'll be prompted with an authentication prompt.
We have to say yes to allow the connection once.

After doing that, we can just connect without problems.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
