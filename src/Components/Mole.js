import { useState, useEffect } from "react";
import mole from '../images/mole.png'

//this is the component which controlls the speed of the mole poping out
function Mole(props){
    //why are we using use effect ... come back to it later
    useEffect(() => {
        // here we are creating a variable randSeconds which is equal to to a random number times 15000 ms . This changes the speed of the moles disapeareing , 
        let randSeconds = Math.ceil(Math.random() * 1000)
        // what is this controlling , is it controlling when the moles come out ? 
        let timer = setTimeout(() => {
            //when props.toggle is set to true the moles stay up
            props.toggle(false)
            //Changing this to its own number , instead of using our variable randSeconds we can control the time the moles go down, giving them a fixed time . 
        }, 1000)
        //talked about in class but this clears out somthing, review notes ***** 
        return () => clearTimeout(timer)
    })

    return (
        // controls width of images, shows image , and where the onclick is created. 
        <div>
            <img style={{'width': '30vw'}}
            src={mole}
            onClick={props.handleClick} />
        </div>
    )
}


export default Mole