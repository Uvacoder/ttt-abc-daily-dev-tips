---
layout: ../../layouts/Post.astro
title: 'Build a todo list app with Flutter'
metaTitle: 'Build a todo list app with Flutter'
metaDesc: 'Building a working todo list application in Flutter and Dart'
image: /images/08-07-2021.jpg
date: 2021-07-08T03:00:00.000Z
tags:
  - flutter
---

Today we'll be making a dynamic todo list in Flutter. We can add new todo items with his list and check them off if we've done them.

There are some prerequisites;

You need to have [Flutter installed](https://daily-dev-tips.com/posts/installing-flutter-on-a-mac/), know how to [create a basic Flutter application](https://daily-dev-tips.com/posts/flutter-how-it-works-hello-world/), have read about [widgets and layouts](https://daily-dev-tips.com/posts/exploring-the-flutter-layout-flow/), and know the basics of [states in Flutter](https://daily-dev-tips.com/posts/flutter-stateful-and-stateless-widgets/).

We will combine this knowledge today and make our very first application in Flutter.
A todo list, where you can add new items to a list and check them off ✅.

The end result will look like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/flutter_pqubdi.webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/flutter_lcu6dx.mp4" type="video/mp4" />
</video>

## Scaffolding the basic Flutter app

Not to go into much detail, but for those who start from scratch:

```bash
# create new project
flutter create flutter_todo_app

# navigate to project
cd flutter_todo_app

# run flutter
flutter run
```

Now we have a basic Flutter app running, let's go ahead and clear out everything from the `lib/main.dart` file.

> Note: this is the main entry point for our Flutter app. For this article, I'll only be using that file.

We can start by importing material dart as a package.

```dart
import 'package:flutter/material.dart';
```

The next step is to have the main function. In our case, it will return an instance of `TodoApp`, which we will create in a second.

```dart
void main() => runApp(
  new TodoApp(),
);
```

This TodoApp so far can actually be a statelessWidget. It will be the skeleton around our actual list.
We want to leverage the basic material app to get all the styling.

```dart
class TodoApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Todo list',
      home: new TodoList(),
    );
  }
}
```

As you can see above in the code example, I'm returning a new `MaterialApp` and pass a title and the home function.
This home function returns a `TodoList`, another function we'll be making ourselves.
This `TodoList` will be our actual list and control the state of all the todo items in it.

Let's head over to the TodoList and see how that looks:

```dart
class TodoList extends StatefulWidget {
  @override
  _TodoListState createState() => new _TodoListState();
}
```

Wait, that's it?
And yes, it is. All the widget does is call a state to evaluate what needs to happen and render. In our case, we call the `_TodoListState`. This will have all the list and logic for our app.

```dart
class _TodoListState extends State<TodoList> {
  final TextEditingController _textFieldController = TextEditingController();
  final List<Todo> _todos = <Todo>[];

  @override
  Widget build(BuildContext context) {
	  // Widget template comes here
  }

  // Other functions
}
```

I took the basics of the function. The state extends a certain state, in our case, the TodoList widget.
We are then able to define some variables, a textController, and a list of To-do's.

Then we have our widget, which will hold the template, and some other function we can define later.

But let's head back to the variables first.

```dart
final List<Todo> _todos = <Todo>[];
```

You might have spotted we defined a list (array) of the type `Todo`, but how would Flutter know what a todo looks like?

And it doesn't, so let's first create a class that defines our Todo element.
You can place this in the top section of the `main.dart` file right below the import.

```dart
class Todo {
  Todo({required this.name, required this.checked});
  final String name;
  bool checked;
}
```

I find this much like type definitions in TypeScript. We tell Flutter what a todo would look like and which fields are required.
In our case, it has a name and a checked state.
The checked state is not final since we will be modifying this later on.

Back to our `_TodoListState`, we can start working on our widget to display something.

```dart
@override
Widget build(BuildContext context) {
	return new Scaffold(
	  appBar: new AppBar(
	    title: new Text('Todo list'),
	  ),
	  body: ListView(
	    padding: EdgeInsets.symmetric(vertical: 8.0),
	    children: _todos.map((Todo todo) {
	      return TodoItem(
	        todo: todo,
	        onTodoChanged: _handleTodoChange,
	      );
	    }).toList(),
	  ),
	  floatingActionButton: FloatingActionButton(
	      onPressed: () => _displayDialog(),
	      tooltip: 'Add Item',
	      child: Icon(Icons.add)),
	);
}
```

Alright, let's have a look at what's going on above.
We return a scaffold for our application as we add an appBar that will hold a title.
Then we define the body section, which will be a `ListView` widget with todo's as children.

For this piece of code, we map all the todo's in the state and return a `TodoItem` for each element. We pass the todo and a change handler to this widget.

Then at the bottom, we define a Floating Action Button (FAB for short) that will invoke a function called `_displayDialog` when pressed.

Ok, we have quite a few things to look at from just this piece of code:

- Create a `TodoItem`
- Define a `_displayDialog` function
- Define a `_handleTodoChange` function

Let's look at those, one by one.

## Creating the TodoItem

The TodoItem is a single representation for each todo item in our list. This again is a widget on its own.

```dart
class TodoItem extends StatelessWidget {
  TodoItem({
    required this.todo,
    required this.onTodoChanged,
  }) : super(key: ObjectKey(todo));

  final Todo todo;
  final onTodoChanged;

  TextStyle? _getTextStyle(bool checked) {
    if (!checked) return null;

    return TextStyle(
      color: Colors.black54,
      decoration: TextDecoration.lineThrough,
    );
  }

  @override
  Widget build(BuildContext context) {
    return ListTile(
      onTap: () {
        onTodoChanged(todo);
      },
      leading: CircleAvatar(
        child: Text(todo.name[0]),
      ),
      title: Text(todo.name, style: _getTextStyle(todo.checked)),
    );
  }
}
```

As you could see, we passed a todo and change handler to it, so that's what we defined as a TodoItem now.

The next part is a `TextStyle`. This takes a boolean to evaluate whether a todo is checked or not.
If it's not checked, we return nothing. Else we'll return a line-through text: ~~crossed off the list~~.

Then we have a widget actually to display something.
In our case we use the [`ListTile` widget](https://api.flutter.dev/flutter/material/ListTile-class.html), and add a onTap to invoke the `onTodoChanged` function.
It also has a leading property, which holds the first letter of the todo.
And a title, with our style we defined above.

Now this will be able to render a single todo item in our list.
But so far, we haven't been able to add items to our list.
So let's take a look at that.

## Displaying a dialog to add new Todo's

The FAB button will invoke a function called `_displayDialog` when we click it.

This should open up a dialog with a text area, and as a return, it should create a new todo based on the value of that texture.

Create this function called `_displayDialog` inside the `_TodoListState`.

```dart
Future<void> _displayDialog() async {
	return showDialog<void>(
	  context: context,
	  barrierDismissible: false, // user must tap button!
	  builder: (BuildContext context) {
	    return AlertDialog(
	      title: const Text('Add a new todo item'),
	      content: TextField(
	        controller: _textFieldController,
	        decoration: const InputDecoration(hintText: 'Type your new todo'),
	      ),
	      actions: <Widget>[
	        TextButton(
	          child: const Text('Add'),
	          onPressed: () {
	            Navigator.of(context).pop();
	            _addTodoItem(_textFieldController.text);
	          },
	        ),
	      ],
	    );
	  },
	);
}
```

A future in Flutter is a potential value or error that will be available in some time in the future.
In our case, a text string after the user typed it.

We return a dialog, and inside the content, we render a `TextField` widget.
This widget uses the controller that we defined as our variable.

Furthermore, it has an action, which holds a button, and once the user pressed this button, we close off the alert dialog.
And invoke the `_addTodoItem` function.
Inside that, we pass the textfields text property.

Let's look at how this `_addTodoItem` function will look.

```dart
void _addTodoItem(String name) {
	setState(() {
	  _todos.add(Todo(name: name, checked: false));
	});
	_textFieldController.clear();
}
```

Oh wow, that was easier than you would think, right?
We have to call the setState to invoke a state change.
Inside we add a new Todo to our list of Todos.
Next up, we'll clear the textfields text.

This works because a List in dart has the `add` functionality build in. We don't need to write that ourselves.

## Crossing todo items of our list

The last part we'll need is the option to check todo items and mark them as done.
For this, we already added a handler that invokes the `_handleTodoChange` function.

Let's go ahead and define that function inside our `_TodoListState`.

```dart
void _handleTodoChange(Todo todo) {
	setState(() {
	  todo.checked = !todo.checked;
	});
}
```

As you can see, all this function does is change the checked property of a todo to whatever it was not.

Meaning if it was true, the new value is false, and visa-versa.

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/flutter-todo_icjbmn.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/flutter-todo_rvnzc5.mp4" type="video/mp4" />
</video>

Are you wondering how this works?
Flutter state change means that the whole widget will rebuild. Now taking into account, we defined a style that evaluates the checked state of our todo.
So by changing the state, a whole refactor of our widget is done!
And now it shows a checked of todo.

Wondering what the complete code looks like?
[Flutter todo list app on GitHub](https://github.com/rebelchris/flutter/tree/todolist).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
