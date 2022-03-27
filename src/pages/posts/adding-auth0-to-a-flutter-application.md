---
layout: ../../layouts/Post.astro
title: 'Adding Auth0 to a Flutter application'
metaTitle: 'Adding Auth0 to a Flutter application'
metaDesc: 'How to use Auth0 in a Flutter application'
image: /images/22-08-2021.jpg
date: 2021-08-22T03:00:00.000Z
tags:
- flutter
---

I wanted to explore how easy it would be to authenticate a Flutter application with Auth0.

This article is there for anyone wanting to add authentication to a Flutter application using Auth0.

Our result will be an app connecting with a social provider and returning a custom user profile.
You can then use this to enhance your application with a login flow.

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/auth0_nkfpd3.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/auth0_azbqfc.mp4" type="video/mp4" />
</video>

While researching this article, I concluded that all existing articles were a bit outdated, and I struggled with some explanations, so I'll try and explain what's happening in this article.

## Adding the dependencies to our Flutter app

Since we'll be using a couple of external packages, we need to add those to our `pubspec.yaml` file first.

```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^0.12.1
  flutter_appauth: ^0.9.1
  flutter_secure_storage: ^3.3.3
```

We will be using three external dependencies being:

- `http`: To create HTTP request to the Auth0 endpoints
- `flutter_appauth`: The flutter package to bridge flutter and auth0
- `flutter_secure_storage`: A package that allows us to save specific tokens on the device

With those added, run `flutter pub get` to fetch those dependencies.

## Creating the Auth0 application

We first need to set up an Auth0 account and create our first app to continue this process.

