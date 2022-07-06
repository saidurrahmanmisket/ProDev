import './App.css';
import Home from './components/client/pages/home/Home';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SinglePost from './components/client/post/singlePost/SinglePost';
import Login from './components/client/pages/home/loginAndSignup/Login';
import SignUp from './components/client/pages/home/loginAndSignup/SignUp';
import DashBoard from './components/common/deshboard/DashBoard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/home' element={<Home /> } />
          <Route path='/contact' element={<Home /> } />
          <Route path='/about' element={<Home /> } />
          <Route path='/post' element={<SinglePost /> } />
          <Route path='/login' element={<Login /> } />
          <Route path='/signup' element={<SignUp /> } />
          <Route path='/dashboard' element={<DashBoard /> } />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
