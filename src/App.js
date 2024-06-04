
import './App.css';
import Error from './component/Error/Error';
import Header from './component/Header/Header';
import ManageInventory from './component/ManageInventory/ManageInventory';
import Order from './component/Order/Order';
import ProductDetails from './component/Productdetail/ProductDetails';
import Shop from './component/Shop/Shop';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,

} from "react-router-dom";
import fakedata from './fakeData/products.json';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/review" element={<Order></Order>}></Route>
        <Route  path="/product/:productId" element={<ProductDetails details={fakedata}></ProductDetails>}></Route>

        <Route exact path="*" element={<Error></Error>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
