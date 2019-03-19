import React from 'react'
import { Tab } from 'semantic-ui-react'
import Signup from "./Signup";
import Login from "./Login";

const panes = [
  { menuItem: 'Registration', render: () => <Tab.Pane   className="register-content-box-height pad30"><Signup/></Tab.Pane>   },
  { menuItem: 'User Login', render: () => <Tab.Pane   className="register-content-box-height pad30"><Login/></Tab.Pane> },
]

const TabExampleBasicAll = () => <Tab panes={panes} />

export default TabExampleBasicAll