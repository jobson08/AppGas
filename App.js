
import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';

import Login from './src/Screens/Login';
import LoginFor from './src/Screens/LoginFor';
import Home from './src/Screens/Home';
import Pedidos from './src/Screens/Pedidos';

export default class App extends Component{
  render() {
    return (

      <Login />
    );
  }
}
