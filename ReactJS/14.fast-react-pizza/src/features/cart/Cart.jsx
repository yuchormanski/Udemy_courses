import LinkButton from '../../ui/LinkButton.jsx';
import Button from '../../ui/Button.jsx';
import CartItem from './CartItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice.js';
import { getUsername } from '../user/userSlice.js';
import EmptyCart from './EmptyCart.jsx';

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  function clearCartHandler() {
    dispatch(clearCart());
  }

  if (cart.length === 0) return <EmptyCart />;
  return (
    <div className={'px-4 py-3'}>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className={'mt-7 text-xl font-semibold'}>Your cart, {username}</h2>

      <ul className={'mt-3 divide-y divide-stone-200 border-b'}>
        {cart.map((pizza) => (
          <CartItem key={pizza.pizzaId} item={pizza} />
        ))}
      </ul>
      <div className={'mt-6 space-x-2'}>
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type={'secondary'} onClick={clearCartHandler}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
