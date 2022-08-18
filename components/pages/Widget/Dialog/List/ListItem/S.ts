import styled from 'styled-components'

export default {
  Base: styled.div`
    display: flex;
  `,

  Wrapper: styled.div<{ isDisabled: boolean }>`
    display: flex;
    gap: 16px;

    &:hover {
      cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
    }
  `,

  CheckBox: styled.input`
    &:hover {
      cursor: pointer;
    }

    &:disabled {
      cursor: not-allowed;
    }
  `,

  Title: styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
  `,
}
