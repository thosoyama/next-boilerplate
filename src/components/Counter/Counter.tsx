import React, { useCallback } from "react"
import styled from "styled-components"
import { actions, useAppContext } from "../../contexts/AppContext"

export const Counter: React.FC = () => {
  const [{ count }, dispatch] = useAppContext()

  const increment = useCallback(() => dispatch(actions.increment()), [])
  const decrement = useCallback(() => dispatch(actions.decrement()), [])

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
