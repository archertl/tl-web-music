import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import TLThemeHeaderRcm from '@/components/tl-theme-header-rcm'
import { NewAlbumWrapper } from './style'
import { 
  getAlbumsAction
} from '@/store/recommend/actionCreators'

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
  console.log(state.albums);
  return (
    <NewAlbumWrapper>
      <TLThemeHeaderRcm title="新碟上架"
                        titleLink="/discover/album"
                        moreLink="/discover/album"></TLThemeHeaderRcm>
    </NewAlbumWrapper>
  )
})
