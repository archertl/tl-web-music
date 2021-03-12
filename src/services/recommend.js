import { get, post }  from './axios'

export function getBanner () {
  return get('/banner')
}

export function getHotRecommend() {
  return get('/personalized')
}

export function getNewAlbum(limit, offset) {
  return post('/top/album',{
    limit,
    offset
  })
}
