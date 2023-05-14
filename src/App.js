import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Add from './components/Add/Add';

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>
    </div>
  );
}

export default App;