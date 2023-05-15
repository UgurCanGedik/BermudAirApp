import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const useStyles = (deviceWidth: number) => StyleSheet.create({
    topContainer: {
      marginTop: deviceWidth / 3 - 69,
      marginHorizontal: 12,
      height: 32,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    topText: {
      color: Colors.primaryWhite,
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 12,
      flexBasis: 200,
    },
});

export default useStyles;