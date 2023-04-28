import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
  favoritePhotos: [],
  isLoading: false,
};

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=1"
  );
  return response.json();
});

export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favoritePhotos.push(action.payload.id);
    },
    removeFromFavorite: (state, action) => {
      state.favoritePhotos = state.favoritePhotos.filter(
        (photo) => photo != action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.photos = action.payload;
    });
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default photosSlice.reducer;
