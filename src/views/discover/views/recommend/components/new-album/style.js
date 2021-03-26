import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  width: 100%;
  .album {
    width: 688px;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    .inalbum {
      display: flex;
      align-items: center;
      height: 184px;
      background: #f5f5f5;
      border: 1px solid #fff;
    }
    .page {
      display: flex !important;
      justify-content: space-between;
      align-items: center;
      padding-left: 8px;
    }
    .arrow {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }
    .ant-carousel {
      width: 100px;
      flex: 1;
    }
    .ant-carousel .slick-slide {
        overflow: hidden;
      }
    .arrow-left {
      background-position: -260px -75px;
      margin-top: -30px;
    }
    .arrow-right {
      background-position: -300px -75px;
      margin-top: -30px;
    }
  }
`