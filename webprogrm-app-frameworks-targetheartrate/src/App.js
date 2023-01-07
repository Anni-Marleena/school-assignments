import './App.css';
import {useState} from 'react';

function App() {
  const [age, setAge] = useState(0)
  const [heartratelimit, setHeartratelimit] = useState(0)

  const calculate = (e) => {
    e.preventDefault() /*ei tapahdu refress nettiselaimessa*/
    const upper =  (220 - age) * 0.85
    const lower =  (220 - age) * 0.65
    setHeartratelimit(lower+ "-" +upper);
  }

  return (
    <div className='layout'>
    <h3>Heartrate limits calculator</h3>
      <form onSubmit={calculate}> {/*kutsutaan laske funktiota formissa*/}
        <div>
          <label>Age</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
        </div>
        <div>   
          <label>Heart rate limit</label>
          <output>{heartratelimit}</output>
        </div>
        <button type="button" onClick={calculate}>Calculate</button>
      </form>
    </div>
  );
}

export default App;

