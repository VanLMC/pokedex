import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        *:focus {
            outline: none;
        }
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
        
    }

    body {
        font-family: Times New Roman, sans-serif;
        background: #fff;
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

`;
