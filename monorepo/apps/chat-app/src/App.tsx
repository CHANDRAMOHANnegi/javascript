import { Chat } from './components/chat/chat'
import { Details } from './components/detail/details'
import { List } from './components/list/list'

function App() {

  return (
    <div className='container rounded-sm flex justify-between border-red-100 h-[90vh] w-[80vw]'>
      <List/>
      <Chat/>
      <Details/>
    </div>
  )
}

export default App
