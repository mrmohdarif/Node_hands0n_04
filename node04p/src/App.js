import './App.css';
import Login from './FrontEnd/Login';
import Register from './FrontEnd/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Sucessregister from './FrontEnd/Sucessregister';
import Loginsucess from './FrontEnd/Loginsucess';
import Home from './FrontEnd/Home';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/sucessregister' element={<Sucessregister/>}/>
        <Route path='/loginsucess' element={<Loginsucess/>}/>
      </Routes>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
