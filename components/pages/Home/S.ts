import styled from 'styled-components'

export default {
  Base: styled.div``,

  Wrapper: styled.div`
    margin: 20px;
    margin-left: 60px;
    display: block;
    font-size: 30px;

    & > a {
      text-decoration: none;
      color: #000;
      transition: color 250ms;

      &:visited {
        color: inherit;
        &:hover {
          color: #6d48d7;
        }
      }

      &:hover {
        color: #6d48d7;
      }
    }
  `,
}
