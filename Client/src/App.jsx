import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store'; 


import "./App.css";
import "./Log_In.css";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import Story_index from "./pages/Story_index";
import Story_View from "./components/Story_View";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sign_In.css";
import "./App.css";

function App() {


  return (
    <div>
      <Router>
          <Routes>
          <Route path='/' Component={Login} exact />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
