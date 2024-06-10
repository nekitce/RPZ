import './App.css';
import React, {useContext, createContext, useEffect, useState} from "react";
import Furniture from "./pages/Furneture";
import LoginPage from './components/LoginPage/LoginPage.js';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [Loading, setLoading] = useState(false)
  const [IdRest, setIdRest] = useState("")
  const AuthContext = createContext();

  return (
      <div className="App">
        <LoginPage>
          <Furniture />
        </LoginPage>     
      </div>
  );
}

export default App;
