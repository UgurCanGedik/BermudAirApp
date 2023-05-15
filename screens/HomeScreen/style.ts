import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const useStyles = (deviceWidth: number) => StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
    imageBackGround: {
      backgroundColor: Colors.backgroundWhite,
      flex: 1,
    },
    imageStyle: {
      height: deviceWidth / 3,
    },
    container: {
      backgroundColor: Colors.primaryWhite,
      marginTop: 24,
      marginHorizontal: 16,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    divider: {
      backgroundColor: Colors.dividerColor,
      height: 1,
      marginBottom: 16,
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    dateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    bottomRootContainer: {
      width: '100%',
      flexDirection: 'row',
    },
    bottomContainer: {
      flex: 1,
    },
    search: {
      backgroundColor: Colors.appBlue,
      borderRadius: 4,
      height: 40,
    },
});

export default useStyles;