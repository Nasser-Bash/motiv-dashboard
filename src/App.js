import React , {useState} from 'react'
import { BrowserRouter} from "react-router-dom";
import Layout from "./componets/layout/layout";
import Sidebar from "./componets/layout/Sidebar";
import Content from "./componets/layout/Content";
import MainRoutes from "./componets/mainRoutes";

function App() {
  const [isactive, setisactive] = useState();
  const handleClick =(active)=>{
    setisactive(active)
  }

  return (
    <div className="App">
       <div className="main-container d-flex ">
             <BrowserRouter>
                       <Content>
                            <Layout isactive={isactive} handleClick={handleClick} />
                            <MainRoutes/>
                        </Content>
              </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
