import React from 'react'
import logo from "../images/logo.png"
import { Head, Button } from './styles'
import { useContext } from 'react'
import {Mycontext} from "/Users/abenheni/Desktop/Spotify_Clone_V1/src/context/Provider.jsx"

export default function Header() {
  const {handleNavbarToggle} = useContext(Mycontext);
  return (
    <div>
        <Head className='row'>
            <div id='logo' className='col-2'>
                <a href='#'> 
                     <img src= {logo}/>
                </a>
                     <span
                     onClick={handleNavbarToggle}
                     class="material-symbols-outlined" id='icon'>
                           menu_open
                     </span>
            </div>
            <div className='arrows col-5'>
                <span className = "material-symbols-outlined"> 
                        chevron_left
                </span>
                <span className = "material-symbols-outlined">
                        chevron_right
                </span>
            </div> 
            <div id='registre'className='col-5'>
               <div>
                    <Button dark>sign in</Button>
                    <Button>sign up</Button> 
               </div>
            </div>
        </Head>
    </div>
  )
}
