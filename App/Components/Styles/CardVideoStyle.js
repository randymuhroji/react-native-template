import { StyleSheet } from "react-native";
import Colors from '../../Themes/Colors';

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 250,
    borderRadius: 50,
    flexDirection: 'column'
  },
  cardCover: {
    height: 180,
    resizeMode: 'contain',
    position: "relative"
  },
  playCover: {
    height: 60,
    width: 60,
    position: "absolute",
  },
  divider:{
    flex:1,
    height:10,
    marginTop:3,
    marginBottom:3,
    backgroundColor: Colors.facebook
  }
});
