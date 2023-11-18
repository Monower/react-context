/* import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ThemeContext } from "./context/Theme/context"
import { useState } from "react"

function App() {

  const [theme, setTheme] = useState('dark');
  const toggleTheme = (color) => { 
    console.log(color);
    setTheme(color);
  }
  return (
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <Navbar />
        <main>
          this is main
        </main>
        <Footer />
      </ThemeContext.Provider>
    </>
  )
}

export default App
 */

import { useReducer } from "react"


const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case 'increment': {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'maximum reached' : null
      };
    }
    case 'decrement': {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'minimum reached' : null
      };
    }
    case 'reset': {
      return {
        count: 0
      }
    }
    default:
      return state;
  }
};


function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0
  });

  return (
    <>
      <p>The count is: {state.count}</p>
      {
        state.error && <p style={{ color: '#777777' }}>{state.error}</p>
      }
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </>
  )
}

export default App
