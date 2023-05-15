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
import {LocationType} from '../../../constants/Constants';
import useStyles from './style';

interface ISelectLocationViewProps {
  locationType: LocationType;
  selectedLocation?: string;
}

interface ILocationProps {
  titleText?: string;
  descriptionText?: string;
  icon?: ImageSourcePropType;
  descriptionStyle: TextStyle;
}

export const SelectLocationView: React.FC<ISelectLocationViewProps> = ({
  locationType,
  selectedLocation,
}) => {
  const {container, description, rootContainer, title} =
    useStyles(selectedLocation);
  let locationObj: ILocationProps = {
    descriptionStyle: description,
  };

  if (locationType === LocationType.Departure) {
    locationObj = {
      ...locationObj,
      titleText: 'Departure',
      descriptionText: selectedLocation ?? 'Select your departure',
      icon: AppImages.departureIcon,
    };
  } else {
    locationObj = {
      ...locationObj,
      titleText: 'Destination',
      descriptionText: selectedLocation ?? 'Select your destination',
      icon: AppImages.destinationIcon,
    };
  }

  return (
    <View style={rootContainer}>
      <View>
        <Image source={locationObj.icon!} />
      </View>
      <View style={container}>
        <Text style={title}>{locationObj.titleText!}</Text>
        <Pressable onPress={() => console.log('Departure')}>
          <Text style={locationObj.descriptionStyle}>
            {locationObj.descriptionText}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
