import { Gg } from "@/pages/home/gg";
import { Hh } from "@/pages/home/hh";
import { Menu, Layout, theme } from "antd";
import React from "react"

const { Sider } = Layout;

export const SideBar = ({ routes }: { routes: any[] }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const routeList = [
    {
      key: 'aaa',
      label: 'aaa',
      children: [
        {
          key: 'gg',
          label: 'gg',
          path: '/gg',
          element: <Gg />
        },
        {
          key: 'hh',
          label: 'hh',
          path: '/hh',
          element: <Hh />
        },
      ],
    },
    {
      key: 'cc',
      label: 'cc',
      path: '/cc',
      element: <Hh />
    },
  ]

  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['aaa']}
        defaultOpenKeys={['aaa']}
        style={{ height: '100%', borderRight: 0 }}
        items={routeList}
      />
    </Sider>
  )
}