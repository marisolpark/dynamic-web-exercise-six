import { useCallback, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import Header from "@/app/components/Header";
import firebaseConfig from "@/app/components/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function MyApp({ Component, pageProps }) {
    const [appInitialized, setAppInitialized] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInformation, setUserInformation] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = useCallback((e) => {
        //create account in auth
    }, []);

    const loginUser = useCallback((e) => {
        // add user info in there base database
    }, []);

    const logoutUser = useCallback(() => {

    }, []);

    // initialize firebase
    useEffect(() => {
        initializeApp(firebaseConfig);
        setAppInitialized(true);
    }, []);

    useEffect(() => {
        if (appInitialized) {
            const auth = getAuth();

            onAuthStateChanged(auth, (user) => {
                if(user) {
                    setUserInformation(user);
                    setIsLoggedIn(true);
                } else {
                    setUserInformation(null);
                    setIsLoggedIn(false);
                }
                setIsLoading(false);
            });
        }
    }, [appInitialized]);

    if(isLoading) return null;

    return (
        <>
            <Header />
            <Component
                {...pageProps}
                createUser={createUser}
                isLoggedIn={isLoggedIn}
                loginUser={loginUser}
                UserInformation={userInformation}
            />
        </>
    )
}