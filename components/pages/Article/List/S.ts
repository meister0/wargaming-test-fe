import styled from 'styled-components'

const BaseTitle = styled.h4<{ level?: number }>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`

export default {
  OrderedList: styled.ol`
    padding-left: 0px;
    padding-top: 0px;
    counter-reset: item;
  `,

  OrderedItem: styled.li`
    list-style-type: none;
    margin-bottom: 5px;

    &::before {
      content: counter(item) '. ';
      font-weight: 500;
      counter-increment: item;
    }
  `,

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

  OrderedTitle: styled(BaseTitle)`
    display: inline;
    color: #393939;
  `,

  UnorderedTitle: styled(BaseTitle)`
    color: #585858;
  `,
}
