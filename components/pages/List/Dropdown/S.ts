import styled, { css } from 'styled-components'

const BaseLayout = styled.div`
  padding: 10px 17px 11px 27px;
  width: max-content;
  color: #707275;
  background: #f4f4f4;
  border: 1px solid #c8c8c8;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.05), inset 2px -2px 0px #ffffff,
    inset -2px 2px 0px #ffffff;
`

export default {
  Base: styled.div`
    position: relative;
  `,

  Burger: styled.div`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 12px;
    height: 2px;
    background: #707275;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 12px;
      height: 2px;
      background: #707275;
    }

    &::before {
      top: -4px;
    }

    &::after {
      top: 4px;
    }
  `,

  Control: styled(BaseLayout)`
    position: relative;
    z-index: 6;

    &:hover {
      cursor: pointer;
    }
  `,

  Menu: styled(BaseLayout)`
    position: absolute;
    padding-left: 31px;
    top: 0;
    left: 0;
    z-index: 6;
  `,

  Item: styled.div<{ isActive: boolean }>`
    position: relative;

    &:hover {
      cursor: pointer;
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }
    ${({ isActive }) =>
      isActive &&
      css`
        color: #2a2a2a;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -21px;
          transform: translateY(-50%);
          width: 13px;
          height: 6px;
          background: url('assets/list/arrow_icon.png') center center no-repeat;
        }
      `}
  `,

  Text: styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  `,

  Overlay: styled.div`
    position: fixed;
    inset: 0;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
  `,
}
