import styled from 'styled-components'

import {
  ButtonBase,
  FieldBase,
  SearchBase,
  WrapperBase,
} from '../S'

export default {
  Wrapper: styled(WrapperBase)``,

  Search: styled(SearchBase)`
    overflow: hidden;
  `,

  Field: styled(FieldBase)`
    width: 100%;
  `,

  Button: styled(ButtonBase)`
    float: right;
    display: block;
  `,
}
