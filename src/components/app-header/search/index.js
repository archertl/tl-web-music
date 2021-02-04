import React, { memo } from 'react'
import { SearchWrapper } from './style'

export default memo(function TLSearch() {
  return (
    <SearchWrapper>
      <input placeholder="音乐/视频/电台/用户"/>
    </SearchWrapper>
  )
})
