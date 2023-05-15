import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const useStyles = (selectedLocation?: string) => StyleSheet.create({
    rootContainer: {
      flexDirection: 'row',
      paddingBottom: 16,
    },
    container: {
      marginLeft: 10,
    },
    title: {
      fontSize: 14,
      lineHeight: 21,
      marginBottom: 2,
      color: Colors.textBlack,
    },
    description: {
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 21,
      marginTop: 2,
      color: selectedLocation ? Colors.textBlack : Colors.textGray,
    },
  });

  export default useStyles;