const redux = require("redux");

const initialState = {   
  counter: 0
};

//TODO: Reducer
const reducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === "SUB") {
    return {
      counter: state.counter - 1
    };
  }
  if (action.type === "ADD_NUMBER") {
    return {
      counter: state.counter + action.value
    };
  }
  return state;
};

//TODO: Store
const store = redux.createStore(reducer);
// console.log("1", store.getState());

store.subscribe(() => {
  console.log("Subscribe", store.getState());
});

//TODO: Actions
const addCounter = {
  type: "ADD"
};

store.dispatch(addCounter);

store.dispatch({ type: "SUB" });

store.dispatch({ type: "ADD_NUMBER", value: 5 });
