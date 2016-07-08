import React, { Component, PropTypes } from 'react'
import { StyleSheet, TouchableHighlight, Text } from 'react-native'


class CounterUpdate extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.action}>
        <Text style={styles.button}>{ this.props.symbol }</Text>
      </TouchableHighlight>
    )
  }
}


CounterUpdate.propTypes = {
  symbol: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}


const styles = StyleSheet.create({
  button: {
    fontSize: 50,
    color: '#222222',
    padding: 50,
  },
})


export default CounterUpdate
