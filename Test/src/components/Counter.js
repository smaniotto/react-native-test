import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text } from 'react-native'


class Counter extends Component {
  render() {
    return (
      <Text style={styles.number}>
        { this.props.number }
      </Text>
    )
  }
}


Counter.propTypes = {
  number: PropTypes.number
}


const styles = StyleSheet.create({
  number: {
    fontSize: 80,
    color: '#222222',
    padding: 50
  },
})


export default Counter
