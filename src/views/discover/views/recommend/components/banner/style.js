import styled from 'styled-components'
import downloadImg from '@/assets/img/download.png'

export const BannerWrapper = styled.div`
  background: url(${(props => props.backgroundImgUrl)});
  background-size: 6000px;
  background-position: center center;
  .bannerbox {
    display: flex;
    height: 285px;
    position: relative;
    .left {
      width: 726px;
      img {
        width: 726px;
        height: 285px;
      }
    }
    .right {
      width: 254px;
      background: url(${downloadImg}) no-repeat;
      color: #8d8d8d;
      text-align: center;
      .download {
        display: block;
        width: 215px;
        height: 56px;
        margin: 186px 0 0 19px;
        background: url(${downloadImg}) no-repeat 0 -290px
      }
      p {
        margin: 10px auto;
      }
    }
    .prev, .next {
      position: absolute;
      top: 50%;
      left: -68px;
      margin-top: -31px;
      width: 37px;
      height: 63px;
    }
    .next {
      left: auto;
      right: -68px;
    }
  }
`