import React from 'react'
import NavBar from '../components/NavBar'
import HeaderCal from '../components/HeaderCal'
import cra from '../assets/cra.png'
import Footer from '../components/Footer'

export default function CraCal() {
  return (
    <>
        <NavBar/>
        <HeaderCal titleName="Car Calculator" imgName={cra}titleColor={"#ff00b7ff"} />
        CarCal Page
        <Footer emoji="🐙" />
        </>
  )
}
