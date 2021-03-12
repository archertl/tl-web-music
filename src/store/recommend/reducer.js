import * as constans from  './constants'

const defaultState = {
  banners: [],
  recommends: [],
  albums: []
}

export const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case constans.SET_BANNER:
      return {...state, banners:action.banners}
    case constans.SET_RECOMMENDS:
      return {...state, recommends:action.recommends}
    case constans.SET_ALBUMS:
      return {...state, albums:action.albums}
    default: 
      return state
  }
}
