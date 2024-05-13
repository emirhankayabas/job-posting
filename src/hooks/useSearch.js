import { useDispatch, useSelector } from "react-redux";
import {
  addSearchHistory,
  deleteSearchHistory,
  resetSearchHistory,
} from "~/stores/searchSlice";

const useSearch = () => {
  const dispatch = useDispatch();
  const searchHistory = useSelector((state) => state.search.searchHistory);

  const handleAddSearchHistory = (searchTerm) => {
    dispatch(addSearchHistory({ searchTerm }));
  };

  const handleDeleteSearchHistory = (index) => {
    dispatch(deleteSearchHistory({ index }));
  };

  const handleResetSearchHistory = () => {
    dispatch(resetSearchHistory());
  };

  return {
    searchHistory,
    addSearchHistory: handleAddSearchHistory,
    deleteSearchHistory: handleDeleteSearchHistory,
    resetSearchHistory: handleResetSearchHistory,
  };
};

export default useSearch;
