import styled from "styled-components";

export const BarElement = styled.nav `
    background-color: black;
    width: 244px;
    font-family: Verdana, Arial, Tahoma, Serif;
    &:not(:first-child)
    {
        margin-top: 23px;
    }
    position: relative;
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: #E0E0E1;
        span
        {
            display: inline;
            font-size: 26px;
        }
        p{
            display: inline;
            margin-left: 5%;
            font-size: 15px;
            font-weight: 10;
            position: absolute;
            top: 14%;
        }
        .hidee
        {
            display : none;
        }
        &:hover{
                color: #fff;
            }
    }
`