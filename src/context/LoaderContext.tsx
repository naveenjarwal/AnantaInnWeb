import React, { createContext, useContext, useState } from 'react';
import Loader from '../components/Loader';
interface LoaderContextType {
 loading: boolean;
 setLoading: (loading: boolean) => void;
}
const LoaderContext = createContext<LoaderContextType>({
 loading: false,
 setLoading: () => {},
});
export const useLoader = () => useContext(LoaderContext);
export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 const [loading, setLoading] = useState<boolean>(false);
 return (
<LoaderContext.Provider value={{ loading, setLoading }}>
     {loading && <Loader />}
     {children}
</LoaderContext.Provider>
 );
};