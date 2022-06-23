import React, { useState } from 'react';
import { StyleSheet, Dimensions, KeyboardAvoidingView, Alert, Platform, Image, View } from 'react-native';
import { Block, Button, Input, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import CustomInput from '../components/CustomInput'
const { width } = Dimensions.get('window');

const SignIn = () => {
  // const { navigation } = this.props;
  // const phoneInput = useRef < PhoneInput > (null);
  const signInValidationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/^($|[^0])(\d){9}\b/, 'Phone number should be 10 number and start since 1')
      .required('Phone number is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0.25, y: 1.1 }}
      locations={[0.2, 1]}
      // colors={['#6C24AA', '#15002B']}
      colors={['white', 'white']}
      style={[styles.signin, { flex: 1, paddingTop: theme.SIZES.BASE * 4 }]}>
      <Block middle>
        <KeyboardAvoidingView behavior="padding" enabled>
          {/* <Block middle>
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
            </Block> */}
          <Block middle style={{ paddingVertical: theme.SIZES.BASE * 2.625 }}>
            <Image source={require('../assets/images/pic.png')} />
          </Block>
          <Block flex>
            {/* <Block center>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('../assets/images/apple-phone.png')} style={{ width: 20, height: 20 }} />
                  <Input
                    class="phone_number"
                    borderless
                    color="black"
                    placeholder="Phone Number"
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
              </Block> */}
            <Formik
              initialValues={{
                phoneNumber: '',
                password: '',
              }}
              onSubmit={values => console.log(values)}
              validationSchema={signInValidationSchema}
            >
              {({ handleSubmit, isValid }) => (
                <Block center>
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
      </Block >
    </LinearGradient >

  );
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
export default SignIn;