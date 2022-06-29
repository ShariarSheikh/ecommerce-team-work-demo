import { useDispatch } from 'react-redux';
import { clickHandle } from '../redux/handleSlice';

export default function Home() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clickHandle('nahid'));
  };

  return (
    <div className="text-red-500">
      <button onClick={handleClick}>click</button>
    </div>
  );
}
