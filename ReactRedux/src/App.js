import React from 'react'
import './App.css';
import IncreaseBtn from "./IncreaseBtn";
import DecreaseBtn from "./DecreaseBtn";
import ViewResults from "./ViewResults";
import {Provider} from 'react-redux'
import {store} from "./store";


function App() {
  return (
    <Provider store={store}>
<IncreaseBtn/>
<DecreaseBtn/>
<ViewResults/>
    </Provider>
  );
}

export default App;
