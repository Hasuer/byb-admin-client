import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/admin'
import Login from '../pages/login'
export default class Router extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    )
  }
}
