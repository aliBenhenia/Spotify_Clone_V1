import styled from "styled-components";
export const CardStyle = styled.div `
   background-color: #191818;
    margin-top: 16px;
    color: white;
    padding: 11px;
    /* height: 300px; */
    border-radius: 15px;
    img{
        border-radius: 6px;
        max-width: 100%;
        @media (max-width: 768px)
        {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
        }
    }
    h2{
        color: #F9F5F4;
        font-size: 14px;
        margin-top: 1rem;
    }
    p{
        color: #C6CCD4;
        line-height: 2;
    }
    transition: .4s all;
    &:hover{
        background-color: #5e5854b8;
        .play_icon{
            opacity: 1;
        }
    }
    position: relative;
    .play_icon{
        color: #1AB954;
        position: absolute;
        right: 10%;
        top: 35%;
        span{
            font-size: 5rem;
            transition: .3s all;
        }
        @media (max-width: 768px)
        {
            right: 5%;
        }
        opacity: 0;
    }
`
export const HomePage = styled.div `
    background : #101010;
    height: 100vh;
    overflow-y: auto;
    &::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

&::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

&::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
    h1{
        color: #fff;
    }
    a{
        text-decoration: none;
        &:hover{
            text-decoration: underline;
            color: #C6CCD4;
        }
    }
    h4{
        color: #C6CCD4;
    }
`