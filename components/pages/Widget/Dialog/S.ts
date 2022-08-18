import styled, { css } from 'styled-components'

const inputBase = css`
  padding: 1px 10px;
  width: 150px;
  height: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #515151;
  outline: none;
`

const BaseButton = styled.button`
  padding: 7px 10px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  filter: none;
  transition: filter 250ms;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`

export default {
  Base: styled.div`
    position: relative;
    z-index: 6;
    background: #373737;
    padding: 20px;
  `,

  CloseButton: styled.button`
    position: absolute;
    right: 15px;
    top: 15px;
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
    filter: none;

    transition: filter 250ms;

    &:hover {
      transform: scale(1.3);
      cursor: pointer;
    }

    &:active {
      filter: brightness(0.8);
    }
  `,

  Title: styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
    margin-bottom: 15px;
  `,

  Top: styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 23px;
  `,

  InputWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
  `,

  InputName: styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  `,

  Input: styled.input`
    ${inputBase}
    position: relative;

    &::-webkit-search-cancel-button {
      position: absolute;
      right: 5px;
      -webkit-appearance: none;
      height: 11px;
      width: 10px;
      background: url('assets/search/clear_icon.png') center center / contain
        no-repeat;

      &:hover {
        cursor: pointer;
      }
    }
  `,

  Select: styled.select`
    ${inputBase}
  `,

  Option: styled.option``,

  Bottom: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  `,

  Description: styled.h4`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
  `,

  SelectedItemsList: styled.div`
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  `,

  Buttons: styled.div`
    margin-top: 15px;
    display: flex;
    gap: 10px;
  `,

  SaveButton: styled(BaseButton)`
    background: #519f03;
  `,

  CancelButton: styled(BaseButton)`
    background: #9f2903;
  `,
}
