import styled from "styled-components";
export const  Button = styled.button `
    background-color: ${props => props.dark ? 'black' : '#fff'};
    color: ${props => props.dark ? '#fff' : 'black'};
    padding: 1rem;
    border: 0;
    font-weight: bold;
    font-size: 15px;
    border-radius: 50px;
    float: right;
    margin-left: 5px;
    transition: .4s all;
    &:hover{
        transform: translate(2px);
    }
    position: relative;
    .info
    {
       padding-bottom: 14px;
    }
`
export const Head = styled.header `
    background : black;
    color : #fff;
    padding : 20px;
    display: flex;
    z-index : 334;
    img{
        max-width : 100px;
    }
    #icon
    {
        display: none;
    }
    .arrows span:hover
    {
        color: grey;
    }
    /* style={{color :"#fff",textAlign : "right",display : "inline-block"}} */
    #name
    {
        color: #fff;
        text-align: right;
        display: inline-block;
    }
    @media (max-width: 768px) {
        .arrows{
            display: none;
            color: black;
            width: 100px;
        }
        #registre
        {
            width: 80%;
            ${Button}
            {
                float: right;
            }
        
        }
        #logoS
        {
            display: none;
        }
        #icon
        {
            display: block;
            font-size: 4rem;
        }
        #name {
                display: none;
                color: red;
            }
  }
`