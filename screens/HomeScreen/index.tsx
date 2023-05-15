import React from 'react';
import {Dimensions, ImageBackground, StatusBar, View} from 'react-native';
import {TopView} from '../../components/ui/TopView';
import {SelectLocationView} from '../../components/ui/SelectLocationView';
import {LocationType, DateType} from '../../constants/Constants';
import {SelectDateView} from '../../components/ui/SelectDateView';
import {ChangeLocationButton} from '../../components/ui/ChangeLocationButton';
import {SelectPassengerView} from '../../components/ui/SelectPassengerView';
import {SelectClassView} from '../../components/ui/SelectClassView';
import {RoundedButtonWithText} from '../../components/ui/RoundedButtonWithText';
import {SwitchWithText} from '../../components/ui/SwitchWithText';
import {Divider} from '../../components/ui/Divider';
import AppImages from '../../constants/AppImages';
import useStyles from './style';

const deviceWidth = Dimensions.get('window').width;

export const HomeScreen: React.FC = () => {
  const {
    imageBackGround,
    imageStyle,
    container,
    locationContainer,
    dateContainer,
    bottomRootContainer,
    bottomContainer,
  } = useStyles(deviceWidth);

  return (
    <ImageBackground
      source={AppImages.backgroundImage}
      resizeMode="contain"
      resizeMethod="resize"
      style={imageBackGround}
      imageStyle={imageStyle}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <TopView />
      <View style={container}>
        <View style={locationContainer}>
          <View>
            <SelectLocationView locationType={LocationType.Departure} />
            <SelectLocationView locationType={LocationType.Destination} />
          </View>
          <ChangeLocationButton onPress={() => console.log('ChangeLocation')} />
        </View>
        <Divider />
        <View style={dateContainer}>
          <SelectDateView
            dateType={DateType.DepartureDate}
            selectedDate="Wed, 02/02/2022"
          />
          <SwitchWithText
            name="Round-trip"
            isActive={true}
            onPress={() => console.log('RoundTrip')}
          />
        </View>
        <SelectDateView dateType={DateType.ReturnDate} />
        <Divider />
        <View style={bottomRootContainer}>
          <View style={bottomContainer}>
            <SelectPassengerView />
          </View>
          <View style={bottomContainer}>
            <SelectClassView />
          </View>
        </View>
        <RoundedButtonWithText text="Search" />
      </View>
    </ImageBackground>
  );
};
