import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from '../pages/Login/firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    //Observe user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`https://serene-caverns-16512.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://serene-caverns-16512.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        isLoading,
        registerUser,
        logOut,
        loginUser,
        authError,
        signInWithGoogle
    }
}

export default useFirebase;