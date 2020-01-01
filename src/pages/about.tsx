import { NextPage } from "next"
import Head from "next/head"
import { Reset } from "styled-reset"
import { GlobalStyle, Header, Footer } from "../components"

const Index: NextPage = () => (
  <>
    <Head>
      <title>Hello World !</title>
    </Head>
    <Reset />
    <GlobalStyle />
    <Header />
    <div>about</div>
    <Footer />
  </>
)

export default Index
