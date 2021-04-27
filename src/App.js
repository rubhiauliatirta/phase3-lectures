import React, { useState } from 'react'
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import groupAnimals from "./helpers/groupAnimal";
import './App.css';


function App() {
  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col">
          <Users />
        </div>
        <div className="col">
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default App;


