
import { Navigate,Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import {Toaster} from 'react-hot-toast'
import SignUp from './components/pages/SignUp'
import { useAuthContext } from './context/AuthContext'

export default function App() {
  const {authUser}=useAuthContext();
  
  return (
    
  <div className='p-4 h-screen flex items-center justify-center '>
    <Routes>
      <Route path='/'element={authUser ? <Home/> : <Navigate to={"/login"}/>}/>
      <Route path='/login'element={authUser ? <Navigate to='/'/> : <Login/>}/>
      <Route path='/signup'element={authUser ? <Navigate to='/'/> : <SignUp/>}/>
    </Routes>
   <Toaster/>
    </div>
    
  )
}