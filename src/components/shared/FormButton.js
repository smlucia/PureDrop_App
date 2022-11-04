import react from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../constants/theme';

const FormButton = ({
    labelText='',
    handleOnPress=null,
    style,
    isPrimary=true,
    ...more
    
}) => {
    return (
        <TouchableOpacity style={{
            paddingVertical: 10,
            backgroundColor: isPrimary ? COLORS.primary : COLORS.white,
            borderWidth: 1,
            borderColor: COLORS.primary,
            borderRadius: 5,
            ...style,
        }}
        activeOpacity={0.9}
        onPress={handleOnPress}
        {...more}
        >
        
            <Text style={{
                textAlign: 'center',
                fontSize: 18,
                color: isPrimary ? COLORS.white : COLORS.primary,
            }}>{labelText}</Text>
        </TouchableOpacity>
    )
}

export default FormButton;