import React from 'react'
import styled from '@emotion/styled'

export const ControlMenu = () => {
  return (
    <ButtonWrapper>
      <ButtonMenu>Run</ButtonMenu>
      <ButtonMenu>Pause</ButtonMenu>
      <ButtonMenu>Clear</ButtonMenu>
      <ButtonMenu>Slow</ButtonMenu>
      <ButtonMenu>Medium</ButtonMenu>
      <ButtonMenu>Fast</ButtonMenu>
    </ButtonWrapper>
  )
}

const ButtonMenu = styled.button`
  display: flex;
  justify-content: center;
  background: #222;
  color: #ddd;
  width: 100px;
  height: 30px;
  margin: 4px 8px 0 8px;
  float: left;
  font-size: 20px;
  border-radius: 5px;
`
const ButtonWrapper = styled.div`
  display: flex;
  background: #333;
  width: 580px;
  height: 40px;
  margin: 15px auto 0;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0px 16px 30px 0px #200;
`
