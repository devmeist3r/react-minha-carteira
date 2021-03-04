import React from 'react'

import * as Styled from './styles'

import Aside from '../Aside'
import Content from '../Content'
import MainHeader from '../MainHeader'

const Layout: React.FC = ({ children }) => {
  return (
    <Styled.Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Styled.Grid>
  )
}

export default Layout
