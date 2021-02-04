import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderWrapper } from './style'
import { headerLinks } from '@/common/local-data'

export default memo(function TLAppHeader() {
  const navJsx = headerLinks.map( (item,i) => {
    if(i < 3) {
      return <NavLink to={item.link} exact={i === 0}>{item.title}</NavLink>
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  })


  return (
    <HeaderWrapper>
      <div className="wrap-v1 con">
        <div className="left">
          <a className="sprite_01 logo" href="#/"> </a>
          <div className="nav">
            {navJsx}
          </div>
        </div>
        <div className="right"></div>
      </div>
    </HeaderWrapper>
  )
})
