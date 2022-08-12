// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const handleSubmit = (event) => { 

    // interessante : this event is not the browser event. If we log it, we see that it is a SyntheticEvent
    // which is a class that React creates around the real events of the browser. This is done for performance reasons.
    // The SyntheticEvent behaves just like a normal event. However, if we need to access the real event for some reason,
    // it is available in "event.nativeEvent"

    event.preventDefault();

    console.log("Event:", event);

    // interessante : we can access the value in the input control by using any of these ways.
    onSubmitUsername(event.target[0].value);
    onSubmitUsername(event.target.elements[0].value);
    onSubmitUsername(event.target.elements.userNameInput.value);
  
   };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='userNameInput'>Username:</label>
        {/* // interessante : if we don't prevent the default behaviour of the event on the form submit handler,
        // then the browser will make a new request to the same page (causing a page refresh) where query parameters
        // will be the name of the input fields and their respective values. 
        // So we would get a call to this page, where at the end of the url there would be 
        // "?theInputName=THE_VALUE_THAT_WE_ENTERED_IN_THE_INPUT".
        // Note that it is the "name" of the input field and not the "id" */}
        <input id="userNameInput" name="theInputName" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
