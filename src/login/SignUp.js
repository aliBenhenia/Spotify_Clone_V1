import React from 'react'
import spot from "./spot.png"
import google from "./google.png"
import styled from 'styled-components'
const Sign = styled.div `
   background-color :black ;
   height: 100vh;
   display: flex;
   justify-content: center;
   width: 100%;
   padding-top: 200px;
   overflow-x: hidden;
   img{
      margin: 0 auto;
      width: 100px;
      margin-left : 50px;
   }
`
const Button = styled.button `
    background-color: #1FDF63 ;
    color: black;
    padding: 1rem;
    outline: 0;
    border: 0;
    font-weight: bold;
    margin: 0 auto;
    /* width: 200px; */
    font-size: 1.5rem;
`
export default function SignUp({googleAuth}) {
  return (
        <Sign>
            <div>
                <div className='mb-5'>
                <img src={spot} style={{maxWidth : "100px"}}/>
                </div>
                <Button onClick={googleAuth}>
                    Login with google 
                    <img src={google} style={{width : "33px",marginLeft:"10px"}}/>
                </Button>
            </div>
        </Sign>
  )
}
