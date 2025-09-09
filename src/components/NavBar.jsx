import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const container = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000b4',
    padding: '10px 40px',
  };

  const menu = {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0,
  };

  const menuAction = {
    color: "#dcd7d7ce",
    fontWeight: "bold", 
    textShadow: "1px 1px 2px black",
    textDecoration: 'none' 
  };
  const linkAction = {
    textDecoration: 'none'
  }
  return (
    <>
      <div style={container}>
        <div style={{
          fontSize: '20px',
          fontFamily: "Trirong",
          textShadow: "1px 1px 2px black",
          color: "white"
        }}>
          DTI Calculator
        </div>

        <ul style={menu}>
          <li><Link to="/" style={menuAction}>Home</Link></li>
          <li><Link to="/moneyCal" style={menuAction}>MONEY Cal</Link></li>
          <li><Link to="/square" style={menuAction}>SQUARE Cal</Link></li>
          <li><Link to="/brmCal" style={menuAction}>BMR Cal</Link></li>
          <li><Link to="/craCal" style={menuAction}>CAR Cal</Link></li>
        </ul>
      </div>
    </>
  ); 
}
