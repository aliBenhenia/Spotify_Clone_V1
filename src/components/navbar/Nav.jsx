import React from 'react';
import { BarElement } from './styles';
import { useContext } from 'react';
import { Mycontext } from '../../context/Provider';
export default function Nav({grid,name}) {
  const {nav} = useContext(Mycontext);
  return (
   <div className = {grid}>
    <div className='ConatinerNav' 
    id = {nav ? "dis" : "hide"}
    >
        <BarElement>
           <ul>
                <li>
                    <a href='#'>
                         <span className= "material-symbols-outlined">
                             home
                         </span>
                         <p>{name}</p> 
                    </a>
                </li>
           </ul>
        </BarElement>
        <BarElement> 
           <ul>
                <li>
                    <a href='#'>
                         <span className= "material-symbols-outlined">
                            search
                         </span>
                         <p>Search bar </p> 
                    </a>
                </li>
           </ul>
        </BarElement>
        <BarElement> 
           <ul>
                <li>
                    <a href='#'>
                         <span className= "material-symbols-outlined">
                            queue_music
                         </span>
                         <p>Your library</p> 
                    </a>
                </li>
           </ul>
        </BarElement>
        <BarElement style = {{
            marginTop : "35px"
        }} > 
           <ul>
                <li>
                    <a href='#'>
                    <span className="material-symbols-outlined">
                          playlist_add_circle
                    </span>
                         <p>Create playlist now</p> 
                    </a>
                </li>
           </ul>
        </BarElement>
        <BarElement> 
           <ul>
                <li>
                    <a href='#'>
                    <span className="material-symbols-outlined">
                        favorite
                    </span>
                         <p>Favorite Songs</p> 
                    </a>
                </li>
           </ul>
        </BarElement>
    </div>
  </div>
  )
}
