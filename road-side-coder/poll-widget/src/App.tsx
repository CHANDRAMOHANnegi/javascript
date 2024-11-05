import { useEffect, useState } from 'react';
import { PollWidget } from './components/poll';
import { PollType } from './types';
import { fetchPoll } from './db/api';

function App() {
  const [pollData, setPollData] = useState<PollType | null>(null)

  useEffect(() => {
    const loadPoll = async () => {

      try {
        const data = await fetchPoll(41)
        setPollData(data)
      } catch (error) {

      }
    }
    loadPoll()
  }, [])

  if (!pollData)
    return <div>
      ...loading
    </div>

  return (
    <div className="App">
      hello
      <PollWidget
      />
    </div>
  );
}

export default App;
