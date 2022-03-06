import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {
  amountAdded,
  decremented,
  incremented,
  resetCounter,
} from './features/counter/counterSlice';
import { useFetchBreedsQuery } from './features/dogs/dogsApiSlice';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState<number>(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  function handleIncremented() {
    dispatch(incremented());
  }
  function handleIncremented3() {
    dispatch(amountAdded(3));
  }
  function handleDecremented() {
    dispatch(decremented());
  }
  function handleReset() {
    dispatch(resetCounter());
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>count is: {count}</p>
        <p>
          <button onClick={handleIncremented}>incremented</button>
          <button onClick={handleIncremented3}>incremented3</button>
          <button onClick={handleDecremented}>decremented</button>
          <button onClick={handleReset}>resetCounter</button>
        </p>

        <div>
          <p>Dogs to fetch:</p>
          <select
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
          </select>
        </div>
        <div>
          <p>Number of dogs fetched:{data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
