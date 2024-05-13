import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchHistory: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearchHistory: (state, action) => {
      const { searchTerm } = action.payload;

      if (
        searchTerm.position_name == "" &&
        searchTerm.position_location == ""
      ) {
        return;
      }

      const history = state.searchHistory.slice();
      history.unshift(searchTerm);

      if (history.length > 10) {
        history.pop();
      }

      state.searchHistory = history;
    },

    deleteSearchHistory: (state, action) => {
      const { index } = action.payload;
      const history = state.searchHistory.slice();
      history.splice(index, 1);
      state.searchHistory = history;
    },

    resetSearchHistory: (state) => {
      state.searchHistory = [];
    },
  },
});

export const { addSearchHistory, deleteSearchHistory, resetSearchHistory } =
  searchSlice.actions;
export default searchSlice.reducer;
