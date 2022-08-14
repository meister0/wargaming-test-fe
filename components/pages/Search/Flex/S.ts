import styled from 'styled-components'

import {
  ButtonBase,
  FieldBase,
  SearchBase,
  WrapperBase,
} from '../S'

export default {
  Wrapper: styled(WrapperBase)`
    display: flex;
  `,

  Search: styled(SearchBase)`
    flex: 1 1 0;
  `,

  Field: styled(FieldBase)`
    width: 100%;
  `,

  Button: styled(ButtonBase)``,
}
