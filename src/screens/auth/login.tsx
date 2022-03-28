import React, {useEffect, useState} from 'react';
import {Button, Input, Text} from '@ui-kitten/components';
import {Body} from '@app/components';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useAuth} from '@app/hooks';
import {Alert, View} from 'react-native';

export const LoginScreen = ({navigation}: any) => {
  const {login, user, token} = useAuth();

  useEffect(() => {
    // Validate your auth token here
  }, [token]);

  if (user) {
    navigation.navigate('home');
  }
  const [showPassword, setShowPassword] = useState(false);
  const {errors, values, setFieldValue, validateField, submitForm} = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().min(3).max(20).required(),
      password: Yup.string().required().min(6),
    }),
    validateOnBlur: false,
    onSubmit: () => {},
  });
  return (
    <Body>
      <View style={{marginTop: 150}}>
        <Input
          placeholder={'Username'}
          label={'Username'}
          value={values.username}
          onBlur={() => {
            validateField('username');
          }}
          onChangeText={text => {
            setFieldValue('username', text);
          }}
          caption={() => {
            return <Text status={'danger'}>{errors.username}</Text>;
          }}
        />
        <Input
          caption={() => {
            return <Text status={'danger'}>{errors.password}</Text>;
          }}
          placeholder={'Password'}
          label={'Password'}
          secureTextEntry={showPassword}
          onBlur={() => {
            validateField('password');
          }}
          accessoryRight={() => (
            <Button
              size={'small'}
              appearance={'ghost'}
              onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Show' : 'Hide'}
            </Button>
          )}
          value={values.password}
          onChangeText={text => {
            setFieldValue('password', text);
          }}
        />
        <Button
          onPress={async () => {
            await submitForm();
            login(values)
              .then(isLoggedIn => {
                console.log(isLoggedIn);
                if (isLoggedIn) {
                  navigation.navigate('user');
                  return;
                }
                throw new Error('Invalid credentials');
              })
              .catch(Err => {
                Alert.alert(Err.message);
              })
              .finally(() => {});
          }}>
          Login
        </Button>
      </View>
    </Body>
  );
};
