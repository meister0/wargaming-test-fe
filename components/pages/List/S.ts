import styled from 'styled-components'
import { media } from '~/helpers'

export default {
  Base: styled.div`
    margin: auto;
    width: 100vw;
    height: 100vh;
    max-width: 461px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media ${media.breaks.mobile} {
      justify-content: flex-start;
    }
  `,
}
