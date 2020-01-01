import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext, DispatcherContext } from "../../context/AppContext"

export const Counter: React.FC = () => {
  const { count } = useContext(AppContext)
  const { increment, decrement } = useContext(DispatcherContext)

  return (
    <>
      <Button onClick={decrement}>-</Button>
      <Count>{count}</Count>
      <Button onClick={increment}>+</Button>
    </>
  )
}

const Count = styled.span`
  margin: 0 10px;
  font-size: 20px;
  font-weight: bold;
  vertical-align: middle;
`

const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  font-size: 10px;
  font-weight: bold;
`
