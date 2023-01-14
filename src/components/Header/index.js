import React from 'react'
import { Container,ContentHeader } from './styles'
import Menu from '../Menu'
import perfil from '../../assets/perfil.png'

const Header = () => {
  return (
    <Container>
        <h3> Stacks</h3>
        <Menu />
        <ContentHeader>
            <img src={perfil} alt="Foto de Perfil Alam Henrique Trindade"/>
        
            <h1>Alam Henrique Trindade</h1>
            <span>
                Conheça neste portfólio as principais projetos desenvolvidos, 
                em diferentes linguagens de programação
            </span>
        </ContentHeader>
    </Container>
  )
}

export default Header 
