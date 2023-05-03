import './App.css'
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { UserProvider  } from './context/UserContext'


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage/>}/>
          <Route path='/home' element={<HomePage/>}/>

        </Routes>
      </BrowserRouter>
    </UserProvider>
  )

}

export default App
