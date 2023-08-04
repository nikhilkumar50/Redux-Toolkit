import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slices/bonusSlice';

function Bonus() {
  const price=useSelector(state=>state.bonus.price);
  const dispatch=useDispatch();
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${price}</h3>

        <button onClick={()=>dispatch(increment())}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
