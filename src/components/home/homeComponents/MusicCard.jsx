import React from 'react'
import { CardStyle } from '../styles'
export default function MusicCard({key,img,title,desc,grid}) {
  return (
          <div key={key} className = {grid}>
              <CardStyle>
                  <div className='play_icon'>
                      <span class="material-symbols-outlined">
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
