import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { ThemeHeaderWrapper } from './style'

export default memo(function TLThemeHeaderRcm(props) {
  const { 
    title, 
    titleLink, 
    keywords = [], 
    moreLink, 
    keywordClick = () => {}
  } = props
  const keywordsJsx = keywords.map(item => (
    <div onClick={item => keywordClick(item) } className="keyword" key={item}>{item}</div>
  ))
  return (
    <ThemeHeaderWrapper className="sprite_02">
      <Link to={titleLink} className="title">{title}</Link>
      <div className="keywordlist">
        {keywordsJsx}
      </div>
      <Link to={moreLink} className="more">更多</Link>
    </ThemeHeaderWrapper>
  )
})
