import React from 'react'
import styled from '@emotion/styled'

const Description = styled.div`
  background: #333;
  margin: 20px auto;
  padding: 20px;
  width: 600px;
  height: 40px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #ddd;
  border-radius: 15px;
  box-shadow: 0px 16px 30px 0px #200;
`

export const DescriptionOfRules = () => {
  return (
    <Description>
      Не стесняйся добавлять ячейки во время игры. Клетки светло-красного цвета
      моложе, темно-красные - старше. Наслаждайся!
    </Description>
  )
}
