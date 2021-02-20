import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import { DiscoverWrapper } from './style'
import { dicoverMenu } from '@/common/local-data'
import { NavLink } from 'react-router-dom'

export default memo(function TLDiscover(props) {
  const { route } = props
  const dicoverMenuJsx = dicoverMenu.map( item => (
    <NavLink className="nav-item" to={ '/discover' + item.link} key={item.title}>{item.title}</NavLink>
  ))
  return (
    <DiscoverWrapper>
      <div className="nav">
        <div className="wrap-v1 nav-con">
          {dicoverMenuJsx}
        </div>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
