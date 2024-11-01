import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-weight: normal;
        outline: none;
        scrollbar-width: none;
    }
    
    body {
        background-color: #22272e;
        color: #ffffff;
    }
`