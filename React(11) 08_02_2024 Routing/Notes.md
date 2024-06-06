># Routing - Introduction, Installation & Setup,BrowserRouter, Routes, Route and Link

>## Introduction :

Routing basically means you navigate between different pages of your application.

>## Introduction to Routing in React with `react-router-dom` :

Routing in React enables navigation between different components in an application, simulating the experience of moving between pages in a multi-page web application. `react-router-dom` is a popular library that facilitates routing in React applications.

>## A quick overview of steps we are gonna follow to build an application using `react-router-dom` library

**Step 1 - Installation:**
To use `react-router-dom`, first, install it in your React project. If you're using Vite, create a new project and install `react-router-dom`:

```jsx
npm init vite@latest <application-name> -- --template react
npm install react-router-dom
```

**Step 2 - `BrowserRouter`:**`BrowserRouter` is a router implementation that uses the HTML5 history API to keep your UI in sync with the URL.

**Step 3 - `Routes` and `Route` Component:**`Routes` replaces the older `Switch` component and is used to declare routes in your application. `Route` components inside `Routes` define individual routes.

**Step 4 - `Link` Component:**`Link` is used for navigation within your app. It's similar to HTML's `<a>` tag but is designed for React Router.

**Step 5 - Dynamic Routes and `useParams` Hook:**
Dynamic routing is achieved using route parameters. `useParams` is a hook that allows you to access these parameters.

**Step 6 - `Navigate` Component and `useNavigate` Hook:**`Navigate` is a component used for redirecting to another route. `useNavigate` is a hook that programmatically navigates users around.

