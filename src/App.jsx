// 根应用组件
import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.less'
import Router from './router'
export default class App extends Component {
  render() {
    return <Router></Router>
  }
}
