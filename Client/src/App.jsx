import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";

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

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Login} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
