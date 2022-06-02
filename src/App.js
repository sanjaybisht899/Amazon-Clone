import Home from './Components/Home';
import About from './Components/Extras/About'
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Electronics from './Components/Categories/Electronics'
import Product from './Components/Categories/Product'
import Details from './Components/Payments/Details';
import ViewCart from './Components/Cart/ViewCart';
import Profile from './Components/Login/Profile';
import './App.css';
function App() {
  return (
    <div className="App">
      <>
          <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/About' element={<About/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/electronics' element={<Electronics/>}></Route>
          <Route exact path='/product' element={<Product/>}></Route>
          <Route exact path='/details' element={<Details/>}></Route>
          <Route exact path='/viewcart' element={<ViewCart/>}></Route>
          <Route exact path='/profile' element={<Profile/>}></Route>
        </Routes>  
      </>
    </div>
  );
}

export default App;
