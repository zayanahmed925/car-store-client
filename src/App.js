import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Home from './page/Home/Home/Home';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import MyItem from './page/MyItem/MyItem';
import RequireAuth from './page/RequireAuth/RequireAuth';
import Checkout from './page/Checkout/Checkout';
import ManageItems from './page/manageItems/ManageItems';
import AddItem from './page/AddItem/AddItem';
import Blogs from './page/Blogs/Blogs';




function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product/:productsId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/myItem' element={<MyItem></MyItem>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
