import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import data from '../Data/data.json'

class QuestionAnswerPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      question: null,
      answer: null,
      options: [],
      counter: 0,
      datalength: data.length,
      selectedanswer: null,
      rightanswer: 0
    })

    this.onNext = this.onNext.bind(this)
    this.answerselected = this.answerselected.bind(this)
  }

  answerselected(selectedAnswerstate) {

    this.setState(
      {
        selectedanswer: selectedAnswerstate
      }
    )
  }

  async onNext() {


    let counting = this.state.counter
    counting = counting + 1


    if (this.state.answer === this.state.selectedanswer) {



      await this.setState((state) => ({
        rightanswer: this.state.rightanswer + 1,


      }));


    }




    this.props.myCallBack(this.state.rightanswer)


    if (counting < this.state.datalength) {
      this.setState(
        {

          counter: counting,
          question: data[counting]['question'],
          options: data[counting]['Options'],
          answer: data[counting]['answer'],

        }
      )

    }
    else {
      alert("End of Quiz")
    }



  }

  componentDidMount() {

    let counting = this.state.counter

    this.setState(
      {

        question: data[counting]['question'],
        options: data[counting]['Options'],
        answer: data[counting]['answer'],

      }

    )


  }


  render() {
    return (
      <div className="questionanswer">
        <div className='question'>
          {this.state.question}




        </div>
        <div className='btn-group-vertical'>
          {this.state.options.map((options, index) => <button key={index} className='btn btn-primary' onClick={() => this.answerselected(options)} >{options}</button>
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
