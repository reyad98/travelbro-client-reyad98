import React, { createContext } from 'react';
import useFirebase from '../hooks/usefirebase';

export  const AuthContext = createContext();
const Authprovider = ( {children}) => {
    const allContext = useFirebase();
    return (
        <div>
            <AuthContext.Provider value={allContext}>
              {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;