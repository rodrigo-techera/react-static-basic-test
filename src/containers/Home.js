import React from 'react'
import { withRouteData } from 'react-static'
//
import logoImg from '../logo.png'

export default withRouteData(( {data} ) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
    <p> data1: { data.data1 } </p>
    <p> data2: { data.data2 } </p>
    <p> data3: { data.data3 } </p>
  </div>
))
