import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart'
import MyProvider from './components/context/CartContext';


function App() {


  return (
    <>
      <BrowserRouter>
        <MyProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/home' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='item/:id' element={<ItemDetailContainer />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </MyProvider>
      </BrowserRouter>
    </>

  );
}

export default App;
