import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import AppImages from '../../../constants/AppImages';
import {ClassType} from '../../../constants/Constants';
import useStyles from './style';

interface ISelectClassViewProps {
  classType: ClassType;
}

const getDescriptionText = (classType: ClassType) => {
  let descriptionText: string = '';
  switch (classType) {
    case ClassType.Economy:
      descriptionText = 'Economy';
      break;
    case ClassType.Business:
      descriptionText = 'Business';
      break;
    case ClassType.First:
      descriptionText = 'First Class';
      break;
  }
  return descriptionText;
};

export const SelectClassView: React.FC<ISelectClassViewProps> = ({
  classType = ClassType.Economy,
}) => {
  const {container, description, rootContainer, title} = useStyles();

  return (
    <View style={rootContainer}>
      <View>
        <Image source={AppImages.classIcon} />
      </View>
      <View style={container}>
        <Text style={title}>Class</Text>
        <Pressable onPress={() => console.log('Class')}>
          <Text style={description}>{getDescriptionText(classType)}</Text>
        </Pressable>
      </View>
    </View>
  );
};
