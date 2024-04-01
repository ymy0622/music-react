import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu, Popover, QRCode, Input, Space, Avatar, theme } from 'antd'
import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import PlayBar from './components/PlayBar'
import routes, { type RouteItem } from '@/router/routes'
import Logo from '@/assets/images/Logo.svg?react'

import './index.less'
import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

const { Header, Content, Sider } = Layout

function getMenuItems(routes: RouteItem[]): MenuItem[] {
  return routes.map(item => {
    return {
      key: item.path,
      icon: item.icon,
      label: <Link to={item.path}>{item.label}</Link>,
      children: item.children ? getMenuItems(item.children) : undefined,
    }
  })
}
const childrenRoute = routes.find(route => route.path === '/' && route.redirect)

export default function BasicLayout() {
  const { token } = theme.useToken()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname !== childrenRoute?.redirect) navigate('/')
  }

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  return (
    <div className='min-h-screen flex flex-col w-fit min-w-full'>
      <Layout className='flex-1'>
        <Sider theme='light' width={220}>
          <div className='mb-6 h-68px flex items-center px-6 py-4 gap-2.5'>
            <h1 className='sider-logo' onClick={handleLogoClick}>
              <Link to='/' onClick={e => handleLogoClick(e)}>
                多多音乐
              </Link>
              <Logo />
            </h1>
          </div>
          <Menu
            selectedKeys={[pathname]}
            items={getMenuItems(childrenRoute?.children ?? [])}
            mode='inline'
            className='custom-sider-menu'
            onClick={handleMenuClick}
          />
        </Sider>
        <Layout style={{ width: 'auto' }}>
          <Header className='mx-12 p-0 h-68px' style={{ background: token.Layout?.bodyBg }}>
            <div className='h-full flex flex-items-center justify-between'>
              <div>
                <Input
                  size='large'
                  placeholder='搜索'
                  prefix={<SearchOutlined />}
                  className='w-260px h-36px custom-search-input'
                />
              </div>
              <Space className='font-size-4.5'>
                <Popover content={<QRCode value='https://ant.design/' />} trigger='click'>
                  <Space>
                    <Avatar
                      icon={<UserOutlined style={{ color: '#666D7E' }} />}
                      size={28}
                      style={{ backgroundColor: '#EAEDF1' }}
                    />
                    <div style={{ color: '#666D7E', fontSize: '13px' }}>未登录</div>
                  </Space>
                </Popover>
              </Space>
            </div>
          </Header>

          <Content className='mx-12 my-6'>
            <div
              className='mx-auto max-w-1500px min-w-700px'
              style={{
                padding: 24,
                minHeight: 360,
                background: '#fff',
                borderRadius: '10px',
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
      {/* 播放控制 */}
      <div className='h-80px border-t border-solid border-#E5E6E8' style={{ background: token.Layout?.footerBg }}>
        <PlayBar />
      </div>
    </div>
  )
}
