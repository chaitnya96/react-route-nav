import React, { Component } from 'react'
import { Button, Modal} from 'semantic-ui-react'
import Login from "./Login";

class ModalExampleSize extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <Button onClick={this.show('mini')} className="white-button">Login</Button>

        <Modal size={size} open={open} onClose={this.close}  closeIcon>
          <Modal.Header>Login</Modal.Header>
          <Modal.Content>
            <Login/>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default ModalExampleSize