import { get }  from './axios'

export const getBanner = function() {
  return get('/banner')
}