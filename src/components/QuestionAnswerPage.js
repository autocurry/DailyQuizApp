import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import data from '../Data/data.json'

class QuestionAnswerPage extends React.Component {
    constructor(props){
        super (props)
        this.onNext = this.onNext.bind(this)
        this.answerselected=this.answerselected.bind(this)
        this.state({
            question:null,
            answer:null,
            options:[]
        })
    }

    answerselected(selectedAnswer){
        console.log("selected answer:"+selectedAnswer)
        this.setState(
          {
            selectedanswerstate:selectedAnswer
          }
        )
      }
    
      onNext(){
        console.log(this.state.counter)  
        const answercount = this.state.rightanswer
        if(this.state.selectedanswerstate === this.state.answer){
          this.setState(
            {
              rightanswer : answercount + 1
            }
          ) 
        }
    }
    
        componentDidMount(){
    
    
            let counting = this.state.counter
            this.setState(      
              {
                datalength : data.length,
                
              question:data[counting]['question'],
              options:data[counting]['Options'],
              answer:data[counting]['answer'],
              correctanswer:0,
              selectedanswerstate:null
            }
            )
          
    
        if(this.state.counter < this.state.datalength-1){
          let counting = this.state.counter + 1      
          this.setState(
            {
              counter : counting,
              question:data[counting]['question'],          
              options:data[counting]['Options'],
              answer:data[counting]['answer'],
              
            }
          )
        }
        else{
          this.setState({
            endreached:true
          }) 
        }
    }      

    render() {
        return(
            <div className="questionanswer">
            <div className='question'>
            {this.state.question}    
          
          


          </div>
          <div className='btn-group-vertical'>
    {this.state.options.map((options,index) => <button key={index} className='btn btn-primary' onClick={ () => this.answerselected(options)} >{options}</button>
            )}
            
            
          </div>

            <div >
              <button onClick={this.onNext} className='btn btn-primary'>NEXT</button>
            </div>
            </div>
        )
    }
}

export default QuestionAnswerPage
