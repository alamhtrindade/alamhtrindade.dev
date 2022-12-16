import { createGlobalStyle } from "styled-components";
import background from './assets/background.png'

export default createGlobalStyle`

    *, body{
        margin: 0;
        padding: 0;
    }

    body{
        background-image: url(${background});
        background-size: cover;
        margin: 0.625rem 1.875rem 0rem 1.875rem;
    }
`