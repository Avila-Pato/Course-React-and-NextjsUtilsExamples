
import PropTypes from 'prop-types'; // 


export function Buttom ({text, name}){
    return <button onClick={function() {
        console.log('hello mundo')
    } }> 
    {text} - {name}
    
    </button>

}


Buttom.propTypes = {
    text: PropTypes.string.isRequired
}

Buttom.defaulProps = {
    name: 'some user'
}