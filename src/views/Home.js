import React, { useContext } from 'react';

import { ThemeContext, UserContext, themes } from "../App"

export default function Home() {

  const { theme, changeTheme } = useContext(ThemeContext)
  const user = useContext(UserContext)

  return (
    <div style={{
      height: "100vh",
      backgroundColor: themes[theme].background
    }}>
      <h1 style={{ color: themes[theme].foreground }}>Halaman Home, {user}</h1>
    </div>
  );
}