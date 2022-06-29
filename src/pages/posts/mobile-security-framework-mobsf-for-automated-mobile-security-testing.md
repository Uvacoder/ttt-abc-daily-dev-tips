---
layout: ../../layouts/Post.astro
title: 'Mobile Security Framework (MobSF) for automated Mobile security testing'
metaTitle: 'Mobile Security Framework (MobSF)'
metaDesc: 'How to test mobile application security using MobSF'
image: /images/06-08-2021.jpg
date: 2021-08-06T03:00:00.000Z
tags:
  - mobile
---

> This article is [originally posted on the Aviyel blog](https://aviyel.com/post/519/mobile-security-framework-mobsf-for-automated-mobile-security-testing)

Security in technology is a big thing, and for a reason. Up till June 2021, there are already 9.8 million records breached.

Scary thoughts, right? That is one reason people put a lot of effort into securing their applications.

With this, we can't forget our mobile applications. Seeing as they have become such a prominent element in our day-to-day lives, we need to make sure our user's data is secured.

In this article, we'll look at the risk we have while building a mobile application, as well as some basic steps we can take to protect our application. And last but not least, a mobile security framework called MobSF that can help us by doing a lot of checks in the background and make our applications more secure.

Before we get into ways to get started with mobile security, let's look at what kind of breaches we should be worried about when we talk about mobile security.

## Mobile security risks

With mobile breaches, we can talk about a wide range of issues that come with it. Below, I'll explain some of the problems at hand and what they mean for your end-user.

### Customer information

A common risk is the theft of your user's data. Data is often breached by extracting database or login information. Which in turn is not good! Common laws in place to protect customer data once should be on their a-game when securing this data.

Also, be aware that customer information can be several things, meaning a link between systems or basic contact details. Please don't neglect the fact that it's valuable for hackers to know the link between your website and, for instance, a social media account.

### Financial information

Perhaps one of the worst ones is financial information. This includes payment hijacking and the theft of credit card information—something no one ever wants to experience.

### IP Theft

Imagine having a popular app, but it's not available in the stores, only via own downloads. Someone with bad intentions might put an infected copy on the stores to retrieve data using your name and application status!

### Brand confidence

As the app builder and owner, you will lose brand confidence when security breaches are reported. Imagine if it turns out some website lost all your data. Indeed you are worried about ever using it again.

For me, this is really important and often not thought about enough. Data theft is one thing, but how does your app or company revolver as a brand from this.

You might have seen the news about Facebook or Netflix having security issues; how do you personally feel about this? I always try and reflect and see how I would feel about this.

## Mobile security best practices

When it comes to mobile security, there are some best practices to follow. They won't just work for mobile security but any system.

### Keeping your app/systems up to data

When you develop an app, you might use third-party software or plugins. No harm in that, but try and keep them up to date. Over time these plugins and systems show vulnerabilities and need maintenance. A lot of systems allow us to monitor these issues.

### Insecure data storage

A big item is how you secure data. A system is only as weak as its weakest link. Imagine you save data in your database as raw formatted data. Now, if a hacker gets to your database, it's immediately gone. We can choose to encrypt the data in our database to give that second level of protection.

### Secure data transfers

When sending and moving data across systems, make sure this happens safely. Even when it's an underwater API call to your system, use SSL to encrypt the data. It's a standard attack to listen to data packages being sent over networks that aren't secured, making it possible for people to steal your data in transfer.

### Code injection

Code injection depends on the type of app you have, but anytime you allow for user input, you open yourself up to potential code injection no matter at what level. We, as developers, should be responsible for making sure we escape any user input and sanitize what they are trying to store.

The dangerous part about code injection is that you might not always notice this right away. Often this is done in advance and will be executed as one massive attack later on.

### Binary planting

Binary planting, in essence, means that an attacker places (plants) a binary file containing malware on a system. Their goal is for your application to load and execute it. Within apps, these can be planted through SMS or malicious links.

### Botnets

Botnets are often a result of a malicious injection. Your app can be exposed to be injected with code that can turn the end-users mobile phone into a botnet slave. Meaning their phone can be used in a botnet to spam further.

## Getting started with Mobile security testing

Before getting started with a mobile security framework, we can look at some high-level elements.

These elements are a great starting point for making your mobile application safer; you don't have to reinvent the wheel as MobSF can also help us by doing these element checks.

### Risk analysis

Before starting with changing things and stepping our game up, let's do a current risk analysis. This is great to do since it will give us a good starting point to benchmark our later changes. It should also give us a good overview of which tasks have a certain level of urgency. There might be high-level issues we need to address before some low-level risk issues.

The cool part is that we don't have to do this ourselves. Tools like MobSF can help us with this, as they provide automated risk analysis!

### Updating our systems

A great way to help improve security is by making sure your systems are up to date.

Often maintainers of software and plugins keep up to date with security vulnerabilities, so we as people using their software should make sure we use the latest and greatest where possible.

Another critical factor is that some third-party script you're using might be malicious or turned malicious at some point, this is often quickly registered, and tools like MobSF will pick this out and report to you it's unsafe to use.

### Minimal permissions

Another great motto to live by has minimal permissions. For every permission you ask your user, ask yourself do we need this and if so, do we need this specific level of access?

A real-world example: You want to have access to the users' photo library so they can upload an image. This doesn't just apply to device access but also third-party access. Think about Twitter rights or Facebook permissions from your app.

### Save as little as possible

Talking about as little as possible, let's state the same concept for saving stuff. Often we get the idea we are needing a lot of data, but do we actually? In most cases, the answer is no. And with this in mind, evaluate every time you want to save something. Why do I need this? I've seen apps ask for so many personal details, of which I think, why would you even want this? Often it's a marketing thing where they want to analyze their user base. Fair enough, but again think about why and what you need to save.

### Encryption and secure data transfers

We talked about this a little bit before in the section on secure data transfer. But with this, also try and make sure you encrypt data. Meaning if you save personal data in a database, make sure it's not plain text. Most frameworks these days offer this level of encryption, making it very hard for potential hackers to have valuable data.

### Multi-factor authentication

Another thing you can do to enhance security in your application is to offer two-factor authentication. This is when a person logs in using whichever method at hand and then gets prompted with a particular key. Often this is a code that only lasts a minute or so. But they're alternatives to this as well. For some apps, this might be overkill. Just have in mind it's a good option for some applications. In general, I would advise using this when a user can log in to see other people's data.

## Getting started with MobSF

Now that we have a clear understanding of the risks of our mobile application and the high-level wins we could already achieve. Let's see what MobSF can help us do beyond that point.

For the latest method of [installing MobSF](https://mobsf.github.io/docs/#/installation), I recommend you look at their website since they often update this process. At the time of writing, I used their docker setup, which made for an easy and quick installation.

### [MobSF docker guide](https://mobsf.github.io/docs/#/docker)

If you are not using Docker, MobSF also has an installation you can run yourself. That installation is pretty straightforward and actually might run better on your system. For me, on the Mac M1, it ran a bit quicker while analyzing bigger APK files. However, the Docker version worked great on small applications.

### Pen-testing

MobSF is an excellent pen test tool, as we can run it on our computer, drag an APK/IPA on it and analyze our faults.

I've used one of my older apps and dragged the APK on the analyzer. The analyzer then runs for a while, and when it's done, you'll be amazed by its findings.

MobSF analyzes your application by converting it to binary code. This is an excellent way for them to investigate any potential leaks/risks. Since this can look at such a high level for security risks, something we can't do ourselves easily.

What you'll get after it's done analysis is a whole dashboard of options looking similar to this:

![MobSF dashboard](https://aviyel.com/assets/uploads/files/1627456101070-image1-resized.png)

### Malware analysis

The MobSF tool will also analyze our application for existing malware. You might be wondering how there can be any malware? Well, think about plugins you might use or NPM modules that could be infected.

This assessment can give us a vital breakthrough in our security as we don't want to upload an application that might have malware installed to an App Store.

### Security assessment

MobSF does a full security assessment for our application, measuring multiple points. This is a binary assessment where MobSF will convert your application to native code and assess any vulnerabilities on a code level.

Often when you use third-party libraries, this can expose issues on their end as well. And that makes it hard for us to find without a tool like MobSF.

### OWASP Mobile Top 10 vulnerabilities

The cool part is that MobSF tests against the top 10 OWAPS vulnerabilities. This is a list that the OWASP foundation set up in 2015 and keeps evaluating by risk in applications.

It's great because this gives us the ten most vital points to increase the security of our app.

If you want to read more about this list, visit the [OWASP project website](https://owasp.org/www-project-mobile-top-10/).

MobSF can also rank your issues in order of relevance based on this list. Meaning we can focus on solving the highest-risk issues first. Which I, in return, found very valuable someone getting started with mobile security.

## Conclusion

Mobile security is not a joke. We, as developers, must make sure the applications we deliver are safe for end-users, as expected.

[MobSF](https://mobsf.github.io/docs/#/) is a framework that can help us test our application on vital points and provide an honest and secure analysis of where we can improve our app.

The great thing about MobSF is that it does a very extended test on our code. I was amazed at how many points I got back as feedback. These points are crucial as often we don't have an idea of the security risks in third-party plugins.

In this article, we walked through some vital points of what a security breach can mean for our application and company and how we can make sure that we do everything in our power to secure our apps to the fullest.

I hope! Your reading was enjoyable.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
