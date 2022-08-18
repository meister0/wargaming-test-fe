import styled from 'styled-components'

export default {
  Base: styled.div`
    display: flex;
  `,

  Label: styled.label<{ isDisabled: boolean }>`
    display: flex;
    gap: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;

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
}
