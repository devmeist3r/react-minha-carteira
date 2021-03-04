import styled from 'styled-components'

interface ITagProps {
  color: string
}

export const Container = styled.li`
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 10px;
  padding: 10px;

  margin: 10px 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  transition: all 0.3s;

  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;

    > span {
      font-size: 20px;
      font-weight: 600;
    }

    > small {
      font-size: 16px;
    }
  }
`

export const Tag = styled.div<ITagProps>`
  position: absolute;
  width: 15px;
  height: 60%;
  background-color: ${props => props.color};
  left: 0;
  border-radius: 10px;
`
