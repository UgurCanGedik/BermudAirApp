import {View, Pressable, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import useStyles from './style';

export const Divider: React.FC = () => {
  const {divider} = useStyles();

  return <View style={divider} />;
};
