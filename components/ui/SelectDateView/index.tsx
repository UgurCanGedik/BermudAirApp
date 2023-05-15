import {
  View,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
  TextStyle,
} from 'react-native';
import React from 'react';
import AppImages from '../../../constants/AppImages';
import {DateType} from '../../../constants/Constants';
import useStyles from './style';

interface ISelectDateViewProps {
  dateType: DateType;
  selectedDate?: string;
}

interface IDateProps {
  titleText?: string;
  descriptionText?: string;
  icon?: ImageSourcePropType;
  descriptionStyle: TextStyle;
}

export const SelectDateView: React.FC<ISelectDateViewProps> = ({
  dateType,
  selectedDate,
}) => {
  const {container, description, rootContainer, title} =
    useStyles(selectedDate);
  let dateObj: IDateProps = {
    descriptionStyle: description,
  };

  if (dateType === DateType.DepartureDate) {
    dateObj = {
      ...dateObj,
      titleText: 'Departure date',
      descriptionText: selectedDate ?? 'Select your departure date',
      icon: AppImages.departureDateIcon,
    };
  } else {
    dateObj = {
      ...dateObj,
      titleText: 'Return date',
      descriptionText: selectedDate ?? 'Select your return date',
      icon: AppImages.returnDateIcon,
    };
  }

  return (
    <View style={rootContainer}>
      <View>
        <Image source={dateObj.icon!} />
      </View>
      <View style={container}>
        <Text style={title}>{dateObj.titleText}</Text>
        <Pressable onPress={() => console.log('DepartureDate')}>
          <Text style={dateObj.descriptionStyle}>
            {dateObj.descriptionText}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
