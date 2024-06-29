># -------------------- Lifestyle of react components -------------------

# Lifecycle of rect components

- Mount event/Phase : Atteched to the UI (Inital render/ Task1 got mounted to UI)
- Update event/Phase
- Unmount event/Phase

# what is sideEffect :

1.  sideEffect is nothing but operations that require you    to  go and interact with external world (APIs)

    - Browser APIs
    - Localstorosge 
    - settimeout
    - setinterval
    - server
    - External Api
    - Track user data ussing (external Api)

2.  so we can say that :
    *opration which reqire you to go outside the scope of your component its calld sideeffect*

3.  In React projects, we perform side effect lot of time. so side
    effect is not a bad thing.

4.  How we handle this side effect matter a lot. if we do not handle
    properly, your application will have problems/bugs ...

5.  Side effects should not be perform during the render phase; you should not block 
    the render process

6.  React gives a hook(function)(useEffect), which handles side effect in react
    components properly.

7.  How useEffect will handle side effect ??
    - I will call it after the mount/ initial-render process is completed

    *useEffect*

    useEffect(callback- function) ---> useEffect (function(){},[])

    see in example3 --> card

    - useEffect(callback- function) ---> useEffect (function(){},[])
    - whatever side effects i want to perform can be performed here;
    - this callback function is called after the initial mount/initial render

    - this will be called after rendering is completed
    - useEffect(callback-function, Dependancy-array)
    - this callback function inside useEffect should be called
        only during mount phase;

    useEffect(function () {
        clickme();
    }, [])


# how apllicatiion work
// -->  click event
// -->  handlelnc
// -->  set Count (count + 1)
// -->  count value is updated
// -->  Component re-render;
// -->  ui gets update

