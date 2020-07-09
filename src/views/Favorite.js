import React from 'react';
import {ThemeContext, themes} from "../App"

export default function Favorite() {
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <div style={{ 
            height: "100vh",
            backgroundColor : themes[theme].background
          }}>
            <h1 style={{color: themes[theme].foreground}}>Halaman Favorite</h1>
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}

