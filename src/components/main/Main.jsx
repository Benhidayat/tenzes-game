import './Main.css';
import Die from '../die/Die';

const Main = () => {
  return (
    <main className='game-container'>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="die-container">
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
        </div>
        <button>Roll</button>
    </main>
  )
}

export default Main
