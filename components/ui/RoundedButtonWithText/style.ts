import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const useStyles = () => StyleSheet.create({
    buttonMainContainer: {
      width: '100%',
      height: 40,
      borderRadius: 4,
      overflow: 'hidden',
      backgroundColor: Colors.appBlue,
    },
    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 2,
    },
    buttonText: {
      color: Colors.primaryWhite,
      textAlign: 'center',
      lineHeight: 24,
      fontSize: 16,
    },
    pressedButton: {
      opacity: 0.75,
    },
});

export default useStyles;