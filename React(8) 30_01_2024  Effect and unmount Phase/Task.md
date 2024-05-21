# Task 1 ( 7 Mins ) :

- Your Task is to create an application which will get all the products from 
https://dummyjson.com/products , 
and 
- display those same product image ( first image available on images array ), title, description, price

# Task 2 ( 5 Mins )
• Now make an API request, get the data and display data during mount phase
• Handle Error and Loading states as well

# Task 3:

    - Your task is to create a component called StopWatch which will  just display text "StopWatch".
    - Import this component to App component
    - App component should also have
        - a boolean state value which will be used to hide/show this component StopWatch const [show,setShow] = useState()
        - StopWatch component will be rendered if show value is true and vice versa
        - A button which will toggle the state value show


# Task 4 :

    StopWatch component should contain an actual stop watch which starts from 0
    
    Whenever component is mounted to UI, it should start incrementing, basically 0 - 1 - 2 - 3 ..... ( Hint : use setInterval )


  // useEffect(function () {
  //   setInterval(function () {
  //     console.log("hello");
  //     setTime(time + 1)
  //   },1000);
  // }, [])

  # clean up function

# Task 5: 
Let’s build a fake chat application. Here we are simulating fake chat application.

# Cleanup functions during update phase

cleanup from previous useEffect will be called before the next update.. 