import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from "react-native";
import { white, lightPurp, gray } from "../../utils/colors";

export default class FlipCard extends Component {
  state = {
    buttonText: this.props.frontButtonText || ""
  };
  componentWillUnmount() {
    this.animatedValue.removeAllListeners();
  }
  componentWillMount() {
    // console.log("componentWillMount");
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"]
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"]
    });
  }

  flipCard() {
    if (this.value >= 90) {
      this.setState({ buttonText: this.props.frontButtonText });
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      this.setState({ buttonText: this.props.backButtonText });
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  render() {
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }]
    };
    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }]
    };
    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Text style={styles.flipText}>{this.props.frontText}</Text>
          </Animated.View>
          <Animated.View
            style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}
          >
            <Text style={styles.flipText}>{this.props.backText}</Text>
          </Animated.View>
        </View>
        <TouchableOpacity onPress={() => this.flipCard()}>
          <Text style={styles.flipButton}>{this.state.buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  flipCard: {
    height: 150,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden"
  },
  flipCardBack: {
    position: "absolute",
    top: 0
  },
  flipText: {
    height: 150,
    fontSize: 25,
    fontWeight: "bold"
  },
  flipButton: {
    color: lightPurp
  }
});
