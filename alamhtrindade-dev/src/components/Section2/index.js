import React from 'react'
import { SectionContainer } from './styles'



const Section2 = ({name, title, subtitle, description, img1,img2,img3, alt1,alt2,alt3, tamanhoImagem}) => {
  return (
    <SectionContainer>
        <h1> {name}        </h1>
        <h2> {title}       </h2>
        <p>  {subtitle}    </p>
        <div>
            <img src={img1} alt={alt1} width={tamanhoImagem}/>
            
            <img src={img2} alt={alt2} width={tamanhoImagem}/>
            
            <img src={img3} alt={alt3} width={tamanhoImagem}/>
            
        </div>   
        <p>  {description} </p>
    </SectionContainer>
  )
}

export default Section2
