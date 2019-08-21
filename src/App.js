import React from "react";
import { Provider } from "react-redux"; //O Provider passará o stado do redux para todos os componentes que estão dentro dele
import store from "./store";

import "./config/ReactotronConfig";

console.tron.log("testando");

const App = () => (
  <Provider store={store}>
    <h1>Hello World</h1>
  </Provider>
);

export default App;
