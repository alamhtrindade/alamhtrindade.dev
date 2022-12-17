import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 31.25rem;
    background: transparent;

    img{
        
        width: 20vw;
        height: 20vw;
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
    @media (max-width: 768px) {
        img{
            width: 30vw;
            height: 30vw;
        }
        h1{
          
            font-size: 24px;
            padding-top:2.25rem;
            
        }
        
    } 
`

export const ContentHeader = styled.div`
    padding: 3.75rem ;
    max-width: 100vw;
    background-color: transparent;
    
    span{
        font-family: 'Open Sans';
        font-weight: 400;
        font-size: 14px;
        color: #FFF;
        text-align: center;
        margin-bottom: 6.25rem;
        grid-area: subtitle;
    }

    display: grid;
    
    grid-template-areas:
		"perfil title "
		"perfil subtitle ";
    
    
    @media (max-width: 768px) {
        grid-template-areas:
            "perfil"  
            "title"
            "subtitle ";
        justify-items: center;
        span{
           
            font-size: 12px;
            text-align: center;
            margin-bottom: 2.25rem;
            grid-area: subtitle;
        }
    } 
`