import * as constans from  './constants'
import {
  getBanner
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