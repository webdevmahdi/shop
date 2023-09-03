import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import About from './components/About us/About';
import NotFound from './components/404/NotFound';
import Header from './components/Header/Header';
import UserDetails from './components/Users/User/UserDetails/UserDetails';
function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/User/:details' element={<UserDetails></UserDetails>}></Route>
        <Route path='/Users' element={<Users></Users>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
