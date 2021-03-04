import React, { useState } from 'react'
import * as Styled from './styles'

const Toogle: React.FC = () => {
  const [online, setOnline] = useState<boolean>(false)
  return (
    <Styled.Container>
      <Styled.ToggleLabel>Light</Styled.ToggleLabel>
      <Styled.ToggleSelector
        checked={online}
        onChange={() => setOnline(!online)}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <Styled.ToggleLabel>Dark</Styled.ToggleLabel>
    </Styled.Container>
  )
}

export default Toogle
