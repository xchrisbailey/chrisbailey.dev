---
slug: 'javafx-scene-switching'
title: 'JavaFX Scene Switching'
date: '2020-07-29T16:00:24.033Z'
published: true
excerpt: 'how to switch scenes in JavaFX with and without passing data'
author: 'Chris Bailey'
tags:
  - 'java'
  - 'javafx'
  - 'dev'
---

Inside our JavaFX application, we're usually not going to want to only rely on one scene to handle all of the flow of our application, so the problem will arise on how we switch to another scene, and how we send data to that scene. The most logical way I've found to accomplish this is by just swapping out the root scene wherever we currently reside in the application. There are two ways we're going to want to do this; a clean scene that needs not data sent across, and in a situation where we're going to need to initialize some data for the loading scene.

## 🧼Loading a scene with out data initialization

Here we'll work out how to load a scene that does not require any data to be sent across. This route is going to be fairly straight forward, and quite similar to how we initially bootstrap our application.

Let's create a little checklist to take a look at what we need to do:

- [ ] load the new scenes fxml
- [ ] assign the new fxml file to a scene
- [ ] get the application root stage
- [ ] load new scene into stage
- [ ] show the updated stage

A lot of this is going to look similar to initial bootstrapping in your main entry point so I will kind of fly through this. We start by creating a `java•Parent` that will load our target views `java•fxml` file. From here we create a `java•Scene` by passing along the `java•Parent` we created.

- [x] load the new scenes fxml
- [x] assign the new fxml file to a scene

This is where we diverge from basic loading, we need the Stage that was defined in the initial loading of the application, we can gain access to this from the `java•ActionEvent` that we will be passing down from the current scene we are attempting to leave. On the event passed down we can grab the events source as a `java•Node` , and from here drill down by next grabbing the `java•Scene` associated with it, and finally, the `java•Window` that the scene was loaded in (we will need to cast this to a `java•Stage` ).

- [x] get the application root stage

Once we have acquired the window we can set its scene to our target, and launch it by calling `java•.show()` .

- [x] load new scene into stage
- [x] show the updated stage

```JAVA
public static void loadScene(ActionEvent event, String fxmlFileName) throws IOException {
  Parent viewParent = FXMLLoader.load(getClass().getResource(fxmlFileName));
  Scene viewScene = new Scene(viewParent);
  Stage window = (Stage) ((Node) event.getSource()).getScene().getWindow();
  window.setScene(viewScene);
  window.show();
}
```

## 🧱Loading a scene with data initialization

Loading a scene that requires some data initialization is fairly similar to our previous example of loading a scene with out data, there are just a couple extra steps we'll need to sneak in that will allow us to call methods from that target scene controller before showing the window. Our checklist for this example will only add one extra step, but the code will have a few changes.

- [x] load the new scenes fxml
- [x] assign the new fxml file to a scene
- [ ] call data initialization method in target scene controller
- [x] get the application root stage
- [x] load new scene into stage
- [x] show the updated stage

After assigning our target fxml file to a `java•Scene` we will need to gain access to the target controller, by using a method on `java•FXMLLoader` called `java•getController()` . At this point we now have access to the controller and can call a method inside that handles the passed data, we'll call it 'initData'.

- [x] call data initialization method in target scene controller

```JAVA
public static void loadScene(ActionEvent event, String fxmlFileName, Person personOne)
    throws IOException {
  FXMLLoader loader = new FXMLLoader();
  loader.setLocation(getClass().getResource(fxmlFileName));
  Parent viewParent = loader.load();

  Scene viewScene = new Scene(viewParent);

  SecondController c = loader.getController();
  c.initData(personOne);

  Stage window = (Stage) ((Node) event.getSource()).getScene().getWindow();
  window.setScene(viewScene);
  window.show();
}
```

## 🎩 Tada!!

And there we have two basic examples of how you can load new scenes in your JavaFX applications. The first shows you how to load a new `java•Scene` without sending any data across, and the second covers a basic example of sending data to your new `java•Scene` to be initialized in its controller.
