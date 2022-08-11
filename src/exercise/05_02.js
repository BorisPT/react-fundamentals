// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = props => {
  return (
    <div
      style={{fontStyle: 'italic', ...props.style}}
      className={`box box--${props.size}`}
    >
      {props.children}
    </div>
  )
}

// const smallBox = <div style={{backgroundColor: 'lightblue', fontStyle: "italic" }} className="box box--small">small lightblue box</div>
const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
);

const mediumBox = (
<Box size="medium" style={{backgroundColor: 'pink'}}>
  medium pink box
</Box>
);

const largeBox = (

<Box size="large" style={{backgroundColor: 'orange'}}>
  large orange box
</Box>  

);

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
