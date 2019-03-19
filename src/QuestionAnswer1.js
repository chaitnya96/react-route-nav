import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
import Question from "./Question";
import Answer from "./Answer";

const GridExampleStackable = () => (
  <Grid stackable columns={2} >  
    <Grid.Column>
      <Question/>
      <Answer/>
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
    </Grid.Column>
  </Grid>
)

export default GridExampleStackable
