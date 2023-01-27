import { createContext, useState } from "react";

const UrlContext = createContext();

export function UrlContextProvider({ children }) {
//   console.log("context", process.env.URL);
  const [mainUrl, setMainUrl] = useState("default-url");

  return <UrlContext.Provider value={{mainUrl,setMainUrl}}>{children}</UrlContext.Provider>;
}

export default UrlContext;
