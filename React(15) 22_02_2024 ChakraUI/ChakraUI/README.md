># Introduction to Chakra UI

```
Chakra UI is a modern, React-based library that offers a range of accessible, reusable, and composable UI components. It's designed to be simple and modular, allowing developers, especially beginners, to build beautiful, responsive websites with ease. Chakra UI stands out for its simplicity and focus on productivity, making it an excellent choice for those new to web development.
```

># Some important basics to be cover

1. Setting up Chakra UI in a react project
2. Topics
    1. Components in Chakra UI
    2. Style Props and Responsiveness
    3. Hooks in Chakra UI
    4. How to customise theme in Chakra UI

>## Setup in a React Project Created with VITE

1. **Creating a New VITE Project**:
If you haven't already, start by creating a new React project using VITE:

```
npm create vite@latest my-chakra-app -- --template react
cd my-chakra-app
```

2. **Installing Chakra UI**:
Inside your project directory, install Chakra UI and its peer dependencies:

```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

3. **Setting Up Chakra UI**:
In your main.jsx or index.js, wrap your application in the ChakraProvider component to provide context:

```Javascript
import { ChakraProvider } from "@chakra-ui/react"
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
```

># https://v2.chakra-ui.com/getting-started


>## Components in Chakra UI

Chakra UI offers a variety of components. Here are some commonly used ones:

1. **Button**:
    - Usage: `<Button colorScheme='blue'>Button</Button>`
    - It's a basic interactive element for form submissions or user actions.
2. **Box**:
    - Usage: `<Box p={5} color='white' bg='blue.500'>Welcome</Box>`
    - Acts as a div tag but with Chakra UI styling props.
3. **Flex** and **Grid**:
    - Usage:
        - Flex: `<Flex align='center'>...</Flex>`
        - Grid: `<Grid templateColumns='repeat(5, 1fr)' gap={6}>...</Grid>`
    - These components are used for layout structure.
4. **Input**:
    - Usage: `<Input placeholder='Enter text' />`
    - For user input fields.
5. **Text**:
    - Usage: `<Text fontSize='xl'>Hello World</Text>`
    - To display text with various styling options.
6. **Stack**:
    - Usage: `<Stack direction='row' spacing={4}>...</Stack>`
    - Helps in managing layout and spacing of child components.


># https://v2.chakra-ui.com/docs/components


>## Style Props and Responsiveness

In Chakra UI, style props are a powerful feature that allows you to apply styles directly to components using props. This approach is inspired by the idea of "style as props", which makes styling more intuitive and efficient, especially for React developers. Let's delve into the details.

## Understanding Style Props in Chakra UI

### Basics of Style Props

- **Inline Styling Made Easy**: Chakra UI's style props let you style components directly in the JSX code, similar to inline styles in HTML but more powerful.
- **Responsive Design**: You can use array syntax or object syntax to apply different styles at various breakpoints, making it easier to build responsive designs.
- **Theming**: Style props are tied to Chakra UI's theme, ensuring consistency across your application.


### Common Style Props Categories

1. **Layout Props**: Like `width`, `height`, `display`, `overflow`, etc.
<Box width="100%" height="50px" overflow="hidden"></Box>

2. **Color and Background**: Such as color, `bg`, `backgroundColor`, etc.
<Text color="red.500" bg="yellow.100">Hello, Chakra!</Text>

3. **Typography**: Like `fontSize`  , `fontWeight`, `lineHeight`, `textAlign`, etc.
<Text fontSize="lg" fontWeight="bold" lineHeight="short">Bold Text</Text>

4. **Spacing**: Including `margin`, `padding`, `space`, etc.
<Box m={4} p={5}></Box> {/* m for margin, p for padding */}

5. **Flexbox and Grid**: Props to control flex and grid layouts like `justifyContent`, `alignItems`, `gridGap`, etc.
<Flex justifyContent="center" alignItems="center"></Flex>

6. **Borders**: Such as border, borderRadius, borderColor, etc.
<Box border="1px solid" borderColor="gray.200" borderRadius="md"></Box>



### Responsive Styling with Array Syntax

Chakra UI allows you to define responsive styles using an array syntax where each element corresponds to a breakpoint:

<Box width={['100%', '75%', '50%', '25%']} p={[1, 2, 4, 8]}>
  {/* Width and padding will change based on the screen size */}
</Box>

># Responsive `<Box>` Component

## Overview
The `<Box>` component is a generic container component provided by the library. It's similar to a `<div>` but comes with built-in styling capabilities.

>## Responsive Properties

### Width
The `width` property can be defined using a responsive array. It will change based on the screen size:

- `'100%'`: for the smallest screen size (e.g., mobile devices).
- `'75%'`: for the next breakpoint (e.g., small tablets).
- `'50%'`: for the next breakpoint (e.g., large tablets or small laptops).
- `'25%'`: for the largest screen size (e.g., desktops).

### Padding
The `p` property (short for `padding`) can also be defined using a responsive array. It will change based on the screen size:

- `1`: for the smallest screen size (e.g., mobile devices).
- `2`: for the next breakpoint (e.g., small tablets).
- `4`: for the next breakpoint (e.g., large tablets or small laptops).
- `8`: for the largest screen size (e.g., desktops).

## Example
```jsx
<Box width={['100%', '75%', '50%', '25%']} p={[1, 2, 4, 8]}>
  {/* Width and padding will change based on the screen size */}
</Box>


> ## Hooks in Chakra UI :

Chakra UI provides a set of custom React hooks that make it easier to manage various UI states and behaviors. Let's discuss two popular hooks: `useDisclosure` and `useToast`.
```

### 1. `useDisclosure`

This hook is commonly used for handling open-close actions for modals, drawers, or any expandable components. It provides a convenient way to control the visibility of such components.

- **Methods and Properties**:
    - `isOpen`: A boolean indicating if the component is open.
    - `onOpen`: A function to open the component.
    - `onClose`: A function to close the component.
    - `onToggle`: A function to toggle the component's open state.

### . `useToast`

`useToast` is another powerful hook that Chakra UI provides for showing toast notifications. It's a great way to give feedback or information to users after an action.

- **Usage**:
    - You can customize the appearance, duration, and position of the toast.
```


# Use-case & Benefits
```
- **Accessibility**: Built with accessibility in mind, ensuring your site is user-friendly for everyone.
- **Responsive Design**: Components are responsive, making your website look great on any device.
- **Customizability**: Easily customizable to fit your design needs.
- **Productivity**: Speeds up the development process with its out-of-the-box components.

## Real-World Examples

- **Portfolio Websites**: Using Chakra UI to create stunning, professional portfolio sites.
- **E-commerce Platforms**: Build interactive product listings and cart functionalities.
- **Blogs**: Design a clean, readable blog layout with ease.
