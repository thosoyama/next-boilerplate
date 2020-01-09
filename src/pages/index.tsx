import { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"
import { Reset } from "styled-reset"
import { Counter, Footer, GlobalStyle, Header } from "../components"
import { AppProvidor } from "../contexts/AppContext"

const Index: NextPage = () => {
  return (
    <AppProvidor>
      <Head>
        <title>Counter</title>
      </Head>
      <Reset />
      <GlobalStyle />
      <FlexRoot>
        <Header>Counter</Header>
        <FlexBody>
          <Counter />
        </FlexBody>
        <Footer />
      </FlexRoot>
    </AppProvidor>
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
