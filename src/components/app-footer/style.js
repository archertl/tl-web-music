import styled from 'styled-components'
import spriteFooterImages02 from '@/assets/img/sprite_footer_02.png'
import spriteFooterImages01 from '@/assets/img/sprite_footer_01.png'

export const FooterWrapper = styled.div`
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  justify-content: space-around;
  .con {
    display: flex;
  }
  .left {
    width: 520px;
    padding-top: 15px;
    line-height: 24px;
    .links {
      a {
        color: #999;
      }
      span {
        color: #999;
        padding: 0 8px 0 10px;
        margin: 0;
      }
    }
    span {
      margin-right: 14px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-top: 33px;
    .item {
      margin-left: 30px;
      ::before {
        content: '';
        display: block;
        width: 44px;
        height: 46px;
        margin: 0 auto;
        background-image: url(${spriteFooterImages02});
        background-size: 104px 450px;
      }
      ::after {
        content: '';
        display: block;
        width: 52px;
        height: 10px;
        margin-top: 8px;
        background-image: url(${spriteFooterImages01});
        background-size: 180px 100px;
      }
      :nth-child(1) {
        ::before {
          background-position: -60px -101px;
        }
        ::after {
          background-position: -1px -90px;
        }
      }
      :nth-child(2){
        ::before  {
          background-position: 0 0;
        }
        ::after {
          background-position: 0 0;
        }
      }
      :nth-child(3) {
        ::before  {
          background-position: -60px -50px;
        }
        ::after {
          background-position: 0 -54px;
        }
      }
      :nth-child(4) {
        ::before  {
          background-position: 0 -101px;
        }
        ::after {
          background-position: -1px -72px;
        }
      }
    }
  }
`