// import logo from './logo.svg';
import HomePage from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Layouts from '../lauouts/Layout';
import './App.css';

const App = ()=> {
  return (
    <Routes>
      <Route path="/carsharing-ua" element={<Layouts/>}>
        <Route index element={<HomePage />}/>
        

      </Route>
    </Routes>
      
    
  );
}

export default App;
