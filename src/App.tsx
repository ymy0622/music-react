import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, App as AntApp } from 'antd'
import router from './router'

function App() {
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        token: {
          colorPrimary: '#21D49B',
        },
        components: {
          Layout: {
            bodyBg: '#F7F9FC',
            footerBg: '#FAFAFA',
            lightSiderBg: '#F0F3F6',
            lightTriggerBg: '#F0F3F6',
          },
        },
      }}
    >
      <AntApp>
        <RouterProvider router={router} />
      </AntApp>
    </ConfigProvider>
  )
}

export default App
