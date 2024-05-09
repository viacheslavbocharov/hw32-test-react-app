import React from 'react'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
import Container from '../Container/Container'


export default function Main() {
  return (
    <div className='main'>
        <Sidebar />
        <Container />
    </div>
  )
}
