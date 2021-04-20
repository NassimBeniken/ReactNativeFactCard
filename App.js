import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Animated, PanResponder } from 'react-native'
import FactCard from './components/fact-card/FactCard'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.position = new Animated.ValueXY()
    this.state = {
      panResponder: undefined
    }
  }

  componentDidMount() {
    const panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        this.position.setValue({
          x: gesture.dx,
          y: 0
        })
      }
    })
    this.setState({
      panResponder
    })
  }

  getCardStyle = () => {
    const rotation = this.position.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ["-50deg", "0deg", "50deg"]
    })
    return {
      transform: [{rotate: rotation}],
      ...this.position.getLayout()
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Fact Swipe</Text>
        { this.state.panResponder && 
        <Animated.View {...this.state.panResponder.panHandlers} style={this.getCardStyle()}>
          <FactCard/>
        </Animated.View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    marginTop: 50
  },
  title: {
    fontSize: 30,
    marginBottom: 80
  }
});
