import React, { FC } from 'react'
import styled from '@emotion/styled'

export interface CellProps {
  x: number
  y: number
  cellId: string
  np: number
  aliveColor: string
  oldColor: string
  deadColor: string
  onClick: (x: number, y: number) => void
}

const CellItem = styled.div`
  background-color: hotpink;
  padding: 10px 20px 20px 10px;
  width: 10px;
  height: 10px;
`

export const Cell: FC<CellProps> = ({
  x,
  y,
  cellId,
  np,
  onClick,
}: CellProps) => {
  return (
    <CellItem
      data-testid={cellId}
      id={cellId}
      onClick={() => onClick(x, y)}
      role="CellItem"
    >
      {np}
    </CellItem>
  )
}
