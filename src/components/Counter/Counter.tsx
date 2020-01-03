import React, { useContext } from "react"
import styled from "styled-components"
import { AppStateContext, AppDispatcherContext } from "../../hooks/AppContext"

export const Counter: React.FC = () => {
  const { count } = useContext(AppStateContext)
  const { increment, decrement } = useContext(AppDispatcherContext)

  return (
    <>
      <Button onClick={decrement}>-</Button>
      <Count>{count}</Count>
      <Button onClick={increment}>+</Button>
    </>
  )
}

const Count = styled.span`
  width: 2.5em;
  font-size: 20px;
  font-weight: bold;
  vertical-align: middle;
  text-align: center;
`

const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  font-size: 10px;
  font-weight: bold;
`
