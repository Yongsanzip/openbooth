import React from 'react';
import './App.css';
import { useHistory } from "react-router-dom";
import Main from './page/main'

function App() {
  return (
    <div id='app' className="App">
      <Main history={useHistory()} />
    </div>
  );
}

export default App;
