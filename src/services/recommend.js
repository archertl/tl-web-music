import { get }  from './axios'

export function getBanner () {
  return get('/banner')
}

export function getHotRecommend() {
  return get('/personalized')
}
