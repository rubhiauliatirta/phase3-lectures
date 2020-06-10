import React from 'react';
import AddUserForm from './components/AddUserForm'
import UserList from './components/UserList'
import { Provider } from 'react-redux'
import store from "./store";


function App() {
  return (
    <Provider store={store}>
    <div style={{padding : "2rem"}}>
      <h1>User Apps</h1>
      <AddUserForm />
      <UserList />
    </div>
    </Provider>
  );
}

export default App;
