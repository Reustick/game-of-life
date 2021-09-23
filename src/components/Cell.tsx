import React, { FC } from 'react'
import styled from '@emotion/styled'

export interface CellProps {
  alive: boolean
  aliveColor: string
  deadColor: string
  onClick: (x: number, y: number) => void
}

const CellItem = styled.div`
  background-color: hotpink;
  padding: 10px 20px 20px 10px;
  width: 30px;
  height: 30px;
`

export const Cell: FC<CellProps> = ({ alive, aliveColor, ...rest }) => {
  return <CellItem></CellItem>
}
