# Udemy/Oak Academy: React TS First App

[Link to the course](https://www.udemy.com/course/typescript-react-js-course-with-react-typescript-project)

**i know, i know... don't save API keys in version control**

**HUGE OUT OF DATE**

1. Matched leaf route at location "/" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.
1. 1. [fix: ](https://stackoverflow.com/questions/69854011/matched-leaf-route-at-location-does-not-have-an-element)
1. react_devtools_backend.js:4026 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
1. 1. fix... same link as above
1. the tutorial was getting undesired behavior, that needed a work around. the behavior was showing the HOME component regardless of which route was selected because it included a slash.
1. 1. the fix was to add _exact_ before _path_ in the Route
1. passing props to the _element_ since we aren't using _component_ as an JSX attr...
1. You don't need to use an exact prop on <Route path="/"> anymore. This is because all <Route> paths match exactly by default. [from](https://reacttraining.com/blog/react-router-v6-pre/)

**HUGER OUT OF DATE**
_history.push_ using props... huge breaking change in react-router-dom v6

```js
const navigate = useNavigate();
setTimeout(() => {
  navigate('/contact');
}, 1500);
```

## didn't need the SWITCH tag, it just worked

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

Lesson 35: Lifecycle Methods

1. constructor: good place for one time setup
1. render: just return JSX
1. _componentDidMount_: good place to load data
1. _componentDidUpdate_: good place to load more data when state/props change
1. _componentWillUnmount_: good place to do cleanup

Lesson 37:

Don't need constructor function to initialize state

Lesson 38:

We don't have to pass entire _props_ object. Destructure it for simpler code
\*note: fails if you have a latitude of 0... Test Cases, man...

Lesson 49:

Uncontrolled vs Controlled Input

dont store info in HTML elements, centralize in React state
good way to... ie... force UPPERCASE text

Lesson 50:

**most common React error message** Uncaught TypeError: Cannot read properties of undefined (reading 'state')

this - solution options

_this.onFormSubmit = this.onFormSubmit.bind(this);_ in the constructor

or

write event handler as an arrow function

Lesson 67:

render a modal, via PORTALS as a child of another element (besides #root)

## Section 11: React Context API and Hooks

1. Context API: clean & easy way to share states between different components
1. 1. makes communication between components easier
1. 1. a way to 'share state up & down the component tree easily'
1. 1. using props can get messy
1. 1. when used with HOOKS can be an alternative to REDUX
1. 1. no longer need to pass props down the tree
1. Hooks: allows us to do a 'whole bunch of stuff' inside functional components, that we cna only do inside class-based components like using staets or lifecycle methods

In the context file we are going to _createContext()_ and also create another component that's a class component, and inside have some STATES, and that state will be the data we want to share among different components

Whenever So when we create a context, we have to also create a provider which is basically a tag that surrounds whichever components we want to be able to use that context inside.

```js
<ThemeContextProvider>
  <Navbar />
  <TodoList />
</ThemeContextProvider>
```

The children are acceddisble to the Context Provider 'wrapper' as props
The children are returned as JSX when used as `{this.props.children}`
This context provider tag provides all the data in the `value={}` attr to its children

# _note_ holy crap, that was actually really COOL ^^^^

React dev tools:

```json
{
  "value": {
    "isDarkTheme": true,
    "lightTheme": {
      "text": "#222",
      "background": "#d8ddf1"
    },
    "darkTheme": {
      "text": "#fff",
      "background": "#5c5c5c"
    }
  },
  "children": ["<Navbar />", "<TodoList />"]
}
```

Lesson 76:

## [Further reading on context](https://reactjs.org/docs/context.html#contextconsumer)

consumer works in both functional and class-based components
consumer also allows consuming mulitple contexts per component

Lesson 77: it bears repeating. i really like how clean this Context API is... smooth and simple, yet powerful in its functionality

Lesson 80: HOOKS

1. special React functions that allow us to perform some operations in the functional component that were previously only possible in class-based
1. 1. using state
1. 1. life cycle methods
1. _useState()_ allows us to use STATE in functional comp
1. _useEffect()_ helps us render the component whenever we want
1. _useContext()_ allows us to use context in the functional comp

Lesson 86: I remain in awe of context.. also. the instructor did a great job of showing how to consume CONTEXTs in different manners
