import styled from 'styled-components'

import {
  ButtonBase,
  FieldBase,
  SearchBase,
  WrapperBase,
} from '../S'

export default {
  Wrapper: styled(WrapperBase)`
    display: grid;
    grid-template-columns: auto max-content;
  `,

  Search: styled(SearchBase)``,

  Field: styled(FieldBase)`
    width: 100%;
  `,

  Button: styled(ButtonBase)``,
}
