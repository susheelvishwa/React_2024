In this particular lecture we cover only useRef Hooks

># iwhere we use useref

 - so whaen we need to stop re render this thing there we can use useRef
 - when we need to catch the input tag or dom element so there we can use it (Accessing DOM Elements: You can use it to directly interact with DOM elements in a React way.)
 - 


### What is `useRef`?

is is also a function
it is also hook


`useRef` is a React Hook that allows you to reference a value that doesn't trigger a re-render when changed. Think of it as a "box" where you can keep a value safe and sound, and you can peek into it whenever you want without causing any commotion in your component.


```javascript
const myRef = useRef(initialValue); 
// This useRef returns { current: initialValue }
```
### Returns

- `useRef` returns an object with a single property:
- `current` : Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current propert


# useRef Vs useState :

### Why not just use `useState`?

Great question! The main difference between `useState` and `useRef` is that `useState` will cause your component to re-render when the state changes. `useRef` doesn't do that. It's like a silent ninja, keeping your value safe without making a fuss.

# useRef - use cases :

1. **Accessing DOM Elements**: You can use it to directly interact with DOM elements in a React way.
2. **Storing Instance Variables**: For example, if you're building a timer, you can store the interval ID in a ref.


### A Quick Recap :

`useRef` allows you to create a mutable object that keeps the same reference between component renders. This object has a property called `current`.

**Key Characteristics**

1. **Persistence**: The value inside `useRef` persists throughout the component's lifecycle.
2. **Not Triggering Rerenders**: Unlike `useState`, changing a `useRef` does not cause the component to rerender.

**Why useRef :** 

1. **Accessing DOM Elements**: Directly manipulate DOM elements for focus management, measurements, etc.
2. **Storing Previous State**: You can use `useRef` to store the previous state or props. Useful for comparison with current state or props.
3. **Storing Values** : It could be any values like values derived from complex calculations to storing a basic interval id .

**Real World Examples :**

1. **Form Input Focus**: Automatically focus a text input when a component loads.
2. **Animation**: Keep track of animation frames in a component.
3. **Comparing Props**: Compare current props with previous ones to decide on rendering logic.
4. Building Custom Element say a custom video player and managing it
5. Storing interval ids and persist across re-renders
6. Building custom components like Pin Component above

**Syntax :**

Here's how to use `useRef`:

1. **Importing useRef**: `import { useRef } from 'react';`
2. **Initialization**: `const myRef = useRef(initialValue);`
3. **Accessing Ref**: Use `myRef.current` to access the stored value.