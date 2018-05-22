/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Colors from '../Styles/Colors';

export default class Pendidos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Pedidos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.AzulPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
