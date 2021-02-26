import React, { memo } from 'react'

import { 
  getSizeImage,
  getCount
} from '@/utils/format-utils'
import { ThemeCoverWrapper } from './style'

export default memo(function TLThemeCover(props) {
  const { item } = props
  console.log(item);
  
  return (
    <ThemeCoverWrapper>
      <div className="cover">
        <img src={getSizeImage(item.picUrl,140)} alt=""/>
        <div className="dask sprite_covor"></div>
        <div className="info sprite_covor">
          <i className="sprite_icon erji"></i>
          <span>{getCount(item.playCount)}</span>
          <i className="sprite_icon play"></i>
        </div>
      </div>
      <p>{item.name}</p>
    </ThemeCoverWrapper>
  )
})
