># ------------------------ INTRODUCTION TO REACT -----------------------

# React Basics

# *React Intro* : https://masai-school.notion.site/Pre-Class-Notes-693d8d69424f46a3aa1541804705919c
# *Declarative vs Imperative Programming* :  https://masai-school.notion.site/Declarative-Vs-Imperative-Programming-dea4322876c4468191112449e6e82f26
# *JS and DOM Vs React and ReactDOM* : https://masai-school.notion.site/JS-and-DOM-Vs-React-and-ReactDOM-Let-s-talk-syntax-91217756141142ebb0f72a0e44fbef19
# *JSX-and-Babel*: https://masai-school.notion.site/JSX-and-Babel-e68c71979f424717bd0abfee79e6a027
# *More about JSX*: https://masai-school.notion.site More-about-JSX-Interpolation-Props-Attributes-Events-and-More-a41e03a8ebd849b2982efba5945ae773
-------------------------------------------------------------------------------------------------------

*Importance of Persistence:*
Key advice given was to not stop coding despite potential failures or difficulties, highlighting that challenges and setbacks are part of the learning process.


-------------------------------------------------------------------------------------------
*Introduction to React and ReactDom*
React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create large web applications that can change data without reloading the page. 

ReactDOM is a package that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements in the context of a React app.

-------------------------------------------------------------------------------------------

*Understanding JSX*
JSX is a syntax extension to JavaScript recommended by React to describe what the UI should look like. JSX may look like a template language, but it comes with the full power of JavaScript. JSX compiles into React eleme

```javascript
const element = <h1>Hello, world!</h1>;
```

JSX allows you to write HTML elements in JavaScript and place them in the DOM without any createElement() and appendChild() methods.

-------------------------------------------------------------------------------------------

*Element Rendering*
Elements are the smallest building blocks of React apps. An element describes what you want to see on the screen. Unlike browser DOM elements, React elements are plain objects, and are cheap to create. ReactDOM takes care of updating the DOM to match the React elements.

```javascript
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

-------------------------------------------------------------------------------------------

*Components and propes*

*Components* let you split the UI into independent, reusable pieces, and think about each piece in isolation. 
*Props* are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes.


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Susheel" />;
ReactDOM.render(element, document.getElementById('root'));

-------------------------------------------------------------------------------------------

*Handling Events*

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences: React events are named using camelCase, rather than lowercase. With JSX you pass a function as the event handler, rather than a string.

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

-------------------------------------------------------------------------------------------

