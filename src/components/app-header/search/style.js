import styled from 'styled-components'
import sprite01 from '@/assets/img/sprite_01.png'

export const SearchWrapper = styled.div`
  background-color: #fff;
  border-radius: 32px;
  width: 158px;
  height: 32px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 12px;
  &::before {
    content: '';
    display: block;
    background: url(${sprite01}) no-repeat -10px -108px;
    width: 22px;
    height: 14px;
  }
  input {
    width: 130px;
    color: #9b9b9b;
    background-color: #fff;
    color: #333;
    line-height: 16px;
  }
`