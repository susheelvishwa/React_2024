# Why Use Vite for React ?

1. *Speed* : Vite significantly speeds up the development process. It uses ES Modules, which allows your browser to understand your JavaScript code directly without extensive processing.

2. *Hot Module Replacement (HMR)* : Vite offers a faster HMR, which means you can see your changes in real-time without refreshing the entire page or losing the current state.

3. *Simplicity* : Setting up a React project with Vite is straightforward, requiring minimal configuration.

4. *Modern JavaScript* : It's built to work with the latest JavaScript features, making your development process smoother.

--------------------------------------------------------------------------------------


# Step-by-Step Guide :

1. *Install Node.js*: Ensure you have Node.js and npm installed on your computer. You can check your current node and npm version by
    -   node - v;

2. *Create a New Project*: Open your terminal and run:
    -   npm create vite@latest <name-of-project> -- --template react

3. *Navigate to Your Project*:
    -   cd <name-of-project>

4. *Install Dependencies*:
    -   npm install

5. *Start the Development Server*:
    -   npm run dev

--------------------------------------------------------------------------------------


#   Understanding the Project Structure

    After creating your project, you'll notice several files and folders:

1.  *node_modules/*: Contains all the packages and dependencies your project needs.
2.  *public/*: Stores static assets like images.
3.  *src/*: This is where you'll spend most of your time. It contains your React components.
    3.1 *App.jsx*: The main React component.
    3.2 *main.jsx*: The entry point for your application, where React is rendered into the DOM.
4.  *index.html*: The base HTML file.
5.  *vite.config.js*: The configuration file for Vite, typically requiring little to no changes for basic projects.
6.  *package.json*: Lists your project dependencies and scripts.

--------------------------------------------------------------------------------------


##  Good Conventions

1.  Use PascalCase in components:

    function TodoItem(){
        ...
    }

2.  Use camelCase for JavaScript data types like variables, arrays, objects, functions, etc.

    const getLastDigit = () => { ... }
    const userTypes = [ ... ]

3.  Use camelCase for folder and non-component file names and PascalCase for component file names

    src/utils/form.ts
    src/hooks/useFetch.ts
    src/components/navbar/Logo.tsx

--------------------------------------------------------------------------------------


# Avoid default export especially when you have big projects and multiple collaborators

    When you use default exports in JavaScript, you can import them with any name you want. This gives you flexibility, but it can lead to confusion if different developers import the same module with different names.

        -   Don't do this
        -   export default MyComponent;

        -   Do this instead
        -   export { MyComponent };

--------------------------------------------------------------------------------------
