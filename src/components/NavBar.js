import React, {useState} from 'react';
import {Link} from "react-router-dom"
import {ThemeContext} from "../App"

export default function NavBar() {

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.navItem}>Home</Link>
      <Link to="/detail" style={styles.navItem}>Detail</Link>
      <Link to="/favorites" style={styles.navItem}>Favorites</Link>
      <ThemeContext.Consumer>
      {
        ({changeTheme}) => (
          <input 
          type="checkbox" 
          id="theme" 
          onChange={changeTheme}/>
        )
      }
 
      </ThemeContext.Consumer>
      <label htmlFor="theme">Dark Mode</label>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "1rem",
    backgroundColor:"#D3D3D3"
  },
  navItem: {
    marginRight: "1rem"
  }
}