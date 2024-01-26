import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser.jsx';
import Button from './Button.jsx';
import { getUsername } from '../features/user/userSlice.js';

function Home() {
  const username = useSelector(getUsername);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-4 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
