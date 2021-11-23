import React from 'react'
import styled from '@emotion/styled'

export const GenerationCounter = () => {
  return <GenerationWrapper>Generation: </GenerationWrapper>
}

const GenerationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: #333;
  width: 150px;
  height: 20px;
  margin: 15px auto 0;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0px 16px 30px 0px #200;
`
