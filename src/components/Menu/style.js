import styled from "styled-components";

export const MenuContainer = styled.div`
    padding: 0 3vw;
    height: auto;
    width: 100%;
    max-width: 90vw;
    background: transparent;

    

    a{
        text-decoration: none;
        font-family: 'Open Sans';
        color: #91BFF8;
    }
    a:hover{
        color: #FF694E;
    }
    
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;

    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        
        align-content: center;
        justify-content: space-between;
        max-width: 100vw;
    } 
    
`

/*

*/