import React, {useState} from 'react';
import { View, Text, TextInput} from 'react-native';
//import { TextInput } from 'react-native-gesture-handler';
import { COLORS } from '../../constants/theme';

const FormInput = ({
    labelText='',
    placeholderText='',
    onChangeText = null,
    value = null,
    ...more
}) => {
    return (
        <View style={{width: '100%', marginBottom: 20}}>
            <Text>{labelText}</Text>
            <TextInput style={{
                padding: 10,
                borderColor: COLORS.darkBlue,
                borderWidth: '100%',
                borderRadius: 5,
                marginTop: 10,
            }}
            placeholder={placeholderText}
            onChangeText={onChangeText}
            value={value}
            {...more}
            />
        </View>
    )
}

export default FormInput;