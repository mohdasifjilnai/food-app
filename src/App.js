import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useEffect, useState } from "react";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";
function App() {
  const [userName,setUserName]=useState(null);
  useEffect(()=>{
    const data={
      name:'Asif jilani'
    }
    setUserName(data?.name)
  },[])
 console.log(userName?.name,'userName')
  return (
    <div>
    <Provider  store={appStore}>
    <UserContext.Provider value={{loggedIn:userName,setUserName}}>
    <Header />
    <Outlet></Outlet>
    <Footer />
    </UserContext.Provider>
    </Provider>
    
  </div>
  )
}

export default App;
