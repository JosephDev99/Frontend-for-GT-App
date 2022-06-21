import React from 'react';
import { Alert, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, Image, View } from 'react-native';

import { Block, Button, Input, Text, theme } from 'galio-framework';

import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import { Icon } from '../components/';

const { height, width } = Dimensions.get('window');

export default class SignUp extends React.Component {
  state = {
    user: '',
    phone_number: '',
    password: '',
    confirm_password: '',
    active: {
      user: false,
      phone_number: false,
      password: false,
      confirm_password: false
    }
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  Register = () => {
    let passw = /^^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (this.state.user == '') {
      alert("Write the Username")
    } else if (this.state.user.includes(' ')) {
      alert("Username should not be include space")
    } else if (this.state.user.length < 4) {
      alert("User should be more than 5 character")
    } else if (this.state.phone_number == '') {
      alert("Write the phone number");
    } else if (isNaN(this.state.phone_number)) {
      alert("Write Number");
    } else if (this.state.phone_number[0] == '0') {
      alert("FirstNumber should not be 0");
    } else if (this.state.phone_number.length !== 10) {
      alert("Phone Number should be 10 number")
    } else if (this.state.password == '') {
      alert("Write the Password");
    } else if (!this.state.password.match(passw)) {
      alert("Password should be more than 8 characters, including uppercase, lowercase, number")
    } else if (this.state.password !== this.state.confirm_password) {
      alert("Confirm Password is not exact")
    }
    else {
      alert("success")
    }
  }

  toggleActive = (name) => {
    const { active } = this.state;
    active[name] = !active[name];

    this.setState({ active });
  }

  render() {
    const { navigation } = this.props;
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.25, y: 1.1 }}
        locations={[0.2, 1]}
        colors={['white', 'white']}
        // colors={['#6C24AA', '#15002B']}
        style={[styles.signup, { flex: 1, paddingTop: theme.SIZES.BASE * 4 }]}>
        <Block flex middle>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "position"} enabled keyboardVerticalOffset={0}>
            <Block style={{ marginBottom: height * 0.05 }}>
              {/* <Block row center space="between" style={{ marginVertical: theme.SIZES.BASE * 1.875 }}>
                <Block flex middle right>
                  <Button
                    round
                    onlyIcon
                    iconSize={theme.SIZES.BASE * 1.625}
                    icon="facebook"
                    iconFamily="font-awesome"
                    onPress={() => Alert.alert('Not implemented')}
                    color={theme.COLORS.FACEBOOK}
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    style={styles.social}
                  />
                </Block>
                <Block flex middle center>
                  <Button
                    round
                    onlyIcon
                    iconSize={theme.SIZES.BASE * 1.625}
                    icon="twitter"
                    iconFamily="font-awesome"
                    onPress={() => Alert.alert('Not implemented')}
                    color={theme.COLORS.TWITTER}
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    style={styles.social}
                  />
                </Block>
                <Block flex middle left>
                  <Button
                    round
                    onlyIcon
                    iconSize={theme.SIZES.BASE * 1.625}
                    icon="dribbble"
                    iconFamily="font-awesome"
                    onPress={() => Alert.alert('Not implemented')}
                    color={theme.COLORS.DRIBBBLE}
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    style={styles.social}
                  />
                </Block>
              </Block> */}
              <Block middle style={{ paddingVertical: theme.SIZES.BASE * 2.625 }}>
                <Image source={require('../assets/images/pic.png')} />
              </Block>
            </Block>
            <Block flex={1} center space="between">
              <Block center>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('../assets/images/user.png')} style={{ width: 20, height: 20 }} />

                  <Input
                    bgColor='transparent'
                    placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                    borderless
                    color="black"
                    placeholder="Username"
                    autoCapitalize="none"
                    style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                    onChangeText={text => this.handleChange('user', text)}
                    onBlur={() => this.toggleActive('user')}
                    onFocus={() => this.toggleActive('user')}
                  />
                </View>
                {/* <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="email-address"
                  placeholder="Email"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('email', text)}
                  onBlur={() => this.toggleActive('email')}
                  onFocus={() => this.toggleActive('email')}
                /> */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('../assets/images/apple-phone.png')} style={{ width: 20, height: 20 }} />

                  <Input
                    borderless
                    color="black"
                    placeholder="Phone"
                    type="phone_number"
                    autoCapitalize="none"
                    bgColor='transparent'
                    onBlur={() => this.toggleActive('phone_number')}
                    onFocus={() => this.toggleActive('phone_number')}
                    placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                    onChangeText={text => this.handleChange('phone_number', text)}
                    style={[styles.input, this.state.active.phone_number ? styles.inputActive : null]}
                  />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('../assets/images/forgot-password.png')} style={{ width: 20, height: 20 }} />

                  <Input
                    bgColor='transparent'
                    placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                    borderless
                    color="black"
                    password
                    viewPass
                    placeholder="Password"
                    iconColor="black"
                    style={[styles.input, this.state.active.password ? styles.inputActive : null]}
                    onChangeText={text => this.handleChange('password', text)}
                    onBlur={() => this.toggleActive('password')}
                    onFocus={() => this.toggleActive('password')}
                  />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('../assets/images/forgot-password.png')} style={{ width: 20, height: 20 }} />

                  <Input
                    bgColor='transparent'
                    placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                    borderless
                    color="black"
                    password
                    viewPass
                    placeholder="Confirm Password"
                    iconColor="black"
                    style={[styles.input, this.state.active.confirm_password ? styles.inputActive : null]}
                    onChangeText={text => this.handleChange('confirm_password', text)}
                    onBlur={() => this.toggleActive('confirm_password')}
                    onFocus={() => this.toggleActive('confirm_password')}
                  />
                </View>
              </Block>
              <Block flex center style={{ marginTop: 20 }}>
                <Button
                  size="large"
                  shadowless
                  style={{ height: 48, width: 300 }}
                  // color={materialTheme.COLORS.BUTTON_COLOR}
                  color={'yellow'}
                  onPress={this.Register}
                >
                  <Text style={{ color: 'black' }}>SIGN Up</Text>
                </Button>
                <Button size="large" color="transparent" shadowless onPress={() => navigation.navigate('Sign In')}>
                  <Text center color={theme.COLORS.Black} size={theme.SIZES.FONT * 0.75}>
                    Already have an account? Sign In
                  </Text>
                </Button>
              </Block>
            </Block>
          </KeyboardAvoidingView>
        </Block>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  signup: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 1
  },
  input: {
    width: width * 0.9,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: materialTheme.COLORS.PLACEHOLDER,
  },
  inputActive: {
    borderBottomColor: "white",
  },
});
