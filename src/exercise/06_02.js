// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const usernameInputRef = React.useRef("");

  const [error, setError] = React.useState("");

  const handleSubmit = (event) => { 

    event.preventDefault();

    console.log("Event:", event);

    // interessante : using ref to get the input value
    onSubmitUsername(usernameInputRef.current.value);
   };

  const usernameChangeHandler = (event) => { 

    // interessante : note that here we are getting the value from the input field and not the whole form.
    const currentValue = event.target.value;

    if(currentValue !== currentValue.toLowerCase())
    {
      setError("You must use only lowercase letters.");
    }
    else
    {
      setError(null);
    }
   };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='userNameInput'>Username:</label>
        <input id="userNameInput" type="text" ref={usernameInputRef} onChange={usernameChangeHandler}/>
      </div>
      {/* // interessante : make sure we are disabling the button with a boolean value.
      // Note that using the "error" state would be fine, with truthy or falsy values, 
      // this is just for exercise purposes */}
      <button type="submit" disabled={Boolean(error)}>Submit</button>
      {error && <p style={{color : "red"}} role="alert">{error}</p>}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered, from ref: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
