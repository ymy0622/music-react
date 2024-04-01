import React from 'react'
import { createBrowserRouter, Navigate, type RouteObject } from 'react-router-dom'
import routes, { type RouteItem } from './routes'
import Layout from '@/layout/BasicLayout'

const pages = import.meta.glob(['../layout/**.tsx', '../pages/*/**.tsx'], { import: 'default', eager: true }) as Record<
  string,
  () => React.ReactNode
>

function getRoutes(routes: RouteItem[]): RouteObject[] {
  return routes.map(item => {
    if (item.path === '/' && item.redirect) {
      return {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Navigate to={item.redirect} replace />,
          },
          ...getRoutes(item.children || []),
        ],
      }
    } else {
      return {
        path: item.path,
        element: pages[item.element](),
        children: item.children ? getRoutes(item.children) : [],
      }
    }
  })
}

const router = createBrowserRouter(getRoutes(routes))
export default router
