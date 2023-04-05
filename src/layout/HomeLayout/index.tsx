import React, { ReactNode } from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Navigate, NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Home } from '@/pages/home';
import { About } from '@/pages/about';
import { SideBar } from './SideBar';
import Sider from 'antd/es/layout/Sider';
import { Gg } from '@/pages/home/gg';
import { Hh } from '@/pages/home/hh';

const { Header, Content } = Layout;



interface PropsType {
  routeList:any;
  children: ReactNode
}

const App: React.FC<PropsType> = ({ routeList,children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)

  const handleMenuClick = ({ key }: { key: string }) => {
    console.log(key)
    // 根据key找到对应的path
    const { path } = routeList.find(item => item.key === key) || {};
    console.log(routeList.find(item => item.key === key) || {});
    if (path) {
      navigate(path);
    }
  };
  return (
    <Layout>
      <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['aaa']}
        defaultOpenKeys={['aaa']}
        style={{ height: '100%', borderRight: 0 }}
        items={routeList}
        onClick={handleMenuClick}
      />
    </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

// const renderRoutes = (routes: any) => {
//   return routes.map((route: any) => (
//     <Route
//       key={route.path}
//       path={route.path}
//       element={route.element}
//     >
//       {route.chilren && renderRoutes(route.chilren)}
//     </Route>
//   ))
// }