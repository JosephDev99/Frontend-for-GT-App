import React from 'react';
import { StyleSheet, ImageBackground, } from 'react-native';
import { Button, Text } from 'galio-framework';
const image = require('../assets/images/imgpsh_fullsize_anim.png');

export default class Home extends React.Component {


  render() {
    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Button
          size="large"
          shadowless
          color='yellow'
          style={{ height: 48, width: 350, marginTop: 600, marginLeft: 35 }}>
          <Text style={{ color: 'black' }}>REQUEST A RIDE</Text>
        </Button>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end"
  },
});
