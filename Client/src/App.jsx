import { useState } from "react";
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
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <Header />
      </div>
      {/* <div>
        <Story_index />
      </div>
      <div>
        <Story_View />
      </div> */}
      {
        // <div>
        //   <Signin />
        // </div>
      }
    </div>
  );
}

export default App;
