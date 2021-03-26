import React, { memo, useEffect, useState, useCallback, useRef } from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'

import { Carousel } from 'antd';
import { BannerWrapper } from './style'
import {
  getBannerAction
} from '@/store/recommend/actionCreators'
import prevImg from '@/assets/img/banner-control-left.png'
import nextImg from '@/assets/img/banner-control-right.png'

export default memo(function TLBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef()
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
          <Carousel effect="fade" beforeChange={bannerChange} ref={bannerRef} autoplay>
            {bannerItemsJsx}
          </Carousel>
        </div>
        <div className="right">
          <a href="https://music.163.com/#/download" className="download"> </a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
        <div className="prev" onClick={() => bannerRef.current.prev()}>
          <img src={prevImg} alt=""/>
        </div>
        <div className="next" onClick={() => bannerRef.current.next()}>
          <img src={nextImg} alt=""/>
        </div>
      </div>
    </BannerWrapper>
  )
})
