/*
class LogoImage extends React.Component {
  render() {
    return <Logo width={417} height={76} />;
  }
}

let AnimatedImage = Animated.createAnimatedComponent(LogoImage);

const Login = () => {
  const startAnimation = useRef(new Animated.Value(221.46)).current;

  const scaleLogo = useRef(new Animated.Value(1)).current;

  // Animation Done....
  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(startAnimation, {
          toValue: 98.21,
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          toValue: 0.5,
          useNativeDriver: true,
        }),
      ]).start();
    }, 500);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            alignItems: 'center',
            transform: [{ translateY: startAnimation }],
          }}>
          <AnimatedImage
            style={{
              transform: [{ scale: scaleLogo }],
            }}></AnimatedImage>
        </Animated.View>
        <View style={styles.form}>
          <Form />
        </View>
      </View>
    </View>
  );
};class LogoImage extends React.Component {
  render() {
    return <Logo width={417} height={76} />;
  }
}

let AnimatedImage = Animated.createAnimatedComponent(LogoImage);

const Login = () => {
  const startAnimation = useRef(new Animated.Value(221.46)).current;

  const scaleLogo = useRef(new Animated.Value(1)).current;

  // Animation Done....
  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(startAnimation, {
          toValue: 98.21,
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          toValue: 0.5,
          useNativeDriver: true,
        }),
      ]).start();
    }, 500);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            alignItems: 'center',
            transform: [{ translateY: startAnimation }],
          }}>
          <AnimatedImage
            style={{
              transform: [{ scale: scaleLogo }],
            }}></AnimatedImage>
        </Animated.View>
        <View style={styles.form}>
          <Form />
        </View>
      </View>
    </View>
  );
};
*/

import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

import Logo from '../images/moovibe.svg';
import Form from '../components/Form';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo width={190} height={34} />
      </View>
      <View style={styles.form}>
        <Form />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    flex: 3,
    alignItems: 'center',
  },
});

export default Login;
