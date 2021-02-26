import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux' 

import { HotRecommendWrapper } from './style'
import TLThemeHeaderRcm from '@/components/tl-theme-header-rcm'
import TLThemeCover from '@/components/theme-cover'
import { getRecommendsAction } from '@/store/recommend/actionCreators'

export default memo(function TLHotRecommend() {
  const state = useSelector(state => ({
    recommends: state.recommend.recommends
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecommendsAction())
    return () => {
    }
  }, [dispatch])
  const itemListJsx = state.recommends.map(item => (
    <div className="cover" key={item.id}>
      <TLThemeCover item={item}></TLThemeCover>
    </div>
  ))
  return (
    <HotRecommendWrapper>
      <TLThemeHeaderRcm title="热门推荐"
                        titleLink="/discover/songs"
                        moreLink="/discover/songs"
                        keywords={['华语','流行','摇滚','民谣','电子']}></TLThemeHeaderRcm>
      <div className="list">
        {itemListJsx}
      </div>
    </HotRecommendWrapper>
  )
})
