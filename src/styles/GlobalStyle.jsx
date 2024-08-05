import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
    }

    body {
        font-family: "Public Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-size: 18px;
    }
`


export default GlobalStyle;