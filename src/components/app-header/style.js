import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background: #242424;
  border-bottom: 5px solid #C20C0C;
  .con {
    display: flex;
    height: 100%;
    justify-content: space-between;
    .left {
      display: flex;
    }
    .logo {
      width: 157px;
      background-position: 0 0;
      padding-right: 20px;
    }
    .nav {
      display: flex;
      a {
        display: flex;
        align-items: center;
        color: #ccc;
        padding: 0 20px;
        text-decoration: none;
        font-size: 14px;
        &:last-child::after {
          content: '';
          display: block;
          background: url('assets/img/sprite_01.png') no-repeat -192px 0;
          width: 26px;
          height: 13px;
        }
      }
      .active, a:hover {
        background-color: #000;
          color: #fff;
      }
    }
  }
`