
import { useState } from 'react'

function Dialog() {
  const [isVisible, setVisibility] = useState(false);

  return (
    <section>
    
      <div className='button'>
      <input type="button"
        onClick={() => setVisibility(!isVisible)} 
        value={isVisible ? "Hide Image" : "Show Image"}/>
        </div>
        
        <div className={isVisible ? "inputs visible" : "inputs hide"} >
      <img  
      src="https://thumbs.gfycat.com/WealthyBelovedGreatdane-max-1mb.gif"
       alt="GIF"/>
      
    </div>
  </section>
  )
}

export default Dialog