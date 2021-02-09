import * as constans from  './constants'

const defaultState = {
  banners: []
}

export const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case constans.SET_BANNER:
      return {...state, banners:action.banners}
    default: 
      return state
  }
}
