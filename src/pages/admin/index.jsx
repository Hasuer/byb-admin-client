import React from 'react'
import memoryUtils from '../../utils/memoryUtil'
import { Navigate } from 'react-router-dom'
import { Layout } from 'antd'
import MyHeader from '../../components/myHeader'
import MySider from '../../components/mySider'
import './index.less'

const { Header, Footer, Content } = Layout
export default function Admin() {
  const user = memoryUtils.user
  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <Layout className="layout">
      <MySider />

      <Layout>
        <MyHeader />
        <Content className="content">Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}
