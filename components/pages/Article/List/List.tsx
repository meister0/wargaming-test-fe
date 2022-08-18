import React from 'react'

import { Content } from './Content'
import S from './S'

export const injectNodePositions = {
  before: 'before',
  after: 'after',
} as const

export type ListItem = {
  id: number
  title: string
  nested?: ListProps
}

export type InjectNode = {
  node: React.ReactNode
  injectIndex: number
  position: ValueOf<typeof injectNodePositions>
}

export type ListProps = {
  isListOrdered?: boolean
  items: ListItem[]
  injectNodes?: InjectNode[]
}

export const List = ({
  isListOrdered = false,
  items,
  injectNodes,
}: ListProps) => {
  const DynamicListTag = isListOrdered ? S.OrderedList : S.UnorderedList
  const DynamicListContent = isListOrdered ? Content.Ordered : Content.Unordered
  return (
    <DynamicListTag>
      {items.map((item, index) => {
        const findInjectNode = injectNodes?.find(
          (node) => node.injectIndex === index,
        )
        return (
          <React.Fragment key={item.id}>
            {findInjectNode?.position === injectNodePositions.before &&
              findInjectNode.node}
            <DynamicListContent item={item} />
            {findInjectNode?.position === injectNodePositions.after &&
              findInjectNode.node}
          </React.Fragment>
        )
      })}
    </DynamicListTag>
  )
}
