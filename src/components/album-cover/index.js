import React, { memo } from 'react'

import { 
  getSizeImage
} from '@/utils/format-utils'
import { AlbumCoverWrapper } from './style'

export default memo(function TLAlbumCover(props) {
  
  const { item, size = "100px", width = "118px", bgp = "-570px" } = props
  console.log(item);
  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(item.picUrl,100)} alt=""/>
        <a href="/abc" className="cover sprite_covor">{item.name}</a>
      </div>
      <div className="album-info">
        <div className="name">{item.name}</div>
        <div className="artist">{item.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})