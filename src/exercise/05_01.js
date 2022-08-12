// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// interessante : another way to do this would be to de-structure the "className" and the "style" props
// and have the remaining props with the rest operator (...otherProps) and apply them in the div afterwards.
// This would also be important to preserve the other properties that we don't want to touch.
const Box = props => {
  return (
    <div
      style={{fontStyle: 'italic', ...props.style}}
      className={`box ${props.className ?? ""}`}      
    >
      {props.children}
    </div>
  )
}

// const smallBox = <div style={{backgroundColor: 'lightblue', fontStyle: "italic" }} className="box box--small">small lightblue box</div>
const smallBox = (
  <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
);

const mediumBox = (
<Box className="box--medium" style={{backgroundColor: 'pink'}}>
  medium pink box
</Box>
);

const largeBox = (

<Box className="box--large" style={{backgroundColor: 'orange'}}>
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
