import styled from 'styled-components'

export default {
  Base: styled.div`
    min-width: 142px;
    background: #121212;
    padding: 7px 10px;
    position: relative;
    display: flex;

    &::after {
      content: '';
      position: absolute;
      width: 1px;
      height: 18px;
      top: 50%;
      right: 26px;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.5);
    }
  `,

  Title: styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  `,

  UnselectButton: styled.button`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
    filter: none;
    transition: filter 250ms, transform 250ms;

    &:hover {
      transform: translateY(-50%) scale(1.3);
      cursor: pointer;
    }

    &:active {
      filter: brightness(0.8);
    }
  `,
}
