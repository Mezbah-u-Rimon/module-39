import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Users from './Users'
import Team from './team'

function App() {

  function handleClick() {
    alert("button-clicked")
  }

  const handleClick2 = () => {
    alert("clicked the button")
  }

  const addToFour = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h1>Explore React Core Concept Part2</h1>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}> Click Me </button>
      <button onClick={handleClick2}> Click 2</button>
      <button onClick={() => { alert('Third click') }}> Click 3</button>
      <button onClick={() => addToFour(4)}>Four</button>
    </>
  )
}

export default App
