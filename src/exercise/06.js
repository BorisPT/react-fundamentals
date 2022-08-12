// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  // interessante : we use the "useState" hook to handle changes in the username input field and also 
  // to make sure we always keep the input field updated, with the "value" prop. This way, the form is controlled,
  // and as the user inputs the value, we can control what is being fed back into the input value
  const [username, setUsername] = React.useState("");

  const handleSubmit = (event) => { 

    event.preventDefault();

    console.log("Event:", event);

    // interessante : using the value in the state variable to get the input value
    onSubmitUsername(username);
   };

  const usernameChangeHandler = (event) => { 

    // interessante : note that here we are getting the value from the input field and not the whole form.
    const currentValue = event.target.value;
    const settingTo = currentValue.toLowerCase();

    console.log(`Setting ${currentValue} to ${settingTo} in the state variable`);
    setUsername(settingTo);
   };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='userNameInput'>Username:</label>
        {/* // interessante : using a change handler and the "value" prop to control the form and correct the user input to lowercase */}
        <input id="userNameInput" type="text"  onChange={usernameChangeHandler} value={username}/>
      </div>
      <button type="submit" >Submit</button>      
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered, from ref: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
