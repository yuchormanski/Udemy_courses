// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant.js';
import { useState } from 'react';
import Button from '../../ui/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddress, getUsername } from '../user/userSlice.js';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice.js';
import EmptyCart from '../cart/EmptyCart.jsx';
import store from '../../store.js';
import { formatCurrency } from '../../utils/helpers.js';
import { getAddress } from '../../services/apiGeocoding.js';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const cart = useSelector(getCart);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const dispatch = useDispatch();
  const isLoadingAddress = addressStatus === 'loading';

  if (!cart.length) return <EmptyCart />;

  return (
    <div className={'px-4 py-6'}>
      <h2 className={'mb-8 text-xl font-semibold'}>
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <div className={'mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'}>
          <label className={'sm:basis-40'}>First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            required
            defaultValue={username}
          />
        </div>

        <div className={'mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'}>
          <label className={'sm:basis-40'}>Phone number</label>
          <div className={'grow'}>
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p
                className={
                  'text - xs mt-2 rounded-md bg-red-100 p-2 text-red-700'
                }
              >
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div
          className={
            'relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'
          }
        >
          <label className={'sm:basis-40'}>Address</label>
          <div className={'grow'}>
            <input
              className="input w-full"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
            {addressStatus === 'error' && (
              <p
                className={
                  'text - xs mt-2 rounded-md bg-red-100 p-2 text-red-700'
                }
              >
                {errorAddress}
              </p>
            )}
          </div>
          {!position.latitude && !position.longitude && (
            <span className={'absolute right-[3px] z-50'}>
              <Button
                disabled={isLoadingAddress}
                type="small"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get position
              </Button>
            </span>
          )}
        </div>

        <div className={'mb-12 flex items-center gap-5'}>
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className={'font-medium'}>
            Want to yo give your order priority?
          </label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <input
          type="hidden"
          name="position"
          value={
            position.longitude && position.latitude
              ? `${position.latitude},${position.longitude}`
              : ''
          }
        />
        <div>
          {/* <button
            disabled={isSubmitting}
            className="inline-block 
            rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase
            tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
          ></button> */}
          <Button disabled={isSubmitting || isLoadingAddress} type="primary">
            {isSubmitting
              ? 'Placing order ...'
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  console.log(order);
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      'Please, give us your correct phone number. We might need it to contact you';
  }
  if (Object.keys(errors).length > 0) return errors;

  //If everything is OK create new order and redirect
  const newOrder = await createOrder(order);
  // console.log(newOrder);

  //DO NOT overuse - it will be performance issue
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
