import React from 'react'

import { MenuContainer } from './style'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Menu = () => {
  return (
    <MenuContainer>
        <AnchorLink href="#java">JAVA</AnchorLink>
        <AnchorLink href="#python">PYTHON</AnchorLink>
        <AnchorLink href="#php">PHP</AnchorLink>
        <AnchorLink href="#javascript">JAVASCRIPT</AnchorLink>
       
        <AnchorLink href="#react"> REACT      </AnchorLink>
        <AnchorLink href="#postgresql"> POSTGRESQL </AnchorLink>
        <AnchorLink href="#wordpress">WORDPRESS  </AnchorLink>
        <AnchorLink href="#duda"> DUDA       </AnchorLink>
    </MenuContainer>
  )
}

export default Menu