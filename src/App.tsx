import { Layout, Menu } from 'antd';
import React from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './app.less'
import HomeLayout from './layout/HomeLayout';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
const { Header } = Layout;

function App() {

  // 使用react-router V6来递归处理嵌套路由，生成路由组件
  const renderRoutes = (routes: any) => {
    return routes.map((route: any) => (
      <Route
        key={route.path}
        path={route.path}
        element={route.element}
      >
        {route.chilren && renderRoutes(route.chilren)}
      </Route>
    ))
  }

  // 配置路由，要求routeList能够初始化默认导航到/home


  const routeList = [
    {
      key: 'home',
      label: 'home',
      path: '/home',
      element: <Home />
    },
    {
      key: 'about',
      label: 'about',
      path: '/about',
      element: <About />
    },
    {
      key: 'contact',
      label: 'contact',
      path: '/contact',
      element: <Contact />
    }
  ]
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleMenuClick = ({ key }: { key: string }) => {
    const { path } = routeList.find(item => item.key === key) || {};
    if (path) {
      navigate(path);
    }
  };

  if (pathname === '/') return <Navigate to='/home' />

  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[routeList[0].key]} items={routeList} onClick={handleMenuClick} />
        </Header>
        <Routes>
          {renderRoutes(routeList)}
        </Routes>
      </Layout>
    </>
  )
}
export default App