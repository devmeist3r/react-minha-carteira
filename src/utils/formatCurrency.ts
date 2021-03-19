const formatCurrecy = (current: number): string => {
  return current.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

export default formatCurrecy
