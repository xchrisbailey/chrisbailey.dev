---
title: "Javascript Functions"
slug: "javascript-functions"
date: 2019-02-05T14:55:17-05:00
toc: false
images:
tags:
  - "javascript"
---

> Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.
>
> -[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

Functions are an important method for keeping code DRY and making things easily reusable through out the project.

Basic function syntax is something along the following lines:

```javascript
function myFunction(a, b) {
  return a + b
}

function myFunction2() {
  var a = 0
  return a
}
```

functions can also call other functions:

```javascript
function myFunction() {
  var a = 0
  return a
}

var num = 2

function myFunction2(a, b) {
  return a + b
}

myFunction2(myFunction(), num) // 2
```

Anonymous functions exist and are called at runtime with out any named identifer. They are flexible and can be assigned directly to a variable. There are two forms and they look like this:

```javascript
// Function Expression
var squared = function (num) {
  return num * num
}

// Arrow Expression
var cubed = num => {
  return num * num * num
}
```
