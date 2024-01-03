// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'




function UsernameForm({onSubmitUsername}) {
   const [errors,setErrors]=React.useState(null)
   const[username3,setUsername3] = React.useState('')
  // 🐨 add a submit event handler here (`handleSubmit`).
  function handleSubmit(event) {
    event.preventDefault()
    const valuetyped2=(event.target.elements.username1.value)
    //const valueTyped = event.target[0].value
    // onSubmitUsername(valueTyped)
    onSubmitUsername(valuetyped2)
  }
  function inputHandler(event) {
    const typedvalue3 = (event.target.value)
    const isLower = typedvalue3 === typedvalue3.toLowerCase()
    setErrors(isLower?'':"Plz enter lowercase character only")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username1'>Username:</label>
        <input id='username1' type="text" onChange={inputHandler} />
      </div>
      <div style={{backgroundColor:'red'}}>{errors}</div>
      <button  disabled={Boolean(errors)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
