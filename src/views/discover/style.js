import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  .nav {
    height: 30px;
    background-color: #C20C0C;
  }
  .nav-con {
    padding-left: 180px;
    .nav-item {
      color: #fff;
      display: inline-block;
      height: 20px;
      margin: 2px 17px 0;
      padding: 0 13px;
      border-radius: 20px;
      line-height: 20px;
      text-decoration: none;
    }
    .active, .nav-item:hover {
      background-color: #9B0909;
    }
  }
`