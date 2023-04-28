import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FavoritePhotos from "../../components/lists/FavoritePhotos";

import styles from './favouritephotos.style';

const FavouritePhotos = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Text style={styles.titleText}>Favorite photos</Text>
      <FavoritePhotos />
    </View>
  );
};

export default FavouritePhotos;
