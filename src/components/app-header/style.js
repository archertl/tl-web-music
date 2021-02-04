import styled from 'styled-components'
import sprite01 from '@/assets/img/sprite_01.png'

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
    .right {
      display: flex;
      align-items: center;
      color: #fff;
      text-decoration: none;
    }
    .c {
      border: 1px solid #4F4F4F;
      width: 90px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-radius: 16px;
      margin-left: 12px;
      color: #ccc;
      &:hover {
        border-color: #ccc;
        color: #fff;
      }
    }
    .login {
      margin-left: 20px;
      color: #ccc;
      &:hover {
        color: #fff;
      }
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
        position: relative;
        &:last-child::after {
          content: '';
          display: block;
          background: url(${sprite01}) no-repeat -192px 0;
          width: 26px;
          height: 13px;
          position: absolute;
          top: 20px;
          right: -15px;
        }
      }
      .active, a:hover {
        background-color: #000;
          color: #fff;
      }
    }
  }
`