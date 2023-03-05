import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
import GlobalStyle from "./global_styles"
import ProviderContext from "./context/Provider"
import { useState,useEffect } from "react";
import { signInWithPopup} from "firebase/auth";
import { auth,provider } from './login/config';
import SignUp from "./login/SignUp";
import Player from "./audio/Player"
function App() {
  const [value,setValue] = useState(null);
  const [img,setImg] = useState(null);
  const [m,setM] = useState(null);
  const handleLogin = ()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.displayName);
      setImg(data.user.photoURL);
      setM(data.user.email);
      console.log(data);
          localStorage.setItem("name",data.user.displayName);
          localStorage.setItem("img",data.user.photoURL);
          localStorage.setItem("email",data.user.email);
      })
    }
  useEffect(()=>{
    setValue(localStorage.getItem("name"));
    setImg(localStorage.getItem("img"));
    setM(localStorage.getItem("email"));
  },[])
  return (
    <div className="App"> 
      {
        value ?  <Spotify name = {value} img = {img} m = {m}/> : <SignUp googleAuth = {handleLogin} />
      }
    </div>
  );
}
function Spotify({name,img,m}){
  return(
     <div>
        <ProviderContext>
          <GlobalStyle />
          <Header name = {name} img = {img} m = {m} />
          <div className = "row">
              <Nav name = {name} grid = "col-md-2"/>
              <Home grid = "col-md-10"/>
          </div>
          <Player />
      </ProviderContext>
     </div>
  );
}
export default App;
