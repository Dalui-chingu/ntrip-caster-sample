

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import Dashboard from './Pages/Dashboard';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/Signup';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
      <Route exact path='/dash' element={<Dashboard/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
