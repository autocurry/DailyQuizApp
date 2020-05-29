import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import data from './data.json'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {      
      counter:0   ,
      question:null,
      answer:null,
      options:[],
      datalength : 0,
      rightanswer:0,
      selectedanswerstate:null
    
    }
    
        
    this.onNext = this.onNext.bind(this)
    this.answerselected = this.answerselected.bind(this)
  }
  componentDidMount(){
    
    
    console.log("mounting")
    console.log(data[0]['question'])
    console.log("correct: "+this.state.correctanswer)
    let counting = this.state.counter
    this.setState(      
      {
        datalength : data.length,
        
      question:data[counting]['question'],
      options:data[counting]['Options'],
      answer:data[counting]['answer'],
      correctanswer:0
    }
    )
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
      alert("End of Quiz")
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
                <input readOnly type='text' value={this.state.datalength}/>
                </div>
                
                </div>    
              <div className='question'>
                {this.state.question}    
              
              


              </div>
              <div className='btn-group-vertical'>
        {this.state.options.map((options,index) => <button onClick={this.answerselected} key={index} className='btn btn-primary'>{options}</button>
                )}
                
                
              </div>

                <div >
                  <button onClick={this.onNext} className='btn btn-primary'>NEXT</button>
                </div>
              


            </div>
        )
    }
}

export default App;