import './App.css'
import BubbleBackground from './Bubbles'
import TodoApp from './TodoApp'

function App() {

  return (
    <>
      <BubbleBackground bubbleCount={30} />
      <TodoApp/>
    </>
  )
}

export default App

