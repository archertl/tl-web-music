import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderWrapper } from './style'
import { headerLinks } from '@/common/local-data'
import TLSearch from './search'

export default memo(function TLAppHeader() {
  const navJsx = headerLinks.map( (item,i) => {
    if(i < 3) {
      return <NavLink to={item.link} exact={i === 0} key={item.title}>{item.title}</NavLink>
    } else {
      return <a href={item.link} key={item.title}>{item.title}</a>
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
        <div className="right">
          <TLSearch></TLSearch>
          <div className="c">
            创作者中心
          </div>
          <div className="login">
            登录
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
})
