import { GithubFilled } from '@ant-design/icons'

export type RouteItem = {
  path: string // 路由路径
  icon?: React.ReactNode // 路由在 Layout 中的 Icon
  label?: string // 路由在 Layout 中的 Menu Label
  element: string // 路由的页面组件名称
  redirect?: string // 重定向路径
  children?: RouteItem[] // 子路由
}

const routes: RouteItem[] = [
  {
    path: '/',
    element: '../layout/BasicLayout.tsx',
    redirect: '/recommend',
    children: [
      {
        path: '/recommend',
        icon: <GithubFilled />,
        label: '音乐馆',
        element: '../pages/Recommend/index.tsx',
      },
      {
        path: '/playlist',
        icon: <GithubFilled />,
        label: '精选歌单',
        element: '../pages/PlayList/index.tsx',
      },
      {
        path: '/video',
        icon: <GithubFilled />,
        label: '视频广场',
        element: '../pages/Video/index.tsx',
      },
    ],
  },
]

export default routes
