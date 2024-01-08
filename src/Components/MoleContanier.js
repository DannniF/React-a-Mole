import { useState, useEffect } from "react";
import Mole from "./Mole";
import EmptySlot from './EmptySlot'

//is MoleContainer.js the parent container for both mole.js and EmptySlot.js ?


// creating the mole Container.... 
const MoleContainer = (props) => {

    let [theMole, setTheMole] = useState(false)
//creating our variable for when we click on the mole we add 1 point to our score. 
    const handleClick = (e) => {
        props.setScore(props.score + 3)
        //setting this to true allows use to multi click the same mole for many points , removing it keeps the mole there if i keep clicking , why does that happen?
        setTheMole(false)
    }
// breakdown: variable of displayMole is equal to theMole.. 
    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}
export default MoleContainer