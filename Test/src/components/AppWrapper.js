import React, { Component, PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'

import Counter from './Counter'
import CounterUpdate from './CounterUpdate'


class AppWrapper extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CounterUpdate action={this.props.increment} symbol={'+'} />
        <Counter number={this.props.counter} />
        <CounterUpdate action={this.props.decrement} symbol={'-'} />
      </View>
    )
  }
}


AppWrapper.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
})


export default AppWrapper
