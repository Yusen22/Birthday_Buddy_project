import { useState } from 'react';

import List from './List';

import data from './data'

const App = () => {
  console.log(data)
  const [personData, setPersonData] = useState(data)

  return (<main>
    <h2 className='title'>Birthday Reminder - Starter</h2>
    <section className='container'>
      <h3>There are {personData.length} birthdays today!</h3>
      <List people={personData}>
      </List>
      <button onClick={() => setPersonData([])} className='btn btn-block' type='button'>Clear List </button>
    </section>
  </main>
  )
};
export default App;
