import * as constans from  './constants'

const defaultState = {
  banners: [],
  recommends: []
}

export const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case constans.SET_BANNER:
      return {...state, banners:action.banners}
    case constans.SET_RECOMMENDS:
      return {...state, recommends:action.recommends}
    default: 
      return state
  }
}
