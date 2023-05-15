import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const useStyles = () => StyleSheet.create({
    buttonMainContainer: {
      width: 24,
      height: 24,
      borderRadius: 12,
      overflow: 'hidden',
      backgroundColor: Colors.primaryWhite,
      borderWidth: 1,
      borderColor: Colors.appBlue,
    },
    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 2,
    },
    pressedButton: {
      opacity: 0.75,
    },
});

export default useStyles;