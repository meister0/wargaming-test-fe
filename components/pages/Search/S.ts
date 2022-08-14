import styled from 'styled-components'

export const WrapperBase = styled.div`
  width: 430px;
`

export const SearchBase = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 11px;
    width: 16px;
    z-index: 1;
    height: 16px;
    background: url('assets/search/find_icon.png') left top no-repeat;
  }
`

export const FieldBase = styled.input`
  background-color: #f2f2f2;
  padding: 10px 10px 9px 37px;
  border: 1px solid #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1),
    inset 0px -1px 2px rgba(0, 0, 0, 0.6), inset 0px 2px 3px rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #373f45;
  outline: none;
  transition: 250ms background-color;

  &:focus {
    background-color: #ffffff;
  }

  &::-webkit-search-cancel-button {
    position: absolute;
    right: 10px;
    -webkit-appearance: none;
    height: 18px;
    width: 17px;
    background: url('assets/search/clear_icon.png') center center no-repeat;

    &:hover {
      cursor: pointer;
    }
  }
`

export const ButtonBase = styled.button`
  position: relative;
  font-size: 0px;
  color: #373f45;
  text-transform: uppercase;
  background: linear-gradient(
      180deg,
      rgba(177, 181, 183, 0) 0%,
      rgba(177, 181, 183, 0.25) 100%
    ),
    #e5e5e5;
  box-shadow: -1px 0px 1px rgba(0, 0, 0, 0.25), 1px 0px 1px rgba(0, 0, 0, 0.25),
    0px 1px 1px rgba(0, 0, 0, 0.4), inset 0px 1px 0px rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  border: none;
  margin-left: 10px;
  padding: 12px 14px 12px 15px;
  min-width: 50px;

  &::after {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    content: 'Найти';
  }

  &:hover {
    cursor: pointer;

    &::after {
      content: 'GO';
    }
  }
`

export default {
  Base: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
  `,

  Wrapper: styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
  `,

  Title: styled.h1`
    text-align: center;
  `,
}
