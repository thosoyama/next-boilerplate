import { NextPage } from "next"
import styled from "styled-components"
import { Reset } from "styled-reset"
import { Counter, Footer, GlobalStyle, Header } from "../components"
import { AppContext, DispatcherContext, useAppContext } from "../context/AppContext"

const Index: NextPage = () => {
  const [state, dispatcher] = useAppContext()

  return (
    <AppContext.Provider value={state}>
      <DispatcherContext.Provider value={dispatcher}>
        <Reset />
        <GlobalStyle />
        <FlexRoot>
          <Header />
          <FlexBody>
            <Counter />
          </FlexBody>
          <Footer />
        </FlexRoot>
      </DispatcherContext.Provider>
    </AppContext.Provider>
  )
}

export default Index

const FlexRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 100%;
`

const FlexBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`
