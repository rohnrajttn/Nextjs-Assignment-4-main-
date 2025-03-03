"use client";
import { createContext, useState, ReactNode, useContext } from "react";

interface LoaderContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}


const LoaderContext = createContext<LoaderContextType | undefined>(undefined);


export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};


export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
};
