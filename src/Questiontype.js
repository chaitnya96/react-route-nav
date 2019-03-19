import React from 'react'
import { Container, Header, Segment, Button } from 'semantic-ui-react'
import QuestionAnswer from "./QuestionAnswer";
import QuestiontypeHeader from "./QuestiontypeHeader";

const Questiontype1 = () => (
  <div>
      
      <Segment className=" mrgt40 mrgb40 padb40">
        <Container text className="pad20">
          <QuestiontypeHeader/>
          <QuestionAnswer/>          
        </Container>
      </Segment>      
  </div>  
)

export default Questiontype1