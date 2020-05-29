import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import EndPage from './components/EndPage'
import QuestionAnswerPage from './components/QuestionAnswerPage'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {    
      rightanswer:0,
      totalanswer:0,
      endreached:false
    }
    
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
                <input readOnly type='text' value={this.state.totalanswer}/>
                </div>
                
                </div >

                   

                
                  <div className='questionandanswer'> 
                  {this.state.endreached
        ? <EndPage right={this.state.rightanswer} total={this.state.datalength}/>
        : <QuestionAnswerPage />
      }
                
                </div>
                
                
            </div>
        )
    }
}

export default App;