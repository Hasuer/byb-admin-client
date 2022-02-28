import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'
import { Menu, Layout } from 'antd'
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined
} from '@ant-design/icons'
import './index.less'
const { Sider } = Layout
const { SubMenu } = Menu

export default function MySider() {
  const [collapsed, setCollpased] = useState(false)

  const toggleCollapsed = (_, iscollapsed) => {
    console.log('receive', iscollapsed)
    setCollpased(iscollapsed)
  }

  useEffect(() => {
    const token = PubSub.subscribe('collapsed', toggleCollapsed)
    return () => PubSub.unsubscribe(token)
  }, [])

  return (
    <Sider className="sider" trigger={null} collapsible collapsed={collapsed} theme="light">
      <div className="logo">
        <img src="https://joeschmoe.io/api/v1/random" alt="avater" />
        <div className="title" style={{ display: collapsed ? 'none' : 'block' }}>
          北洋北后台
        </div>
      </div>
      <div>
        <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    </Sider>
  )
}
