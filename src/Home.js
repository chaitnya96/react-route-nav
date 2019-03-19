import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Nav from "./Nav";
import Register from "./Register";

const src1 = '/images/logo.jpg'

const GridExampleStackable = () => (
  <Grid stackable columns={2}>
    <Grid.Column>
        <Nav/>
        <div className="home-content">
          {/* <Image src='images/logo.jpg' size='small' wrapped /> */}
          {/* <Image src={src1} size='medium' centered /> */}
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png'  size='small'  centered/>
          <h1>Quest Conquest</h1>
          <h3>Questions Leading To Success</h3>
        </div>
    </Grid.Column>
    <Grid.Column>
      <Register/>
    </Grid.Column>
  </Grid>
)

export default GridExampleStackable