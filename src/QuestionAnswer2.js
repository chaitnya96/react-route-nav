import React from 'react'
import { Image } from 'semantic-ui-react'
import Question from "./Question";
import Answer from "./Answer";

const QuestionAnswer = () => (
  <div>
    <Question/><br/>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size="medium"/><br/>
    <Answer/> 
  </div>  
)

export default QuestionAnswer