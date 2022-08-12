// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const usernameInputRef = React.useRef("");

  const handleSubmit = (event) => { 

    event.preventDefault();

    console.log("Event:", event);

    // interessante : using ref to get the input value
    onSubmitUsername(usernameInputRef.current.value);
   };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='userNameInput'>Username:</label>
        <input id="userNameInput" type="text" ref={usernameInputRef}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered, from ref: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
