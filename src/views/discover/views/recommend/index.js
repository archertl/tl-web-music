import React, { memo } from 'react'
import { 
  RecommendWrapper,
  RecommendLeft,
  RecommendRight
 } from './style'
import TLBanner from './components/banner'
import TLHotRecommend from './components/hot-recommend'

export default memo(function TLRecommend(props) {
  return (
    <RecommendWrapper>
      <TLBanner></TLBanner>
      <div className="wrap-v2 content">
        <RecommendLeft>
          <TLHotRecommend></TLHotRecommend>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </div>
    </RecommendWrapper>
  )
})
