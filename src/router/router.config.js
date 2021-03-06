/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/chatroom',
        name: 'ChatRoom',
        component: () => import('@/views/chatroom/index'),
        meta: { title: '聊天室', keepAlive: true }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    meta: {
      title: 'Chaty',
      keepAlive: false
    }
  },
  {
    path: '/*',
    component: () => import('@/views/404'),
    meta: {
      title: '404',
      keepAlive: false
    }
  }
]
