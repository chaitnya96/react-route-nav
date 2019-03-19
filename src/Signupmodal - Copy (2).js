import React, { Component } from 'react'
import { Button, Modal, Menu } from 'semantic-ui-react'
import Signup from "./Signup";

class ModalExampleSize extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        

        <Modal size={size} open={open} onClose={this.close} trigger={<Menu.Item
              name='signup'
              onClick={this.handleItemClick}              
             
            />} closeIcon>
          <Modal.Header>Sign Up</Modal.Header>
          <Modal.Content>
            <Signup/>
          </Modal.Content>
          
        </Modal>
      </div>
    )
  }
}

export default ModalExampleSize