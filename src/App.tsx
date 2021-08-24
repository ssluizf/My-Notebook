import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import Page from './components/Page'
import Wrapper from './layout/Wrapper';
import store from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Page />
      </Wrapper>
    </Provider>
  );
}

export default App;
