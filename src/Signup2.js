import React from 'react'
import { Button, Form, Input, TextArea, Checkbox, Radio, RadioGroup, Dropdown, Select} from 'semantic-ui-react';


const SignupForm2 = () => (
  
    
      <form class="ui form segment">
  <div class="two fields">
    <div class="field">
      <label>Name</label>
      <input placeholder="First Name" name="name" type="text"/>
    </div>
    <div class="field">
      <label>Gender</label>
      <div class="ui selection dropdown">
        <input name="gender" type="hidden"/>
        <div class="default text">Gender</div>
        <i class="dropdown icon"></i>
        <div class="menu">
          <div class="item" data-value="male">Male</div>
          <div class="item" data-value="female">Female</div>
        </div>
      </div>
    </div>
  </div>
  <div class="field">
    <label>Username</label>
    <input placeholder="Username" name="username" type="text"/>
  </div>
  <div class="field">
    <label>Password</label>
    <input name="password" type="password"/>
  </div>
  <div class="inline field">
    <div class="ui checkbox">
      <input name="terms" type="checkbox"/>
      <label>I agree to the terms and conditions</label>
    </div>
  </div>
  <div class="ui primary submit button">Submit</div>
  <div class="ui reset button">Reset</div>
  <div class="ui clear button">Clear</div>
</form>
  )


export default SignupForm2