import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {RoundedButton} from '../RoundedButton';
import AppImages from '../../../constants/AppImages';
import useStyles from './style';

const deviceWidth = Dimensions.get('window').width;

export const TopView: React.FC = () => {
  const {topContainer, topText} = useStyles(deviceWidth);

  return (
    <View style={topContainer}>
      <RoundedButton
        onPress={() => console.log('Deneme1')}
        imageName={AppImages.crossIcon}
      />
      <Text style={topText}>Welcome</Text>
      <RoundedButton
        onPress={() => console.log('Deneme2')}
        imageName={AppImages.bookmarkIcon}
      />
      <RoundedButton
        onPress={() => console.log('Deneme3')}
        imageName={AppImages.ticketsIcon}
      />
      <RoundedButton
        onPress={() => console.log('Deneme4')}
        imageName={AppImages.othersIcon}
      />
    </View>
  );
};
