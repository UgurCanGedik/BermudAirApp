import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const useStyles = () => StyleSheet.create({
    divider: {
      backgroundColor: Colors.dividerColor,
      height: 1,
      marginBottom: 16,
    }
});

export default useStyles;