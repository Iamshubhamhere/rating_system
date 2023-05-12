
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

function Star(props)
 {
  const { funct = f => f, isClickable } = props;
    const [hover, setHover] = useState(false);
  
    const handleMouseOver = () => {
      setHover(true);
    };
  
    const handleMouseLeave = () => {
      setHover(false);
    };
  
    return (
      <>
        <FaStar
          onClick={funct}
          color={isClickable || hover ? '#33ab4e' : '#bebebe'}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
      />
      </>
    )
  }

export default Star