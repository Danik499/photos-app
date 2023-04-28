import { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../../store/photosSlice";
import Photo from "../../cards/Photo";

import styles from "./photos.style";

const photos = () => {
  const dispatch = useDispatch();

  const [photosToRender, setPhotosToRender] = useState([]);
  const [listLength, setListLength] = useState(10);
  const [query, setQuery] = useState("");

  const { photos, favoritePhotos, isLoading } = useSelector(
    (state) => state.photos
  );

  useEffect(() => {
    dispatch(fetchPhotos());
    setPhotosToRender(photos.slice(0, 10))
  }, []);

  const searchPhotos = (query) => {
    setPhotosToRender(photos.filter(photo => photo.title.includes(query)).slice(0, 10));
  }

  const displayMorePhotos = () => {
    if (listLength < photos.length) {
      setListLength(listLength + 10)
    }
    setPhotosToRender(photos.filter(photo => photo.title.includes(query)).slice(0, listLength));
  }

  return (
    <View style={styles.photosList}>
      <TextInput
        style={styles.titleInput}
        placeholder="Enter title"
        onChangeText={(text) => {
          setQuery(text)
          setListLength(10)
          searchPhotos(text)
        }}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={photosToRender}
          renderItem={({ item }) => (
            <Photo
              id={item.id}
              title={item.title}
              imageUrl={item.thumbnailUrl}
              isFavorite={!!favoritePhotos.find((photo) => photo === item.id)}
            />
          )}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={() => (
            <View style={styles.seperatorLine}></View>
          )}
          onEndReached={displayMorePhotos}
          onEndReachedThreshold={0}
        />
      )}
    </View>
  );
};

export default photos;
