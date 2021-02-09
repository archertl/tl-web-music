import React, { memo } from 'react'

import { HotRecommendWrapper } from './style'
import TLThemeHeaderRcm from '@/components/tl-theme-header-rcm'

export default memo(function TLHotRecommend() {
  return (
    <HotRecommendWrapper>
      <TLThemeHeaderRcm title="热门推荐"
                        keywords={[]}></TLThemeHeaderRcm>
    </HotRecommendWrapper>
  )
})
