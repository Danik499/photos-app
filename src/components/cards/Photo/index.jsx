import { View, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { photosSlice } from "../../../store/photosSlice";
import icons from "../../../constants/icons";

import styles from "./photo.style";

const photo = ({ id, title, imageUrl, isFavorite }) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Image
        resizeMode="contain"
        source={{
          uri: imageUrl,
        }}
        style={styles.photoImage}
      />
      <View style={styles.photoDescription}>
        <Text style={styles.photoTitle}>{title}</Text>
        <TouchableOpacity
          onPress={() => {
            isFavorite
              ? dispatch(photosSlice.actions.removeFromFavorite({ id }))
              : dispatch(photosSlice.actions.addToFavorite({ id }));
          }}
        >
          <Image
            source={isFavorite ? icons.heart : icons.emptyHeart}
            style={styles.likeIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default photo;
