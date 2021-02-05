import React, { Fragment, memo } from 'react'
import { FooterWrapper } from './style'
import { footerLinks, footerImages } from '@/common/local-data'

export default memo(function TLAppFooter() {
  const footerLinksJsx = footerLinks.map(item => (
    <Fragment key={item.title}>
      <a href={item.link}>{item.title}</a>
      <span>|</span>
    </Fragment>
  ))
  const footerImagesJsx = footerImages.map(item => (
    <a href={item.link}  key={item.link} className="item"> </a>
  ))
  return (
    <FooterWrapper>
      <div className="wrap-v2 con">
        <div className="left">
          <p className="links">{footerLinksJsx}</p>
          <p>
            <span>网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" rel="noopener noreferrer" target="_blank">浙网文[2018]3506-263号</a>
          </p>
          <p>
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>
              举报邮箱：
              <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">ncm5990@163.com</a>
            </span>
          </p>
          <p>
            <span>粤B2-20090191-18</span>
            <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
              工业和信息化部备案管理系统网站
            </a>
          </p>
        </div>
        <div className="right">
          {footerImagesJsx}
        </div>
      </div>
    </FooterWrapper>
  )
})
