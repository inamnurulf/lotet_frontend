import React from "react";
const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
   token: "",
  });

  const setUserAuthInfo = ({ data }) => {
   const token = localStorage.setItem("token", data.data);

   setAuthState({
    token,
   });
 };

 const isUserAuthenticated = () => !!authState.token;

 return (
   <Provider
     value={{
      authState,
      setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
      isUserAuthenticated,
    }}
   >
    {children}
   </Provider>
 );
};

export { AuthContext, AuthProvider };