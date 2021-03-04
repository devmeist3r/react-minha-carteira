import React from 'react'

import * as Styled from './styles'

interface IContentHeaderProps {
  title: string
  lineColor: string
  children: React.ReactNode
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <Styled.Container>
      <Styled.TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </Styled.TitleContainer>
      <Styled.Controllers>{children}</Styled.Controllers>
    </Styled.Container>
  )
}

export default ContentHeader
