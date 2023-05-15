import {View, Pressable, Text} from 'react-native';
import Colors from '../../../constants/Colors';
import React from 'react';
import useStyles from './style';

interface IRoundedButtonWithTextProps {
  text: string;
  onPress: () => void;
}

export const RoundedButtonWithText: React.FC<IRoundedButtonWithTextProps> = ({
  text,
  onPress,
}) => {
  const {buttonContainer, buttonMainContainer, buttonText, pressedButton} =
    useStyles();
  const handlePressedStyle = ({pressed}: {pressed: boolean}) =>
    pressed ? [buttonContainer, pressedButton] : buttonContainer;

  return (
    <View style={buttonMainContainer}>
      <Pressable
        style={handlePressedStyle}
        onPress={onPress}
        android_ripple={{color: Colors.appBlue}}>
        <Text style={buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};
