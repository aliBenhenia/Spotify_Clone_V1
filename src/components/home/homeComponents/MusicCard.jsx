import React from 'react'
import { CardStyle } from '../styles'
import { useContext } from 'react';
import { Mycontext } from '../../../context/Provider';
export default function MusicCard({key,img,title,desc,grid,song}) {
    const {hndlePlayer} = useContext(Mycontext);
    console.log(key)
  return (
          <div key={key} className = {grid}>
              <CardStyle>
                  <div className='play_icon'>

                      <span onClick={()=>hndlePlayer({img,title,desc,song})} className="material-symbols-outlined">
                        play_circle
                      </span>
                  </div>
                  <img alt='not found' src = {img}/> 
                  <h2>{title}</h2>
                  <p>{desc}</p>
              </CardStyle>
          </div>
  )
}
