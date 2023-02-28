import React from 'react'
import {useContext} from "react"
import {HomePage} from "./styles.js"
import {Mycontext} from "/Users/abenheni/Desktop/spotify_clone_v1/src/context/Provider";
import MusicCard from './homeComponents/MusicCard.jsx';
import { data } from "./data/api";
export default function Home({grid}) {
  const {nav} = useContext(Mycontext);
  console.log(data.data1);
  return (
    <div className = {grid}>
          <HomePage className='container'>
            <div className='row container mt-5'>
              <h1 className='col-6'>Spotify Playlists</h1>
                <a className='col-6' href='#'> 
                    <h4 style={{textAlign : "right"}}>see more</h4>
                </a>
                    {
                      data.data1.map(item=>{ 
                        return (
                            <MusicCard
                            title = {item.title}
                            desc = {item.desc}
                            img = {item.img}
                            key = {item.key}
                            grid = "col-md-6  col-lg-3"
                            />
                        );
                      })
                    }
            </div>
            <div className='row container mt-5'>
              <h1 className='col-6'>focus</h1>
                <a className='col-6' href='#'> 
                    <h4 style={{textAlign : "right"}}>see more</h4>
                </a>
                    {
                      data.data2.map(item=>{
                        return (
                            <MusicCard
                            title = {item.title}
                            desc = {item.desc}
                            img = {item.img}
                            key = {item.key}
                            grid = "col-md-6  col-lg-3"
                            />
                        );
                      })
                    }
            </div>
            <div className='row container mt-5'>
              <h1 className='col-6'>Mood</h1>
                <a className='col-6' href='#'> 
                    <h4 style={{textAlign : "right"}}>see more</h4>
                </a>
                    {
                      data.data1.map(item=>{
                        return (
                            <MusicCard
                            title = {item.title}
                            desc = {item.desc}
                            img = {item.img}
                            key = {item.key}
                            grid = "col-md-6  col-lg-3"
                            />
                        );
                      })
                    }
            </div>
            <div className='row container mt-5'>
              <h1 className='col-6'>Popular new releases</h1>
                <a className='col-6' href='#'> 
                    <h4 style={{textAlign : "right"}}>see more</h4>
                </a>
                    {
                      data.data2.map(item=>{
                        return (
                            <MusicCard
                            title = {item.title}
                            desc = {item.desc}
                            img = {item.img}
                            key = {item.key}
                            grid = "col-md-6  col-lg-3"
                            />
                        );
                      })
                    }
            </div>
            <div className='row container mt-5'>
              <h1 className='col-6'>Popular new releases</h1>
                <a className='col-6' href='#'> 
                    <h4 style={{textAlign : "right"}}>see more</h4>
                </a>
                    {
                      data.data1.map(item=>{
                        return (
                            <MusicCard
                            title = {item.title}
                            desc = {item.desc}
                            img = {item.img}
                            key = {item.key}
                            grid = "col-md-6  col-lg-3"
                            />
                        );
                      })
                    }
            </div>
            <div className='row container mt-5'>
              <h1 className='col-6'>Popular new releases</h1>
                <a className='col-6' href='#'> 
                    <h4 style={{textAlign : "right"}}>see more</h4>
                </a>
                    {
                      data.data2.map(item=>{
                        return (
                            <MusicCard
                            title = {item.title}
                            desc = {item.desc}
                            img = {item.img}
                            key = {item.key}
                            grid = "col-md-6  col-lg-3"
                            />
                        );
                      })
                    }
            </div>
            <div className='row container mt-5'>
              <h1 className='col-6'>Popular new releases</h1>
                <a className='col-6' href='#'> 
                    <h4 style={{textAlign : "right"}}>see more</h4>
                </a>
                    {
                      data.data1.map(item=>{
                        return (
                            <MusicCard
                            title = {item.title}
                            desc = {item.desc}
                            img = {item.img}
                            key = {item.key}
                            grid = "col-md-6  col-lg-3"
                            />
                        );
                      })
                    }
            </div>
            <div className='row container mt-5'>
              <h1 className='col-6'>Popular new releases</h1>
                <a className='col-6' href='#'> 
                    <h4 style={{textAlign : "right"}}>see more</h4>
                </a>
                    {
                      data.data2.map(item=>{
                        return (
                            <MusicCard
                            title = {item.title}
                            desc = {item.desc}
                            img = {item.img}
                            key = {item.key}
                            grid = "col-md-6  col-lg-3"
                            />
                        );
                      })
                    }
            </div>
          </HomePage>
    </div>
  )
}
