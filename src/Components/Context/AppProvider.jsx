import { useState } from "react";
import { AppContext } from "./ApiContext";

export const AppProvider = ({ children }) => {
  const [SingleWork, setSingleWork] = useState();
  return (
    <AppContext.Provider value={{ setSingleWork, SingleWork }}>
      {children}
    </AppContext.Provider>
  );
};
