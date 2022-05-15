import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemsListContainer/ItemsListContainer';
import Cart from './Pages/Cart';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route path='/' element= {<ItemListContainer/>}/>
        <Route path='/cart' element= {<Cart/>}/>
        <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
        <Route path='/item/:id' element= {<ItemDetailContainer/>}/>

      </Routes>

    </div>
  );
}

export default App;
