import styled from 'styled-components'

export const ThemeCoverWrapper = styled.div`
  width: 140px;
  .cover {
    width: 140px;
    height: 140px;
    position: relative;
    img {
      width: 100%;
    }
    .dask {
      width:100%;
      height: 100%;
      background-position: 0 0;
      position: absolute;
      top: 0;
      left: 0;
    }
    .info {
      width: 100%;
      height: 27px;
      color: #ccc;
      background-position: 0 -537px;
      position: absolute;
      left: 0;
      bottom: 0;
      padding-left: 10px;
      .erji {
        margin-top: 8px;
        margin-right: 5px;
        display: inline-block;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
      }
      .play {
        display: inline-block;
        width: 16px;
        height: 17px;
        background-position: 0 0;
        position: absolute;
        top: 5px;
        right: 10px;
      }
    }
  }
  p {
    padding: 8px 0 3px;
  }
`