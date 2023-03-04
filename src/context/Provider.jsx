import React from 'react'
import { createContext ,useState} from 'react'
export const Mycontext = createContext();
export default function ProviderContext({children}) {
    const [nav, setNav] = useState(false);
    const [player,setPlayer] = useState({});
    const hndlePlayer = (item)=>{
       setPlayer(item);
    }
    const handleNavbarToggle = ()=>
    {
      setNav(!nav);
      document.body.classList.toggle('over');
    }
  return (
    <Mycontext.Provider value={{nav, handleNavbarToggle,player,hndlePlayer}}>
       {children}
    </Mycontext.Provider>
  )
}
