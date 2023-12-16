import { useState } from "react"
import "./App.css"

function App() {
  const [display, setDisplay] = useState("")
  const [result, setResult] = useState("")

  const handleClick = (value) => {
    if (value === "Total") {
      try {
        setResult(eval(display).toString())
      } catch (error) {
        setResult("Error")
      }
      setDisplay("")
    } else if (value === "AC") {
      setDisplay("")
      setResult("")
    } else {
      setDisplay((prevDisplay) => prevDisplay + value)
    }
  }

  return (
    <>
      <div className='container'>
        <div className='calculator'>
          <form action=''>
            <input className='input' value={display}></input>
            <div className='output'>{result}</div>
          </form>
        </div>
        <div className='buttons'>
          <button className='button' onClick={() => handleClick("AC")}>
            AC
          </button>
          <button className='button' onClick={() => handleClick("CE")}>
            CE
          </button>
          <button className='button' onClick={() => handleClick(".")}>
            .
          </button>
          <button className='button' onClick={() => handleClick("/")}>
            /
          </button>
        </div>
        <div className='buttons'>
          <button className='button' onClick={() => handleClick("7")}>
            7
          </button>
          <button className='button' onClick={() => handleClick("8")}>
            8
          </button>
          <button className='button' onClick={() => handleClick("9")}>
            9
          </button>
          <button className='button' onClick={() => handleClick("*")}>
            *
          </button>
        </div>
        <div className='buttons'>
          <button className='button' onClick={() => handleClick("4")}>
            4
          </button>
          <button className='button' onClick={() => handleClick("5")}>
            5
          </button>
          <button className='button' onClick={() => handleClick("6")}>
            6
          </button>
          <button className='button' onClick={() => handleClick("-")}>
            -
          </button>
        </div>
        <div className='buttons'>
          <button className='button' onClick={() => handleClick("1")}>
            1
          </button>
          <button className='button' onClick={() => handleClick("2")}>
            2
          </button>
          <button className='button' onClick={() => handleClick("3")}>
            3
          </button>
          <button className='button' onClick={() => handleClick("+")}>
            +
          </button>
        </div>
        <div className='buttons'>
          <button className='button' onClick={() => handleClick("0")}>
            0
          </button>

          <button className='Tbutton' onClick={() => handleClick("Total")}>
            Total
          </button>
        </div>
      </div>
    </>
  )
}

export default App
