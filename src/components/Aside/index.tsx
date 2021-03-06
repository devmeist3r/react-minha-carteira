import React from 'react'
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md'

import * as Styled from './styles'

import logoImg from '../../assets/logo.svg'

const Aside: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.LogImg src={logoImg} alt="Logo minha Carteira" />
        <Styled.Title>Minha Carteira</Styled.Title>
      </Styled.Header>

      <Styled.MenuContainer>
        <Styled.MenuItemLink href="/dashboard">
          <MdDashboard />
          Dashboard
        </Styled.MenuItemLink>
        <Styled.MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </Styled.MenuItemLink>
        <Styled.MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </Styled.MenuItemLink>
        <Styled.MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </Styled.MenuItemLink>
      </Styled.MenuContainer>
    </Styled.Container>
  )
}

export default Aside
