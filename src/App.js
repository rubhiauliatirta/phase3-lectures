import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import { Detail, Home, Favorite } from "./views";

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext  = React.createContext("light")
export const UserContext = React.createContext()


function App() {

  const [usedTheme, setUsedTheme] = useState("light")

  return (
    <UserContext.Provider value="Rubhi">
      <ThemeContext.Provider value={{
         theme : usedTheme,
         changeTheme : function(){
           usedTheme === "light" ? setUsedTheme("dark") : setUsedTheme("light")
         }
      }}>
        <BrowserRouter>
          <NavBar />
          <div style={{padding: "2rem"}}>
    
            <Switch>
              <Route path="/detail">
                <Detail />
              </Route>
      
              <Route path="/favorites">
                <Favorite />
              </Route>
              <Route path="/">
                <Home />
              </Route>

            </Switch>
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </UserContext.Provider>
    

  );
}

export default App;

