
import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../utils/supabase";

const AuthContext = createContext({ user: null });

export const useAuth = () => {
  return useContext(AuthContext); // It then can be used in other components to access the context value, which is the user, signIn and signOut, when calling useAuth()
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log("session onAuthStateChange: ", session);
        setSession(session);
        setUser(session?.user || null);
        setLoading(false);
      }
    );
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
    //   options: { emailRedirectTo: 'http://localhost:5173/trails' },
    });
    console.log("data: ", data);
    console.log("error: ", error);
    return { data, error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log("error: ", error);
    if (!error) {
      setUser(null);
      setSession(null);
    }
    return { error };
  };

  return (
    <AuthContext.Provider value={{ user, session, signIn, signOut }}>
      {!loading ? children : `<div>Loading...</div>`}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
