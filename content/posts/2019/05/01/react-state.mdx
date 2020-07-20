---
slug: 'react-state'
title: 'React: State'
date: '2019-05-01T16:57:30.468Z'
published: true
author: 'Chris Bailey'
tags:
  - 'react'
  - 'javascript'
  - 'nodejs'
  - 'webdev'
---

In most any modern web application the user interface will need to be stateful. Different users will see different things based on being logged in or not, different information will be fetched based on target users needs, and so on. The state is not fixed it can and will change throughout user interaction, an example would be moving pieces on a game board.

The state tracks a few things; on the UI end things like the navigation bar being opened or closed is stored in state, and on data end the information we're fetching, showing, editing, etc are also being stored in the state on a per-user basis. React handles this differently than what we used to with tools like JQuery, instead of working directly on the DOM in React we have a virtual DOM which is a copy of actual DOM that is edited and then transferred to the user once the work is finished.

### 🌱 Initializing state

In React state is an instance attribute on a component. State is stored in an object, making it always accessible by key-value pairs. State needs an initial value that is always set when a component is created. State is not mandatory in a component, but when it is needed/wanted a constructor must exist. Constructors take one argument `js•props` and need to register your class as a React component with `js•super(props)`. Next, we have the ability to set a default state by adding key-value pairs to `js•this.state`. A basic example will look something like this:

```javascript
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  render() {
    return <div>The count is: {this.state.count}</div>
  }
}
```

Access to the state values is obtained through `js•this.state` within the class we set our constructor up in.

### 🔧 Changing state values

Looking at it from the outside the easiest way to change state would be to just reassign the value like so `js•this.state.count = 1`. This is not correct and manipulating the state directly is not correct and should never be done.

React provides us with `js•setState()` for altering state values. It's an asynchronous operation that patches our state, and only changes the keys told to change, and everything else will state as is. You have the option of passing in an object directly, or a function into `js•setState()`. It's best to think of this operation as a request rather than an immediate command. React behind the scenes may delay the setState call so it can update a number of components at once to keep app performance at a maximum.

Any state change in React will trigger a re-render of the affected components. This keeps the app constantly up to date with the most recent information provided to it.

Let us take a quick look at a basic example of updating the counter with the `js•onClick` event listener:

```javascript
class App extends Component {
  constructor(props) {
    super(props)
    this.addOne = this.addOne.bind(this)
    this.state = {
      count: 0,
    }
  }

  addOne(e) {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        The count is: {this.state.count}
        <button onClick={this.addOne}>Add one</button>
      </div>
    )
  }
}
```

### 🎣 State with hooks

As of React 16.8 we have hooks! Which give us access to state managment inside functional components helping eleminate some of the performance hits from using classed based components. This is just a quick note on setting and editing state inside of functional components, I will write a longer post on hooks once I make it to that point in my learning path.

Setting state and the ability to alter it within functional components is now a rather easy process. We'll use new API method `js•useState()` within our component. Let us take a look at our counter example done with hooks and walk through the differences.

```javascript
import React, { useState } from 'React'

const App = () => {
  const [count, setCount] = useState(0)

  const addOne = () => {
    return setCount(count + 1)
  }

  return (
    <div>
      The count is: {count}
      <button onClick={addOne}>add one</button>
    </div>
  )
}

export default App
```

We first define our functional component `js•App`. We then create our default state for 'count' by using the `js•useState()` call and passing into it our default value for count '0'. It returns two items; our count, and the `js•setCount()` function that allows us to alter the associated state. We next create our addOne function that will call `js•setCount` and pass to it the current count + 1. React will then update our state and re-render the components needed.

### 💥 The end

this was a very basic overview of state in React. Following posts will go into more in-depth concepts and tools like global state with redux and hooks.
