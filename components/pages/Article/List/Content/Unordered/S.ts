import styled from 'styled-components'

import { BaseTitle } from '../S'

export default {
  UnorderedList: styled.ul`
    padding-left: 20px;
  `,

  UnorderedItem: styled.li`
    position: relative;
    list-style-type: none;

    &::before {
      content: '•';
      position: absolute;
      top: 0em;
      left: -1em;
      font-size: 1em;
      color: #393939;
    }
  `,

  UnorderedTitle: styled(BaseTitle)`
    color: #585858;
  `,
}
