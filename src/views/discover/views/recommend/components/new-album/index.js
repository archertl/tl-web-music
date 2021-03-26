import React, { memo, useEffect, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import TLThemeHeaderRcm from '@/components/tl-theme-header-rcm'
import TLAlbumCover from '@/components/album-cover'
import { NewAlbumWrapper } from './style'
import { 
  getAlbumsAction
} from '@/store/recommend/actionCreators'
import { Carousel } from 'antd';

export default memo(function TLNewAlbum() {
  const state = useSelector(state => ({
    albums: state.recommend.albums,
  }),shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAlbumsAction())
    return () => {
    }
  }, [dispatch])
  const refCarousel = useRef()
  return (
    <NewAlbumWrapper>
      <TLThemeHeaderRcm title="新碟上架"
                        titleLink="/discover/album"
                        moreLink="/discover/album"></TLThemeHeaderRcm>
      <div className="album">
        <div className="inalbum">
          <div className="arrow arrow-left sprite_02" 
               onClick={e => refCarousel.current.prev()}></div>
          <Carousel ref={refCarousel} dots={false}>
            {
              [0,1].map(item => (
                <div className="page" key={item}>
                  {
                    state.albums.slice(item * 5,(item + 1) * 5).map(cover => (
                      <TLAlbumCover item={cover}
                                    key={cover.id}></TLAlbumCover>
                    ))
                  }
                </div>
              ))
            }
          </Carousel>
          <div className="arrow arrow-right sprite_02"
               onClick={e => refCarousel.current.next()}></div>
        </div>
        

      </div>
    </NewAlbumWrapper>
  )
})
