import {View, Pressable, Image} from 'react-native';
import Colors from '../../../constants/Colors';
import React from 'react';
import AppImages from '../../../constants/AppImages';
import useStyles from './style';

interface IChangeLocationButtonProps {
  onPress: () => void;
}

export const ChangeLocationButton: React.FC<IChangeLocationButtonProps> = ({
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
        <Image source={AppImages.changeLocationIcon} />
      </Pressable>
    </View>
  );
};
