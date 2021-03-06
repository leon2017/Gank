import Router from 'next/router'
import NProgress from 'nprogress'
import Head from 'next/head'
import Link from 'next/link'
import { Layout, Menu, Button, Icon, BackTop } from 'antd'
const { Header, Content, Footer } = Layout
import ActiveLink from './ActiveLink'
import 'isomorphic-fetch'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ children, title = '主页' }) => (
  <div>
    <Head>
      <title>{ title } - Gank</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://cdn.bootcss.com/antd/2.13.4/antd.min.css" rel="stylesheet" />
      <link href='/static/css/nprogress.css' rel='stylesheet' />
      <link href="/static/logo.png" rel="icon" type="image/x-icon" />
    </Head>
    <Header style={{ width: '100%', minWidth: 1140 }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px', float: 'left' }}
      >
        <ActiveLink href='/'>主页</ActiveLink>
        <ActiveLink href='/fe'>前端</ActiveLink>
        <ActiveLink href='/android'>Android</ActiveLink>
        <ActiveLink href='/ios'>iOS</ActiveLink>
        <ActiveLink href='/app'>App</ActiveLink>
        <ActiveLink href='/expand'>拓展资源</ActiveLink>
        <ActiveLink href='/videos'>休息视频</ActiveLink>
        <ActiveLink href='/welfare'>福利</ActiveLink>
        <ActiveLink href='/timeline'>时间轴</ActiveLink>
      </Menu>
      <div className="icons">
        <Link href='/upload'>
          <Button type="primary" shape="circle" style={{ marginRight: 12 }} icon="upload" />
        </Link>
        <Link href='/search'>
          <Button type="primary" shape="circle" style={{ marginRight: 12 }} icon="search" />
        </Link>
        <a style={{ verticalAlign: 'sub' }} href="https://github.com/OrangeXC/gank" target="_blank">
          <Button shape="circle" icon="github" style={{ fontSize: 22 }} />
        </a>
      </div>
    </Header>
    <Content style={{ width: 1140, padding: '64px 50px', margin: '0 auto' }}>
      { children }
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Gank ©2017 use gank api Paword by Next <a href="https://github.com/OrangeXC/gank" target="_blank"><Icon type="github" /></a>
    </Footer>
    <BackTop />
    <style jsx>{`
      .logo {
        width: 30px;
        height: 30px;
        background-image: url(../static/logo.png);
        background-size: cover;
        border-radius: 6px;
        margin: 16px 24px 16px 0;
        float: left;
      }

      .icons {
        float: right;
      }
    `}</style>
  </div>
)
