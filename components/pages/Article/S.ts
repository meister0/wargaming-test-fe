import styled, { css } from 'styled-components'

export const baseText = css`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #585858;
`

export default {
  Base: styled.main`
    margin: auto;
    max-width: 850px;
    width: 100%;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Article: styled.article`
    column-count: 2;
    column-gap: 110px;

    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 1px;
      height: 100%;
      background: rgba(45, 45, 45, 0.24);
    }
  `,

  Title: styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    width: 100%;
    color: #585858;
    margin-bottom: 20px;
  `,

  Text: styled.p`
    ${baseText}
    margin-bottom: 10px;
  `,

  Inject: styled.p`
    ${baseText}
    margin: 19px 0;
  `,
}
