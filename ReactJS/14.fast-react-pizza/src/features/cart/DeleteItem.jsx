import { useDispatch } from 'react-redux';
import Button from '../../ui/Button.jsx';
import { deleteItem } from './cartSlice.js';

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  function deletePizza() {
    dispatch(deleteItem(id));
  }

  return (
    <div>
      <Button type="small" onClick={deletePizza}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
