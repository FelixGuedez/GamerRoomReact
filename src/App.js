import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // const onAdd = (count) => {
  //   alert('Agregastes ' + count + ' productos al carrito')

  // }

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/home' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      {/* <ItemDetailContainer id={1}/> */}
    </>

  );
}

export default App;
