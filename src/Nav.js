import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Signupmodal from "./Signupmodal";
import Loginmodal from "./Loginmodal";

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (

      <Menu inverted pointing secondary>
        <Menu.Item as='a' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} ><Link to='/'> home </Link></Menu.Item>
        <Menu.Item
        name='job'
          as='a'
          active={activeItem === 'job'}
          onClick={this.handleItemClick}>
          <Link to='/job'> job </Link>
        </Menu.Item>

        <Menu.Item
        name='contact'
        active={activeItem === 'contact'}
          as='a'
          onClick={this.handleItemClick}
        ><Link to='/contact'> contactUs </Link></Menu.Item>
        <Menu.Menu position='right'>
          <Loginmodal />
          <Signupmodal />
        </Menu.Menu>
      </Menu>
    )
  }
}