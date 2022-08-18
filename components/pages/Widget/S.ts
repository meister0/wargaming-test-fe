import styled from 'styled-components'

export default {
  Base: styled.main`
    margin: 60px;
    max-width: 514px;
    padding: 20px;
    background: #fff;
  `,

  SelectedItemsList: styled.div`
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  `,

  Title: styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #393939;

    display: block;
    margin-bottom: 25px;
  `,

  Description: styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #585858;
  `,

  MainButton: styled.button`
    margin-top: 15px;
    background: #519f03;
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
    &:active {
      filter: brightness(0.8);
    }
  `,

  Wrapper: styled.div`
    margin-top: 30px;
  `,
}
