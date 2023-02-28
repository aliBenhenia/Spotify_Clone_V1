import React from 'react'
import { createContext ,useState} from 'react'
export const Mycontext = createContext();
export default function ProviderContext({children}) {
    const [nav, setNav] = useState(false);
    const handleNavbarToggle = ()=>
    {
      setNav(!nav);
      document.body.classList.toggle('over');
    }
  return (
    <Mycontext.Provider value={{nav, handleNavbarToggle}}>
       {children}
    </Mycontext.Provider>
  )
}
