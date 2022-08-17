import styled from 'styled-components'

import { BaseTitle } from '../S'

export default {
  OrderedList: styled.ol`
    padding-left: 0px;
    padding-top: 0px;
    counter-reset: item;
  `,

  OrderedItem: styled.li`
    list-style-type: none;

    &::before {
      content: counter(item) '. ';
      font-weight: 500;
      counter-increment: item;
    }
  `,

  OrderedTitle: styled(BaseTitle)`
    display: inline;
    color: #393939;
  `,
}
