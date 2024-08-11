import './App.css'
import Home from './pages/home/Homepage.jsx'
import Login from './pages/login/Loginpage.jsx'
import SignUp from './pages/signup/SignUppage.jsx'


function App() {

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        {/* <SignUp/>
        <Login/> */}
        <Home/>
      </div>
    </>
  )
}

export default App
