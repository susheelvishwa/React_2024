># -------------------- Axios -------------------

>## Axios

## Introduction to Axios

Axios is a popular JavaScript library used to make HTTP requests. It can be used in both browser and Node.js environments and offers a wide range of features to handle requests and responses.

# Axios Introduction

## What is Axios?

Axios is a promise-based HTTP client for JavaScript, widely used to make HTTP requests from the browser or Node.js. It provides a simple and convenient API for performing CRUD operations on web services.

## Key Features

- **Promise-based**: Axios uses Promises, allowing you to write asynchronous code more efficiently.
- **Client-side & Server-side**: It can be used in both client-side applications (browsers) and server-side applications (Node.js).
- **Interceptors**: Allows you to intercept requests or responses before they are handled by then or catch.
- **Request/Response Transformation**: You can transform request data before it is sent or transform response data before it is passed to then/catch.
- **Cancel Requests**: You can cancel requests using the `CancelToken` API.
- **Automatic JSON Data Transformation**: Automatically transforms JSON data when making requests or receiving responses.
- **CSRF Protection**: Supports CSRF protection.


## Setting Up a React Project with VITE

1. **Create a VITE React Project**:

```
- npm create vite@latest my-axios-app -- --template react
- cd my-axios-app
- npm install
```

2. **Install Axios**:

```
npm install axios
```

## Basic Axios Methods

Axios provides methods corresponding to HTTP methods:

- `axios.get(url[, config])`: For GET requests.
- `axios.post(url, data[, config])`: For POST requests.
- `axios.put(url, data[, config])`: For PUT requests.
- `axios.patch(url, data[, config])`: For PATCH requests.
- `axios.delete(url[, config])`: For DELETE requests.


### The Config Object

The `config` object in Axios allows you to configure your request with headers, query parameters, timeout settings, etc.

## Setting Up JSON-Server for a Fake Backend

1. **Install JSON-Server**:

```
npm install -g json-server
```

2. **Create a Fake Database:**
- Create a file named db.json in your project root with the following content:

```javascript
{
  "posts": [
    { "id": 1, "title": "Post 1", "description": "Description of post 1" },
    { "id": 2, "title": "Post 2", "description": "Description of post 2" }
  ]
}
```

3. **Start JSON-Server**:

```
json-server --watch db.json --port 3001
```

## Making Requests to JSON-Server

### 1. GET Request
Fetch all posts:

```javascript
import axios from 'axios';

function fetchPosts() {
  axios.get('<http://localhost:3001/posts>')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => console.error('Error fetching posts:', error));
}
```

### 2. POST Request
Add a new post:

```javascript
function addPost() {
  const newPost = {
    title: "New Post",
    description: "Description of new post"
  };

  axios.post('<http://localhost:3001/posts>', newPost)
    .then(response => console.log(response.data))
    .catch(error => console.error('Error adding a post:', error));
}
```

### 3. PUT Request
Update an entire post:

```javascript
function updatePost(id, updatedPost) {
  axios.put(`http://localhost:3001/posts/${id}`, updatedPost)
    .then(response => console.log(response.data))
    .catch(error => console.error('Error updating post:', error));
}
```

### 4. PATCH Request
Update part of a post:

```javascript
function patchPost(id, patchData) {
  axios.patch(`http://localhost:3001/posts/${id}`, patchData)
    .then(response => console.log(response.data))
    .catch(error => console.error('Error patching post:', error));
}

```

### 5. DELETE Request
Delete a post:

```javascript
function deletePost(id) {
  axios.delete(`http://localhost:3001/posts/${id}`)
    .then(() => console.log('Post deleted'))
    .catch(error => console.error('Error deleting post:', error));
}
```









