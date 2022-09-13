# Udemy/Oak Academy: React TS First App

[Link to the course](https://www.udemy.com/course/typescript-react-js-course-with-react-typescript-project)

I'm just going to use the same repo for the entire course so I can use the GitHub issues

**Out of date**: Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. [Learn more](https://reactjs.org/link/switch-to-createroot)

Lesson 12: Glad I'm not skipping remedial sections. This is actually interesting. On [Babel's website](https://babeljs.io/repl), they have an ES6 -> super vanilla JS converter that translates code in real time.

Lesson 12: the HTML attributes _for_ and _class_ need to be _htmlFor_ and _className_ respectively

Lesson 13: 'youll see this error eventually' Uncaught Error: Objects are not valid as a React child (found: object with keys {text}). If you meant to render a collection of children, use an array instead.

BLOG POSTS starts with branch _section-03_

Section 3: could've used an array for the card component calls

HEMISPHERE DISPLAY starts with branch _section_04_

Lesson 30: Rules of a class based component

1. must be a JS class
1. must extend React.Component
1. must define a _render_ method

Lesson 31: State Rules

1. state only usable w/ class components
1. state is a JS obj that contains data relevant to a component
1. updating state on a component causes the component to rerender
1. state must be initialized when a component is created
1. **state can only be update using the function _setState_**

Lesson 33: Lifecycle Methods Overview

1. JS file loaded up browser
1. App component gets created
1. Constructor function gets called
1. _this.state_ property assigned the state object
1. we call geolocation service
1. react calls the components render method
1. App returns JSX, gets rendered to page as HTML
   after some period of time
1. we get results of geolocation request
1. we update our state obj w/ _this.setState_
1. React calls _render_ method a second time
1. _render_ method returns some JSX
1. React takes that JSX and updates the content on the screen
