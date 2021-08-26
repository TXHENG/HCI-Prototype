import './tailwind.css';
import './style.css'
import 'noty/lib/noty.css'
import 'noty/lib/themes/sunset.css'
import Noty from 'noty'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Menu from './Menu';
import Order from './Order';
import useCart from './useCart';
function App() {
  Noty.overrideDefaults({
      layout   : 'topRight',
      theme    : 'sunset',
  });
  const {cart, addToCart, removeFromCart,setCartNum, clearCart} = useCart();
  return (
    <>
    <Router>
      <Switch>
        <Route path="/order">
          <Order cart={cart} removeFromCart={removeFromCart} setCartNum={setCartNum} clearCart={clearCart}/>
        </Route>
        <Route path="">
          <Menu cart={cart} addToCart={addToCart}/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
