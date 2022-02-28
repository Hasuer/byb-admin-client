import React, { useState } from 'react'
import { Button, Layout } from 'antd'

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import PubSub from 'pubsub-js'
import './index.less'
const { Header } = Layout
export default function MyHeader() {
  const [collapsed, setCollapsed] = useState(true)
  const publish = () => {
    setCollapsed(!collapsed)
    PubSub.publish('collapsed', collapsed)
  }
  return (
    <div>
      <Header className="header">
        <Button type="primary" onClick={publish} style={{ marginBottom: 16 }}>
          {React.createElement(!collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        header
      </Header>
    </div>
  )
}
