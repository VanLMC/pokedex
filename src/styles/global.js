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

    body {
        font-family: Times New Roman, sans-serif;
        background: #fff;
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

`;
