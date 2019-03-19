import React from 'react'
import { Image, Button } from 'semantic-ui-react'
import Question from "./Question";
import Answer from "./Answer";
import NextPreviousButtons from "./NextPreviousButtons";

const QuestionAnswer = () => (
  <div className="fit-content">
    <Question/><br/>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size="medium"/><br/>
    <Answer/> 
    <NextPreviousButtons/>
  </div>  
)

export default QuestionAnswer