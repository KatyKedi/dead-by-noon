import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);
