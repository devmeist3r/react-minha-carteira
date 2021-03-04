import React, { useMemo, useState } from 'react'

import * as Styled from './styles'

import emojis from '../../utils/emojis'
import Toogle from '../Toogle'

const MainHeader: React.FC = () => {
  const [theme, setTheme] = useState<boolean>(false)

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length)
    return emojis[indice]
  }, [])

  return (
    <Styled.Container>
      <Toogle />
      <h1>Toogle</h1>
      {console.log(theme)}

      <Styled.Profile>
        <Styled.Welcome>Olá, {emoji}</Styled.Welcome>
        <Styled.UserName>Lucas Inocêncio</Styled.UserName>
      </Styled.Profile>
    </Styled.Container>
  )
}

export default MainHeader
