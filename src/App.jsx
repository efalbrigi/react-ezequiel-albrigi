import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemsListContainer/ItemsListContainer';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route path='/' element= {<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
        <Route path='/item/:id' element= {<ItemDetailContainer/>}/>

      </Routes>
      
      
      
      
      <header className="App-header">
            
      </header>

    </div>
  );
}

export default App;
