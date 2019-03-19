import React from 'react'
import { Button, Checkbox, Form, Menu, Item } from 'semantic-ui-react'

const SignupForm = () => (
  <Form>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Your email address' />
    </Form.Field>    
    <Form.Field>
      <label>Password</label>
      <input placeholder='Your Password to login' />
    </Form.Field>    
    <Button content='Login' color='yellow' fluid  size='huge' />
    <a href="#" className="itemlink">Forgot Password?</a>
  </Form>
)

export default SignupForm