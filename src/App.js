import React, { useEffect } from "react";
import "./App.css";
import MainContext from "./components/MainContent";
import { Provider } from "react-redux";
import { store } from "./serivces/store";

const App = () => {
  return (
    <Provider store={store}>
      <MainContext />
    </Provider>
  );
};

export default App;
