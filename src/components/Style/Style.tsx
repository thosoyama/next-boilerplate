import styled, { css, createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html, body {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`

export const Padding = styled.div<{
  top?: string
  right?: string
  bottom?: string
  left?: string
  all?: string
}>`
  ${props =>
    props.all
      ? css`
          padding: ${props.all};
        `
      : css`
          padding-top: ${props.top};
          padding-right: ${props.right};
          padding-bottom: ${props.bottom};
          padding-left: ${props.left};
        `}
`
Padding.defaultProps = { top: "0", right: "0", bottom: "0", left: "0" }

export const Margin = styled.div<{
  top?: string
  right?: string
  bottom?: string
  left?: string
  all?: string
}>`
  ${props =>
    props.all
      ? css`
          margin: ${props.all};
        `
      : css`
          margin-top: ${props.top};
          margin-right: ${props.right};
          margin-bottom: ${props.bottom};
          margin-left: ${props.left};
        `}
`
Margin.defaultProps = { top: "0", right: "0", bottom: "0", left: "0" }

export const Text = styled.span<{
  display?: string
  "font-size"?: string
  "font-weight"?: string
  "line-height"?: string
  "text-align"?: string
  color?: string
}>`
  text-align: ${props => props["text-align"]};
  font-size: ${props => props["font-size"]};
  font-weight: ${props => props["font-weight"]};
  line-height: ${props => props["line-height"]};
  color: ${props => props.color};
`
