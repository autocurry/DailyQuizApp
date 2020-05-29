import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

class EndPage extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='endpage'>
                Score: {this.props.rightanswer} <br></br>
                Total: {this.props.datalength}
            </div>
        )
    }
}

export default EndPage