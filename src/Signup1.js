import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';
import {
  Form, Input, TextArea, Checkbox, Radio, RadioGroup, Dropdown, Select,
} from 'formsy-semantic-ui-react';

// ES5
var Form = require('formsy-semantic-ui-react').Form;
/** and so on for the rest of the Components **/

const App = (props) => {
  const errorLabel = <Label color="red" pointing/>

  return (
    <Form
      onValidSubmit={ props.onValidSubmit }
      loading={ props.isLoading }
    >
      <Form.Input
        name="email"
        label="Email"
        validations="isEmail"
        validationErrors={{ isEmail: 'Email not valid' }}
        errorLabel={ errorLabel }
      />
    </Form>
  )
}

export default SignupForm