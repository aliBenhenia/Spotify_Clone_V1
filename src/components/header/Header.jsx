import React from 'react'
import logo from "../images/logo.png"
import { Head, Button } from './styles'
import { useContext } from 'react'
import { Mycontext } from '../../context/Provider'
import { Dropdown } from 'antd';

export default function Header({m,img,name}) {
  const {handleNavbarToggle} = useContext(Mycontext);
  const logout = ()=>{
    localStorage.clear();
    window.location.reload();
  }
  const items = [
    {
      key: '1',
      label: (
        <a href='#' rel="noopener noreferrer" >
         {m}
        </a>
      ),
    },
  ];
  
  return (
    <div>
        <Head className='row'>
            <div id='logo' className='col-2 '>
                <a href='#' id='logoS' > 
                  <img alt='logo' src= {logo}/>
                </a>
                     <span
                     onClick={handleNavbarToggle}
                     className="material-symbols-outlined " id='icon'>
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
            <div id='registre'className='col-5 '>
               <div>
                    <Button onClick={logout}>log</Button> 
                   
                    <Dropdown
                      menu={{
                        items,
                      }}
                      placement="bottomLeft"
                    >
                      <Button dark className='info'> 
                      <img alt='google logo' src={img} style ={{
                        width : "44px",
                        borderRadius : "50px",
                        marginRight : "4px"
                      }}/>
                      <p  id = "name">{name}</p>
                      </Button>
                    </Dropdown>
               </div>
            </div>
        </Head>
    </div>
  )
}
