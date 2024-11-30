import { createContext, useState } from "react";
import { UserContextType, userProps, childrenContext } from "../interface";

export const UserContext = createContext<UserContextType | null>(null);

function UserProvider({ children }: childrenContext) {
    const [user, setUser] = useState<userProps | null>(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
