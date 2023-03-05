import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { action } from '@storybook/addon-actions';
import styles from "./audio.module.css"
import { useContext } from 'react';
import {Mycontext} from "../context/Provider.jsx"
export default function Audio() {
  const {player} = useContext(Mycontext);
  console.log(player)
  const SAMPLE_MP3_URL = player.song
  return (
    <div className={styles.audio_container}>
        <div className='row ' style={{background : "#181818"}}> 
          <div className='col-md-4'>
              <img src={player.img}width="70px"/>
               <aside>
                  <h5>{player.title}</h5>
                  <h6>descrption of song</h6>
               </aside>
          </div>
        <div className='col-md-8'>
          <AudioPlayer className={styles.audio} onAbort={action('onAbort')} onCanPlay={action('onCanPlay')} onCanPlayThrough={action('onCanPlayThrough')} onEnded={action('onEnded')} onPlaying={action('onPlaying')} onSeeking={action('onSeeking')} onSeeked={action('onSeeked')} onLoadStart={action('onLoadStart')} onLoadedMetaData={action('onLoadedMetaData')} onLoadedData={action('onLoadedData')} onError={action('onError')} onListen={action('onListen')} onVolumeChange={action('onVolumeChange')} onPause={action('onPause')} onPlay={action('onPlay')} onClickPrevious={action('onClickPrevious')} onClickNext={action('onClickNext')} volume={0.8} showSkipControls progressUpdateInterval={100} src={SAMPLE_MP3_URL} />
        </div>
        </div>
    </div>
  )
}
