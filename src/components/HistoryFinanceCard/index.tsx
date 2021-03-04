import React from 'react'

import * as Styled from './styles'

interface IHistoryFinanceCardPros {
  tagColor: string
  title: string
  subtitle: string
  amount: string
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardPros> = ({
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  return (
    <Styled.Container>
      <Styled.Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </Styled.Container>
  )
}

export default HistoryFinanceCard
