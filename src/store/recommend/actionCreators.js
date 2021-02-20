import * as constans from  './constants'
import {
  getBanner,
  getHotRecommend
} from '@/services/recommend'

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