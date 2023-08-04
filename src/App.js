import { useSelector } from 'react-redux';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import Reward from './components/Reward';


function App() {
  const amount= useSelector(state=>state.account.amount); 
  const price=useSelector(state=>state.bonus.price); 
  const bonus=useSelector(state=>state.reward.price);
  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount :{amount} </h3>
      <h3>Total Bonus :{price} </h3>
      <h3>Total Reward:{bonus}</h3>
      <Account> </Account>
      <Bonus> </Bonus>
      <Reward> </Reward>
    </div>
  );
}

export default App;


