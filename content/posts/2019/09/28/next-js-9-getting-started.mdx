---
slug: 'next-js-9-getting-started'
title: 'Next.js 9: Getting Started'
date: '2019-09-28T04:34:32.277Z'
published: true
author: 'Chris Bailey'
tags:
  - 'react'
  - 'webdev'
  - 'javascript'
  - 'node'
  - 'nextjs'
---

### What is, and Why use Next.js

Next.js is a server-side rendered zero-config react framework created by Zeit. It also comes with
plenty of neat things out of the box like CSS-in-JS, static exporting, and new in next.js 9 API
routes.

You should look into using Next if you have some knowledge of react and want a zero-config
server-side rendered framework. I'd likely avoid it for statically rendered sites and just go
straight to Gatsby, but for more dynamic apps I feel next would be one of the best paths to look into.

### How do we get started?

Bootstrapping your next project is as easy as running `bash•yarn create next-app hello-world`. this gives
us a simple starting structure for our project, much like create-react-app would.

Now lets `bash•cd` into our new drive and take a peek around!

```bash
➜ cd hello-world && ls
components  node_modules  package.json  pages  static  yarn.lock
```

Things should look pretty similar here, we have a package.json, components directory, and a static
directory. Each do as you would expect, but lets dive into each.

**package.json**:

```json
{
  "name": "hello-world",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "9.0.7",
    "react": "16.10.1",
    "react-dom": "16.10.1"
  }
}
```

We're set up with the three basic dependencies needed to run a Next.js app: next, react and react-dom. And a few scripts to work with:

1. "next dev" which starts up a development server w/ hot reloading.

```bash
➜ yarn dev
yarn run v1.17.3
$ next dev
[ wait ]  starting the development server ...
[ info ]  waiting on http://localhost:3000 ...
[ ready ] compiled successfully - ready on http://localhost:3000
[ wait ]  compiling ...
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

[ ready ] compiled successfully - ready on http://localhost:3000
```

2. "next build" to build our app for deployment

```bash
➜ yarn build
yarn run v1.17.3
$ next build
Creating an optimized production build

Compiled successfully.

Automatically optimizing pages

Page            Size     Files  Packages
┌ ⚡ /           19.3 kB      1         3
├   /_app       222 kB       0         3
├   /_document
└   /_error     1.96 kB      0         3

σ  (Server)       page will be server rendered (i.e. getInitialProps)
⚡  (Static File)  page was prerendered as static HTML

✨  Done in 5.90s.
```

3. "next start" to run the app w/o any of the development features.

```bash
➜ yarn start
yarn run v1.17.3
$ next start
> Ready on http://localhost:3000
```

**components/nav.js**:

```jsx
import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>...</style>
  </nav>
)

export default Nav
```

A simple navbar with a few new things from basic react, one being `js•next/link`, for now, we'll just note this and come back later and talk about specific things next gives us to make life a bit easier.

**static/**:

```bash
➜ ls static/
favicon.ico
```

This one is simple enough, it's a folder for static assets and from start only contains the faveicon.ico for boilerplate from zeit.

**pages/index.js**:

```jsx
import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/static/favicon.ico" importance="low" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Welcome to Next.js!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className="row">
        <a href="https://nextjs.org/docs" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Learn more about Next.js in the documentation.</p>
        </a>
        <a href="https://nextjs.org/learn" className="card">
          <h3>Next.js Learn &rarr;</h3>
          <p>Learn about Next.js by following an interactive tutorial!</p>
        </a>
        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          className="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on the Next.js GitHub.</p>
        </a>
      </div>
    </div>

    <style jsx>...</style>
  </div>
)

export default Home
```

First lets note the location `js•pages/index.js` this is a special directory in Next.js that creates a route for any file (valid components) places inside of it. So in case of the boilerplate, it's created the index route for our application.

Inside the file things should look pretty similar, it just a standard react component exported as `js•default`. It's using the special `js•next/head` feature to set the page header with the favicon from previously mentioned static directory and set the page title.

And like that, we have a ready to go next project structure to start adding to and creating our fantastic web apps! Which is as simple as adding new files into the pages directory with our desired pages built around react components!

### Up Next

In coming posts, we'll dig further into what makes next special and features it provides for us out of the box. I'll continue working off this starter project and adding things throughout the series.
