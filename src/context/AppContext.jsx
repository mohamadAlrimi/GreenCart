import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// تعريف الكونتكست
const AppContext = createContext();

// كمبوننت الـ Provider
export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// هوك مخصص للوصول للكونتكست بسهولة
export const useAppContext = () => useContext(AppContext);