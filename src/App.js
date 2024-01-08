
import './App.css';
import { useState, useEffect } from 'react';
import MoleContainer from './Components/MoleContanier';



function App(){
  //creating a state variable becuse score is constantly being changed when clicking on a mole
    let [score, setScore] = useState(0)

    //creating the Mole
    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer
                key={i}
                setScore={setScore}
                score={score} />
            )
        }
    
        return (
            <div>
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
            <h1>React-a-Mole!</h1>
            {score}
            {createMoleHill()}
        </div>
    )
}

export default App
