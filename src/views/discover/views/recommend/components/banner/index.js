import React, { memo, useEffect, useState, useCallback } from 'react'
import { useDispatch,useSelector,shallowEqual} from 'react-redux'

import { Carousel } from 'antd';
import { BannerWrapper } from './style'
import {
  getBannerAction
} from '@/store/recommend/actionCreactors'

export default memo(function TLBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const dispatch = useDispatch()
  const state = useSelector(state =>({
    banners: state.recommend.banners
  }),shallowEqual)
  useEffect(() => {
    dispatch(getBannerAction())
    return () => {
    }
  }, [dispatch])
  const bannerItemsJsx = state.banners.map(item => (
    <div key={item.targetId}>
      <img src={item.imageUrl} alt=""/>
    </div>
  ))
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  },[])
  const bgImg = state.banners[currentIndex] && state.banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  return (
    <BannerWrapper backgroundImgUrl={bgImg}>
      <div className="wrap-v2 bannerbox">
        <div className="left">
          <Carousel effect="fade" beforeChange={bannerChange} autoplay>
            {bannerItemsJsx}
          </Carousel>
        </div>
        <div className="right">
          <a href="https://music.163.com/#/download" className="download"> </a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
      </div>
      <div className="pre"></div>
      <div className="next"></div>
    </BannerWrapper>
  )
})
