import React, { Component } from 'react'
import { Menu, Segment,Button, Header, Icon, Modal } from 'semantic-ui-react'
import Signupmodal from "./Signupmodal";

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (

        <Menu inverted pointing secondary>
          
          <Menu.Menu position='right'>           
            
            <Modal trigger={<Menu.Item
              name='signup'
              onClick={this.handleItemClick}
              
             
            />} closeIcon>
              <Header icon='archive' content='Sign Up' />
              <Modal.Content>
                <p>
                  Your inbox is getting full, would you like us to enable automatic archiving of old messages?
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button color='red'>
                  <Icon name='remove' /> No
                </Button>
                <Button color='green'>
                  <Icon name='checkmark' /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
          </Menu.Menu>
        </Menu>

        

    )
  }
}