import React, {useState, useContext, createContext} from 'react';

// tạo context
export const AppContext = createContext();
// tạo dữ liệu dùng chung cho app
export const AppProvider = props => {
  const [isLogin, setIsLogin] = useState(false);
  const [cart, setCart] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  // thông tin người dùng
  const [user, setUser] = useState([]);
  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        cart,
        setCart,
        favoriteProducts,
        setFavoriteProducts,
        user,
        setUser,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
