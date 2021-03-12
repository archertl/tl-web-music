import * as constans from  './constants'
import {
  getBanner,
  getHotRecommend,
  getNewAlbum
} from '@/services/recommend'

/**
 * 轮播图数据
 */
export const getBannerAction = () => {
  return function(dispatch) {
    getBanner().then(res => {
      dispatch(setBannerAction(res))
    })
  }
}
export const setBannerAction = res => {
  return {
    type: constans.SET_BANNER,
    banners: res.banners
  }
}

/**
 * 热门推荐数据
 */
export function getRecommendsAction() {
  return function(dispatch) {
    getHotRecommend().then(res => {
      dispatch(setRecommendsAction(res))
    })
  }
}
export const setRecommendsAction = res => {
  return {
    type: constans.SET_RECOMMENDS,
    recommends: res.result.slice(0,8)
  }
}

/**
 * 新碟上架数据
 */
export function getAlbumsAction() {
  return function(dispatch) {
    getNewAlbum(10, 0).then(res => {
      dispatch(setAlbumsAction(res))
    })
  }
}
export const setAlbumsAction = res => {
  return {
    type: constans.SET_ALBUMS,
    albums: res.albums
  }
}