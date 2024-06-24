- Context API
- Routing
- useReducer

-----------------------------------------------------------------

- Build an application todo list. This application should have login page. Home page should only be visible if user is logged in, Otherwise redirect user to Login page.
we will be maintaining this authentication state in AuthContextProvider.

```
  - Page
      - Login
      - Home
```

### Login Page
  - Email input
  - Password Input
  - Submit Button - clicking on which developer should make a post request to https://reqres.in/api/login and pass in email and password. Save the response in AuthcontextProvider.

### Home Page
- Consume Token value from AuthContext and Display Token here in home
- Display a Text 'Todo List*
- A Logout button which will update the Authentication state in AuthContextProvider. This will logout user meaning, the authDetaiIs value will becomes

```
{
  isLoggedIn : false,
  token : ""
}
```


### AuthContextProvider
- Maintain authentication state

```
{
  isLoggedIn : false,
  token : ""
}
```