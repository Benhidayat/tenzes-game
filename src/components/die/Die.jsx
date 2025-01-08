import './Die.css';

const Die = ({ value, isHeld, hold, id}) => {
 

  return (
    <button className="die-item" 
         style={{backgroundColor: isHeld ? '#59e391' : '#ffff'}}
         onClick={() => hold(id)}
         aria-label={`Die with value ${value}, ${isHeld ? 'held' :'not held'}`}
         aria-pressed={isHeld}
      >
      {value}
    </button>
  )
}

export default Die
