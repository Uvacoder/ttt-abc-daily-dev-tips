---
layout: ../../layouts/Post.astro
title: 'Bash ~ never forget to git commit again 💥'
metaTitle: 'Bash ~ never forget to git commit again 💥'
metaDesc: 'Automation our git status command in Bash!'
image: /images/04-09-2020.jpg
date: 2020-09-04T03:00:00.000Z
tags:
  - developer
  - cli
---

Are you:

- ✅ Tired of failing to git commit
- ✅ Sick of having staged changes
- ✅ Colleagues complaining they're missing code
- ✅ Angry because your laptop fried, and you didn't commit?

Then this article is for you!

Today we will be making a `bash` script that we can run at the end of our day.
It will loop through our project directory and tell us the following statistics per project:

- Is it a git repo
- Did you forget to commit something
- Do we have unstated changes

> Have a look at [hacking your morning routine](https://daily-dev-tips.com/posts/ive-automated-my-morning-routine/)!

It will look like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/git-bash_siuh6h.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/git-bash_h2xkvn.mp4" type="video/mp4" />
</video>

## Bash git commit prompt script

Today we'll be looking at a single `bash` script.
I'm going through this section by section. At the end I'll link it on GitHub for you to download.

We will start by defining our variables

> Change the `DIR` to your project folder.

```bash
DIR=~/www/
GITBASED=.git
```

Then we need to loop over each subdirectory in our projects folder.

```bash
for dir in $DIR*
do
	// Loop here
done
```

Then inside the loop, we need first to check if it's a directory we are checking:

```bash
if [[ -d $dir ]]; then
    // Yes I'm a directory
fi
```

You can see we check the dir based on the `-d` (directory)

If it's a directory, we can work with it:

We'll `cd` into the directory and define an empty message.

```bash
cd $dir
MSG="";
```

Then we check if it's a git project.
If it's not a git project we change our message.

```bash
if [ -d "$GITBASED" ]; then
		// Git based!
else
    // Not a valid git project
    MSG=": Not a valid git project 👀"
fi
```

If it is a git project, we will first define a test variable that will execute `git status`.

```bash
TEST=$(git status $dir);
```

Our variable TEST now contains the return value of `git status` now we will use some `if...else` statements to check if it contains certain substrings:

```bash
if [[ $TEST == *"nothing to commit"* ]]; then
    MSG=": No changes ✅"
// Check if git status has unstaged changes
elif [[ $TEST == *"Changes not staged for commit"* ]]; then
    MSG=": Unstaged changes 🤷‍♂️"
// Check if git status has uncommitted changes
elif [[ $TEST == *"Untracked files"* ]]; then
    MSG=": You forgot to commit some files 😡"
fi
```

And lastly, we will echo the message prefixed with he project name and change back a directory.

```bash
echo ${dir##*/}$MSG
cd ..
```

That's it!

If we run our `bash.sh` script, we will get all lines per project folder with the status.

> Run it with: `sh bash.sh`

No more reasons to forget your commits!

Find the project on my [GitHub afterwork](https://github.com/rebelchris/afterwork).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
