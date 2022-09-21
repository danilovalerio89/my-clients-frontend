import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;;
    }
:root{
       
    --Black-2: #111111;
    --Black-1: #57595E;
    --Black : #000000; 

    --White-2: #e5e5e5;
    --White-1: #f5f5f5;
    --White : #FFFFFF;

    --fs-100: 1rem;
    --fs-200: 1.25rem;
    --fs-300: 1.563rem;
    --fs-400: 1.953rem;
    --fs-500: 2.441rem;
    --fs-600: 3.052rem;
    --fs-700: 3.815rem;
    --fs-800: 4.768rem;
    
    --clr-100: #000000;
    --clr-200: #0F0F33;
    --clr-300: #000052;
    --clr-400: #181852;
    --clr-500: #00009E;
}

a{
    text-decoration: none;
}
ul, ol, li{
    list-style: none;
}
button{
    cursor: pointer;
    border: none;
}
`;
