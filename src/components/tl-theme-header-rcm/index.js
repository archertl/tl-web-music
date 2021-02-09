import React, { memo } from 'react'

import { ThemeHeaderWrapper } from './style'

export default memo(function TLThemeHeaderRcm(props) {
  const { title, keywords = [], moreLink, keywordClick = () => {}} = props
  const keywordsJsx = keywords.map(item => (
    <div onClick={item => keywordClick(item) } className="keyword">{item}</div>
  ))
  return (
    <ThemeHeaderWrapper>
      <p className="title">{title}</p>
      {keywordsJsx}
      <a href={moreLink} className="more">更多</a>
    </ThemeHeaderWrapper>
  )
})
