---
slug: 'android-java-navigation'
title: 'Android Java Navigation'
date: '2020-10-19T15:22:55.252Z'
published: true
excerpt: 'basic navigation and data passing in android java'
author: 'Chris Bailey'
tags:
  - 'java'
  - 'android'
  - 'school'
  - 'dev'
---

Navigation in android is stack based, meaning each time you visit a new activity it is `java•pushed` onto the top of the `java•stack` and each time you leave an activity to go back to previous one the one you're leaving is `java•popped` off of the stack. In Android architecture these locations are referred to as a `java•Destination`. The initial destination for an application is the home screen, which will appear directly after any splash screens you may have, and is therefor the first destination your navigation stack. This removing and adding of destinations to the stack is handled with in the navigation controller, which is represented by the `java•NavController` class.

## Setting Up Android Navigation

We first need a navigation host, which is a special fragment, `java•NavHostFragment`, that is embedded in our main activity (`java•main_activity.xml`). This special fragment will be replaced as our user moves throughout the application, and is initially replaced by our home screen fragment when the application is launched.

```xml
...
    <fragment
        android:id="@+id/demo_nav_host_fragment"
        android:name="androidx.navigation.fragment.NavHostFragment"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        app:defaultNavHost="true"
        app:navGraph="@navigation/navigation_graph" />
...
```

Once our navigation fragment is in place we'll need to create a navigation graph. This is an XML file the defines the destinations we want to include in the application, it can also contain actions the define navigation between destinations and the option for arguments to pass data from one destination to the next.

```xml
<?xml version="1.0" encoding="utf-8"?>
<navigation xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/navigation_graph"
    app:startDestination="@id/mainFragment"
    >

    <fragment
        android:id="@+id/mainFragment"
        android:name="dev.chrisbailey.andnav.ui.main.MainFragment"
        android:label="main_fragment"
        tools:layout="@layout/main_fragment" >
        <action
            android:id="@+id/action_mainFragment_to_secondFragment"
            app:destination="@id/secondFragment" />
    </fragment>
    <fragment
        android:id="@+id/secondFragment"
        android:name="dev.chrisbailey.andnav.SecondFragment"
        android:label="fragment_second"
        tools:layout="@layout/fragment_second" >
    </fragment>
</navigation>
```

Moving from one destination to the next requires using the `java•findNavController()` to gain the current instance of our navigation controller, and then calling the `java•navigate()` method on the controller and passing to it our required actions. This is how we will pass data along to our new destination. The recommenced way is t use the _safeargs_ plugin, which generates special classes that allow arguments to passed in a type safe way.

First we need to load the safeargs plugin to our project, by adding it to our gradle files and then sync our changes

```gradle
//build.gradle
// add safeargs plugin
classpath "androidx.navigation:navigation-safe-args-gradle-plugin:2.3.1"
```

Once we have the _safeargs_ plugin added to the project, now have to ability add the arguments we want to be able to passed (in a type-safe way) through the XML of navigation graph.

```xml
...
    <fragment
        android:id="@+id/secondFragment"
        android:name="dev.chrisbailey.andnav.SecondFragment"
        android:label="fragment_second"
        tools:layout="@layout/fragment_second" >
        <argument
            android:name="message"
            app:argType="string"
            android:defaultValue="No Message" />
    </fragment>
```

The second fragment in the application is now setup to receive a `java•string` argument with the name of `java•message` and a default value. The main fragment can now be set up to take our users to second fragment and send along the desired message. We'll handle this in the `java•onClick()` method for a button, and with in by gaining access to the the main fragments directions which is one of the special classes created through the safeargs plugin. Once we have access to this we're able to set the parameters we earlier defined in the navigation graph by calling the `java•setMessage()` method created for us, and then passing the created action along to our `java•navigate()` call.

```java
...
    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        mViewModel = new ViewModelProvider(this).get(MainViewModel.class);

        Button button = requireView().findViewById(R.id.button);
        button.setOnClickListener(v -> {
            EditText messageText = requireView().findViewById(R.id.messageText);
            MainFragmentDirections.ActionMainFragmentToSecondFragment action = MainFragmentDirections.actionMainFragmentToSecondFragment();
            action.setMessage(messageText.getText().toString());

            Navigation.findNavController(v).navigate(action);
        });
...
```
