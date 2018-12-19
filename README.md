# React redux user management

This user management contains all the building blocks needed to build a modern full responsive website. In this project all the latest FE technologies like latest react 16,es6-7 features, redux for state management, Redux form for managing form with redux, redux-saga for maintaining side effect free code, Immutable.js to provide better performance, Reselect for fast select as well as caching are used.

## Setup

needs the following global tools to run:
* git - version control
* node.js - JS runtime and tooling middleware
* npm - node.js package manager

### First run

You can find the most current clone-URI on the [repository page](https://github.com/saswatawork/user-management.git) in GitHub.

Initial setup of the user management requires these steps:

1. Clone the git repo using `git clone https://github.com/saswatawork/user-management.git`

2. Install project dependencies using `npm install`

3. Run user management by executing `npm start` (this will automatically start user management in http://localhost:3000/)

---

## Project Layout

This project is based on [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate) which provides a lot of documentation regarding the project's libraries and components.

NOTE: For Boilerplate documentation please visit {https://github.com/react-boilerplate/react-boilerplate/tree/master/docs}

IMPORTANT: This section describes customizations made on top of react-boilerplate, it is imperative that you read the docs provided by [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate)  beforehand!

---

### Design Idea

In the entire project I tried to follow Atomic Design principle as much I can. Atomic design is methodology for creating design systems. In this methodology entire page is break into templates, templates into organism, organisms into molecules and Molecules into Atoms which we can not break anymore. For more details please visit {http://bradfrost.com/blog/post/atomic-web-design/}.

## Technology stack

### React js(16.6.0)
A JavaScript library for building user interfaces. For details please visit {https://reactjs.org/}

### Node js(>=8.10.0)
JavaScript runtime built on Chrome's V8 JavaScript. For details please visit {https://nodejs.org/en/}


### Bootstrap(4)
For building responsive, mobile-first sites quickly bootstrap is used. For details please visit {https://getbootstrap.com/docs/4.0/getting-started/introduction/}

### npm(>=5)
npm is the package manager for JavaScript. For details please visit {https://www.npmjs.com/}

### Redux(4.0.1)
A predictable state container for JavaScript apps. For details please visit {https://redux.js.org/}

### Redux Form(^8.0.4)
To connect React form component to Redux I used Redux form. For details please visit {https://redux-form.com/8.0.4/docs/gettingstarted.md/}

### Redux saga
To write side effect free code Redux saga used, it works in middleware. For details please visit {https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html}

### Reselect
Simple “selector” library for Redux. For details please visit {https://github.com/reduxjs/reselect}

### Immutable
To provide better performance facebook developed Immutable library used. For details please visit {https://facebook.github.io/immutable-js/}

### Mock API
For mock API https://reqres.in/ used.
