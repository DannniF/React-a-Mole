import { useEffect } from "react"
import MoleHill from '../images/molehill.png'

//this is similar to mole , just that we are creating the illusion of the mole going in the hole, we are just replacing the image with our second png
const EmptySlot = (props) => {
// simialr to mole 
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            //props.toggle is true because we want the empty hole to be default and not the mole the whole time . 
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHill} />
        </div>
    )
}

export default EmptySlot