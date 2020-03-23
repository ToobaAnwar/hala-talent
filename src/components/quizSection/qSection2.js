import React from 'react'
import { NavLink } from 'react-router-dom'
import quizService from '.././quizService/index'
import QuestionBox from './questionBox'
import Result from './result'

class QSection2 extends React.Component{
  state = {
    questionBank : [],
    score: 0,
    responses: 0
};

getQuestion = () => {
    quizService().then(question => {
        this.setState(
            {
                questionBank:question,
                
            }
        )
    })
}
computeAnswer = (answer, correctAnswer) =>  {
  if(answer === correctAnswer){
      this.setState({
          score: this.state.score + 1
      });
  }

  this.setState({
      responses : this.state.responses < 5 ? this.state.responses + 1 : 5});
}
componentDidMount(){
  this.getQuestion();
}

    render(){
        return(
            <div>
                <div className="container">
                {this.state.questionBank.length > 0 && 
                this.state.responses < 5 &&
                this.state.questionBank
                .map(({question, answers , correct ,questionId}) =>
                (
                    <QuestionBox 
                question={question}
                options={answers}
                key={questionId}
                selected={ answer => this.computeAnswer(answer,correct) } />

                )
                )}
                {this.state.responses ===5 ? <Result score={this.state.score} /> : null } 

            </div>
            </div>
        )
    }
}

export default QSection2;