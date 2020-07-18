---
title: "jQuery"
slug: "jquery"
date: 2019-02-08T12:23:12-05:00
toc: false
images:
tags:
  - "javascript"
---

> jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.
>
> --[jQuery](http://jquery.com/)

jQuery is a powerful and robust JavaScript library for the web. It can greatly simplify the amount of code we need to write and in turn make our lives much easier. It's not always needed as some of its capabilities are not much quicker than just writing the JavaScript ourselves. You can take a look at [You Might Not Need jQuery](http://youmightnotneedjquery.com/) to get an idea if it's right for you.

### Reasons to use jQuery

It fixes/fixed the broken DOM API when originally released. It's shorter, clearer and easier to use, automatically handles cross browser support for you, which when doing on your own can be messy and tedious, and AJAX support. It's a popular framework that many people use; meaning there is a huge network on the web of resources to go through for help.

### Why not use jQuery

The DOM API is no longer broken, things like `.querySelector` and `.querySelectorAll` now exist in the DOM API so jQuerys use case here is voided. It doesn't do anything you can't do on your own; it's heavy for small use cases like animation when you can find lighter libraries to handle these for you.

Either way, it's worth knowing. Having the knowledge is useful because many places still use it and having that (or any additional) skill in your quiver will always be helpful.

## Basics

Including jQuery in your project is as simple as linking any JavaScript file:

```html
/* locally */
<script type="text/javascript" src="jquery.js"></script>

/* CDN */
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32oNMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"
></script>
```

### selecting and css with jQuery

`$("selectorGoesHere")` much like `.querySelectorAll` is used as our method for selecting all types of an element. Once selected we have the option of using `.css(property, value)` for changing the style on the selected elements.

### methods

`.text()` return same content as `.textContent()` would in vanilla JavaScript, all of the text (including html tags) inside of a selected element. It also allows you to write new content into the element, but cannot input html code.

`.html()` same as `.text()` except you can now include html code into the new content add through the `.html()` method.

`.attr()` allows us to retrieve an attribute and/or set it. and example would be changing the `src` attribute of an `img` tag like so `$("img").attr("src", "http://fake.img/new.png");`
`.val()` returns value of a selected element. Can also be used to set value of an element.

`.addClass()` `.removeClass()` `.toggleClass()` self explanatory here; add, remove or toggle a class on a selected element or group of elements.

## Events

`.click(function())` how too quickly and easily add click listener to an element or group of elements.

NOTE: when using on group of objects when referring to clicked item in the function you will need to use the jQuery version of `this` which is just `$(this)` . This goes for any instance of when you'll want to use a jQuery method on `this` .

`.keypress()` is a way to add a keypress event listener to an element, `.keydown()` and `.keyup()` also exist. Down fires when you press a button, up fires when released, and press fires in-between key down and key up usually.

`.on()` works similarly to `.addEvenListener` by allowing you specify a type of event to listen for. `.on("click"` will also be more useful than `.click()` most of the time due to it also working for elements that also ready exist, plus those that do not at time of page loading...

## Effects

`.fadeOut() .fadeIn() .fadeToggle()` fade out/in/toggle an element, and gives the option to add a speed, and callback.
