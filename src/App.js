import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import MyProvider from './components/context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { initializeApp } from "firebase/app";
import Checkout from './components/Checkout';




function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCktM34T_AQ3rJNbmENlLIpaj4sEXYOSak",
    authDomain: "gamer-room-react.firebaseapp.com",
    projectId: "gamer-room-react",
    storageBucket: "gamer-room-react.appspot.com",
    messagingSenderId: "459653003371",
    appId: "1:459653003371:web:2e3b97c687f6495827192e"
  };
  
  initializeApp(firebaseConfig);


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
            <Route path='checkout' element={<Checkout/>}/>
          </Routes>

        </MyProvider>
      </BrowserRouter>
    </>

  );
}

export default App;
