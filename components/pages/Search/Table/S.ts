import styled from 'styled-components'

import {
  ButtonBase,
  FieldBase,
  SearchBase,
  WrapperBase,
} from '../S'

export default {
  Base: styled.div`
    display: table;
    width: 430px;
  `,
  Wrapper: styled(WrapperBase)`
    display: table-row;
    width: auto;
  `,

  Search: styled(SearchBase)`
    display: table-cell;
    width: 100%;
  `,

  Field: styled(FieldBase)`
    width: 100%;
  `,

  Button: styled(ButtonBase)`
    display: table-cell;
    white-space: nowrap;
  `,
}
