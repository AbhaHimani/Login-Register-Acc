import React from "react";
import Form from "./Form";
import Login from "./Login";

var userIsRegistered = true;
function Isregistered() {
  if (userIsRegistered === true) {
    return Form();
  } else {
    return Login();
  }
}
function App() {
  return <div className="container">{Isregistered()};</div>;
}

export default App;
