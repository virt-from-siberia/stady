import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Введите значение",
      name: "",
      age: "Введите значение"
    };
  }

  onSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return <div></div>;
  }
}

export default App;
