import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  const onAdd = (count) => {
    alert('Agregastes ' + count + ' productos al carrito')

  }

  return (
    <>
      <NavBar/> 
      {/* <ItemListContainer /> */}
      {/* <ItemCount inicial={1} stock={5} onAdd={onAdd}/> */}
      <ItemDetailContainer item={1}/>
    </>

  );
}

export default App;
