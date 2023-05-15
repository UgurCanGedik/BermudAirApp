import {View, Pressable, Image, ImageSourcePropType} from 'react-native';
import Colors from '../../../constants/Colors';
import React from 'react';
import useStyles from './style';

interface IRoundedButtonProps {
  imageName: ImageSourcePropType;
  onPress: () => void;
}

export const RoundedButton: React.FC<IRoundedButtonProps> = ({
  imageName,
  onPress,
}) => {
  const {buttonMainContainer, buttonContainer, pressedButton} = useStyles();
  const handlePressedStyle = ({pressed}: {pressed: boolean}) =>
    pressed ? [buttonContainer, pressedButton] : buttonContainer;

  return (
    <View style={buttonMainContainer}>
      <Pressable
        style={handlePressedStyle}
        onPress={onPress}
        android_ripple={{color: Colors.primaryWhite}}>
        <Image source={imageName} />
      </Pressable>
    </View>
  );
};
