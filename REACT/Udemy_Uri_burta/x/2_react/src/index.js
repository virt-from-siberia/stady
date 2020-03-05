import React from "react";
import ReactDOM from "react-dom";
import Time from "./Components/Time";
import ToDoList from "./Components/TodoList";
import AppHeader from "./Components/header";
import SearchPanel from "./Components/searchPanel";

const App = () => {
  const loginBox = <span>Log in Please</span>;
  const isLoggedIn = true;
  const welcomeBox = <h2>Welcome Back</h2>;
  return (
    <React.Fragment>
      {isLoggedIn ? welcomeBox : loginBox}
      <AppHeader />
      <SearchPanel />
      <ToDoList />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
