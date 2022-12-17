import React from 'react'
import { SectionContainer,Paragrafo } from './styles'



const Section = ({name, title, subtitle, description, img1,img2,img3, text1, text2, text3, alt1,alt2,alt3, tamanhoImagem}) => {
  return (
    <SectionContainer>
        <h1> {name}        </h1>
        <h2> {title}       </h2>
        <p>  {subtitle}    </p>
        <div>
            <img src={img1} alt={alt1} width={tamanhoImagem}/>
            <Paragrafo>
                {text1}
            </Paragrafo>
            <img src={img2} alt={alt2} width={tamanhoImagem}/>
            <Paragrafo>
                {text2}
            </Paragrafo>
            <img src={img3} alt={alt3} width={tamanhoImagem}/>
            <Paragrafo>
                {text3}
                
            </Paragrafo>
        </div>   
        <p>  {description} </p>
    </SectionContainer>
  )
}

export default Section
