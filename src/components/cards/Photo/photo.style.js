import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  photoImage: {
    height: 150,
  },
  photoTitle: {
    width: "80%",
  },
  photoDescription: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  likeIcon: {
    width: 35,
    height: 35,
  },
});

export default styles;
