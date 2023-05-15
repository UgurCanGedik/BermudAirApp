import {View, Pressable, Text} from 'react-native';
import Colors from '../../../constants/Colors';
import React, {useEffect, useLayoutEffect} from 'react';
import useStyles from './style';

interface ISwitchWithTextProps {
  name?: string;
  isActive: boolean;
  onPress: () => void;
}

export const SwitchWithText: React.FC<ISwitchWithTextProps> = ({
  name,
  isActive = true,
  onPress,
}) => {
  const changeSelected = () => {
    console.log('switchbuttonpressed');
    isActive = !isActive;
    onPress;
  };
  useEffect(() => {
    console.log('switchbuttonpressed2');
  }, [isActive]);
  const {
    rootContainer,
    textStyle,
    buttonMainContainer,
    buttonContainer,
    pressedButton,
    insideLeft,
    insideRight,
  } = useStyles(isActive);
  const handlePressedStyle = ({pressed}: {pressed: boolean}) =>
    pressed ? [buttonContainer, pressedButton] : buttonContainer;

  return (
    <View style={rootContainer}>
      <Text style={textStyle}>{name}</Text>
      <View style={buttonMainContainer}>
        <Pressable
          style={handlePressedStyle}
          onPress={changeSelected}
          android_ripple={{color: Colors.appBlue}}>
          <View style={insideLeft}></View>
          <View style={insideRight}></View>
        </Pressable>
      </View>
    </View>
  );
};
