import HomePage from '../pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';

import Layouts from '../lauouts/Layout';
import './App.css';
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import FavoritePage from "../pages/FavoritePage/FavoritePage"
import 'bootstrap/dist/css/bootstrap.min.css';
const App = ()=> {
  return (
    <Routes>
      <Route path="/carsharing-ua" element={<Layouts/>}>
        <Route index element={<HomePage />}/>
        <Route path='catalog' element={<CatalogPage />}/>
        <Route path='favorites' element={<FavoritePage/>}/>
      </Route>
    </Routes>
      
    
  );
}

export default App;
