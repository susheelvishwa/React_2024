const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "DELETE_TASK":
      return state.filter((todo) => todo.id !== action.payload);

    case "UPDATE_TASK":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, status: !todo.status } : todo
      );

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export default reducer;
