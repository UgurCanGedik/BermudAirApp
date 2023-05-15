import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const useStyles = (isActive: boolean) => StyleSheet.create({
    rootContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonMainContainer: {
      width: 40,
      height: 24,
      borderRadius: 20,
      overflow: 'hidden',
      borderWidth: 2,
      backgroundColor: isActive ? Colors.appBlue : Colors.switchGray,
      borderColor: isActive ? Colors.appBlue : Colors.switchGray,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 2,
    },
    pressedButton: {
      opacity: 0.75,
    },
    textStyle: {
      lineHeight: 18,
      fontSize: 12,
      color: Colors.textBlack,
      marginRight: 4,
    },
    insideLeft: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: isActive ? Colors.appBlue : Colors.primaryWhite,
    },
    insideRight: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: isActive ? Colors.primaryWhite : Colors.switchGray,
    },
});
  
export default useStyles;