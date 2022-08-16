import { useState } from 'react'

import BasicLayout from 'components/layout/Basic'
import {
  List,
  TagType,
} from 'components/pages/List'

const TAGS_ARRAY: TagType[] = [
  { title: 'World Of Tanks', id: 0 },
  { title: 'World Of Warplanes', id: 1 },
  { title: 'World Of Warships', id: 2 },
]

const ListPage = () => {
  const [selectedTag, setSelectedTag] = useState<TagType>(TAGS_ARRAY[1])

  const handleSelectTag = (id: number) => {
    const tag = TAGS_ARRAY.find((tag) => tag.id === id)

    if (tag) {
      setSelectedTag(tag)
    } else {
      throw new Error('Tag not found')
    }
  }

  return (
    <BasicLayout title="Task #2: List">
      <List
        tagsArray={TAGS_ARRAY}
        selectedTag={selectedTag}
        onSelect={handleSelectTag}
      />
    </BasicLayout>
  )
}

export default ListPage
