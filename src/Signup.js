import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const SignupForm = () => (
  <Form>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Your full name' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Your Email Id' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Set Password to login' />
    </Form.Field>
    <Form.Field>
      <label>Contact Number</label>
      <input placeholder='Your contact number' />
    </Form.Field>
    <Form.Field>
      <label>Upload Resume</label>
      <input type="file" placeholder='Your contact number' />
    </Form.Field>
    <Button content='Register' color='yellow' fluid  size='huge' />
  </Form>
)

export default SignupForm