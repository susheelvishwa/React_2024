!st thing we need to 

1. context api globle state
2. whether context api state management tools or not
3. what  is the deference to context api and Redux


1. Why redux come into a Picture


># -------------------- Redux -------------------

># 1. Why redux come into a Picture and History of Redux, MVC pattern, Flux

![](./example1/src/assets/image1.png)


```
View : Something that the user sees and interacts within an application.
A presentational layer, Ul logic
```

![](./example1/src/assets/image2.png)


```
Controller : Contains the state/data related logic that runs the application. 
It can be independent too, without views
```
![](./example1/src/assets/image3.png)


```
- Interface between the model and views. 
- It interacts with the views and updates the model.
- External actions can trigger the controller too.
```
![](./example1/src/assets/image4.png)

># Scalability issue of MVC structure

![](./example1/src/assets/image5.png)

># Flex

![](./example1/src/assets/image6.png)





Explanation
Actions:

addTodo, removeTodo, and toggleTodo are action creators that return action objects with a type property and an optional payload.
Reducer:

todoReducer manages the state of the to-dos. It listens for ADD_TODO, REMOVE_TODO, and TOGGLE_TODO actions to update the state accordingly.
Store:

The Redux store is created using the rootReducer, which combines multiple reducers. It holds the state of the application.
Provider:

The Provider component from react-redux wraps the entire application, making the Redux store available to all components.
React Components:

AddTodo component handles the addition of new to-dos by dispatching the addTodo action.
TodoList component displays the list of to-dos and handles the removal and toggling of to-dos by dispatching removeTodo and toggleTodo actions.