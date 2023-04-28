import { View, Text, FlatList, Image } from "react-native";
import { useSelector } from "react-redux";
import FavoritePhoto from "../../cards/FavoritePhoto";

import icons from "../../../constants/icons";
import styles from "./favoritephotos.style";

const favoritePhotos = () => {
  const { photos, favoritePhotos } = useSelector((state) => state.photos);

  const photosToRender = photos.filter((photo) =>
    favoritePhotos.includes(photo.id)
  );

  return (
    <View>
      {!photosToRender[0] ? (
        <View style={styles.noImagesContainer}>
          <Text style={styles.titleText}>No favorite images</Text>
          <Image style={styles.noImageIcon} source={icons.noImage}/>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignSelf: 'center',
            alignItems: 'center',
          }}
          numColumns={2}
          data={photosToRender}
          renderItem={({ item }) => (
            <FavoritePhoto
              id={item.id}
              imageUrl={item.thumbnailUrl}
            />
          )}
          key={(item) => item.id}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => (
            <Text>Hold to remove</Text>
          )}
        />
      )}
    </View>
  );
};

export default favoritePhotos;
