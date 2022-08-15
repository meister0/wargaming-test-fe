import styled, { css } from 'styled-components'

export default {
  Base: styled.div<{ isActive: boolean }>`
    padding: 5px 18px;
    background-color: transparent;
    color: #707275;
    border-radius: 3px;
    transition: background-color 250ms, color 250ms;

    &:hover {
      cursor: pointer;
    }

    ${({ isActive }) =>
      isActive &&
      css`
        background-color: #707275;
        color: #ffffff;
      `};
  `,

  Text: styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  `,
}
