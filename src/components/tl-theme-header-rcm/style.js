import styled from 'styled-components'
import sprite02 from '@/assets/img/sprite_02.png'

export const ThemeHeaderWrapper = styled.div`
  width: 100%;  
  height: 33px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #C10D0C;
  background-position: -225px -156px;
  display: flex;
  position: relative;
  .title {
    font-size: 20px;
    margin-right: 20px;
    text-decoration: none;
  }
  .keywordlist {
    display: flex;
    padding-top: 8px;
  }
  .keyword {
    ::after {
      content: '|';
      color: #ccc;
      padding: 0 10px;
    }
    :last-child::after {
      content: ''
    }
  }
  .more {
    position: absolute;
    right: 10px;
    top: 9px;
    vertical-align: baseline;
    ::after {
      content: '';
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background: url(${sprite02}) no-repeat 0 -240px;
      position: relative;
      top: 2px
    }
  }
`