import React from 'react';
import { Alert, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, Image, View } from 'react-native';

import { Block, Button, Input, Text, theme } from 'galio-framework';

import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import { Icon } from '../components/';
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import CustomInput from '../components/CustomInput'
const { height, width } = Dimensions.get('window');

const SignUp = () => {
  // handleChange = (name, value) => {
  //   this.setState({ [name]: value });
  // }

  // toggleActive = (name) => {
  //   const { active } = this.state;
  //   active[name] = !active[name];

  //   this.setState({ active });
  // }
  const signUpValidationSchema = yup.object().shape({
    Username: yup
      .string()
      .matches(/^\S*$/, 'Space should not be to username')
      .required('Full name is required'),
    phoneNumber: yup
      .string()
      .matches(/^($|[^0])(\d){9}\b/, 'Phone number should be 10 number and first number should not 0')
      .required('Phone number is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  })
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
            {/* <Block center>
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
              </Block> */}
            <Formik
              initialValues={{
                Username: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit={values => console.log(values)}
              validationSchema={signUpValidationSchema}
            >
              {({ handleSubmit, isValid }) => (
                <Block center>
                  <Block row width={300}>
                    <Block flex={1} center>
                      <Image source={require('../assets/images/user.png')} style={{ width: 20, height: 20 }} />
                    </Block>
                    <Block flex={15}>
                      <Field
                        component={CustomInput}
                        name="Username"
                        placeholder="Username"
                      />
                    </Block>
                  </Block>
                  <Block row width={300}>
                    <Block flex={1} center>
                      <Image source={require('../assets/images/apple-phone.png')} style={{ width: 20, height: 20 }} />
                    </Block>
                    <Block flex={15}>
                      <Field
                        component={CustomInput}
                        name="phoneNumber"
                        placeholder="Phone Number"
                        keyboardType="numeric"
                      />
                    </Block>
                  </Block>
                  <Block row width={300}>
                    <Block flex={1} center>
                      <Image source={require('../assets/images/forgot-password.png')} style={{ width: 20, height: 20 }} />
                    </Block>
                    <Block flex={15}>
                      <Field
                        component={CustomInput}
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                      />
                    </Block>
                  </Block>
                  <Block row width={300}>
                    <Block flex={1} center>
                      <Image source={require('../assets/images/forgot-password.png')} style={{ width: 20, height: 20 }} />
                    </Block>
                    <Block flex={15}>
                      <Field
                        component={CustomInput}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        secureTextEntry
                      />
                    </Block>
                  </Block>
                  <Block center flex style={{ marginTop: 20 }}>
                    <Button
                      size="large"
                      shadowless
                      // color={materialTheme.COLORS.BUTTON_COLOR}
                      color='yellow'
                      style={{ height: 48, width: 300 }}
                      onPress={handleSubmit}
                      disabled={!isValid}
                    >
                      <Text style={{ color: 'black' }}>SIGN IN</Text>
                    </Button>
                  </Block>
                </Block>
              )}
            </Formik>
          </Block>
        </KeyboardAvoidingView>
      </Block>
    </LinearGradient>
  );
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6'
  },
});
export default SignUp;