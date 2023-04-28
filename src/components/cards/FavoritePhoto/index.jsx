import { View, Image, TouchableOpacity, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { photosSlice } from "../../../store/photosSlice";

import styles from "./favoritephoto.style"

const favoritePhoto = ({ id, imageUrl }) => {
  const dispatch = useDispatch();

  const handleLongPress = () => {
    Alert.alert("Do you want to remove this photo from your favorites?", "", [
      {
        text: "Remove",
        onPress: () => dispatch(photosSlice.actions.removeFromFavorite({ id })),
        style: "destructive"
      },
      {
        text: "Cancel",
        style: "cancel"
      }
    ]);
  }

  return (
    <View>
      <TouchableOpacity
        onLongPress={handleLongPress}
        activeOpacity={0.8}
      >
        <Image
          resizeMode="contain"
          source={{
            uri: imageUrl
          }}
          style={styles.photoImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default favoritePhoto;
