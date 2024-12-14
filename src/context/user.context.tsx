/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";

// as the actual value to access
// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-empty-object-type
export const UserContext: React.Context<{
  currentUser: null;
  setCurrentUser: (user) => any;
}> = createContext({
  currentUser: null,
  setCurrentUser: (user) => null,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
