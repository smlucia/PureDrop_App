import React, { useState } from 'react';
import {View, Text, safeAreaView, Alert} from 'react-native';
import FormButton from '../components/shared/FormButton';
import FormInput from '../components/shared/FormInput';
import { COLORS } from '../constants/theme';
import {createUserWithEmailAndPassword} from 'firebase/auth'
//import { auth } from '../../firebase';
import { authenticatin } from '../../firebase/firebase-config';
import { Button } from 'react-native-web';

const SignUpScreen = ({navigation}) => {

    const [isSignedIn, setSignedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [confirmPassword, setConfirmPassword] = useState('');

    const RegisterUser = () => {
        createUserWithEmailAndPassword(authenticatin, email, password)
        .then((re) => {
            console.log(re);
            setSignedIn(true)
            navigation.navigate('SignInScreen')
        })
        .catch((re) => {
            console.log(re);
        })
    };

        return (
            <safeAreaView
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyCOntent: 'flex-start',
                    padding: 20
                }}>
                {/* Header */}
                <Text
                style={{
                    fontSize: 24,
                    color: COLORS.black,
                    fontWeight: 'bold',
                    marginVertical: 32,
                }}>
                Sign Up
                </Text>

                {/* Email */}
                <FormInput 
                    labelText="Email" 
                    placeholderText="enter your email"
                    onChangeText={value => setEmail(value)}
                    value={email}
                    keyboardType={'email-address'} 
                />

                {/* Password */}
                <FormInput 
                    labelText="Password" placeholderText="enter your password"
                    onChangeText={value => setPassword(value)}
                    value={password}
                    keyboardType={'password'} 
                    secureTextEntry={true}
                />

                {/* Confirm Password
                <FormInput 
                    labelText="Confirm Password" placeholderText="enter your password again"
                    onChangeText={value => setConfirmPassword(value)}
                    value={confirmPassword}
                    keyboardType={'confirmPassword'} 
                    secureTextEntry={true}
                /> */}
                

                {/* Submit button*/}
                <FormButton 
                    labelText="Sign Up" 
                    handleOnPress={RegisterUser} 
                    style={{width: '100%'}}
                />

                {/* Footer*/}
                <View style={{flexDirection: 'row', alignItems: 'center'}} >
                    <Text>Already have an account?</Text>
                    <Text style={{marginLeft: 4, color: COLORS.primary}}
                    onPress={()=>navigation.navigate('SignInScreen')}>
        
                    Sign In
                    </Text>

                </View>


            </safeAreaView>
        );
    

    return (
    <View>
        <Text>SignUpScreen</Text>
    </View>
    );
};

export default SignUpScreen; 