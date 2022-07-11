import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pazes/Home/Home';
import NotFound from './Pazes/Shared/NotFound/NotFound';
import Login from './Pazes/Login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
