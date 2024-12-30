import './Main.css';
import Die from '../die/Die';

const Main = () => {

  const generateAllNewDice = () => {
    // const arrNum = [];

    // for (let i =0; i < 10; i++) {
    //  arrNum.push(Math.ceil(Math.random() * 6));
    // }

    // console.log(arrNum);

    // const arrNum = Array.from({length: 10}, () => {
    //   return Math.ceil(Math.random() * 6);
    // })

    const arrNum =  new Array(10)
                .fill()
                .map(() => Math.ceil(Math.random() * 6))
  
  };


  return (
    <main className='game-container'>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="die-container">
            <Die value={1}/>
            <Die value={2}/>
            <Die value={3}/>
            <Die value={4}/>
            <Die value={5}/>
            <Die value={6}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
        </div>
        <button onClick={generateAllNewDice}>Roll</button>
    </main>
  )
}

export default Main
