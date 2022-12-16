import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 31.25rem;
    background: transparent;

    img{
        
        width: 300px;
        height: 300px;
        padding: 0.313rem;
        border: 8px solid #91BFF8;
        border-radius: 200px;
        grid-area: perfil;
    }
    

    h3{
        font-family: 'Open Sans';
        font-weight: 400;
        font-size: 16px;
        color: #FF694E;
        margin: 0.625rem 1.875rem;
    }

    h1{
        font-family: 'Open Sans';
        font-weight: 800;
        font-size: 32px;
        color: #FFFFFF;
        margin: 0.625rem 1.875rem;
        grid-area: title;
        text-align: center;
        padding-top:6.25rem;
    }

`

export const ContentHeader = styled.div`
    padding: 3.75rem ;
    
    span{
        font-family: 'Open Sans';
        font-weight: 400;
        font-size: 14px;
        color: #FFF;
        margin-bottom: 6.25rem;
        grid-area: subtitle;
    }

    display: grid;
    
    grid-template-areas:
		"perfil title "
		"perfil subtitle "
    
    
    
`