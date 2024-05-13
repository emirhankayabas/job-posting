import { useState } from "react";
import { persistStore } from "redux-persist";

const useClearPersistData = () => {
  const [isClearing, setIsClearing] = useState(false);

  const clearPersistData = async () => {
    setIsClearing(true);
    try {
      await persistStore.purge();
      console.log("Persist verileri silindi!");
    } catch (error) {
      console.error("Persist verilerini silerken hata oluştu:", error);
    } finally {
      setIsClearing(false);
    }
  };

  return { isClearing, clearPersistData };
};

export default useClearPersistData;
