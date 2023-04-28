import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PhotosList from "../../components/lists/Photos";

import styles from "./photos.style";

const Photos = () => {
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
      <Text style={styles.titleText}>Photos</Text>
      <PhotosList />
    </View>
  );
};

export default Photos;
