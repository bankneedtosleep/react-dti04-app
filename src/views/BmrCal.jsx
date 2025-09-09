import React from 'react'
import NavBar from '../components/NavBar'
import HeaderCal from '../components/HeaderCal'
import bmr from '../assets/bmr.png'
import Footer from '../components/Footer'
export default function BmrCal() {
  return (
    <>
      <NavBar/>
        <HeaderCal titleName="Car Calculator"imgName={bmr} />
        BmrCal Page
        <Footer emoji="👋" />
    </>
  )
}
