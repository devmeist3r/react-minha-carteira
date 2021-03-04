import styled from 'styled-components'

interface ITitleProps {
  lineColor: string
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`

export const TitleContainer = styled.div<ITitleProps>`
  > h1 {
    color: ${props => props.theme.colors.white};

    &::after {
      content: '';
      display: block;
      border-bottom: 10px solid ${props => props.lineColor};
    }
  }
`

export const Controllers = styled.div`
  display: flex;
  flex-direction: row;
`
