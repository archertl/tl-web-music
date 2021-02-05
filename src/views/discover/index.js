import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import { DiscoverWrapper } from './style'
import { dicoverMenu } from '@/common/local-data'
import { NavLink } from 'react-router-dom'

export default memo(function TLDiscover(props) {
  const { routes } = props
  console.log(routes);
  const dicoverMenuJsx = dicoverMenu.map( item => (
    <NavLink to={ '/discover' + item.link} key={item.title}>{item.title}</NavLink>
  ))
  return (
    <DiscoverWrapper>
      <div className="wrap-v2">
        {dicoverMenuJsx}
      </div>
      {renderRoutes(routes)}
    </DiscoverWrapper>
  )
})
