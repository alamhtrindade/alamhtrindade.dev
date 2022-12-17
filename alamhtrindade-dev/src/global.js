import { createGlobalStyle } from "styled-components";
import background from './assets/background.png'

export default createGlobalStyle`

    *, body{
        margin: 0;
        padding: 0;
    }

    body{
        margin-left: 30px;
        margin-right: 30px;
        background-image: url(${background});
        background-size: cover;
        overflow-x: hidden;
    }
`