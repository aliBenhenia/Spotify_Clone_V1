import React from 'react'
import {HomePage} from "./styles.js"
import MusicCard from './homeComponents/MusicCard.jsx';
import { data } from "./data/api";
export default function Home({grid}) {
  console.log(data.data1);
  return (
    <div className = {grid} style={{marginBottom : "15px"}}>
          <HomePage className='container'>
            <div className='row container mt-5'>
              <h1 className='col-6'>Spotify Playlists</h1>
                <a className='col-6' href='/more'> 
                    <h4 style={{textAlign : "right"}}>see more</h4>
                </a>
                    {
                      data.data1.map((item,idx)=>{ 
                        return (
                            <MusicCard key={idx}
                            title = {item.title}
                            desc = {item.desc}
                            img = {item.img}
                            keys = {item.key}
                            grid = "col-md-6  col-lg-3" 
                            song = {item.song} 
                            />
                        );
                      })
                    }
            </div>
            <div className='row container mt-5'>
              <h1 className='col-6'>focus</h1>
                <a className='col-6' href='/more'> 
                    <h4 style={{textAlign : "right"}}>see more</h4>
                </a>
                    {
                      data.data2.map((item,idx)=>{
                        return (
                            <MusicCard  key={idx}
                            title = {item.title}
                            desc = {item.desc}
                            img = {item.img}
                            keys = {item.key}
                            grid = "col-md-6  col-lg-3"
                            song = {item.song}
                            />
                        );
                      })
                    }
            </div>
   
            <div className='row container mt-5'>
              <h1 className='col-6'>Mood</h1>
                <a className='col-6' href='more'> 
                    <h4 style={{textAlign : "right"}}>see more</h4>
                </a>
                    {
                      data.data3.map((item, idx)=>{
                        return (
                            <MusicCard  key={idx}
                            title = {item.title}
                            desc = {item.desc}
                            img = {item.img}
                            keys = {item.key}
                            grid = "col-md-6  col-lg-3"
                            song = {item.song}
                            />
                        );   
                      })
                    }
            </div>
   

          </HomePage>
    </div>
  )
}
