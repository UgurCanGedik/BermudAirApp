import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import AppImages from '../../../constants/AppImages';
import useStyles from './style';

interface ISelectPassengerViewProps {
  passengerCount: number;
}

const getDescriptionText = (passengerCount: number) => {
  return passengerCount.toString() + ' passenger';
};

export const SelectPassengerView: React.FC<ISelectPassengerViewProps> = ({
  passengerCount = 1,
}) => {
  const {container, description, rootContainer, title} = useStyles();

  return (
    <View style={rootContainer}>
      <View>
        <Image source={AppImages.passengerIcon} />
      </View>
      <View style={container}>
        <Text style={title}>Passenger</Text>
        <Pressable onPress={() => console.log('Passenger')}>
          <Text style={description}>{getDescriptionText(passengerCount)}</Text>
        </Pressable>
      </View>
    </View>
  );
};
