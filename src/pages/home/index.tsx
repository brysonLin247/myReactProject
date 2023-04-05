import HomeLayout from "@/layout/HomeLayout";
import { SideBar } from "@/layout/HomeLayout/SideBar"
import React, { ReactNode } from "react"
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Gg } from "./gg";
import { Hh } from "./hh";

export const Home = () => {
  // 将跳转的路由加在原url的后面

  const routeList = [
    {
      key: 'aaa',
      label: 'aaa',
      elemment:<Gg />,
      // element: <Navigate to='/home/gg'/>,
      // children: [
      //   {
      //     key: 'gg',
      //     label: 'gg',
      //     path: '/home/gg',
      //     element: <Gg />
      //   },
      //   {
      //     key: 'hh',
      //     label: 'hh',
      //     path: '/home/hh',
      //     element: <Hh />
      //   },
      // ],
    },
    {
      key: 'cc',
      label: 'cc',
      path: '/home/cc',
      element: <Hh />
    },
  ]
  return (
    <>
      <HomeLayout routeList={routeList}>
        hello
        <Routes>
          {renderRoutes(routeList)}
        </Routes>
      </HomeLayout>
    </>
  )
}

const renderRoutes = (routes: any) => {
  return routes.map((route: any) => (
    <Route
      key={route.path}
      path={route.path}
      element={route.element}
    >
      {route.children && renderRoutes(route.children)}
    </Route>
  ))
}