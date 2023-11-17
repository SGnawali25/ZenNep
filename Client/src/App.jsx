import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store'; 
import Loader from "./components/Loader";


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
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Tour_Display from "./pages/Tour_Display";
import Tour_FlashCard from "./components/Tour_FlashCard";
import Place_Info from "./pages/Place_Info";
import About_Nepal from "./pages/About_Nepal";
import Contact_Us from "./pages/Contact_Us";
import { loadUser } from "./actions/userActions";



function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  },[])

  return (
    <div>
      <Router>
        <Header/>
          <Routes>
          <Route path='/' Component={Signin} exact />
          <Route path='/login' Component={Login} exact />
          <Route path='/stories' Component={Story_index} exact />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
