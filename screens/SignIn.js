import React, { useRef } from 'react';
import { StyleSheet, Dimensions, KeyboardAvoidingView, Alert, Platform, Image, View } from 'react-native';
import { Block, Button, Input, Text, theme } from 'galio-framework';
// import { ValidatorComponent, ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import TextField from '@mui/material/TextField';
import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";

const { width } = Dimensions.get('window');

export default class SignIn extends ValidatorComponent {
  state = {
    phone_number: '',
    // email: '',
    password: '',
    errPhoneMsg: '',
    errPasswordMsg: '',
    active: {
      phone_number: false,
      // email: false,
      password: false,
    }
  }



  handleChange = (name, value) => {
    this.setState({ [name]: value });
    let passw = /^^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (isNaN(this.state.phone_number)) {
      this.state.errPhoneMsg = "Write only Number";
    } else if (this.state.phone_number[0] == '0') {
      this.state.errPhoneMsg = "FirstNumber should not be 0";
    } else if (this.state.phone_number.length !== 10) {
      this.state.errPhoneMsg = "Phone Number should be 10 number"
    } else {
      this.state.errPhoneMsg = ""
    }
    if (!this.state.password.match(passw)) {
      this.state.errPasswordMsg = "Password should be more than 8 characters, including uppercase, lowercase, number"
    } else {
      this.state.errPasswordMsg = ""
    }
  }

  toggleActive = (name) => {
    const { active } = this.state;
    active[name] = !active[name];

    this.setState({ active });
  }

  Login = () => {

  }

  render() {
    const { navigation } = this.props;
    const { phone_number, password } = this.state;
    // const phoneInput = useRef < PhoneInput > (null);
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.25, y: 1.1 }}
        locations={[0.2, 1]}
        // colors={['#6C24AA', '#15002B']}
        colors={['white', 'white']}
        style={[styles.signin, { flex: 1, paddingTop: theme.SIZES.BASE * 4 }]}>
        <Block flex middle>
          <KeyboardAvoidingView behavior="padding" enabled>
            <Block middle>
              <Block row center space="between" style={{ marginVertical: theme.SIZES.BASE * 1.875 }}>
                <Block flex middle right>
                  <Button
                    round
                    onlyIcon
                    iconSize={theme.SIZES.BASE * 1.625}
                    icon="facebook"
                    iconFamily="font-awesome"
                    color={theme.COLORS.FACEBOOK}
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    style={styles.social}
                    onPress={() => Alert.alert('Not implemented')}
                  />
                </Block>
                <Block flex middle center>
                  <Button
                    round
                    onlyIcon
                    iconSize={theme.SIZES.BASE * 1.625}
                    icon="twitter"
                    iconFamily="font-awesome"
                    color={theme.COLORS.TWITTER}
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    style={styles.social}
                    onPress={() => Alert.alert('Not implemented')}
                  />
                </Block>
                <Block flex middle left>
                  <Button
                    round
                    onlyIcon
                    iconSize={theme.SIZES.BASE * 1.625}
                    icon="dribbble"
                    iconFamily="font-awesome"
                    color={theme.COLORS.DRIBBBLE}
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    style={styles.social}
                    onPress={() => Alert.alert('Not implemented')}
                  />
                </Block>
              </Block>
            </Block>
            <Block middle style={{ paddingVertical: theme.SIZES.BASE * 2.625 }}>
              <Image source={require('../assets/images/pic.png')} />
              {/* <Image
                source={{ uri: 'asset:/images:/pic.png' }}
                style={{ width: 100, height: 100 }}
              /> */}
            </Block>
            <Block flex>
              <Block center>
                {/* <ValidatorForm
                  ref="form"
                  onSubmit={this.handleSubmit}
                  onError={errors => console.log(errors)}
                >
                  <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                  />
                  <Button type="submit">Submit</Button>
                </ValidatorForm> */}
                {/* <Input
                  borderless
                  color="white"
                  placeholder="Email"
                  type="email-address"
                  autoCapitalize="none"
                  bgColor='transparent'
                  onBlur={() => this.toggleActive('email')}
                  onFocus={() => this.toggleActive('email')}
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  onChangeText={text => this.handleChange('email', text)}
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                /> */}
                {/* <Icon name="pin-3" family="Galio" color='blue' size={10} /> */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('../assets/images/apple-phone.png')} style={{ width: 20, height: 20 }} />
                  {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                  <Input
                    class="phone_number"
                    borderless
                    color="black"
                    placeholder="Phone Number"
                    type="phone_number"
                    autoCapitalize="none"
                    bgColor='transparent'
                    variant='outlined'
                    onBlur={() => this.toggleActive('phone_number')}
                    onFocus={() => this.toggleActive('phone_number')}
                    placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                    onChangeText={text => this.handleChange('phone_number', text)}
                    style={[styles.input, this.state.active.phone_number ? styles.inputActive : null]}
                  />
                </View>
                <Text style={{ color: 'red' }}>
                  {this.state.errPhoneMsg}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('../assets/images/forgot-password.png')} style={{ width: 20, height: 20 }} />
                  <Input
                    password
                    viewPass
                    borderless
                    color="black"
                    iconColor="black"
                    placeholder="Password"
                    bgColor='transparent'
                    onBlur={() => this.toggleActive('password')}
                    onFocus={() => this.toggleActive('password')}
                    placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                    onChangeText={text => this.handleChange('password', text)}
                    style={[styles.input, this.state.active.password ? styles.inputActive : null]}
                  />
                </View>
                <Text style={{ color: 'red' }}>
                  {this.state.errPasswordMsg}
                </Text>
                <Text
                  color={theme.COLORS.WHITE}
                  size={theme.SIZES.FONT * 0.75}
                  onPress={() => Alert.alert('Not implemented')}
                  style={{ alignSelf: 'flex-end', lineHeight: theme.SIZES.FONT * 2 }}
                >
                  Forgot your password?
                </Text>
              </Block>
              <Block center flex style={{ marginTop: 20 }}>
                <Button
                  size="large"
                  shadowless
                  // color={materialTheme.COLORS.BUTTON_COLOR}
                  color='yellow'
                  style={{ height: 48, width: 300 }}
                  onPress={this.Login}
                >
                  <Text style={{ color: 'black' }}>SIGN IN</Text>
                </Button>
                <Button size="large" color="transparent" shadowless onPress={() => navigation.navigate('Sign Up')}>
                  <Text
                    center
                    color={theme.COLORS.BLACK}
                    size={theme.SIZES.FONT * 0.75}
                    style={{ marginTop: 20 }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Text>
                </Button>
              </Block>
            </Block>
          </KeyboardAvoidingView>
        </Block >
      </LinearGradient >
    );
  }
}

const styles = StyleSheet.create({
  signin: {
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
    width: width * 0.7,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: materialTheme.COLORS.PLACEHOLDER,
  },
  inputActive: {
    borderBottomColor: "white",
  },
  // phone_number_background:{
  //   background
  // },
});
