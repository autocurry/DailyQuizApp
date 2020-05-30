import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import EndPage from './components/EndPage'
import QuestionAnswerPage from './components/QuestionAnswerPage'
import {PropTypes} from 'react'
import data from './Data/data.json'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {    
      rightanswer:0,
      totalanswer:0,
      endreached:false
    }
    this.myCallBack = this.myCallBack.bind(this)
    
  } 

  myCallBack(value){
    
    
    this.setState(
      {
        rightanswer:value
      }
    )
  }
  
    render(){
      
       return(
            <div className='container'>
              <div className='score'>
                
                <div className='marks'>
                    Score : 
                    <input readOnly type='text' value={this.state.rightanswer}/>
                </div>
                <div className='totalmarks'>
                  Total Questions: 
                <input readOnly type='text' value={data.length}/>
                </div>
                
                </div >

                   

                
                  <div className='questionandanswer'> 
                  {this.state.endreached
        ? <EndPage right={this.state.rightanswer} total={this.state.datalength}/>
        : <QuestionAnswerPage myCallBack={this.myCallBack} />
      }
                
                </div>
                
                
            </div>
        )
    }
}

export default App;