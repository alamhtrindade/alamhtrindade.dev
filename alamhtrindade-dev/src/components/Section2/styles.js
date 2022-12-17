import styled from "styled-components";

export const SectionContainer = styled.div`
    
    padding: 0 5vw;
    width:100%;
    max-width: 90vw;
    height: auto;
    display: block;
    align-content: center;
    background-color: transparent;
    
    
    

    h1{
        font-family: 'Open Sans';
        font-weight: 700;
        font-size: 32px;
        color: #91BFF8;
    }

     
    h2{
        font-family: 'Open Sans';
        font-weight: 500;
        font-size: 24px;
        text-align: center;
        color: #FF694E;
        margin-bottom: 5px;
    }

    p{
        font-family: 'Open Sans';
        font-weight: 500;
        font-size: 16px;
        text-align: center;
        color: #59405E;
    }

    img{
        margin-top: 5px;
        margin-bottom: 5px;
        
    }

    div{
        margin: 10px 0;
        background-color: transparent;
        display: grid;
        grid-template-areas:" 1fr 1fr 1fr";

        align-content: center;
        align-items: center;    
    }

    @media (max-width: 768px) {
        margin-top: 8rem;
        

        div{
            display:flex;
            flex-direction: column;
        }
    }
    
`

