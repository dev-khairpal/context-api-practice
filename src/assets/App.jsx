import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider';

import './App.css'
import User from './components/User';
import Greet from './context/Greet';

function App() {

  return (
    <UserContextProvider>
      <h1>Understand Context API</h1>
      <User />
      <Greet />
    </UserContextProvider>
  )
}

export default App
