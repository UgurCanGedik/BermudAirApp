import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const useStyles = () => StyleSheet.create({
    buttonMainContainer: {
      width: 32,
      height: 32,
      borderRadius: 16,
      overflow: 'hidden',
      backgroundColor: Colors.fadedBlack,
      borderWidth: 1,
      borderColor: Colors.fadedWhite,
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