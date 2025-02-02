import PropTypes from "prop-types"
import { reverse } from './helpers'

function NameReversed({name}){
    return(
        <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
      </p>
    )
}

NameReversed.PropTypes = {
    name : PropTypes.string
}

export default NameReversed