how reducer work 

---> Step 1 
    Increment button clicked

---> Step 2
    HandleIncrement event handle got called

---> step 3
    dispatch({
      type:"INCREASE_count"
    }) 
    // dispatch describe user action/ intent

---> Step 4
    Reduce(state , action)
    // return some value;

---> Step 5
    That  Value will wil you state 