Head over to Auth0 and [create an account](https://a0.to/hashnodehack2021).

Once your account is set up, create your first application.
Click the Applications item in the left menu and click "Create application".

![Setting up a new app in Auth0](https://cdn.hashnode.com/res/hashnode/image/upload/v1629032233822/5c2vdIIzt.png)

Choose native for our Flutter app integration.

Once it's created click the Settings tab and copy the following items.

1. Domain
2. Client ID

![Auth0 settings](https://cdn.hashnode.com/res/hashnode/image/upload/v1629032358437/IVWeVnYBC.png)

With this information, head over to your flutter application!

## Creating our basic Auth0 Flutter app

Now let's move to the `main.dart` file and add all the imports we need for this app.

```dart
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:flutter_appauth/flutter_appauth.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
```

Then we all also need to define the `appAuth` and `secureStorage` providers.

```dart
final FlutterAppAuth appAuth = FlutterAppAuth();
const FlutterSecureStorage secureStorage = FlutterSecureStorage();
```

As well as the Auth0 settings we need.

```dart
const String AUTH0_ISSUER = '{YOUR_KEY}.us.auth0.com';
const String AUTH0_DOMAIN = 'https://$AUTH0_ISSUER';
const String AUTH0_CLIENT_ID = 'CLIENT_ID_HERE';
const String AUTH0_REDIRECT_URI = 'com.{your domain}.{your app}://login-callback';
```

Next up, let's modify our main function only to render our app.

```dart
void main() => runApp(const MyApp());
```

MyApp, will be a stateful widget that will keep several state variables.

```dart
class MyApp extends StatefulWidget {
  const MyApp({Key key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}
```

This state will be our main entry point. It will evaluate if someone is still logged in and show them their profile or the login page when they are not logged in.

```dart
class _MyAppState extends State<MyApp> {
  bool isBusy = false;
  bool isLoggedIn = false;
  String errorMessage;
  String name;
  String picture;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Auth0 login',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Flutter Auth0 login'),
        ),
        body: Center(
          child: isBusy
              ? const CircularProgressIndicator()
              : isLoggedIn
                  ? Profile(logoutAction, name, picture)
                  : Login(loginAction, errorMessage),
        ),
      ),
    );
  }
}
```

This is the basic state, where we define some variables we'll use in a second. As well as return the build widget to render a dynamic view widget based on the logged-in state.

If the app is loading when we click the login button, we'll show a loading indicator.
We then differentiate between a logged-in person showing the Profile page, or a not logged-in person, to whom we offer the Login page.

You might have spotted that these two widgets have properties. For instance, the login has a `loginAction` and an `errorMessage`. Those are properties in our state that we'll pass to this widget.

Let's go ahead and create these two pages to start with.

## Creating the login page

As for the login page, we passed something called a `loginAction` and an `errorMessage`. These are mapped inside this widget so that we can use them here.

Furthermore, we return a widget with a center element. Inside that, we render a button which once pressed with call the `loginAction`.

And we add a text element that can show the error message if it occurs.

```dart
class Login extends StatelessWidget {
  final Future<void> Function() loginAction;
  final String loginError;

  const Login(this.loginAction, this.loginError, {Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        ElevatedButton(
          onPressed: () async {
            await loginAction();
          },
          child: const Text('Login'),
        ),
        Text(loginError ?? ''),
      ],
    );
  }
}
```

![Flutter Login page](https://cdn.hashnode.com/res/hashnode/image/upload/v1629031766110/gdJJ_sZ9I.png)

> Note: We'll get back to creating this `loginAction` function in a bit.

## Creating the profile view

Let's round up the profile widget.

```dart
class Profile extends StatelessWidget {
  final Future<void> Function() logoutAction;
  final String name;
  final String picture;

  const Profile(this.logoutAction, this.name, this.picture, {Key key})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Container(
          width: 150,
          height: 150,
          decoration: BoxDecoration(
            border: Border.all(color: Colors.blue, width: 4),
            shape: BoxShape.circle,
            image: DecorationImage(
              fit: BoxFit.fill,
              image: NetworkImage(picture ?? ''),
            ),
          ),
        ),
        const SizedBox(height: 24),
        Text('Name: $name'),
        const SizedBox(height: 48),
        ElevatedButton(
          onPressed: () async {
            await logoutAction();
          },
          child: const Text('Logout'),
        ),
      ],
    );
  }
}
```

![Flutter Profile page](https://cdn.hashnode.com/res/hashnode/image/upload/v1629031822513/bGEQhzdxo.png)

This, in return, renders the profile image and name of the logged-in user and a logout button where we can log out the current user.

These parameters are again passed from our app state widget.

So let's head back over to the state widget and add all these functions.

## Creating the login functions

As we saw so far, we passed some functions around: `loginAction` and `logoutAction`.
These are part of the `_MyAppState` state.

In this `_MyAppState`, we'll start adding these, which will hold the actual functions.

The first one we need is the `loginAction`, which is the function called to invoke the Auth0 flow and log in to the user.

```dart
Future<void> loginAction() async {
   setState(() {
     isBusy = true;
     errorMessage = '';
   });

   try {
     final AuthorizationTokenResponse result =
         await appAuth.authorizeAndExchangeCode(
       AuthorizationTokenRequest(
         AUTH0_CLIENT_ID,
         AUTH0_REDIRECT_URI,
         issuer: AUTH0_DOMAIN,
         scopes: <String>['openid', 'profile', 'offline_access'],
       ),
     );

     final Map<String, Object> idToken = parseIdToken(result.idToken);
     final Map<String, Object> profile =
         await getUserDetails(result.accessToken);

     await secureStorage.write(
         key: 'refresh_token', value: result.refreshToken);

     setState(() {
       isBusy = false;
       isLoggedIn = true;
       name = idToken['name'];
       picture = profile['picture'];
     });
   } on Exception catch (e, s) {
     debugPrint('login error: $e - stack: $s');

     setState(() {
       isBusy = false;
       isLoggedIn = false;
       errorMessage = e.toString();
     });
   }
}
```

What happens here is that we first set our state to be busy and reset our error message.

Then we try to get a token request from the Auth0 application using our appAuth provider.

This return is a token that we need to parse manually, for which we create a function called `parseIdToken`.

Once this returns something, we also call a `getUserDetails` function. This function will retrieve the user data based on the access token.

Then we set the refresh token in our app's storage to use once the user returns or the current token expires.

Lastly, we set our final state, including the user's name and profile picture.

### Creating the `parseIdToken` function

This function takes the token returned by Auth0 and parses it in a way that we can use it.

```dart
Map<String, Object> parseIdToken(String idToken) {
   final List<String> parts = idToken.split('.');
   assert(parts.length == 3);

   return jsonDecode(
       utf8.decode(base64Url.decode(base64Url.normalize(parts[1]))));
}
```

What this does, is split the token based on the dots. This should give us three parts as it's a JWT token.
We then decode the first part, which we can use as an access token.

### Adding the `getUserDetail` function

As you saw above, we call a function called `getUserDetails`. This function queries the Auth0 system and asks for the current user's details.

```dart
Future<Map<String, Object>> getUserDetails(String accessToken) async {
   const String url = '$AUTH0_DOMAIN/userinfo';
   final http.Response response = await http.get(
     url,
     headers: <String, String>{'Authorization': 'Bearer $accessToken'},
   );

   if (response.statusCode == 200) {
     return jsonDecode(response.body);
   } else {
     throw Exception('Failed to get user details');
   }
}
```

This function calls the `user info` endpoint, which returns some basic information for the logged-in user.
We then return the response object to the login action.

The object looks similar to this:

```json
{
  "sub": "google-oauth2|103639452207137831992",
  "given_name": "Chris",
  "family_name": "Bongers",
  "nickname": "chrisbongers",
  "name": "Chris Bongers",
  "picture": "https://lh3.googleusercontent.com/a-/AOh14GhFAn4wXcc8l-7S97xbxHsw_ByihAPniCvy_kpZyKM=s96-c",
  "locale": "en-GB",
  "updated_at": "2021-08-15T08:27:32.042Z"
}
```

## Creating the logout function

The logout function is relatively easy, as it should remove the locally stored token and the current state.

```dart
Future<void> logoutAction() async {
   await secureStorage.delete(key: 'refresh_token');
   setState(() {
     isLoggedIn = false;
     isBusy = false;
   });
}
```

## Finishing up Flutter auth0 integration

We have everything we need with this, but our app doesn't have default init.
This is needed to check if we have a current user token and continue the login call.

Let's go ahead and create this init.

```dart
@override
void initState() {
   initAction();
   super.initState();
}

Future<void> initAction() async {
   final String storedRefreshToken =
       await secureStorage.read(key: 'refresh_token');
   if (storedRefreshToken == null) return;

   setState(() {
     isBusy = true;
   });

   try {
     final TokenResponse response = await appAuth.token(TokenRequest(
       AUTH0_CLIENT_ID,
       AUTH0_REDIRECT_URI,
       issuer: AUTH0_ISSUER,
       refreshToken: storedRefreshToken,
     ));

     final Map<String, Object> idToken = parseIdToken(response.idToken);
     final Map<String, Object> profile =
         await getUserDetails(response.accessToken);

     await secureStorage.write(
         key: 'refresh_token', value: response.refreshToken);

     setState(() {
       isBusy = false;
       isLoggedIn = true;
       name = idToken['name'];
       picture = profile['picture'];
     });
   } on Exception catch (e, s) {
     debugPrint('error on refresh token: $e - stack: $s');
     await logoutAction();
   }
}
```

We created our own init function, which will be invoked every time the app opens.

Once this happens, we check if we have a token in our storage.
With this token, we request a new token and update the one we have stored. Furthermore, we execute the `getUserDetails` function and update our state.

This should sound familiar as it's very close to what we are doing in the login function.

With that, we finished our whole flow.
We can now sign up and create an account for our Flutter application and sign out.

And the cool part:
If we return to our application, we have logged in again, and our token is refreshed.

You might be looking for the complete code. I've created a [GitHub repo](https://github.com/rebelchris/flutter-auth0) where you can see the full code example app.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
